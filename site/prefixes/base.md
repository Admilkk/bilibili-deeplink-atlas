# 前缀：base

本页收录前缀 `base` 下的全部 bilibili 协议 路由，主要对应“base”相关页面、容器或业务入口。

> 共 3 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://base/app-upgrade`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“base / app upgrade”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://version/update`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://base/app-upgrade" />

## `bilibili://base/emoji/manager`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“base / emoji / manager”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://base/emoji/manager/**`、`activity://emoticon/setting`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://base/emoji/manager" />

## `bilibili://base/emoji/manager/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“base / emoji / manager / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://base/emoji/manager`、`activity://emoticon/setting`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://base/emoji/manager/**" />
