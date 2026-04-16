# 前缀：cheese

本页收录前缀 `cheese` 下的全部 bilibili 协议 路由，主要对应“cheese”相关页面、容器或业务入口。

- 唯一路由数：`5`
- 路由类型统计：`{'native': 4, 'web': 1}`

## 路由条目

### `bilibili://cheese/pay`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“cheese / 支付”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ra.smali:159`

**参数说明**

- 无显式路径参数。

### `bilibili://cheese/pay-guide`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“cheese / pay guide”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ra.smali:235`

**参数说明**

- 无显式路径参数。

### `bilibili://cheese/season/ep/{epid}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“cheese / season / ep / epid 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://united_video`、`bilibili://united_video/**`、`bilibili://cheese/season/{season_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vx.smali:397`

**参数说明**

- `epid`：剧集 EP ID。

### `bilibili://cheese/season/{season_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“cheese / season / season_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://united_video`、`bilibili://united_video/**`、`bilibili://cheese/season/ep/{epid}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vx.smali:393`

**参数说明**

- `season_id`：合集、剧集或季对象 ID。

### `bilibili://cheese/web`

- 类型：`web`
- 说明：这是一个哔哩哔哩协议路由，归入“cheese / 网页”相关能力，当前静态标记类型为 网页。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:3575`

**参数说明**

- 无显式路径参数。
