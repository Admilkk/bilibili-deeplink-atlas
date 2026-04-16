# 文档总览

## 目标

本仓库用于记录哔哩哔哩 Android 客户端在当前样本中注册的 `bilibili://` 与 `activity://` deeplink 路由，并将原始静态提取结果整理成可检索、可交叉引用的文档体系。

## 阅读顺序

1. [前缀索引](./prefix-index.md)
2. [路由关系说明](./route-relations.md)
3. [`browser` 与通用 `web` 路由专题](./browser-web.md)

## 文档分工

- [前缀索引](./prefix-index.md)：从 `route` 前缀角度浏览全量路由，并进入逐条说明页。
- [路由关系说明](./route-relations.md)：解释“同一条路由块中的别名”“前缀分类”“路由类型”之间的对应关系。
- [`browser` 与通用 `web` 路由专题](./browser-web.md)：针对 `bilibili://browser`、`activity://main/web` 和通用 web 容器链路做重点说明。

## 当前快照

- 唯一路由模式数：`1226`
- 提取出的路由行数：`1228`
- `bilibili://` 路由：`988`
- `activity://` 路由：`240`

## 使用边界

本仓库定位为路由参考手册，重点提供路由清单、逐条说明、参数占位和关联关系，不提供调用示例。
