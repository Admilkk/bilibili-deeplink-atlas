# 前缀：author

本页收录前缀 `author` 下的全部 bilibili 协议 路由，主要对应“作者”相关页面、容器或业务入口。

> 共 2 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `bilibili://author/{mid}`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“作者 / mid 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。

### 快速操作

<RouteActions route="bilibili://author/{mid}" />

## `bilibili://author/{mid}/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“作者 / mid 参数 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
:::

### 参数说明

- `mid`：会员 ID 或用户 ID。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="bilibili://author/{mid}/**" />
