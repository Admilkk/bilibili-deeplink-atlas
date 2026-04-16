import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import RouteActions from "./RouteActions.vue";
import RouteConfig from "./RouteConfig.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("RouteActions", RouteActions);
    app.component("RouteConfig", RouteConfig);
  }
} satisfies Theme;
