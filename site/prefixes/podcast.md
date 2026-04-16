# 前缀：podcast

本页收录前缀 `podcast` 下的全部 bilibili 协议 路由，主要对应“播客”相关页面、容器或业务入口。

> 共 7 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://podcast`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://podcast/**`、`bilibili://music/home`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast" />

## `bilibili://podcast/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / 后续子路径”相关能力，当前静态标记类型为 原生。
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
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / card / 跳转”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/card/transfer" />

## `bilibili://podcast/favorite/create`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / 收藏 / create”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/favorite/create" />

## `bilibili://podcast/find/all/{id}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / find / all / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://podcast/find/all/{id}" />

## `bilibili://podcast/legacy`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / legacy”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/detail/{songId}`、`bilibili://music/menu/detail/{menuId}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/legacy" />

## `bilibili://podcast/playlist`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / playlist”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://podcast/playlist" />
