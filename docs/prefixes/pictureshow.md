# 前缀：pictureshow

本页收录前缀 `pictureshow` 下的全部 bilibili 协议 路由，主要对应“pictureshow”相关页面、容器或业务入口。

- 唯一路由数：`1`
- 路由类型统计：`{'native': 1}`

## 路由条目

### `bilibili://pictureshow/detail/{picid}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“pictureshow / 详情 / picid 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/detail`、`activity://painting/detail`、`activity://pictureshow/detail`、`bilibili://following/detail/{dynamicId}`、`bilibili://album/{picid}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/p00.smali:604`

**参数说明**

- `picid`：该路由使用的路径参数，需结合业务上下文判定具体取值。
