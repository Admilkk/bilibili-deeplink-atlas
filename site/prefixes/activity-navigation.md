# 前缀：activity-navigation

前缀 `activity-navigation` 下的全部路由，主要归入“navigation”相关页面或入口。

- 路由数：`2`

## `activity://navigation/theme`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“navigation / theme”，类型为 原生。
- 关联入口：`activity://navigation/theme/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://navigation/theme" />

## `activity://navigation/theme/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“navigation / theme / 后续子路径”，类型为 原生。
- 关联入口：`activity://navigation/theme`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://navigation/theme/**" />
