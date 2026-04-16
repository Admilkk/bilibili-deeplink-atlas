from __future__ import annotations

import csv
import json
import re
from collections import Counter, defaultdict
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
CODEGEN_DIR = ROOT / "apktool_out" / "smali_classes14" / "com" / "bilibili" / "lib" / "brouter" / "internal" / "routes" / "codegen"
OUT_DIR = Path(__file__).resolve().parents[1] / "data"

ROUTE_PREFIXES = ("bilibili://", "activity://", "(http|https)://")
TYPE_VALUES = {"native", "web", "fragment", "service", "router", "kntr-base-router"}
ROUTE_RE = re.compile(r'const-string\s+\S+,\s+"([^"]+)"')


def is_route(value: str) -> bool:
    return value.startswith(ROUTE_PREFIXES)


def parse_file(path: Path) -> list[dict]:
    lines = path.read_text(encoding="utf-8").splitlines()
    results: list[dict] = []

    i = 0
    while i < len(lines):
        line = lines[i]
        if "new-instance" not in line or "JInterMediateRoute" not in line:
            i += 1
            continue

        block_start = i
        j = i + 1
        string_values: list[tuple[int, str]] = []
        route_type = ""

        while j < len(lines):
            current = lines[j]
            match = ROUTE_RE.search(current)
            if match:
                value = match.group(1)
                string_values.append((j + 1, value))
                if value in TYPE_VALUES:
                    route_type = value
            if "JInterMediateRoute;-><init>" in current:
                break
            if ".end method" in current:
                break
            j += 1

        routes = [(ln, value) for ln, value in string_values if is_route(value)]
        if routes:
            alias_map: dict[str, int] = {}
            for ln, route in routes:
                alias_map.setdefault(route, ln)
            aliases = list(alias_map.keys())
            canonical = aliases[0]
            for route, ln in alias_map.items():
                results.append(
                    {
                        "route": route,
                        "canonical_route": canonical,
                        "alias_group_size": len(aliases),
                        "aliases": aliases,
                        "route_type": route_type or "unknown",
                        "source_file": str(path.relative_to(ROOT)).replace("\\", "/"),
                        "line": ln,
                        "block_start_line": block_start + 1,
                    }
                )

        i = j + 1

    return results


def collect() -> list[dict]:
    rows: list[dict] = []
    for path in sorted(CODEGEN_DIR.glob("*.smali")):
        rows.extend(parse_file(path))
    return rows


def summarize(rows: list[dict]) -> dict:
    route_counts = Counter(row["route_type"] for row in rows)
    scheme_counts = Counter(
        "http(s)"
        if row["route"].startswith("(http|https)://")
        else row["route"].split("://", 1)[0]
        for row in rows
    )

    by_prefix = defaultdict(list)
    for row in rows:
        route = row["route"]
        if route.startswith("bilibili://"):
            prefix = route[len("bilibili://") :].split("/", 1)[0]
        elif route.startswith("activity://"):
            prefix = route[len("activity://") :].split("/", 1)[0]
        else:
            prefix = "(http|https)"
        by_prefix[prefix].append(route)

    top_prefixes = [
        {"prefix": prefix, "count": len(set(routes))}
        for prefix, routes in sorted(by_prefix.items(), key=lambda item: (-len(set(item[1])), item[0]))
    ][:30]

    return {
        "total_rows": len(rows),
        "unique_routes": len({row["route"] for row in rows}),
        "route_type_counts": dict(sorted(route_counts.items())),
        "scheme_counts": dict(sorted(scheme_counts.items())),
        "top_prefixes": top_prefixes,
    }


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    rows = collect()
    rows.sort(key=lambda row: (row["route"], row["source_file"], row["line"]))

    summary = summarize(rows)

    (OUT_DIR / "routes.json").write_text(
        json.dumps(rows, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    with (OUT_DIR / "routes.csv").open("w", newline="", encoding="utf-8") as fp:
        writer = csv.DictWriter(
            fp,
            fieldnames=[
                "route",
                "canonical_route",
                "alias_group_size",
                "route_type",
                "source_file",
                "line",
                "block_start_line",
                "aliases",
            ],
        )
        writer.writeheader()
        for row in rows:
            csv_row = dict(row)
            csv_row["aliases"] = json.dumps(csv_row["aliases"], ensure_ascii=False)
            writer.writerow(csv_row)

    (OUT_DIR / "summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
