# browser 与 web 专题

该专题聚焦 `bilibili://browser` 与 `activity://main/web` 这组网页容器入口。

## 核心结论

- `bilibili://browser` 与 `activity://main/web` 属于同一组网页入口。
- 已确认存在 `url` 这一目标网页地址字段。
- 文档站中的“一键打开”会直接以 schema 形式尝试唤起这类入口。

## 相关路由

### `bilibili://browser`

- 类型：`web`
- 说明：通用网页浏览器入口。
- 参数说明：
- `url`：目标网页地址。

<RouteActions route="bilibili://browser" />

### `activity://main/web`

- 类型：`web`
- 说明：主站网页容器入口。
- 参数说明：
- `url`：目标网页地址。

<RouteActions route="activity://main/web" />
