# 前缀：comment

本页收录前缀 `comment` 下的全部 bilibili 协议 路由，主要对应“评论”相关页面、容器或业务入口。

- 唯一路由数：`3`
- 路由类型统计：`{'native': 3}`

## 路由条目

### `bilibili://comment/detail/{type}/{oid}/{commentId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / 详情 / type 参数 / oid 参数 / commentId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://comment2/detail`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/zw.smali:842`

**参数说明**

- `type`：类型标识。
- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `commentId`：评论 ID。

### `bilibili://comment/half_web`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / half web”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/zw.smali:1244`

**参数说明**

- 无显式路径参数。

### `bilibili://comment/msg_fold/{type}/{oid}/{commentId}/{cardId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“评论 / msg fold / type 参数 / oid 参数 / commentId 参数 / cardId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/zw.smali:1048`

**参数说明**

- `type`：类型标识。
- `oid`：对象 ID，常用于评论、内容或业务对象定位。
- `commentId`：评论 ID。
- `cardId`：卡片 ID。
