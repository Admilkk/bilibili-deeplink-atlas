import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dataPath = path.join(root, "data", "routes.json");
const outDir = path.join(root, "site");
const prefixesDir = path.join(outDir, "prefixes");
const configDir = path.join(outDir, "config");

const rows = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const termMap = {
  main: "主站",
  web: "网页",
  browser: "浏览器",
  ap: "AP 页面",
  login: "登录",
  dialog: "弹窗",
  dialogue: "对话",
  register: "注册",
  fast: "快速",
  favorite: "收藏",
  favorites: "收藏夹",
  history: "历史记录",
  offline: "离线缓存",
  download: "下载",
  "download-list": "下载列表",
  search: "搜索",
  "stardust-search": "搜索",
  space: "空间",
  user_center: "用户中心",
  personinfo: "个人信息",
  setting: "设置",
  settings: "设置",
  comment: "评论",
  comment2: "评论",
  comment3: "评论",
  detail: "详情",
  list: "列表",
  filter: "筛选",
  mall: "会员购",
  mall_videodetail: "会员购视频详情",
  live: "直播",
  livearea: "直播分区",
  following: "关注",
  following2: "关注",
  topic: "话题",
  topic_center: "话题中心",
  bangumi: "番剧",
  pgc: "PGC",
  article: "专栏",
  opus: "图文",
  music: "音乐",
  podcast: "播客",
  video: "视频",
  share: "分享",
  vip: "大会员",
  buy: "购买",
  charge: "充电",
  rank: "排行榜",
  auth: "认证",
  campus: "校园",
  game_center: "游戏中心",
  smallapp: "小程序",
  im: "消息",
  link: "链接",
  accounts: "账号",
  ad: "广告",
  category: "分区",
  channel: "频道",
  splash: "开屏",
  qrcode: "二维码",
  qrscan: "扫码",
  preference: "偏好设置",
  pegasus: "推荐流",
  home: "首页",
  story: "故事模式",
  story_translucent: "故事模式浮层",
  feed: "信息流",
  feedback: "反馈",
  cliparea: "裁剪区域",
  image_viewer: "图片查看器",
  "image-gallery-picker": "图片库选择器",
  "image-picker": "图片选择器",
  bplus: "动态",
  side_center: "侧边栏",
  pager: "分页容器",
  "search-result": "搜索结果",
  digital: "数字藏品",
  debugger: "调试器",
  debugenv: "调试环境",
  diagnose: "诊断",
  telecom: "电信",
  unicom: "联通",
  pay: "支付",
  bilipay: "Bili 支付",
  version: "版本",
  permission: "权限",
  parent_control: "家长控制",
  teenagers_mode: "青少年模式",
  comic: "漫画",
  album: "相册",
  tag: "标签",
  author: "作者",
  authorspace: "作者空间",
  localauthorspace: "本地作者空间",
  "local-viewer": "本地查看器",
  uper: "UP 主成长",
  upper: "UP 主",
  activity_center: "活动中心",
  "answer-dialog": "答题弹窗",
  transfer: "跳转",
  "go-to-answer": "跳转答题",
  user_grow_dialog: "用户成长弹窗",
  oversea: "海外",
  projection: "投屏",
  thirdapp: "第三方应用",
  "bili-room": "B 站房间",
  live_lynx: "直播 Lynx 页面"
};

const paramMap = {
  id: "通用业务 ID，具体含义取决于所在路由。",
  uid: "用户 ID。",
  mid: "会员 ID 或用户 ID。",
  oid: "对象 ID，常用于评论、内容或业务对象定位。",
  sid: "序列或会话 ID。",
  aid: "稿件 AV ID。",
  bvid: "稿件 BV ID。",
  epid: "剧集 EP ID。",
  seasonId: "合集、剧集或季对象 ID。",
  season_id: "合集、剧集或季对象 ID。",
  tid: "分区 ID。",
  rid: "房间或业务资源 ID。",
  roomid: "直播间 ID。",
  dynamicId: "动态 ID。",
  cardId: "卡片 ID。",
  commentId: "评论 ID。",
  type: "类型标识。",
  sub_type: "子类型标识。",
  page: "页面标识。",
  page_type: "页面类型。",
  setting_type: "设置项类型。",
  shop_type: "店铺类型。",
  shop_id: "店铺 ID。",
  assistId: "助手对象 ID。",
  assistantType: "助手类型。",
  name: "名称字段。"
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function cleanGeneratedContent(dir) {
  ensureDir(dir);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".vitepress" || entry.name === "public") continue;
    fs.rmSync(path.join(dir, entry.name), { recursive: true, force: true });
  }
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${content.trim()}\n`, "utf8");
}

function slugify(value) {
  return value.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "root";
}

function splitRoute(route) {
  return route.split("://", 2);
}

function prefixOf(route) {
  const [scheme, rest] = splitRoute(route);
  const head = rest.split("/", 1)[0] || "root";
  return scheme === "bilibili" ? head : `activity-${head}`;
}

function extractParams(route) {
  return Array.from(route.matchAll(/\{([^}]+)\}/g)).map((match) => match[1]);
}

function humanize(segment) {
  return termMap[segment] || segment.replace(/[-_]/g, " ");
}

function routeDescription(route, routeType) {
  const [scheme, rest] = splitRoute(route);
  const segments = rest.split("/").filter(Boolean).map((segment) => {
    if (segment === "**") return "后续子路径";
    if (segment.startsWith("{") && segment.endsWith("}")) return `${segment.slice(1, -1)} 参数`;
    return humanize(segment);
  });
  const core = segments.length ? segments.join(" / ") : "根路径";
  const typeText = { native: "原生", web: "网页", unknown: "未标注" }[routeType] || routeType;
  return `${scheme === "bilibili" ? "bilibili 协议" : "Activity"} 路由，归入“${core}”，类型为 ${typeText}。`;
}

function parameterLines(route) {
  const params = extractParams(route);
  const lines = [];
  if (params.length) {
    for (const param of params) {
      lines.push(`- \`${param}\`：${paramMap[param] || "该路由使用的路径参数，需结合业务上下文判定具体取值。"}`);
    }
  } else {
    lines.push("- 无显式路径参数。");
  }
  if (route.includes("/**")) {
    lines.push("- `**`：表示该路由允许继续匹配后续子路径。");
  }
  if (route === "bilibili://browser" || route === "activity://main/web") {
    lines.push("- `url`：已知的目标网页地址字段，详细说明见 `browser-web` 专题页。");
  }
  return lines;
}

function relatedEntries(row) {
  return (row.aliases || []).filter((entry) => entry !== row.route && (entry.startsWith("bilibili://") || entry.startsWith("activity://")));
}

function sortRows(groupRows) {
  const sorted = [...groupRows].sort((a, b) => a.route.localeCompare(b.route));
  const uniq = [];
  const seen = new Set();
  for (const row of sorted) {
    if (seen.has(row.route)) continue;
    seen.add(row.route);
    uniq.push(row);
  }
  return uniq;
}

function routeCard(row) {
  const aliases = relatedEntries(row);
  const params = extractParams(row.route);
  const queryParams = [];
  if (row.route === "bilibili://browser" || row.route === "activity://main/web") {
    queryParams.push("url");
  }
  const needsConfig = params.length > 0 || queryParams.length > 0;
  const configLink = needsConfig ? `/config/${slugify(row.route)}` : "";
  return [
    `## \`${row.route}\``,
    "",
    "::: info 路由说明",
    `- 类型：\`${row.route_type}\``,
    `- 说明：${routeDescription(row.route, row.route_type)}`,
    `- 关联入口：${aliases.length ? aliases.map((entry) => `\`${entry}\``).join("、") : "无公开同组别名"}`,
    ":::",
    "",
    "### 参数说明",
    "",
    ...parameterLines(row.route),
    "",
    "### 快速操作",
    "",
    `<RouteActions route="${row.route}"${configLink ? ` config-link="${configLink}"` : ""} />`,
    ""
  ].join("\n");
}

function prefixIntro(prefix) {
  const label = prefix.startsWith("activity-") ? prefix.slice("activity-".length) : prefix;
  const target = humanize(label);
  return `前缀 \`${prefix}\` 下的全部路由，主要归入“${target}”相关页面或入口。`;
}

cleanGeneratedContent(outDir);
ensureDir(prefixesDir);
ensureDir(configDir);

const grouped = new Map();
for (const row of rows) {
  const prefix = prefixOf(row.route);
  if (!grouped.has(prefix)) grouped.set(prefix, []);
  grouped.get(prefix).push(row);
}

const prefixEntries = [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]));
const prefixIndexLines = [
  "# 前缀索引",
  "",
  "按前缀组织的哔哩哔哩路由参考目录。每个前缀页都会对所属路由逐条给出说明、参数解释和一键打开按钮。",
  ""
];

for (const [prefix, groupRows] of prefixEntries) {
  const uniqRows = sortRows(groupRows);
  const typeCounts = uniqRows.reduce((acc, row) => {
    acc[row.route_type] = (acc[row.route_type] || 0) + 1;
    return acc;
  }, {});
  const intro = prefixIntro(prefix);
  const slug = slugify(prefix);

  prefixIndexLines.push(`## \`${prefix}\``);
  prefixIndexLines.push("");
  prefixIndexLines.push(intro);
  prefixIndexLines.push("");
  prefixIndexLines.push(`- 唯一路由数：\`${uniqRows.length}\``);
  prefixIndexLines.push(`- 路由类型统计：\`${JSON.stringify(typeCounts)}\``);
  prefixIndexLines.push(`- 文档入口：[查看该前缀全部条目](./prefixes/${slug}.md)`);
  prefixIndexLines.push("");

  const pageContent = [
    `# 前缀：${prefix}`,
    "",
    intro,
    "",
    `- 路由数：\`${uniqRows.length}\``,
    "",
    ...uniqRows.map(routeCard)
  ].join("\n");

  writeFile(path.join(prefixesDir, `${slug}.md`), pageContent);
}

writeFile(path.join(outDir, "prefix-index.md"), prefixIndexLines.join("\n"));

const configIndexLines = [
  "# 配置",
  "",
  "这里收录需要填写参数后再唤起的路由配置页。",
  ""
];

for (const row of sortRows(rows)) {
  const pathParams = extractParams(row.route);
  const queryParams = [];
  if (row.route === "bilibili://browser" || row.route === "activity://main/web") {
    queryParams.push("url");
  }
  if (!pathParams.length && !queryParams.length) continue;

  const slug = slugify(row.route);
  configIndexLines.push(`- [${row.route}](/config/${slug})`);

  writeFile(path.join(configDir, `${slug}.md`), [
    `# 配置：${row.route}`,
    "",
    `- 类型：\`${row.route_type}\``,
    `- 说明：${routeDescription(row.route, row.route_type)}`,
    "",
    "<RouteConfig",
    `  route="${row.route}"`,
    `  :path-params='${JSON.stringify(pathParams)}'`,
    `  :query-params='${JSON.stringify(queryParams)}'`,
    "/>",
    ""
  ].join("\n"));
}

writeFile(path.join(configDir, "index.md"), configIndexLines.join("\n"));

const totalBilibili = rows.filter((row) => row.route.startsWith("bilibili://")).length;
const totalActivity = rows.filter((row) => row.route.startsWith("activity://")).length;
const uniqueCount = new Set(rows.map((row) => row.route)).size;
const routeTypeCounts = rows.reduce((acc, row) => {
  acc[row.route_type] = (acc[row.route_type] || 0) + 1;
  return acc;
}, {});

writeFile(path.join(outDir, "index.md"), [
  "---",
  "layout: home",
  "",
  "hero:",
  "  name: \"Bilibili Deeplink Atlas\"",
  "  text: \"哔哩哔哩路由文档站\"",
  "  tagline: \"按前缀整理 bilibili:// 与 activity:// 路由。\"",
  "  actions:",
  "    - theme: brand",
      "      text: 打开前缀索引",
      "      link: /prefix-index",
  "    - theme: alt",
      "      text: 查看 browser 专题",
      "      link: /browser-web",
  "---",
  "",
  "## 当前快照",
  "",
  `- 唯一路由模式数：\`${uniqueCount}\``,
  `- \`bilibili://\` 路由：\`${totalBilibili}\``,
  `- \`activity://\` 路由：\`${totalActivity}\``,
  `- 路由类型统计：\`${JSON.stringify(routeTypeCounts)}\``,
  "",
  "## 导航",
  "",
  "- [前缀索引](/prefix-index)",
  "- [配置](/config/)",
  "- [browser 与 web 专题](/browser-web)"
].join("\n"));

writeFile(path.join(outDir, "browser-web.md"), [
  "# browser 与 web 专题",
  "",
  "该专题聚焦 `bilibili://browser` 与 `activity://main/web` 这组网页容器入口。",
  "",
  "## 核心结论",
  "",
  "- `bilibili://browser` 与 `activity://main/web` 属于同一组网页入口。",
  "- 已确认存在 `url` 这一目标网页地址字段。",
  "- 文档站中的“一键打开”会直接以 schema 形式尝试唤起这类入口。",
  "",
  "## 相关路由",
  "",
  "### `bilibili://browser`",
  "",
  "- 类型：`web`",
  "- 说明：通用网页浏览器入口。",
  "- 参数说明：",
  "- `url`：目标网页地址。",
  "",
  "<RouteActions route=\"bilibili://browser\" />",
  "",
  "### `activity://main/web`",
  "",
  "- 类型：`web`",
  "- 说明：主站网页容器入口。",
  "- 参数说明：",
  "- `url`：目标网页地址。",
  "",
  "<RouteActions route=\"activity://main/web\" />"
].join("\n"));
