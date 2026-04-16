# 前缀：space

前缀 `space` 下的全部路由，主要归入“空间”相关页面或入口。

- 路由数：`30`

## `bilibili://space/{mid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / mid 参数”，类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}/**`
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。

### 快速操作

<RouteActions route="bilibili://space/{mid}" config-link="/config/bilibili-space-mid" />

## `bilibili://space/{mid}/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / mid 参数 / 后续子路径”，类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://space/{mid}/**" config-link="/config/bilibili-space-mid" />

## `bilibili://space/digital/appendage/detail/{nftId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / 数字藏品 / appendage / 详情 / nftId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `nftId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://space/digital/appendage/detail/{nftId}" config-link="/config/bilibili-space-digital-appendage-detail-nftid" />

## `bilibili://space/digital/overview/{url}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / 数字藏品 / overview / url 参数”，类型为 原生。
- 关联入口：`bilibili://space/nft/overview`
:::

### 参数说明

- `url`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://space/digital/overview/{url}" config-link="/config/bilibili-space-digital-overview-url" />

## `bilibili://space/fans_wall_drop_down`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / fans wall drop down”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/fans_wall_drop_down" />

## `bilibili://space/game-list`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / game list”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/game-list" />

## `bilibili://space/garbDetail/{userId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / garbDetail / userId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `userId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://space/garbDetail/{userId}" config-link="/config/bilibili-space-garbdetail-userid" />

## `bilibili://space/garbList/{userId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / garbList / userId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `userId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://space/garbList/{userId}" config-link="/config/bilibili-space-garblist-userid" />

## `bilibili://space/headimage-list`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / headimage list”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/headimage-list" />

## `bilibili://space/module/bangumi`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / module / 番剧”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/module/bangumi" />

## `bilibili://space/module/cheese`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / module / cheese”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/module/cheese" />

## `bilibili://space/module/cheese_v2`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / module / cheese v2”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/module/cheese_v2" />

## `bilibili://space/module/contribute`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / module / contribute”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/module/contribute" />

## `bilibili://space/module/favorite`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / module / 收藏”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/module/favorite" />

## `bilibili://space/module/main`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / module / 主站”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/module/main" />

## `bilibili://space/nft/list/fragment`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / nft / 列表 / fragment”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/nft/list/fragment" />

## `bilibili://space/nft/overview`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / nft / overview”，类型为 原生。
- 关联入口：`bilibili://space/digital/overview/{url}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/nft/overview" />

## `bilibili://space/nft/overview/big`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / nft / overview / big”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/nft/overview/big" />

## `bilibili://space/opus`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / 图文”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/opus" />

## `bilibili://space/privacy-setting`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / privacy setting”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/privacy-setting" />

## `bilibili://space/realname/{userId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / realname / userId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `userId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://space/realname/{userId}" config-link="/config/bilibili-space-realname-userid" />

## `bilibili://space/recent-pay-coin-list`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / recent pay coin list”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/recent-pay-coin-list" />

## `bilibili://space/recommend-list`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / recommend list”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/recommend-list" />

## `bilibili://space/search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / 搜索”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/search" />

## `bilibili://space/search/av`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / 搜索 / av”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/search/av" />

## `bilibili://space/search/dynamic`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / 搜索 / dynamic”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/search/dynamic" />

## `bilibili://space/season/season_series/{mid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / season / season series / mid 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。

### 快速操作

<RouteActions route="bilibili://space/season/season_series/{mid}" config-link="/config/bilibili-space-season-season_series-mid" />

## `bilibili://space/season/series/{mid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / season / series / mid 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。

### 快速操作

<RouteActions route="bilibili://space/season/series/{mid}" config-link="/config/bilibili-space-season-series-mid" />

## `bilibili://space/user-report`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / user report”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/user-report" />

## `bilibili://space/web_activity_tab`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“空间 / web activity tab”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://space/web_activity_tab" />
