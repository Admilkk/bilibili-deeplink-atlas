# 前缀：activity-main

本页收录前缀 `activity-main` 下的全部 Activity 路由，主要对应“主站”相关页面、容器或业务入口。

- 唯一路由数：`20`
- 路由类型统计：`{'native': 18, 'web': 2}`

## 路由条目

### `activity://main/answer-dialog/transfer`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 答题弹窗 / 跳转”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:3509`

**参数说明**

- 无显式路径参数。

### `activity://main/authorspace`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 作者空间”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ef.smali:1539`

**参数说明**

- 无显式路径参数。

### `activity://main/authorspace/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 作者空间 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://main/authorspace`、`bilibili://author/{mid}`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ef.smali:1543`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `activity://main/download-list`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 下载列表”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://main/drawer/offline`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:2619`

**参数说明**

- 无显式路径参数。

### `activity://main/go-to-answer`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 跳转答题”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:1738`

**参数说明**

- 无显式路径参数。

### `activity://main/local-viewer`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 本地查看器”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ua.smali:125`

**参数说明**

- 无显式路径参数。

### `activity://main/localauthorspace`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 本地作者空间”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ef.smali:3944`

**参数说明**

- 无显式路径参数。

### `activity://main/login`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 登录”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login/**`、`activity://main/login-dialog`、`activity://main/login-dialog/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/j1.smali:635`

**参数说明**

- 无显式路径参数。

### `activity://main/login-dialog`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / login dialog”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login`、`activity://main/login/**`、`activity://main/login-dialog/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/j1.smali:643`

**参数说明**

- 无显式路径参数。

### `activity://main/login-dialog/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / login dialog / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login`、`activity://main/login/**`、`activity://main/login-dialog`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/j1.smali:647`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `activity://main/login/**`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 登录 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://login`、`bilibili://login/**`、`activity://main/login`、`activity://main/login-dialog`、`activity://main/login-dialog/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/j1.smali:639`

**参数说明**

- 无显式路径参数。
- `**`：表示该路由允许继续匹配后续子路径。

### `activity://main/preference`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 偏好设置”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/nr.smali:494`

**参数说明**

- 无显式路径参数。

### `activity://main/register/fast`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 注册 / 快速”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:1534`

**参数说明**

- 无显式路径参数。

### `activity://main/stardust-search`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 搜索”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://stardust-search`、`bilibili://stardust-search/**`、`bilibili://search`、`bilibili://search/{kw}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/is.smali:656`

**参数说明**

- 无显式路径参数。

### `activity://main/user_grow_dialog`

- 类型：`web`
- 说明：这是一个 Activity 路由，归入“主站 / 用户成长弹窗”相关能力，当前静态标记类型为 网页。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:3178`

**参数说明**

- 无显式路径参数。

### `activity://main/vip-buy`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / vip buy”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://user_center/vip/buy/{appId}`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/qs.smali:358`

**参数说明**

- 无显式路径参数。

### `activity://main/vip-main`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / vip main”相关能力，当前静态标记类型为 原生。
- 关联入口：`bilibili://vip/**`、`bilibili://user_center/vip`、`bilibili://vip`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/dj.smali:243`

**参数说明**

- 无显式路径参数。

### `activity://main/vip-web`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / vip web”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/vp.smali:133`

**参数说明**

- 无显式路径参数。

### `activity://main/web`

- 类型：`web`
- 说明：这是一个 Activity 路由，归入“主站 / 网页”相关能力，当前静态标记类型为 网页。
- 关联入口：`bilibili://browser`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:2756`

**参数说明**

- 无显式路径参数。
- `url`：已知的目标网页地址字段，详细说明见 `docs/browser-web.md`。

### `activity://main/web/ap`

- 类型：`native`
- 说明：这是一个 Activity 路由，归入“主站 / 网页 / AP 页面”相关能力，当前静态标记类型为 原生。
- 关联入口：无公开同组别名
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali:1599`

**参数说明**

- 无显式路径参数。
