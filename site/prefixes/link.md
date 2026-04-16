# 前缀：link

前缀 `link` 下的全部路由，主要归入“链接”相关页面或入口。

- 路由数：`6`

## `bilibili://link/ai/chat`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“链接 / ai / chat”，类型为 原生。
- 关联入口：`bilibili://link/myai/chat`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://link/ai/chat" />

## `bilibili://link/customer/chat`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“链接 / customer / chat”，类型为 原生。
- 关联入口：`bilibili://im-customer/conversation`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://link/customer/chat" />

## `bilibili://link/im_home`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“链接 / im home”，类型为 原生。
- 关联入口：`bilibili://link/im_sessions/{page_type}`、`bilibili://im/setting/{setting_type}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://link/im_home" />

## `bilibili://link/im_sessions/{page_type}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“链接 / im sessions / page_type 参数”，类型为 原生。
- 关联入口：`bilibili://im/setting/{setting_type}`、`bilibili://link/im_home`
:::

### 参数说明

- `page_type`：页面类型。

### 快速操作

<RouteActions route="bilibili://link/im_sessions/{page_type}" config-link="/config/bilibili-link-im_sessions-page_type" />

## `bilibili://link/myai/chat`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“链接 / myai / chat”，类型为 原生。
- 关联入口：`bilibili://link/ai/chat`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://link/myai/chat" />

## `bilibili://link/preference`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“链接 / 偏好设置”，类型为 原生。
- 关联入口：`activity://im/chat/setting`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://link/preference" />
