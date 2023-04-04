import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
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
      icon: "build",
      text: "计算机基础",
      prefix: "fundamental",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "java",
      text: "Java基础",
      prefix: "Java/basic",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "branch",
      text: "Java并发",
      prefix: "Java/concurrent",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "profile",
      text: "Java面试",
      prefix: "Java/eightpart",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "leaf",
      text: "Java框架",
      prefix: "Java/fm",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "async",
      text: "Java虚拟机",
      prefix: "Java/jvm/part1",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "launch",
      text: "Kotlin结合Spring",
      prefix: "Java/kotlin",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "object",
      text: "LeetCode刷题顺序",
      prefix: "Java/leetcode",
      children: "structure",
      collapsible: true,
    },
    {
      icon: "repair",
      text: "经验总结",
      prefix: "others",
      children: "structure",
      collapsible: true,
    },
  ],
});
