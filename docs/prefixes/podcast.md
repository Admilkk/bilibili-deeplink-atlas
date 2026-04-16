# 前缀：podcast

本页收录前缀 `podcast` 下的全部 bilibili 协议 路由，主要对应“播客”相关页面、容器或业务入口。

- 唯一路由数：`7`
- 路由类型统计：`{'native': 7}`

## 路由条目

### `bilibili://podcast`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://podcast/**`、`bilibili://music/home`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:695`

**参数说明**

- 无显式路径参数。

### `bilibili://podcast/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/home`、`bilibili://podcast`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:687`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://podcast/card/transfer`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / card / 跳转”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:557`

**参数说明**

- 无显式路径参数。

### `bilibili://podcast/favorite/create`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / 收藏 / create”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:423`

**参数说明**

- 无显式路径参数。

### `bilibili://podcast/find/all/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / find / all / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:622`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。

### `bilibili://podcast/legacy`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / legacy”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://music/detail/{songId}`、`bilibili://music/menu/detail/{menuId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:963`

**参数说明**

- 无显式路径参数。

### `bilibili://podcast/playlist`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“播客 / playlist”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vh0.smali:760`

**参数说明**

- 无显式路径参数。
