import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";

const prefixesDir = path.resolve(__dirname, "../prefixes");
const prefixItems = fs.readdirSync(prefixesDir)
  .filter((file) => file.endsWith(".md"))
  .sort((a, b) => a.localeCompare(b))
  .map((file) => ({
    text: file.replace(/\.md$/, ""),
    link: `/prefixes/${file.replace(/\.md$/, "")}`
  }));

export default defineConfig({
  title: "Bilibili Deeplink Atlas",
  description: "可搜索、可直接唤起 schema 的哔哩哔哩路由文档站",
  base: "/bilibili-deeplink-atlas/",
  cleanUrls: true,
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前缀索引", link: "/prefix-index" },
      { text: "配置", link: "/config/" },
      { text: "browser 专题", link: "/browser-web" }
    ],
    search: {
      provider: "local"
    },
    sidebar: [
      {
        text: "总览",
        items: [
          { text: "首页", link: "/" },
          { text: "前缀索引", link: "/prefix-index" },
          { text: "配置", link: "/config/" },
          { text: "browser 与 web 专题", link: "/browser-web" }
        ]
      },
      {
        text: "前缀文档",
        items: prefixItems
      }
    ],
    outline: {
      level: [2, 3],
      label: "页内目录"
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Admilkk/bilibili-deeplink-atlas" }
    ]
  }
});
