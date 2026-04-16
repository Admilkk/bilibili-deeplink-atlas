# 前缀：music

前缀 `music` 下的全部路由，主要归入“音乐”相关页面或入口。

- 路由数：`19`

## `bilibili://music/contribution/err`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / contribution / err”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/contribution/err" />

## `bilibili://music/contributions`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / contributions”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/contributions" />

## `bilibili://music/detail/{songId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / 详情 / songId 参数”，类型为 原生。
- 关联入口：`bilibili://podcast/legacy`、`bilibili://music/menu/detail/{menuId}`
:::

### 参数说明

- `songId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://music/detail/{songId}" config-link="/config/bilibili-music-detail-songid" />

## `bilibili://music/favorite/menu`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / 收藏 / menu”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/favorite/menu" />

## `bilibili://music/home`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / 首页”，类型为 原生。
- 关联入口：`bilibili://podcast/**`、`bilibili://podcast`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/home" />

## `bilibili://music/menu/detail/{menuId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / menu / 详情 / menuId 参数”，类型为 原生。
- 关联入口：`bilibili://podcast/legacy`、`bilibili://music/detail/{songId}`
:::

### 参数说明

- `menuId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://music/menu/detail/{menuId}" config-link="/config/bilibili-music-menu-detail-menuid" />

## `bilibili://music/menu/edit`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / menu / edit”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/menu/edit" />

## `bilibili://music/playlist/detail`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / 详情”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/playlist/detail" />

## `bilibili://music/playlist/manage`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / manage”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/playlist/manage" />

## `bilibili://music/playlist/manage_v2`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / manage v2”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/playlist/manage_v2" />

## `bilibili://music/playlist/playpage/{playlistId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / playpage / playlistId 参数”，类型为 原生。
- 关联入口：`bilibili://music/playlist/spacepage/{spaceMid}`
:::

### 参数说明

- `playlistId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://music/playlist/playpage/{playlistId}" config-link="/config/bilibili-music-playlist-playpage-playlistid" />

## `bilibili://music/playlist/search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / 搜索”，类型为 原生。
- 关联入口：`bilibili://music/playlist/search/{media_id}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/playlist/search" />

## `bilibili://music/playlist/search/{media_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / 搜索 / media_id 参数”，类型为 原生。
- 关联入口：`bilibili://music/playlist/search`
:::

### 参数说明

- `media_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://music/playlist/search/{media_id}" config-link="/config/bilibili-music-playlist-search-media_id" />

## `bilibili://music/playlist/search2`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / search2”，类型为 原生。
- 关联入口：`bilibili://music/playlist/search2/{media_id}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/playlist/search2" />

## `bilibili://music/playlist/search2/{media_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / search2 / media_id 参数”，类型为 原生。
- 关联入口：`bilibili://music/playlist/search2`
:::

### 参数说明

- `media_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://music/playlist/search2/{media_id}" config-link="/config/bilibili-music-playlist-search2-media_id" />

## `bilibili://music/playlist/spacepage/{spaceMid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / playlist / spacepage / spaceMid 参数”，类型为 原生。
- 关联入口：`bilibili://music/playlist/playpage/{playlistId}`
:::

### 参数说明

- `spaceMid`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://music/playlist/spacepage/{spaceMid}" config-link="/config/bilibili-music-playlist-spacepage-spacemid" />

## `bilibili://music/search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / 搜索”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/search" />

## `bilibili://music/search2`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / search2”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/search2" />

## `bilibili://music/space/page`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“音乐 / 空间 / page”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://music/space/page" />
