# 前缀：activity_center

本页收录前缀 `activity_center` 下的全部 bilibili 协议 路由，主要对应“活动中心”相关页面、容器或业务入口。

- 唯一路由数：`2`
- 路由类型统计：`{'native': 2}`

## 路由条目

### `bilibili://activity_center`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“活动中心”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://activity_center/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/pt.smali:247`

**参数说明**

- 无显式路径参数。

### `bilibili://activity_center/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“活动中心 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://activity_center`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/pt.smali:251`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。
