# 前缀：search3

前缀 `search3` 下的全部路由，主要归入“search3”相关页面或入口。

- 路由数：`2`

## `bilibili://search3`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“search3”，类型为 原生。
- 关联入口：`bilibili://stardust-search3`、`bilibili://stardust-search3/**`、`bilibili://search3/{kw}`、`activity://main3/stardust-search`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://search3" />

## `bilibili://search3/{kw}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“search3 / kw 参数”，类型为 原生。
- 关联入口：`bilibili://stardust-search3`、`bilibili://stardust-search3/**`、`bilibili://search3`、`activity://main3/stardust-search`
:::

### 参数说明

- `kw`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://search3/{kw}" config-link="/config/bilibili-search3-kw" />
