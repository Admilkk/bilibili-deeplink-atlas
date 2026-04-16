# 前缀：search

本页收录前缀 `search` 下的全部 bilibili 协议 路由，主要对应“搜索”相关页面、容器或业务入口。

> 共 9 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://search`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://stardust-search/**`、`bilibili://search/{kw}`、`activity://main/stardust-search`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://search" />

## `bilibili://search/{kw}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / kw 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://stardust-search/**`、`bilibili://search`、`activity://main/stardust-search`
:::

### 参数说明

- `kw`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://search/{kw}" />

## `bilibili://search/bangumi-episodes/grid/{id}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / bangumi episodes / grid / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://search/bangumi-episodes/grid/{id}" />

## `bilibili://search/bangumi-episodes/horizontal/{id}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / bangumi episodes / horizontal / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://search/bangumi-episodes/horizontal/{id}" />

## `bilibili://search/comic-episodes`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / comic episodes”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/comic-episodes/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://search/comic-episodes" />

## `bilibili://search/comic-episodes/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / comic episodes / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/comic-episodes`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://search/comic-episodes/**" />

## `bilibili://search/ogv/{tab_name}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / ogv / tab_name 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tab_name`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://search/ogv/{tab_name}" />

## `bilibili://search/ogv/aggregate`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / ogv / aggregate”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/ogv/aggregate/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://search/ogv/aggregate" />

## `bilibili://search/ogv/aggregate/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / ogv / aggregate / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/ogv/aggregate`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://search/ogv/aggregate/**" />
