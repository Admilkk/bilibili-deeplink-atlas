# 前缀：digital

前缀 `digital` 下的全部路由，主要归入“数字藏品”相关页面或入口。

- 路由数：`8`

## `bilibili://digital/app_widget`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / app widget”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://digital/app_widget" />

## `bilibili://digital/app_widget/add`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / app widget / add”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://digital/app_widget/add" />

## `bilibili://digital/app_widget/edit`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / app widget / edit”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://digital/app_widget/edit" />

## `bilibili://digital/app_widget/my`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / app widget / my”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://digital/app_widget/my" />

## `bilibili://digital/card/collection/{scene}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / card / collection / scene 参数”，类型为 原生。
- 关联入口：`bilibili://digital/card/collection/{scene}/**`
:::

### 参数说明

- `scene`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://digital/card/collection/{scene}" config-link="/config/bilibili-digital-card-collection-scene" />

## `bilibili://digital/card/collection/{scene}/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / card / collection / scene 参数 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://digital/card/collection/{scene}`
:::

### 参数说明

- `scene`：该路由使用的路径参数，需结合业务上下文判定具体取值。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://digital/card/collection/{scene}/**" config-link="/config/bilibili-digital-card-collection-scene" />

## `bilibili://digital/card/detail`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / card / 详情”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://digital/card/detail" />

## `bilibili://digital/smelting_tutorial`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“数字藏品 / smelting tutorial”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://digital/smelting_tutorial" />
