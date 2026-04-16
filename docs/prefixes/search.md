# 前缀：search

本页收录前缀 `search` 下的全部 bilibili 协议 路由，主要对应“搜索”相关页面、容器或业务入口。

- 唯一路由数：`9`
- 路由类型统计：`{'native': 9}`

## 路由条目

### `bilibili://search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://stardust-search/**`、`bilibili://search/{kw}`、`activity://main/stardust-search`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:648`

**参数说明**

- 无显式路径参数。

### `bilibili://search/bangumi-episodes/grid/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / bangumi episodes / grid / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:938`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://search/bangumi-episodes/horizontal/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / bangumi episodes / horizontal / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:1003`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://search/comic-episodes`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / comic episodes”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/comic-episodes/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:567`

**参数说明**

- 无显式路径参数。

### `bilibili://search/comic-episodes/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / comic episodes / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/comic-episodes`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:571`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://search/ogv/aggregate`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / ogv / aggregate”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/ogv/aggregate/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:1133`

**参数说明**

- 无显式路径参数。

### `bilibili://search/ogv/aggregate/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / ogv / aggregate / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://search/ogv/aggregate`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:1137`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://search/ogv/{tab_name}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / ogv / tab_name 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:491`

**参数说明**

- `tab_name`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://search/{kw}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“搜索 / kw 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://stardust-search/**`、`bilibili://search`、`activity://main/stardust-search`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:652`

**参数说明**

- `kw`：该路由使用的路径参数，需结合业务上下文判定具体取值。
