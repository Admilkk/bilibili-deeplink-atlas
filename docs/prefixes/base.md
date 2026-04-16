# 前缀：base

本页收录前缀 `base` 下的全部 bilibili 协议 路由，主要对应“base”相关页面、容器或业务入口。

- 唯一路由数：`3`
- 路由类型统计：`{'native': 3}`

## 路由条目

### `bilibili://base/app-upgrade`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“base / app upgrade”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://version/update`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ij.smali:228`

**参数说明**

- 无显式路径参数。

### `bilibili://base/emoji/manager`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“base / emoji / manager”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://base/emoji/manager/**`、`activity://emoticon/setting`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/wv.smali:471`

**参数说明**

- 无显式路径参数。

### `bilibili://base/emoji/manager/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“base / emoji / manager / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://base/emoji/manager`、`activity://emoticon/setting`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/wv.smali:475`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。
