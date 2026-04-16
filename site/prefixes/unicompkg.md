# 前缀：unicompkg

前缀 `unicompkg` 下的全部路由，主要归入“unicompkg”相关页面或入口。

- 路由数：`2`

## `bilibili://unicompkg`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“unicompkg”，类型为 原生。
- 关联入口：`bilibili://unicompkg/**`、`bilibili://unicom`、`bilibili://unicom/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://unicompkg" />

## `bilibili://unicompkg/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“unicompkg / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://unicompkg`、`bilibili://unicom`、`bilibili://unicom/**`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://unicompkg/**" />
