import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Computer-Science-Learn-Notes/",
  // 设置正在使用的语言
  lang: "zh-CN",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
