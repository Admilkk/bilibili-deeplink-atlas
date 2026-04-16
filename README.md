# bilibili-deeplink-atlas

一个部署到 GitHub Pages 的哔哩哔哩路由文档站。

## 在线文档

- 启用 GitHub Pages 后，站点地址为：
- `https://admilkk.github.io/bilibili-deeplink-atlas/`

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

- 首页：站点总览、主要统计和快速入口
- 前缀索引：按前缀浏览全部 `bilibili://` 与 `activity://` 路由
- 前缀详情页：逐条展示路由说明、参数说明和关联入口
- `browser` 专题页：集中说明网页容器相关路由
- 搜索：可直接按前缀、路由名和参数名检索
- 一键打开：在条目页直接尝试唤起对应 schema

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
