# 前缀：video

前缀 `video` 下的全部路由，主要归入“视频”相关页面或入口。

- 路由数：`4`

## `bilibili://video/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“视频 / id 参数”，类型为 原生。
- 关联入口：`bilibili://story/{id}`
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://video/{id}" config-link="/config/bilibili-video-id" />

## `bilibili://video/fullscreen/{aid}/{cid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“视频 / fullscreen / aid 参数 / cid 参数”，类型为 原生。
- 关联入口：`bilibili://video/fullscreen/{aid}/{cid}/**`
:::

### 参数说明

- `aid`：稿件 AV ID。
- `cid`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://video/fullscreen/{aid}/{cid}" config-link="/config/bilibili-video-fullscreen-aid-cid" />

## `bilibili://video/fullscreen/{aid}/{cid}/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“视频 / fullscreen / aid 参数 / cid 参数 / 后续子路径”，类型为 原生。
- 关联入口：`bilibili://video/fullscreen/{aid}/{cid}`
:::

### 参数说明

- `aid`：稿件 AV ID。
- `cid`：该路由使用的路径参数，需结合业务上下文判定具体取值。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://video/fullscreen/{aid}/{cid}/**" config-link="/config/bilibili-video-fullscreen-aid-cid" />

## `bilibili://video/player_web_dialog`

::: info 路由说明
- 类型：`web`
- 说明：bilibili 协议 路由，归入“视频 / player web dialog”，类型为 网页。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://video/player_web_dialog" />
