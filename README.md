# bilibili-deeplink-atlas

从哔哩哔哩 Android 客户端路由表中静态提取出的 deeplink 索引。

## 快速入口

- [文档总览](./docs/index.md)
- [路由关系说明](./docs/route-relations.md)
- [`browser` 与通用 `web` 路由专题](./docs/browser-web.md)
- [前缀索引](./docs/prefix-index.md)

## 概览

- 唯一路由模式数：`1226`
- 提取出的路由行数：`1228`
- Scheme 分布：
  - `bilibili://`：`988`
  - `activity://`：`240`
- 路由类型分布：
  - `native`：`1165`
  - `web`：`24`
  - `unknown`：`39`

## 收录范围

- 当前纳入的路由 scheme：
  - `bilibili://`
  - `activity://`

## 文档结构

- [docs/index.md](./docs/index.md)：手册首页与阅读顺序
- [docs/prefix-index.md](./docs/prefix-index.md)：按前缀浏览全部路由
- `docs/prefixes/*.md`：每个前缀下的逐条路由说明、参数说明与关联入口
- [docs/route-relations.md](./docs/route-relations.md)：别名、前缀和类型关系
- [docs/browser-web.md](./docs/browser-web.md)：`browser/main/web` 专题

## 重点专题

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
