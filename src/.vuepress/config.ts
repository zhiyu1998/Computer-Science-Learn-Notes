import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import {searchProPlugin} from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/Computer-Science-Learn-Notes/",
  // 设置正在使用的语言
  lang: "zh-CN",
  theme,
  plugins: [
      pwaPlugin({
        hintComponent: "检测到新内容，点击刷新"
      }),
      searchProPlugin({
          // 索引全部内容
          indexContent: true,
      })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
