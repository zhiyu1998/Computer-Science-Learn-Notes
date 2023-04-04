import { defineClientConfig } from "@vuepress/client";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "C:/Users/Administrator/Documents/GitHub/Computer-Science-Learn-Notes/node_modules/vuepress-theme-hope/lib/client/export.js";

import { GlobalEncrypt, LocalEncrypt } from "C:/Users/Administrator/Documents/GitHub/Computer-Science-Learn-Notes/node_modules/vuepress-theme-hope/lib/client/modules/encrypt/export.js";
import Slide from "C:/Users/Administrator/Documents/GitHub/Computer-Science-Learn-Notes/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "C:/Users/Administrator/Documents/GitHub/Computer-Science-Learn-Notes/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});