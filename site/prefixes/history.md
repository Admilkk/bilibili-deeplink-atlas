# 前缀：history

前缀 `history` 下的全部路由，主要归入“历史记录”相关页面或入口。

- 路由数：`4`

## `bilibili://history`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“历史记录”，类型为 原生。
- 关联入口：`bilibili://main/drawer/history`、`bilibili://user_center/history`、`bilibili://history/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://history" />

## `bilibili://history/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“历史记录 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://main/drawer/history`、`bilibili://user_center/history`、`bilibili://history`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://history/**" />

## `bilibili://history/search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“历史记录 / 搜索”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://history/search" />

## `bilibili://history/search/suggestion`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“历史记录 / 搜索 / suggestion”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://history/search/suggestion" />
