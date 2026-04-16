# 前缀：article

前缀 `article` 下的全部路由，主要归入“专栏”相关页面或入口。

- 路由数：`13`

## `bilibili://article/{cvId}`

::: info 路由说明
- 类型：`web`
- 说明：bilibili 协议 路由，归入“专栏 / cvId 参数”，类型为 网页。
- 关联入口：`bilibili://article/v2/{cvId}`
:::

### 参数说明

- `cvId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://article/{cvId}" config-link="/config/bilibili-article-cvid" />

## `bilibili://article/category`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / 分区”，类型为 原生。
- 关联入口：`bilibili://article/category/{categoryId}`、`bilibili://category/65541`、`bilibili://category/65541/0`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/category" />

## `bilibili://article/category/{categoryId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / 分区 / categoryId 参数”，类型为 原生。
- 关联入口：`bilibili://article/category`、`bilibili://category/65541`、`bilibili://category/65541/0`
:::

### 参数说明

- `categoryId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://article/category/{categoryId}" config-link="/config/bilibili-article-category-categoryid" />

## `bilibili://article/column-author-space-fragment`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / column author space fragment”，类型为 原生。
- 关联入口：`bilibili://column/column-author-space`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/column-author-space-fragment" />

## `bilibili://article/column-manager-draft-fragment`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / column manager draft fragment”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/column-manager-draft-fragment" />

## `bilibili://article/column-manager-fragment`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / column manager fragment”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/column-manager-fragment" />

## `bilibili://article/editor`

::: info 路由说明
- 类型：`web`
- 说明：bilibili 协议 路由，归入“专栏 / editor”，类型为 网页。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/editor" />

## `bilibili://article/hotspots/{id}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / hotspots / id 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `id`：通用业务 ID，具体含义取决于所在路由。

### 快速操作

<RouteActions route="bilibili://article/hotspots/{id}" config-link="/config/bilibili-article-hotspots-id" />

## `bilibili://article/manager/column`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / manager / column”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/manager/column" />

## `bilibili://article/readlist/{listId}`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / readlist / listId 参数”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- `listId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://article/readlist/{listId}" config-link="/config/bilibili-article-readlist-listid" />

## `bilibili://article/report`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / report”，类型为 原生。
- 关联入口：`bilibili://article/report/column-report-fragment`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/report" />

## `bilibili://article/report/column-report-fragment`

::: info 路由说明
- 类型：`native`
- 说明：bilibili 协议 路由，归入“专栏 / report / column report fragment”，类型为 原生。
- 关联入口：`bilibili://article/report`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="bilibili://article/report/column-report-fragment" />

## `bilibili://article/v2/{cvId}`

::: info 路由说明
- 类型：`web`
- 说明：bilibili 协议 路由，归入“专栏 / v2 / cvId 参数”，类型为 网页。
- 关联入口：`bilibili://article/{cvId}`
:::

### 参数说明

- `cvId`：该路由使用的路径参数，需结合业务上下文判定具体取值。

### 快速操作

<RouteActions route="bilibili://article/v2/{cvId}" config-link="/config/bilibili-article-v2-cvid" />
