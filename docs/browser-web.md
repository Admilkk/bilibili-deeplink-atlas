# browser 与 web 路由

## 已确认的别名

通用 web 路由注册块中已确认存在以下别名：

- `activity://main/web`
- `bilibili://browser`

该路由最终目标是 `tv.danmaku.bili.ui.webview.MWebActivity`。

## 实际生效的 URL 字段

静态分析确认了两个关键点：

- `MWebActivity` 会先判断 `Intent.data` 是否以 `bilibili://browser` 开头，然后读取 `Intent.getStringExtra("url")`，再把 `Intent.data` 改写成这个真实 URL。
- `WebFragment` 优先读取 `Bundle["url"]`，读不到时才回退到 `Bundle["blrouter.pureurl"]`。

因此，稳定的目标 URL 字段是 `url`。

## 主题参数

`WebFragment.appendThemeQuery()` 会先移除已有的 `night` 与 `native.theme`，然后再根据当前主题状态重新追加。

这就是测试时经常看到多出主题参数的原因，即使这些参数并不是手动传入的。

## 重要限制

静态分析可以证明 `url` 是 web 容器使用的目标字段。
但仅靠静态分析，还不能证明任意外部 deeplink 字符串，例如 `bilibili://browser?url=...`，一定会被 BLRouter 正确转换成 `Intent` extras。

## 关键参考

- 路由注册块：`ln.smali`
- 目标元信息：`pn.smali`
- web Activity：`MWebActivity.smali`
- web Fragment：`WebFragment.smali`
