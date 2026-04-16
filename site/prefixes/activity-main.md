# 前缀：activity-main

前缀 `activity-main` 下的全部路由，主要归入“主站”相关页面或入口。

- 路由数：`20`

## `activity://main/answer-dialog/transfer`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 答题弹窗 / 跳转”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/answer-dialog/transfer" />

## `activity://main/authorspace`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 作者空间”，类型为 原生。
- 关联入口：`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/authorspace" />

## `activity://main/authorspace/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 作者空间 / 后续子路径”，类型为 原生。
- 关联入口：`activity://main/authorspace`、`bilibili://author/{mid}`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://main/authorspace/**" />

## `activity://main/download-list`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 下载列表”，类型为 原生。
- 关联入口：`bilibili://main/drawer/offline`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/download-list" />

## `activity://main/go-to-answer`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 跳转答题”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/go-to-answer" />

## `activity://main/local-viewer`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 本地查看器”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/local-viewer" />

## `activity://main/localauthorspace`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 本地作者空间”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/localauthorspace" />

## `activity://main/login`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 登录”，类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login/**`、`activity://main/login-dialog`、`activity://main/login-dialog/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/login" />

## `activity://main/login-dialog`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / login dialog”，类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login`、`activity://main/login/**`、`activity://main/login-dialog/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/login-dialog" />

## `activity://main/login-dialog/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / login dialog / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login`、`activity://main/login/**`、`activity://main/login-dialog`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://main/login-dialog/**" />

## `activity://main/login/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 登录 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login`、`activity://main/login-dialog`、`activity://main/login-dialog/**`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://main/login/**" />

## `activity://main/preference`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 偏好设置”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/preference" />

## `activity://main/register/fast`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 注册 / 快速”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/register/fast" />

## `activity://main/stardust-search`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 搜索”，类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://stardust-search/**`、`bilibili://search`、`bilibili://search/{kw}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/stardust-search" />

## `activity://main/user_grow_dialog`

::: info 路由说明
- 类型：`web`
- 说明：Activity 路由，归入“主站 / 用户成长弹窗”，类型为 网页。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/user_grow_dialog" />

## `activity://main/vip-buy`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / vip buy”，类型为 原生。
- 关联入口：`bilibili://user_center/vip/buy/{appId}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/vip-buy" />

## `activity://main/vip-main`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / vip main”，类型为 原生。
- 关联入口：`bilibili://vip/**`、`bilibili://user_center/vip`、`bilibili://vip`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/vip-main" />

## `activity://main/vip-web`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / vip web”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/vip-web" />

## `activity://main/web`

::: info 路由说明
- 类型：`web`
- 说明：Activity 路由，归入“主站 / 网页”，类型为 网页。
- 关联入口：`bilibili://browser`
:::

### 参数说明

- 无显式路径参数。
- `url`：已知的目标网页地址字段，详细说明见 `browser-web` 专题页。

### 快速操作

<RouteActions route="activity://main/web" config-link="/config/activity-main-web" />

## `activity://main/web/ap`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“主站 / 网页 / AP 页面”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://main/web/ap" />
