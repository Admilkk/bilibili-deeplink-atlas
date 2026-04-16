# browser and web routing

## Confirmed aliases

The generic web route is registered with these aliases in [ln.smali](/D:/Works/bili-short-url-maker/apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali):

- `activity://main/web`
- `bilibili://browser`
- `(http|https)://*`
- `(http|https)://*/**`

The route target is `tv.danmaku.bili.ui.webview.MWebActivity`.

## Effective URL field

Static analysis shows two places that matter:

- `MWebActivity` checks whether `Intent.data` starts with `bilibili://browser`, then reads `Intent.getStringExtra("url")` and rewrites `Intent.data` to that parsed URI.
- `WebFragment` reads `Bundle["url"]` first, then falls back to `Bundle["blrouter.pureurl"]`.

That means the stable target URL field is `url`.

## Theme parameters

`WebFragment.appendThemeQuery()` removes any existing `night` and `native.theme` query parameters, then appends current values again before load.

This explains why tests may show extra query parameters even if they were not supplied manually.

## Important limitation

Static analysis confirms that `url` is the target field used by the web container.
It does not, by itself, prove that an arbitrary external deeplink string such as `bilibili://browser?url=...` will always be transformed into the expected `Intent` extras by BLRouter.

## Key references

- [ln.smali](/D:/Works/bili-short-url-maker/apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/ln.smali)
- [pn.smali](/D:/Works/bili-short-url-maker/apktool_out/smali_classes14/com/bilibili/lib/brouter/internal/routes/codegen/pn.smali)
- [MWebActivity.smali](/D:/Works/bili-short-url-maker/apktool_out/smali_classes30/tv/danmaku/bili/ui/webview/MWebActivity.smali)
- [WebFragment.smali](/D:/Works/bili-short-url-maker/apktool_out/smali_classes14/com/bilibili/lib/biliweb/WebFragment.smali)
