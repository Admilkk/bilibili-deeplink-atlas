# 前缀：history

本页收录前缀 `history` 下的全部 bilibili 协议 路由，主要对应“历史记录”相关页面、容器或业务入口。

- 唯一路由数：`4`
- 路由类型统计：`{'native': 4}`

## 路由条目

### `bilibili://history`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://main/drawer/history`、`bilibili://user_center/history`、`bilibili://history/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dd.smali:235`

**参数说明**

- 无显式路径参数。

### `bilibili://history/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://main/drawer/history`、`bilibili://user_center/history`、`bilibili://history`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dd.smali:239`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://history/search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录 / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dd.smali:315`

**参数说明**

- 无显式路径参数。

### `bilibili://history/search/suggestion`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“历史记录 / 搜索 / suggestion”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dd.smali:384`

**参数说明**

- 无显式路径参数。
