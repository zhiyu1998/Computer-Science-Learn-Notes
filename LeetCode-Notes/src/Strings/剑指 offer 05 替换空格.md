# 剑指 Offer 05. 替换空格

https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/



## 问题描述

请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."



## 第一想法：正则表达式

```java
class Solution {
    public String replaceSpace(String s) {
        return s.replaceAll("\s", "%20");
    }
}
```

> **27 / 27** 个通过测试用例     状态：*通过*
>
> 执行用时: **2 ms**
>
> 内存消耗: **39.5 MB**



## 第二想法：StringBuilder

```java
class Solution {
    public String replaceSpace(String s) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == 32) {
                sb.append("%20");
            } else {
                sb.append(s.charAt(i));
            }
        }
        return sb.toString();
    }
}
```

>执行结果：通过
>
>执行用时：0 ms, 在所有 Java 提交中击败了100.00% 的用户
>
>内存消耗：39.4 MB, 在所有 Java 提交中击败了22.77% 的用户
>
>通过测试用例：27 / 27



看了其他题解，`charAt`替换成`toCharArray`

```java
class Solution {
    public String replaceSpace(String s) {
        StringBuilder sb = new StringBuilder();
        for (Character c : s.toCharArray()) {
            if (c == 32) {
                sb.append("%20");
            } else {
                sb.append(c);
            }
        }
        return sb.toString();
    }
}
```



> 执行结果：
>
> 执行用时：0 ms, 在所有 Java 提交中击败了100.00% 的用户
>
> 内存消耗：39.2 MB, 在所有 Java 提交中击败了54.51% 的用户
>
> 通过测试用例：27 / 27



