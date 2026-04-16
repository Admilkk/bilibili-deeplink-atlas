# 前缀：activity-bangumi

本页收录前缀 `activity-bangumi` 下的全部 Activity 路由，主要对应“番剧”相关页面、容器或业务入口。

- 唯一路由数：`11`
- 路由类型统计：`{'native': 11}`

## 路由条目

### `activity://bangumi/category-index`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / category index”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pgc/module/variety-index`、`bilibili://pgc/page/media-index`、`bilibili://pgc/index`、`bilibili://pgc/bangumi/index`、`bilibili://pgc/common/index`、`bilibili://pgc/module/movie-index`、`bilibili://pgc/module/doc-index`、`bilibili://pgc/module/tv-index`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/m2.smali:618`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/newtimeline`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / newtimeline”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pgc/timeline/{timeline_type}`、`bilibili://pgc/timeline`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:795`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/reserve-list`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / reserve list”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:526`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/review/review-share`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / review / review share”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nf.smali:330`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/review/short-review-publish`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / review / short review publish”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nf.smali:406`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/review/web`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / review / 网页”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bangumi/review/web/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nf.smali:483`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/review/web/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / review / 网页 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bangumi/review/web`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nf.smali:487`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `activity://bangumi/sponsor-rank`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / sponsor rank”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bangumi/sponsor-rank/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:34`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/sponsor-rank/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / sponsor rank / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bangumi/sponsor-rank`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:38`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `activity://bangumi/sponsor-result`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / sponsor result”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bangumi/sponsor-result/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:114`

**参数说明**

- 无显式路径参数。

### `activity://bangumi/sponsor-result/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“番剧 / sponsor result / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bangumi/sponsor-result`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/i0.smali:118`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。
