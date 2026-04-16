# 前缀：video

本页收录前缀 `video` 下的全部 bilibili 协议 路由，主要对应“视频”相关页面、容器或业务入口。

- 唯一路由数：`4`
- 路由类型统计：`{'native': 3, 'web': 1}`

## 路由条目

### `bilibili://video/fullscreen/{aid}/{cid}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“视频 / fullscreen / aid 参数 / cid 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://video/fullscreen/{aid}/{cid}/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:5124`

**参数说明**

- `aid`：稿件 AV ID。
- `cid`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### `bilibili://video/fullscreen/{aid}/{cid}/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“视频 / fullscreen / aid 参数 / cid 参数 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://video/fullscreen/{aid}/{cid}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:5128`

**参数说明**

- `aid`：稿件 AV ID。
- `cid`：该路由使用的路径参数，需结合业务上下文判定具体取值。
- `**`：表示该路由允许继续匹配后续子路径。

### `bilibili://video/player_web_dialog`

- 类型：`web`
- 说明：这是一个哔哩哔哩协议路由，归入“视频 / player web dialog”相关能力，当前静态标记类型为 网页。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/zg.smali:159`

**参数说明**

- 无显式路径参数。

### `bilibili://video/{id}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“视频 / id 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://story/{id}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/t3.smali:370`

**参数说明**

- `id`：通用业务 ID，具体含义取决于所在路由。
