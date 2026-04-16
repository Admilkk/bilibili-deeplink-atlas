# 前缀：author

本页收录前缀 `author` 下的全部 bilibili 协议 路由，主要对应“作者”相关页面、容器或业务入口。

- 唯一路由数：`2`
- 路由类型统计：`{'native': 2}`

## 路由条目

### `bilibili://author/{mid}`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“作者 / mid 参数”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}/**`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ef.smali:1547`

**参数说明**

- `mid`：会员 ID 或用户 ID。

### `bilibili://author/{mid}/**`

- 类型：`native`
- 说明：这是一个哔哩哔哩协议路由，归入“作者 / mid 参数 / 后续子路径”相关能力，当前静态标记类型为 原生。
- 关联入口：`activity://main/authorspace`、`activity://main/authorspace/**`、`bilibili://author/{mid}`、`bilibili://space/{mid}`、`bilibili://space/{mid}/**`
- 来源：`apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ef.smali:1551`

**参数说明**

- `mid`：会员 ID 或用户 ID。
- `**`：表示该路由允许继续匹配后续子路径。
