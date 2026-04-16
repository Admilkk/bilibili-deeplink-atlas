# 前缀：bangumi

本页收录前缀 `bangumi` 下的全部 bilibili 协议 路由，主要对应“番剧”相关页面、容器或业务入口。

- 唯一路由数：`7`
- 路由类型统计：`{'native': 7}`

## 路由条目

### `bilibili://bangumi`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pgc/season`、`bilibili://pgc/season/ep/{epid}`、`bilibili://bangumi/season/{season_id}`、`bilibili://pgc/season/{season_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/io.smali:266`

**参数说明**

- 无显式路径参数。

### `bilibili://bangumi/feedback`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧 / 反馈”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/bq.smali:159`

**参数说明**

- 无显式路径参数。

### `bilibili://bangumi/review-feedback`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧 / review feedback”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/bq.smali:235`

**参数说明**

- 无显式路径参数。

### `bilibili://bangumi/review/review-list`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧 / review / review list”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nf.smali:557`

**参数说明**

- 无显式路径参数。

### `bilibili://bangumi/review/short-review-publish`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧 / review / short review publish”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nf.smali:622`

**参数说明**

- 无显式路径参数。

### `bilibili://bangumi/season/{season_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧 / season / season_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pgc/season`、`bilibili://pgc/season/ep/{epid}`、`bilibili://bangumi`、`bilibili://pgc/season/{season_id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/io.smali:262`

**参数说明**

- `season_id`：合集、剧集或季对象 ID。

### `bilibili://bangumi/sponsor-rank`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“番剧 / sponsor rank”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:721`

**参数说明**

- 无显式路径参数。
