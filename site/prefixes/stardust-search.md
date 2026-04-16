# 前缀：stardust-search

本页收录前缀 `stardust-search` 下的全部 bilibili 协议 路由，主要对应“搜索”相关页面、容器或业务入口。

> 共 2 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://stardust-search`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search/**`、`bilibili://search`、`bilibili://search/{kw}`、`activity://main/stardust-search`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://stardust-search" />

## `bilibili://stardust-search/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://search`、`bilibili://search/{kw}`、`activity://main/stardust-search`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://stardust-search/**" />
