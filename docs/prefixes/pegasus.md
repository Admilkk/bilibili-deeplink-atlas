# 前缀：pegasus

本页收录前缀 `pegasus` 下的全部 bilibili 协议 路由，主要对应“推荐流”相关页面、容器或业务入口。

- 唯一路由数：`23`
- 路由类型统计：`{'native': 23}`

## 路由条目

### `bilibili://pegasus/channel/detail/all/{tagId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 详情 / all / tagId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1741`

**参数说明**

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/detail/baike/{channel_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 详情 / baike / channel_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1807`

**参数说明**

- `channel_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/detail/op/{tab_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 详情 / op / tab_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1873`

**参数说明**

- `tab_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/detail/select/{tagId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 详情 / select / tagId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1939`

**参数说明**

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/detail/topic`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 详情 / 话题”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/topic_detail`、`bilibili://following/channel/detail/topic`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:2862`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/channel/discover`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / discover”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pegasus/channel/find`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1598`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/channel/feed/{tagId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 信息流 / tagId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1403`

**参数说明**

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/find`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / find”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pegasus/channel/discover`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1602`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/channel/op/{tab_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / op / tab_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1468`

**参数说明**

- `tab_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/search`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1533`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/channel/v2/{tagId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / v2 / tagId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1675`

**参数说明**

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/channel/{tagId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 频道 / tagId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://tag/{tagId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1337`

**参数说明**

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://pegasus/fake-detail`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / fake detail”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2402`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/fake-pegasus`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / fake pegasus”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2336`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/hotpage`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / hotpage”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2468`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/hottopic`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / hottopic”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2534`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/promo`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / promo”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ft.smali:125`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/setting/keyword-blocker`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 设置 / keyword blocker”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2600`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/setting/recommend`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 设置 / recommend”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2746`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/setting/recommend-label`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 设置 / recommend label”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2891`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/setting/recommend-label-edit`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 设置 / recommend label edit”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2825`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/setting/recommend/column`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / 设置 / recommend / column”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2667`

**参数说明**

- 无显式路径参数。

### `bilibili://pegasus/vertical/{channel_id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“推荐流 / vertical / channel_id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:2957`

**参数说明**

- `channel_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。
