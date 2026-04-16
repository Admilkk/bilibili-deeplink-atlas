# 前缀：tag

本页收录前缀 `tag` 下的全部 bilibili 协议 路由，主要对应“标签”相关页面、容器或业务入口。

- 唯一路由数：`1`
- 路由类型统计：`{'native': 1}`

## 路由条目

### `bilibili://tag/{tagId}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“标签 / tagId 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://pegasus/channel/{tagId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/gj0.smali:1333`

**参数说明**

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。
