# bilibili-deeplink-atlas

Static index of Bilibili Android deep links extracted from the app's generated BLRouter route tables.

## Snapshot

- Unique route patterns: `1491`
- Extracted route rows: `1501`
- Scheme split:
  - `bilibili://`: `988`
  - `activity://`: `240`
  - `(http|https)://`: `273`
- Route type split:
  - `native`: `1320`
  - `web`: `80`
  - `unknown`: `101`

## Scope

- Source APK project: `../apktool_out`
- Extraction target: `apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen`
- Included schemes:
  - `bilibili://`
  - `activity://`
  - `(http|https)://` aliases that share the same router table

## Files

- `data/routes.json`: full extracted route list with alias groups and source locations
- `data/routes.csv`: spreadsheet-friendly export
- `data/summary.json`: aggregate counts
- `docs/browser-web.md`: focused notes on `bilibili://browser` and generic web routing
- `scripts/extract_routes.py`: extractor used to generate the dataset

## Method

The extractor scans generated route registration smali files and groups each `JInterMediateRoute` block by:

- route patterns inside the block
- route type such as `native` or `web`
- source file and line number

This is a static artifact inventory. It does not prove that every route can be triggered externally, only that the route is registered in the shipped router table.

## Regeneration

```bash
python scripts/extract_routes.py
```

## Notes

- `bilibili://browser`, `activity://main/web`, and generic `http(s)` aliases map to the same `web` route.
- `MWebActivity` and `WebFragment` consume `url` as the effective target URL field.
- `WebFragment` appends `night` and `native.theme` automatically when loading a web URL.

## Top prefixes

Highest-volume route namespaces in this snapshot:

- `(http|https)`: `265`
- `uper`: `171`
- `mall`: `100`
- `game_center`: `86`
- `main`: `84`
- `following`: `79`
- `smallapp`: `53`
- `im`: `51`
- `pgc`: `47`
- `live`: `42`
