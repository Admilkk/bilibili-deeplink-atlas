# 前缀：album

前缀 `album` 下的全部路由，主要归入“相册”相关页面或入口。

- 路由数：`1`

## `bilibili://album/{picid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“相册 / picid 参数”，类型为 原生。
- 关联入口：`activity://following/detail`、`activity://painting/detail`、`activity://pictureshow/detail`、`bilibili://following/detail/{dynamicId}`、`bilibili://pictureshow/detail/{picid}`
:::

### 参数说明

- `picid`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://album/{picid}" config-link="/config/bilibili-album-picid" />
