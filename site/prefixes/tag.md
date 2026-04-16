# 前缀：tag

前缀 `tag` 下的全部路由，主要归入“标签”相关页面或入口。

- 路由数：`1`

## `bilibili://tag/{tagId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“标签 / tagId 参数”，类型为 原生。
- 关联入口：`bilibili://pegasus/channel/{tagId}`
:::

### 参数说明

- `tagId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://tag/{tagId}" config-link="/config/bilibili-tag-tagid" />
