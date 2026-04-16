# 前缀：activity-following

本页收录前缀 `activity-following` 下的全部 Activity 路由，主要对应“关注”相关页面、容器或业务入口。

- 唯一路由数：`10`
- 路由类型统计：`{'native': 10}`

## 路由条目

### `activity://following/detail`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / 详情”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://painting/detail`、`activity://pictureshow/detail`、`bilibili://following/detail/{dynamicId}`、`bilibili://album/{picid}`、`bilibili://pictureshow/detail/{picid}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:584`

**参数说明**

- 无显式路径参数。

### `activity://following/following_topic_list`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / following topic list”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/following_topic_list/**`、`bilibili://following/my_topic_list`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:503`

**参数说明**

- 无显式路径参数。

### `activity://following/following_topic_list/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / following topic list / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/my_topic_list`、`activity://following/following_topic_list`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:495`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `activity://following/light_browser_v2`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / light browser v2”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/lightbrowser/{dyn_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1227`

**参数说明**

- 无显式路径参数。

### `activity://following/notool/web`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / notool / 网页”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/web`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:711`

**参数说明**

- 无显式路径参数。

### `activity://following/select_location`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / select location”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:357`

**参数说明**

- 无显式路径参数。

### `activity://following/tagsearch`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / tagsearch”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nk0.smali:125`

**参数说明**

- 无显式路径参数。

### `activity://following/topic_search`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / topic search”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2128`

**参数说明**

- 无显式路径参数。

### `activity://following/vertical_search`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / vertical search”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/dynamic_search`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1996`

**参数说明**

- 无显式路径参数。

### `activity://following/web`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / 网页”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/notool/web`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/uy.smali:707`

**参数说明**

- 无显式路径参数。
