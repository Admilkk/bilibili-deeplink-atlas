# 前缀：im

前缀 `im` 下的全部路由，主要归入“消息”相关页面或入口。

- 路由数：`31`

## `bilibili://im`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息”，类型为 原生。
- 关联入口：`bilibili://im/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im" />

## `bilibili://im/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://im`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://im/**" />

## `bilibili://im/chat/ai/{sub_type}/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / ai / sub_type 参数 / id 参数”，类型为 原生。
- 关联入口：`bilibili://im/chat/customer/{shop_type}/{shop_id}`、`bilibili://im/chat/group/{id}`、`bilibili://im/chat/search/{id}`
:::

### 参数说明

- `sub_type`：子类型标识。
- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://im/chat/ai/{sub_type}/{id}" config-link="/config/bilibili-im-chat-ai-sub_type-id" />

## `bilibili://im/chat/assistant/{type}/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / assistant / type 参数 / id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `type`：类型标识。
- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://im/chat/assistant/{type}/{id}" config-link="/config/bilibili-im-chat-assistant-type-id" />

## `bilibili://im/chat/customer/{shop_type}/{shop_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / customer / shop_type 参数 / shop_id 参数”，类型为 原生。
- 关联入口：`bilibili://im/chat/ai/{sub_type}/{id}`、`bilibili://im/chat/group/{id}`、`bilibili://im/chat/search/{id}`
:::

### 参数说明

- `shop_type`：店铺类型。
- `shop_id`：店铺 ID。

### 快速操作

<RouteActions route="bilibili://im/chat/customer/{shop_type}/{shop_id}" config-link="/config/bilibili-im-chat-customer-shop_type-shop_id" />

## `bilibili://im/chat/group/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / group / id 参数”，类型为 原生。
- 关联入口：`bilibili://im/chat/ai/{sub_type}/{id}`、`bilibili://im/chat/customer/{shop_type}/{shop_id}`、`bilibili://im/chat/search/{id}`
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://im/chat/group/{id}" config-link="/config/bilibili-im-chat-group-id" />

## `bilibili://im/chat/personal/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / personal / id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://im/chat/personal/{id}" config-link="/config/bilibili-im-chat-personal-id" />

## `bilibili://im/chat/search/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / chat / 搜索 / id 参数”，类型为 原生。
- 关联入口：`bilibili://im/chat/ai/{sub_type}/{id}`、`bilibili://im/chat/customer/{shop_type}/{shop_id}`、`bilibili://im/chat/group/{id}`
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://im/chat/search/{id}" config-link="/config/bilibili-im-chat-search-id" />

## `bilibili://im/contact`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / contact”，类型为 原生。
- 关联入口：`bilibili://im/contact/share`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/contact" />

## `bilibili://im/contact/share`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / contact / 分享”，类型为 原生。
- 关联入口：`bilibili://im/contact`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/contact/share" />

## `bilibili://im/conversation`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / conversation”，类型为 原生。
- 关联入口：`activity://link/conversation`、`activity://im/conversation`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/conversation" />

## `bilibili://im/conversation/stranger`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / conversation / stranger”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/conversation/stranger" />

## `bilibili://im/create-friend-group`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / create friend group”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/create-friend-group" />

## `bilibili://im/customer/setting`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / customer / 设置”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/customer/setting" />

## `bilibili://im/group-notify`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / group notify”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/group-notify" />

## `bilibili://im/group/assistant`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / group / assistant”，类型为 原生。
- 关联入口：`activity://im/groupNotices`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/group/assistant" />

## `bilibili://im/home_tab`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / home tab”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/home_tab" />

## `bilibili://im/keyword_blocking`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / keyword blocking”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/keyword_blocking" />

## `bilibili://im/notification/at_old`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / at old”，类型为 原生。
- 关联入口：`bilibili://im/notification/like_old`、`bilibili://im/notifications`、`bilibili://im/notification/reply_old`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/at_old" />

## `bilibili://im/notification/like`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / like”，类型为 原生。
- 关联入口：`bilibili://im/notification/reply`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/like" />

## `bilibili://im/notification/like_old`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / like old”，类型为 原生。
- 关联入口：`bilibili://im/notification/at_old`、`bilibili://im/notifications`、`bilibili://im/notification/reply_old`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/like_old" />

## `bilibili://im/notification/like/setting`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / like / 设置”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/like/setting" />

## `bilibili://im/notification/reply`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / reply”，类型为 原生。
- 关联入口：`bilibili://im/notification/like`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/reply" />

## `bilibili://im/notification/reply_old`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / reply old”，类型为 原生。
- 关联入口：`bilibili://im/notification/at_old`、`bilibili://im/notification/like_old`、`bilibili://im/notifications`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/reply_old" />

## `bilibili://im/notification/reply/setting`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notification / reply / 设置”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notification/reply/setting" />

## `bilibili://im/notifications`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notifications”，类型为 原生。
- 关联入口：`bilibili://im/notification/at_old`、`bilibili://im/notification/like_old`、`bilibili://im/notification/reply_old`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notifications" />

## `bilibili://im/notify_message/business/panel`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / notify message / business / panel”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/notify_message/business/panel" />

## `bilibili://im/preference/anti_disturb`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / 偏好设置 / anti disturb”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/preference/anti_disturb" />

## `bilibili://im/setting/{setting_type}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / 设置 / setting_type 参数”，类型为 原生。
- 关联入口：`bilibili://link/im_sessions/{page_type}`、`bilibili://link/im_home`
:::

### 参数说明

- `setting_type`：设置项类型。

### 快速操作

<RouteActions route="bilibili://im/setting/{setting_type}" config-link="/config/bilibili-im-setting-setting_type" />

## `bilibili://im/setting/follow`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / 设置 / follow”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/setting/follow" />

## `bilibili://im/video-preview`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“消息 / video preview”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://im/video-preview" />
