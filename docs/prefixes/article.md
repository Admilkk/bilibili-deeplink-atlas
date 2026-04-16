# 前缀：article

本页收录前缀 `article` 下的全部 bilibili 协议 路由，主要对应“专栏”相关页面、容器或业务入口。

- 唯一路由数：`13`
- 路由类型统计：`{'native': 10, 'web': 3}`

## 路由条目

### `bilibili://article/category`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / 分区”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://article/category/{categoryId}`、`bilibili://category/65541`、`bilibili://category/65541/0`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:606`

**参数说明**

- 无显式路径参数。

### `bilibili://article/category/{categoryId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / 分区 / categoryId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://article/category`、`bilibili://category/65541`、`bilibili://category/65541/0`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:610`

**参数说明**

- `categoryId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://article/column-author-space-fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / column author space fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://column/column-author-space`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:886`

**参数说明**

- 无显式路径参数。

### `bilibili://article/column-manager-draft-fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / column manager draft fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:1168`

**参数说明**

- 无显式路径参数。

### `bilibili://article/column-manager-fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / column manager fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:1161`

**参数说明**

- 无显式路径参数。

### `bilibili://article/editor`

- 类型：`web`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / editor”相关能力，当前静态标记类型为 网页。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:1016`

**参数说明**

- 无显式路径参数。

### `bilibili://article/hotspots/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / hotspots / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:683`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://article/manager/column`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / manager / column”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:748`

**参数说明**

- 无显式路径参数。

### `bilibili://article/readlist/{listId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / readlist / listId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:457`

**参数说明**

- `listId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://article/report`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / report”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://article/report/column-report-fragment`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:817`

**参数说明**

- 无显式路径参数。

### `bilibili://article/report/column-report-fragment`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / report / column report fragment”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://article/report`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:813`

**参数说明**

- 无显式路径参数。

### `bilibili://article/v2/{cvId}`

- 类型：`web`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / v2 / cvId 参数”相关能力，当前静态标记类型为 网页。
- 关联入口：`bilibili://article/{cvId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:1094`

**参数说明**

- `cvId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://article/{cvId}`

- 类型：`web`
- 说明：这是一个哔哩哔哩协议路由，归入“专栏 / cvId 参数”相关能力，当前静态标记类型为 网页。
- 关联入口：`bilibili://article/v2/{cvId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/cr.smali:1098`

**参数说明**

- `cvId`：该路由使用的路径参数，需结合业务上下文判定具体取值。
