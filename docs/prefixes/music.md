# 前缀：music

本页收录前缀 `music` 下的全部 bilibili 协议 路由，主要对应“音乐”相关页面、容器或业务入口。

- 唯一路由数：`19`
- 路由类型统计：`{'native': 19}`

## 路由条目

### `bilibili://music/contribution/err`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / contribution / err”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:890`

**参数说明**

- 无显式路径参数。

### `bilibili://music/contributions`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / contributions”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:1045`

**参数说明**

- 无显式路径参数。

### `bilibili://music/detail/{songId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / 详情 / songId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://podcast/legacy`、`bilibili://music/menu/detail/{menuId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:967`

**参数说明**

- `songId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://music/favorite/menu`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / 收藏 / menu”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:825`

**参数说明**

- 无显式路径参数。

### `bilibili://music/home`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / 首页”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://podcast/**`、`bilibili://podcast`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:691`

**参数说明**

- 无显式路径参数。

### `bilibili://music/menu/detail/{menuId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / menu / 详情 / menuId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://podcast/legacy`、`bilibili://music/detail/{songId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:971`

**参数说明**

- `menuId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://music/menu/edit`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / menu / edit”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:492`

**参数说明**

- 无显式路径参数。

### `bilibili://music/playlist/detail`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / 详情”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:416`

**参数说明**

- 无显式路径参数。

### `bilibili://music/playlist/manage`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / manage”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:1005`

**参数说明**

- 无显式路径参数。

### `bilibili://music/playlist/manage_v2`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / manage v2”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:3774`

**参数说明**

- 无显式路径参数。

### `bilibili://music/playlist/playpage/{playlistId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / playpage / playlistId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/playlist/spacepage/{spaceMid}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/u2.smali:133`

**参数说明**

- `playlistId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://music/playlist/search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/playlist/search/{media_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:347`

**参数说明**

- 无显式路径参数。

### `bilibili://music/playlist/search/{media_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / 搜索 / media_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/playlist/search`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:351`

**参数说明**

- `media_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://music/playlist/search2`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / search2”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/playlist/search2/{media_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:1137`

**参数说明**

- 无显式路径参数。

### `bilibili://music/playlist/search2/{media_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / search2 / media_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/playlist/search2`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:1141`

**参数说明**

- `media_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://music/playlist/spacepage/{spaceMid}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / playlist / spacepage / spaceMid 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/playlist/playpage/{playlistId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/u2.smali:137`

**参数说明**

- `spaceMid`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://music/search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:282`

**参数说明**

- 无显式路径参数。

### `bilibili://music/search2`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / search2”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/o9.smali:1071`

**参数说明**

- 无显式路径参数。

### `bilibili://music/space/page`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“音乐 / 空间 / page”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:347`

**参数说明**

- 无显式路径参数。
