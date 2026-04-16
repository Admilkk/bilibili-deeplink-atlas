# 数据模型

## 文件层级

### `data/routes.json`

全量明细数据。每个对象对应一条被提取出的 route 记录。

字段说明：

- `route`：当前记录对应的路由字符串或通配 pattern。
- `canonical_route`：同一注册块内使用的首条 route，作为该别名组的主键。
- `alias_group_size`：同一注册块中 route 的数量。
- `aliases`：同一注册块里的所有 route 集合。
- `route_type`：静态提取到的类型标记，例如 `native`、`web`、`unknown`。
- `source_file`：路由来自哪个 smali 文件。
- `line`：当前 route 字符串在文件中的行号。
- `block_start_line`：该注册块起始位置行号。

### `data/routes.csv`

与 `routes.json` 语义一致，但更适合筛选、排序和表格工具处理。

### `data/summary.json`

聚合统计数据，包含：

- 总行数
- 唯一路由数
- 各 `route_type` 数量
- 各 scheme 数量
- 数量最高的前缀列表

## 关系模型

### 路由记录

最小观察单位是 `route`。例如一条 `bilibili://...` 或 `activity://...` pattern。

### 别名组

同一个 `JInterMediateRoute` 块中的多条 route 会被视为一个别名组。它们共享：

- 相同的注册上下文
- 相同的 `canonical_route`
- 相同的 `alias_group_size`
- 通常也共享同一类目标能力

### 前缀分组

文档层额外引入“前缀分组”视图，用来提升查阅效率：

- `bilibili://main/...` 会归入 `main`
- `activity://comment/...` 会归入 `activity-comment`

这是一种文档分类方式，不是 APK 内部字段。

## `unknown` 的含义

`unknown` 只表示当前提取逻辑没有在该注册块中识别到明确类型标记。
它不代表该路由不可用，也不代表目标未知。
