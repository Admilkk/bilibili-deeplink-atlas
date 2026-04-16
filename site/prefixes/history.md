# 前缀：history

本页收录前缀 `history` 下的全部 bilibili 协议 路由，主要对应“历史记录”相关页面、容器或业务入口。

> 共 4 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://history`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://main/drawer/history`、`bilibili://user_center/history`、`bilibili://history/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://history" />

## `bilibili://history/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录 / 后续子路径”相关能力，当前静态标记类型为 原生。
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
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录 / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://history/search" />

## `bilibili://history/search/suggestion`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录 / 搜索 / suggestion”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://history/search/suggestion" />
