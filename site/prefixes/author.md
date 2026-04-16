# 前缀：author

前缀 `author` 下的全部路由，主要归入“作者”相关页面或入口。

- 路由数：`2`

## `bilibili://author/{mid}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“作者 / mid 参数”，类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。

### 快速操作

<RouteActions route="bilibili://author/{mid}" config-link="/config/bilibili-author-mid" />

## `bilibili://author/{mid}/**`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“作者 / mid 参数 / 后续子路径”，类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://author/{mid}/**" config-link="/config/bilibili-author-mid" />
