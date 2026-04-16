# 前缀：vip

前缀 `vip` 下的全部路由，主要归入“大会员”相关页面或入口。

- 路由数：`4`

## `bilibili://vip`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“大会员”，类型为 原生。
- 关联入口：`bilibili://vip/**`、`bilibili://user_center/vip`、`activity://main/vip-main`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://vip" />

## `bilibili://vip/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“大会员 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://user_center/vip`、`activity://main/vip-main`、`bilibili://vip`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://vip/**" />

## `bilibili://vip/cashier`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“大会员 / cashier”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://vip/cashier" />

## `bilibili://vip/choose-coupon`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“大会员 / choose coupon”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://vip/choose-coupon" />
