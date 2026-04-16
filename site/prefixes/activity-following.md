# 前缀：activity-following

本页收录前缀 `activity-following` 下的全部 Activity 路由，主要对应“关注”相关页面、容器或业务入口。

> 共 10 条路由。点击条目中的“一键打开”即可尝试在当前设备上唤起哔哩哔哩。

## `activity://following/detail`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / 详情”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://painting/detail`、`activity://pictureshow/detail`、`bilibili://following/detail/{dynamicId}`、`bilibili://album/{picid}`、`bilibili://pictureshow/detail/{picid}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/detail" />

## `activity://following/following_topic_list`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / following topic list”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/following_topic_list/**`、`bilibili://following/my_topic_list`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/following_topic_list" />

## `activity://following/following_topic_list/**`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / following topic list / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/my_topic_list`、`activity://following/following_topic_list`
:::

### 参数说明

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### 快速操作

<RouteActions route="activity://following/following_topic_list/**" />

## `activity://following/light_browser_v2`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / light browser v2”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/lightbrowser/{dyn_id}`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/light_browser_v2" />

## `activity://following/notool/web`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / notool / 网页”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/web`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/notool/web" />

## `activity://following/select_location`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / select location”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/select_location" />

## `activity://following/tagsearch`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / tagsearch”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/tagsearch" />

## `activity://following/topic_search`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / topic search”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/topic_search" />

## `activity://following/vertical_search`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / vertical search”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://following/dynamic_search`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/vertical_search" />

## `activity://following/web`

::: info 路由说明
- 类型：`native`
- 说明：这是一个 Activity 路由，归入“关注 / 网页”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://following/notool/web`
:::

### 参数说明

- 无显式路径参数。

### 快速操作

<RouteActions route="activity://following/web" />
