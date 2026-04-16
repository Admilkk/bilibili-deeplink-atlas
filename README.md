# bilibili-deeplink-atlas

从哔哩哔哩 Android 客户端路由表中静态提取出的 deeplink 索引。

## 文档导航

- [文档总览](./docs/index.md)
- [数据模型](./docs/data-model.md)
- [路由关系说明](./docs/route-relations.md)
- [`browser` 与通用 `web` 路由专题](./docs/browser-web.md)
- [前缀索引](./docs/prefix-index.md)

## 当前快照

- 唯一路由模式数：`1226`
- 提取出的路由行数：`1228`
- Scheme 分布：
  - `bilibili://`：`988`
  - `activity://`：`240`
- 路由类型分布：
  - `native`：`1165`
  - `web`：`24`
  - `unknown`：`39`

## 范围

- 当前纳入的路由 scheme：
  - `bilibili://`
  - `activity://`

## 文件说明

- `data/routes.json`：完整路由列表，含别名组和源码位置
- `data/routes.csv`：便于筛选和表格查看的导出
- `data/summary.json`：聚合统计结果
- `docs/index.md`：文档入口与阅读顺序
- `docs/data-model.md`：字段定义与数据文件关系
- `docs/route-relations.md`：路由别名、前缀和类型之间的关系说明
- `docs/prefix-index.md`：按前缀拆分后的总索引
- `docs/prefixes/*.md`：每个前缀下的逐条路由说明文档
- `docs/browser-web.md`：`bilibili://browser` 与通用 web 路由专题

## 重点说明

- `bilibili://browser` 与 `activity://main/web` 映射到同一条 `web` 路由。
- `MWebActivity` 与 `WebFragment` 实际消费的目标 URL 字段是 `url`。
- `WebFragment` 在加载网页前会自动补 `night` 和 `native.theme`。

## 路由量最高的前缀

- `uper`：`171`
- `mall`：`100`
- `game_center`：`86`
- `main`：`84`
- `following`：`79`
- `smallapp`：`53`
- `im`：`51`
- `pgc`：`47`
- `live`：`42`
- `user_center`：`31`
