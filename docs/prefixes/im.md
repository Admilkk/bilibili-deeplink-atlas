# 前缀：im

本页收录前缀 `im` 下的全部 bilibili 协议 路由，主要对应“消息”相关页面、容器或业务入口。

- 唯一路由数：`31`
- 路由类型统计：`{'native': 31}`

## 路由条目

### `bilibili://im`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:647`

**参数说明**

- 无显式路径参数。

### `bilibili://im/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:651`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://im/chat/ai/{sub_type}/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / chat / ai / sub_type 参数 / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/chat/customer/{shop_type}/{shop_id}`、`bilibili://im/chat/group/{id}`、`bilibili://im/chat/search/{id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:433`

**参数说明**

- `sub_type`：子类型标识。
- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://im/chat/assistant/{type}/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / chat / assistant / type 参数 / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:581`

**参数说明**

- `type`：类型标识。
- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://im/chat/customer/{shop_type}/{shop_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / chat / customer / shop_type 参数 / shop_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/chat/ai/{sub_type}/{id}`、`bilibili://im/chat/group/{id}`、`bilibili://im/chat/search/{id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:437`

**参数说明**

- `shop_type`：店铺类型。
- `shop_id`：店铺 ID。

### `bilibili://im/chat/group/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / chat / group / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/chat/ai/{sub_type}/{id}`、`bilibili://im/chat/customer/{shop_type}/{shop_id}`、`bilibili://im/chat/search/{id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:441`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://im/chat/personal/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / chat / personal / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:515`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://im/chat/search/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / chat / 搜索 / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/chat/ai/{sub_type}/{id}`、`bilibili://im/chat/customer/{shop_type}/{shop_id}`、`bilibili://im/chat/group/{id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:445`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://im/contact`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / contact”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/contact/share`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:3370`

**参数说明**

- 无显式路径参数。

### `bilibili://im/contact/share`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / contact / 分享”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/contact`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:3366`

**参数说明**

- 无显式路径参数。

### `bilibili://im/conversation`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / conversation”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://link/conversation`、`activity://im/conversation`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:1305`

**参数说明**

- 无显式路径参数。

### `bilibili://im/conversation/stranger`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / conversation / stranger”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2586`

**参数说明**

- 无显式路径参数。

### `bilibili://im/create-friend-group`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / create friend group”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:1907`

**参数说明**

- 无显式路径参数。

### `bilibili://im/customer/setting`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / customer / 设置”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2852`

**参数说明**

- 无显式路径参数。

### `bilibili://im/group-notify`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / group notify”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2114`

**参数说明**

- 无显式路径参数。

### `bilibili://im/group/assistant`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / group / assistant”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://im/groupNotices`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:1977`

**参数说明**

- 无显式路径参数。

### `bilibili://im/home_tab`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / home tab”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:3449`

**参数说明**

- 无显式路径参数。

### `bilibili://im/keyword_blocking`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / keyword blocking”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:717`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/at_old`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / at old”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/notification/like_old`、`bilibili://im/notifications`、`bilibili://im/notification/reply_old`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/np.smali:296`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/like`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / like”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/notification/reply`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/np.smali:385`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/like/setting`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / like / 设置”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:3063`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/like_old`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / like old”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/notification/at_old`、`bilibili://im/notifications`、`bilibili://im/notification/reply_old`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/np.smali:300`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/reply`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / reply”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/notification/like`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/np.smali:381`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/reply/setting`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / reply / 设置”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:3142`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notification/reply_old`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notification / reply old”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/notification/at_old`、`bilibili://im/notification/like_old`、`bilibili://im/notifications`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/np.smali:308`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notifications`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notifications”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/notification/at_old`、`bilibili://im/notification/like_old`、`bilibili://im/notification/reply_old`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/np.smali:304`

**参数说明**

- 无显式路径参数。

### `bilibili://im/notify_message/business/panel`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / notify message / business / panel”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2653`

**参数说明**

- 无显式路径参数。

### `bilibili://im/preference/anti_disturb`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / 偏好设置 / anti disturb”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2997`

**参数说明**

- 无显式路径参数。

### `bilibili://im/setting/follow`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / 设置 / follow”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:3221`

**参数说明**

- 无显式路径参数。

### `bilibili://im/setting/{setting_type}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / 设置 / setting_type 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://link/im_sessions/{page_type}`、`bilibili://link/im_home`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:352`

**参数说明**

- `setting_type`：设置项类型。

### `bilibili://im/video-preview`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“消息 / video preview”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2786`

**参数说明**

- 无显式路径参数。
