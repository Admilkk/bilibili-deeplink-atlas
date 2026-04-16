# 文档总览

## 目标

本仓库用于记录哔哩哔哩 Android 客户端在当前样本中注册的 `bilibili://` 与 `activity://` deeplink 路由，并将原始静态提取结果整理成可检索、可交叉引用的文档体系。

## 阅读顺序

1. [提取方法](./methodology.md)
2. [数据模型](./data-model.md)
3. [路由关系说明](./route-relations.md)
4. [前缀索引](./prefix-index.md)
5. [`browser` 与通用 `web` 路由专题](./browser-web.md)

## 文档分工

- [提取方法](./methodology.md)：说明数据从哪里来、提取边界是什么、哪些结论是确定的。
- [数据模型](./data-model.md)：定义 `routes.json`、`routes.csv`、`summary.json` 中各字段的含义。
- [路由关系说明](./route-relations.md)：解释“同一条路由块中的别名”“前缀分类”“路由类型”之间的对应关系。
- [前缀索引](./prefix-index.md)：从 `route` 前缀角度浏览全量路由。
- [`browser` 与通用 `web` 路由专题](./browser-web.md)：针对 `bilibili://browser`、`activity://main/web` 和通用 web 容器链路做重点说明。

## 与数据文件的关系

- 原始提取结果在 [routes.json](../data/routes.json)。
- 表格视图在 [routes.csv](../data/routes.csv)。
- 聚合统计在 [summary.json](../data/summary.json)。

## 当前快照

- 唯一路由模式数：`1226`
- 提取出的路由行数：`1228`
- `bilibili://` 路由：`988`
- `activity://` 路由：`240`

## 使用边界

本仓库是静态分析文档，不包含“可直接唤起的外部调用格式”结论，也不把单次动态测试结果混入全量路由清单。
