# 路由关系说明

## 三种主要关系

本仓库中的路由关系主要分为三层：

1. 路由与注册块的关系
2. 路由与前缀的关系
3. 路由与类型的关系

## 路由与注册块

每个 `JInterMediateRoute` 块可能包含一条或多条 route。

当一个块里有多条 route 时，可以理解为：

- 这些 route 共享同一注册上下文
- 它们是同一能力的多种入口形式
- 它们会在数据层被放进同一个 `aliases` 集合

例如 `bilibili://browser`、`activity://main/web`、`(http|https)://*` 与 `(http|https)://*/**` 就属于同一组。

## 路由与前缀

前缀文档并不改变底层数据，只是帮助阅读：

- 想看某条业务域的大量路由时，优先看前缀文档
- 想确认某条路由是否有别名时，回看 `routes.json` 中的 `aliases`
- 想确认该路由对应的专题说明，再跳到相关专题文档

因此：

- `prefix-index.md` 是导航页
- `docs/prefixes/*.md` 是局部视图
- `routes.json` 才是原始结构化数据

## 路由与类型

当前静态结果主要出现三类：

- `native`：更偏向原生页面或原生容器
- `web`：更偏向 web 容器或网页承载入口
- `unknown`：当前提取逻辑未识别到明确类型字符串

类型字段适合用于全局筛选，但不应脱离源码上下文单独解释。

## 推荐检索路径

如果目标是某个业务域：

- 先看 [前缀索引](./prefix-index.md)
- 再进对应的 `docs/prefixes/*.md`
- 需要精确定位时回到 `data/routes.json`

如果目标是某类能力：

- 先按 `route_type` 在 `routes.csv` 或 `routes.json` 中筛选
- 再结合专题文档确认关键链路

如果目标是 `browser/web`：

- 直接看 [browser-web.md](./browser-web.md)
