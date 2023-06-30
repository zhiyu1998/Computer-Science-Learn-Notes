import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      icon: "build",
      text: "计算机基础",
      prefix: "fundamental",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "vscode",
      text: "前端",
      prefix: "frontend",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "timer",
      text: "Golang",
      prefix: "golang",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "light",
      text: "Rust",
      prefix: "rust",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Java",
      icon: "java",
      collapsible: true,
      prefix: "Java/",
      children: [
        {
          icon: "activity",
          text: "基础",
          prefix: "basic",
          children: "structure",
          collapsible: true,
        },
        {
          icon: "branch",
          text: "并发",
          prefix: "concurrent",
          children: "structure",
          collapsible: true,
        },
        {
          icon: "profile",
          text: "面试",
          prefix: "eightpart",
          children: "structure",
          collapsible: true,
        },
        {
          icon: "leaf",
          text: "框架",
          prefix: "fm",
          children: "structure",
          collapsible: true,
        },
        {
          icon: "async",
          text: "虚拟机",
          prefix: "jvm/part1",
          children: "structure",
          collapsible: true,
        },
        {
          icon: "launch",
          text: "Kotlin结合Spring",
          prefix: "kotlin",
          children: "structure",
          collapsible: true,
        },
        {
          icon: "object",
          text: "LeetCode刷题顺序",
          prefix: "leetcode",
          children: "structure",
          collapsible: true,
        },
      ]
    },
    {
      icon: "repair",
      text: "经验总结",
      prefix: "others",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "autumn",
      text: "好物推荐",
      prefix: "recommend",
      children: "structure",
      collapsible: true,
    },
  ],
});
