import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/Computer-Science-Learn-Notes/",
  // 设置正在使用的语言
  lang: "zh-CN",
  // 设置网站标题
  title: "CSLN",
  theme,
  plugins: [
      searchProPlugin({
          // 索引全部内容
          indexContent: true,
      })
  ],
  // Enable it with pwa
  shouldPrefetch: false,
});
