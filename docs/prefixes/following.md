# 前缀：following

本页收录前缀 `following` 下的全部 bilibili 协议 路由，主要对应“关注”相关页面、容器或业务入口。

- 唯一路由数：`69`
- 路由类型统计：`{'native': 69}`

## 路由条目

### `bilibili://following/activity_detail/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity detail / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:568`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://following/activity_group_landing/{tab_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity group landing / tab_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/activity_landing/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1186`

**参数说明**

- `tab_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/activity_landing/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity landing / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/activity_group_landing/{tab_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1182`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/activity_layer/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity layer / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/web_layer`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1038`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/activity_transparent/bottom_card`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity transparent / bottom card”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:842`

**参数说明**

- 无显式路径参数。

### `bilibili://following/activity_transparent/bottom_image`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity transparent / bottom image”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:907`

**参数说明**

- 无显式路径参数。

### `bilibili://following/activity_transparent/bottom_list`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity transparent / bottom list”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:972`

**参数说明**

- 无显式路径参数。

### `bilibili://following/activity_transparent/bottom_web`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity transparent / bottom web”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1108`

**参数说明**

- 无显式路径参数。

### `bilibili://following/activity_transparent/event_screenshot_share`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / activity transparent / event screenshot share”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1418`

**参数说明**

- 无显式路径参数。

### `bilibili://following/article/image_picker`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 专栏 / image picker”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:656`

**参数说明**

- 无显式路径参数。

### `bilibili://following/article_topic`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / article topic”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:721`

**参数说明**

- 无显式路径参数。

### `bilibili://following/bottom_sheet_inner/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / bottom sheet inner / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1328`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/channel/detail/topic`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 频道 / 详情 / 话题”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/topic_detail`、`bilibili://pegasus/channel/detail/topic`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2866`

**参数说明**

- 无显式路径参数。

### `bilibili://following/detail/{dynamicId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 详情 / dynamicId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/detail`、`activity://painting/detail`、`activity://pictureshow/detail`、`bilibili://album/{picid}`、`bilibili://pictureshow/detail/{picid}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:596`

**参数说明**

- `dynamicId`：动态 ID。

### `bilibili://following/dynamic_location`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / dynamic location”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/dynamic_location_new`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:886`

**参数说明**

- 无显式路径参数。

### `bilibili://following/dynamic_location_new`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / dynamic location new”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/dynamic_location`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:882`

**参数说明**

- 无显式路径参数。

### `bilibili://following/dynamic_search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / dynamic search”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/vertical_search`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1992`

**参数说明**

- 无显式路径参数。

### `bilibili://following/home`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 首页”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:776`

**参数说明**

- 无显式路径参数。

### `bilibili://following/home_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / home activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1332`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/home_bottom_tab_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / home bottom tab activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1253`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/index/268435455`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / index / 268435455”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:428`

**参数说明**

- 无显式路径参数。

### `bilibili://following/index/8`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / index / 8”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/index/filter/{name}`、`bilibili://following/index/synthesis`、`bilibili://following/index/videos`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:340`

**参数说明**

- 无显式路径参数。

### `bilibili://following/index/filter/{name}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / index / 筛选 / name 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/index/8`、`bilibili://following/index/synthesis`、`bilibili://following/index/videos`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:344`

**参数说明**

- `name`：名称字段。

### `bilibili://following/index/friend`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / index / friend”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1561`

**参数说明**

- 无显式路径参数。

### `bilibili://following/index/synthesis`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / index / synthesis”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/index/8`、`bilibili://following/index/filter/{name}`、`bilibili://following/index/videos`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:348`

**参数说明**

- 无显式路径参数。

### `bilibili://following/index/videos`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / index / videos”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/index/8`、`bilibili://following/index/filter/{name}`、`bilibili://following/index/synthesis`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:352`

**参数说明**

- 无显式路径参数。

### `bilibili://following/inline/setting`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / inline / 设置”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://preference/autosetting`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nr.smali:417`

**参数说明**

- 无显式路径参数。

### `bilibili://following/interaction_list/dialog`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / interaction list / 弹窗”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:752`

**参数说明**

- 无显式路径参数。

### `bilibili://following/lbs/fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / lbs / fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:817`

**参数说明**

- 无显式路径参数。

### `bilibili://following/lightbrowser/{dyn_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / lightbrowser / dyn_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/light_browser_v2`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1231`

**参数说明**

- `dyn_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/live_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / live activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1324`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/live_user_space_fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / live user space fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2396`

**参数说明**

- 无显式路径参数。

### `bilibili://following/my_topic_list`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / my topic list”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/following_topic_list/**`、`activity://following/following_topic_list`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:499`

**参数说明**

- 无显式路径参数。

### `bilibili://following/new_search_result`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / new search result”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2062`

**参数说明**

- 无显式路径参数。

### `bilibili://following/new_topic/report`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / new topic / report”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/new_topic/report_card`、`bilibili://following/report`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:633`

**参数说明**

- 无显式路径参数。

### `bilibili://following/new_topic/report_card`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / new topic / report card”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/new_topic/report`、`bilibili://following/report`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:637`

**参数说明**

- 无显式路径参数。

### `bilibili://following/new_topic_detail/join_dialog`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / new topic detail / join dialog”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:1104`

**参数说明**

- 无显式路径参数。

### `bilibili://following/new_topic_detail/timeline_dialog`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / new topic detail / timeline dialog”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ga.smali:1234`

**参数说明**

- 无显式路径参数。

### `bilibili://following/not_login`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / not login”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1627`

**参数说明**

- 无显式路径参数。

### `bilibili://following/ogv_channel_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / ogv channel activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1336`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/ogv_player_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / ogv player activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1340`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/opus/poster/share/dialog`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 图文 / poster / 分享 / 弹窗”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2528`

**参数说明**

- 无显式路径参数。

### `bilibili://following/poster`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / poster”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2660`

**参数说明**

- 无显式路径参数。

### `bilibili://following/poster/share/dialog`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / poster / 分享 / 弹窗”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2594`

**参数说明**

- 无显式路径参数。

### `bilibili://following/poster_reserve`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / poster reserve”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2194`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publish`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publish”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/repost-publish-v2`、`bilibili://following2/publishInfo`、`bilibili://following/publishInfo`、`bilibili://following/repost-publish`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:372`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publish/light`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publish / light”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/fg.smali:225`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publish/quick/share`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publish / quick / 分享”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:457`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publish/share`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publish / 分享”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:526`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publishInfo`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publishInfo”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/repost-publish-v2`、`bilibili://following2/publishInfo`、`bilibili://following/publish`、`bilibili://following/repost-publish`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:376`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publish_selector`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publish selector”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/publish_selector/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:426`

**参数说明**

- 无显式路径参数。

### `bilibili://following/publish_selector/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / publish selector / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/publish_selector`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:430`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://following/quick_consume`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / quick consume”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2726`

**参数说明**

- 无显式路径参数。

### `bilibili://following/report`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / report”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/new_topic/report`、`bilibili://following/new_topic/report_card`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:641`

**参数说明**

- 无显式路径参数。

### `bilibili://following/repost-publish`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / repost publish”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/repost-publish-v2`、`bilibili://following2/publishInfo`、`bilibili://following/publish`、`bilibili://following/publishInfo`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:380`

**参数说明**

- 无显式路径参数。

### `bilibili://following/repost-publish-v2`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / repost publish v2”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following2/publishInfo`、`bilibili://following/publish`、`bilibili://following/publishInfo`、`bilibili://following/repost-publish`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:364`

**参数说明**

- 无显式路径参数。

### `bilibili://following/share/post`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 分享 / post”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:497`

**参数说明**

- 无显式路径参数。

### `bilibili://following/story_publish`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / story publish”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gp.smali:591`

**参数说明**

- 无显式路径参数。

### `bilibili://following/topic/list/fold/{type}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 话题 / 列表 / fold / type 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/topic/list/merge/{type}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2260`

**参数说明**

- `type`：类型标识。

### `bilibili://following/topic/list/merge/{type}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 话题 / 列表 / merge / type 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/topic/list/fold/{type}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2264`

**参数说明**

- `type`：类型标识。

### `bilibili://following/topic/tab/list/{type}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / 话题 / tab / 列表 / type 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2330`

**参数说明**

- `type`：类型标识。

### `bilibili://following/topic_content_list/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / topic content list / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:281`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://following/topic_detail`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / topic detail”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pegasus/channel/detail/topic`、`bilibili://following/channel/detail/topic`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2858`

**参数说明**

- 无显式路径参数。

### `bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / ugc fullscreen player activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1344`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/ugc_player_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / ugc player activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/user_space_activity_tab/{page_id}`、`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1348`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/up_more_list`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / up more list”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2792`

**参数说明**

- 无显式路径参数。

### `bilibili://following/user_space_activity_tab/{page_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / user space activity tab / page_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/live_activity_tab/{page_id}`、`bilibili://following/bottom_sheet_inner/{page_id}`、`bilibili://following/home_activity_tab/{page_id}`、`bilibili://following/ogv_channel_activity_tab/{page_id}`、`bilibili://following/ogv_player_activity_tab/{page_id}`、`bilibili://following/ugc_fullscreen_player_activity_tab/{page_id}`、`bilibili://following/ugc_player_activity_tab/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1320`

**参数说明**

- `page_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://following/user_space_fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / user space fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2462`

**参数说明**

- 无显式路径参数。

### `bilibili://following/web_layer`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“关注 / web layer”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/activity_layer/{page_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:1042`

**参数说明**

- 无显式路径参数。
