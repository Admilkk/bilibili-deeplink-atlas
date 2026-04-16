# 前缀：telecom

本页收录前缀 `telecom` 下的全部 bilibili 协议 路由，主要对应“电信”相关页面、容器或业务入口。

- 唯一路由数：`2`
- 路由类型统计：`{'native': 2}`

## 路由条目

### `bilibili://telecom`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“电信”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://telecom/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:4240`

**参数说明**

- 无显式路径参数。

### `bilibili://telecom/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“电信 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://telecom`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:4244`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。
