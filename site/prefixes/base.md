# 前缀：base

前缀 `base` 下的全部路由，主要归入“base”相关页面或入口。

- 路由数：`3`

## `bilibili://base/app-upgrade`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“base / app upgrade”，类型为 原生。
- 关联入口：`bilibili://version/update`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://base/app-upgrade" />

## `bilibili://base/emoji/manager`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“base / emoji / manager”，类型为 原生。
- 关联入口：`bilibili://base/emoji/manager/**`、`activity://emoticon/setting`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://base/emoji/manager" />

## `bilibili://base/emoji/manager/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“base / emoji / manager / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://base/emoji/manager`、`activity://emoticon/setting`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://base/emoji/manager/**" />
