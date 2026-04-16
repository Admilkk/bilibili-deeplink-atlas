# 前缀：pegasus

前缀 `pegasus` 下的全部路由，主要归入“推荐流”相关页面或入口。

- 路由数：`23`

## `bilibili://pegasus/channel/{tagId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / tagId 参数”，类型为 原生。
- 关联入口：`bilibili://tag/{tagId}`
:::

### 参数说明

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/{tagId}" config-link="/config/bilibili-pegasus-channel-tagid" />

## `bilibili://pegasus/channel/detail/all/{tagId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 详情 / all / tagId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/detail/all/{tagId}" config-link="/config/bilibili-pegasus-channel-detail-all-tagid" />

## `bilibili://pegasus/channel/detail/baike/{channel_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 详情 / baike / channel_id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `channel_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/detail/baike/{channel_id}" config-link="/config/bilibili-pegasus-channel-detail-baike-channel_id" />

## `bilibili://pegasus/channel/detail/op/{tab_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 详情 / op / tab_id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tab_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/detail/op/{tab_id}" config-link="/config/bilibili-pegasus-channel-detail-op-tab_id" />

## `bilibili://pegasus/channel/detail/select/{tagId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 详情 / select / tagId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/detail/select/{tagId}" config-link="/config/bilibili-pegasus-channel-detail-select-tagid" />

## `bilibili://pegasus/channel/detail/topic`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 详情 / 话题”，类型为 原生。
- 关联入口：`bilibili://following/topic_detail`、`bilibili://following/channel/detail/topic`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/detail/topic" />

## `bilibili://pegasus/channel/discover`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / discover”，类型为 原生。
- 关联入口：`bilibili://pegasus/channel/find`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/discover" />

## `bilibili://pegasus/channel/feed/{tagId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 信息流 / tagId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/feed/{tagId}" config-link="/config/bilibili-pegasus-channel-feed-tagid" />

## `bilibili://pegasus/channel/find`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / find”，类型为 原生。
- 关联入口：`bilibili://pegasus/channel/discover`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/find" />

## `bilibili://pegasus/channel/op/{tab_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / op / tab_id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tab_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/op/{tab_id}" config-link="/config/bilibili-pegasus-channel-op-tab_id" />

## `bilibili://pegasus/channel/search`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / 搜索”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/search" />

## `bilibili://pegasus/channel/v2/{tagId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 频道 / v2 / tagId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/channel/v2/{tagId}" config-link="/config/bilibili-pegasus-channel-v2-tagid" />

## `bilibili://pegasus/fake-detail`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / fake detail”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/fake-detail" />

## `bilibili://pegasus/fake-pegasus`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / fake pegasus”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/fake-pegasus" />

## `bilibili://pegasus/hotpage`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / hotpage”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/hotpage" />

## `bilibili://pegasus/hottopic`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / hottopic”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/hottopic" />

## `bilibili://pegasus/promo`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / promo”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/promo" />

## `bilibili://pegasus/setting/keyword-blocker`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 设置 / keyword blocker”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/setting/keyword-blocker" />

## `bilibili://pegasus/setting/recommend`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 设置 / recommend”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/setting/recommend" />

## `bilibili://pegasus/setting/recommend-label`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 设置 / recommend label”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/setting/recommend-label" />

## `bilibili://pegasus/setting/recommend-label-edit`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 设置 / recommend label edit”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/setting/recommend-label-edit" />

## `bilibili://pegasus/setting/recommend/column`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / 设置 / recommend / column”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://pegasus/setting/recommend/column" />

## `bilibili://pegasus/vertical/{channel_id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“推荐流 / vertical / channel_id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `channel_id`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://pegasus/vertical/{channel_id}" config-link="/config/bilibili-pegasus-vertical-channel_id" />
