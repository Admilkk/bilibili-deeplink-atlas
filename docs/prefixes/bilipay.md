# 前缀：bilipay

本页收录前缀 `bilipay` 下的全部 bilibili 协议 路由，主要对应“Bili 支付”相关页面、容器或业务入口。

- 唯一路由数：`5`
- 路由类型统计：`{'native': 5}`

## 路由条目

### `bilibili://bilipay/alipay_signing_result`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“Bili 支付 / alipay signing result”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ob.smali:227`

**参数说明**

- 无显式路径参数。

### `bilibili://bilipay/bcoin/recharge`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“Bili 支付 / bcoin / recharge”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bilipay/wallet`、`bilibili://bilipay/wallet`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ob.smali:445`

**参数说明**

- 无显式路径参数。

### `bilibili://bilipay/bcoin/record`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“Bili 支付 / bcoin / record”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ph.smali:246`

**参数说明**

- 无显式路径参数。

### `bilibili://bilipay/mine_wallet_adbanner_more`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“Bili 支付 / mine wallet adbanner more”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ph.smali:392`

**参数说明**

- 无显式路径参数。

### `bilibili://bilipay/wallet`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“Bili 支付 / wallet”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://bilipay/wallet`、`bilibili://bilipay/bcoin/recharge`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ob.smali:441`

**参数说明**

- 无显式路径参数。
