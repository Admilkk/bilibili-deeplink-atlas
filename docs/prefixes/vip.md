# 前缀：vip

本页收录前缀 `vip` 下的全部 bilibili 协议 路由，主要对应“大会员”相关页面、容器或业务入口。

- 唯一路由数：`4`
- 路由类型统计：`{'native': 4}`

## 路由条目

### `bilibili://vip`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“大会员”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://vip/**`、`bilibili://user_center/vip`、`activity://main/vip-main`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dj.smali:247`

**参数说明**

- 无显式路径参数。

### `bilibili://vip/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“大会员 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://user_center/vip`、`activity://main/vip-main`、`bilibili://vip`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dj.smali:235`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://vip/cashier`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“大会员 / cashier”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/qs.smali:281`

**参数说明**

- 无显式路径参数。

### `bilibili://vip/choose-coupon`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“大会员 / choose coupon”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dj.smali:159`

**参数说明**

- 无显式路径参数。
