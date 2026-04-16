# 前缀：podcast

前缀 `podcast` 下的全部路由，主要归入“播客”相关页面或入口。

- 路由数：`7`

## `bilibili://podcast`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客”，类型为 原生。
- 关联入口：`bilibili://podcast/**`、`bilibili://music/home`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast" />

## `bilibili://podcast/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://music/home`、`bilibili://podcast`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://podcast/**" />

## `bilibili://podcast/card/transfer`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客 / card / 跳转”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/card/transfer" />

## `bilibili://podcast/favorite/create`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客 / 收藏 / create”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/favorite/create" />

## `bilibili://podcast/find/all/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客 / find / all / id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://podcast/find/all/{id}" config-link="/config/bilibili-podcast-find-all-id" />

## `bilibili://podcast/legacy`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客 / legacy”，类型为 原生。
- 关联入口：`bilibili://music/detail/{songId}`、`bilibili://music/menu/detail/{menuId}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/legacy" />

## `bilibili://podcast/playlist`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“播客 / playlist”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/playlist" />
