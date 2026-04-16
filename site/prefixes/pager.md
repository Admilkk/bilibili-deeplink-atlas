# 前缀：pager

前缀 `pager` 下的全部路由，主要归入“分页容器”相关页面或入口。

- 路由数：`2`

## `bilibili://pager`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“分页容器”，类型为 原生。
- 关联入口：`bilibili://pager/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pager" />

## `bilibili://pager/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“分页容器 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://pager`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://pager/**" />
