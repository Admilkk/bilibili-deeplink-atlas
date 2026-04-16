# 前缀：activity-bangumi

前缀 `activity-bangumi` 下的全部路由，主要归入“番剧”相关页面或入口。

- 路由数：`11`

## `activity://bangumi/category-index`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / category index”，类型为 原生。
- 关联入口：`bilibili://pgc/module/variety-index`、`bilibili://pgc/page/media-index`、`bilibili://pgc/index`、`bilibili://pgc/bangumi/index`、`bilibili://pgc/common/index`、`bilibili://pgc/module/movie-index`、`bilibili://pgc/module/doc-index`、`bilibili://pgc/module/tv-index`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/category-index" />

## `activity://bangumi/newtimeline`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / newtimeline”，类型为 原生。
- 关联入口：`bilibili://pgc/timeline/{timeline_type}`、`bilibili://pgc/timeline`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/newtimeline" />

## `activity://bangumi/reserve-list`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / reserve list”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/reserve-list" />

## `activity://bangumi/review/review-share`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / review / review share”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/review/review-share" />

## `activity://bangumi/review/short-review-publish`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / review / short review publish”，类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/review/short-review-publish" />

## `activity://bangumi/review/web`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / review / 网页”，类型为 原生。
- 关联入口：`activity://bangumi/review/web/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/review/web" />

## `activity://bangumi/review/web/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / review / 网页 / 后续子路径”，类型为 原生。
- 关联入口：`activity://bangumi/review/web`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://bangumi/review/web/**" />

## `activity://bangumi/sponsor-rank`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / sponsor rank”，类型为 原生。
- 关联入口：`activity://bangumi/sponsor-rank/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/sponsor-rank" />

## `activity://bangumi/sponsor-rank/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / sponsor rank / 后续子路径”，类型为 原生。
- 关联入口：`activity://bangumi/sponsor-rank`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://bangumi/sponsor-rank/**" />

## `activity://bangumi/sponsor-result`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / sponsor result”，类型为 原生。
- 关联入口：`activity://bangumi/sponsor-result/**`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://bangumi/sponsor-result" />

## `activity://bangumi/sponsor-result/**`

::: info 路由说明
- 类型：`native`
- 说明：Activity 路由，归入“番剧 / sponsor result / 后续子路径”，类型为 原生。
- 关联入口：`activity://bangumi/sponsor-result`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://bangumi/sponsor-result/**" />
