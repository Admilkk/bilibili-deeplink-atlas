# 前缀：link

本页收录前缀 `link` 下的全部 bilibili 协议 路由，主要对应“链接”相关页面、容器或业务入口。

- 唯一路由数：`6`
- 路由类型统计：`{'native': 6}`

## 路由条目

### `bilibili://link/ai/chat`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“链接 / ai / chat”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://link/myai/chat`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:949`

**参数说明**

- 无显式路径参数。

### `bilibili://link/customer/chat`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“链接 / customer / chat”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im-customer/conversation`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2520`

**参数说明**

- 无显式路径参数。

### `bilibili://link/im_home`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“链接 / im home”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://link/im_sessions/{page_type}`、`bilibili://im/setting/{setting_type}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:356`

**参数说明**

- 无显式路径参数。

### `bilibili://link/im_sessions/{page_type}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“链接 / im sessions / page_type 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://im/setting/{setting_type}`、`bilibili://link/im_home`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/y6.smali:348`

**参数说明**

- `page_type`：页面类型。

### `bilibili://link/myai/chat`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“链接 / myai / chat”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://link/ai/chat`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:941`

**参数说明**

- 无显式路径参数。

### `bilibili://link/preference`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“链接 / 偏好设置”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://im/chat/setting`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/s70.smali:2047`

**参数说明**

- 无显式路径参数。
