# 前缀：topic

本页收录前缀 `topic` 下的全部 bilibili 协议 路由，主要对应“话题”相关页面、容器或业务入口。

- 唯一路由数：`8`
- 路由类型统计：`{'native': 8}`

## 路由条目

### `bilibili://topic`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://topic/**`、`bilibili://topic_center`、`bilibili://topic_center/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/pt.smali:159`

**参数说明**

- 无显式路径参数。

### `bilibili://topic/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://topic`、`bilibili://topic_center`、`bilibili://topic_center/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/pt.smali:163`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://topic/create`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / create”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:837`

**参数说明**

- 无显式路径参数。

### `bilibili://topic/create-old`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / create old”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:903`

**参数说明**

- 无显式路径参数。

### `bilibili://topic/detail/home_tab/{topic_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / 详情 / home tab / topic_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:1039`

**参数说明**

- `topic_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://topic/detail/live/{topic_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / 详情 / 直播 / topic_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:1169`

**参数说明**

- `topic_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://topic/dialog`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / 弹窗”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://list/bottom/dialog`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:1299`

**参数说明**

- 无显式路径参数。

### `bilibili://topic/publish/search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“话题 / publish / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:1368`

**参数说明**

- 无显式路径参数。
