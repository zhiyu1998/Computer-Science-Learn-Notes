# 剑指 Offer 58 - II. 左旋转字符串

https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

## 问题描述

字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：

输入: s = "abcdefg", k = 2
输出: "cdefgab"

示例 2：

输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"



## 想法1：切片 、队列

```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        LinkedList<Character> deque = new LinkedList<>();
        for (Character c: s.toCharArray()) {
            deque.addLast(c);
        }
        for (int i = 0; i < n; i++) {
            char ch = deque.removeFirst();
            deque.addLast(ch);
        }
        Character[] chs = deque.toArray(new Character[deque.size()]);
        return Arrays.stream(chs).map(String::valueOf).collect(Collectors.joining());
    }
}
```

> 执行结果：通过
>
> 执行用时：13 ms, 在所有 Java 提交中击败了6.68% 的用户
>
> 内存消耗：41.6 MB, 在所有 Java 提交中击败了7.63% 的用户
>
> 通过测试用例：34 / 34



```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        return s.substring(n, s.length()) + s.substring(0, n);
    }
}
```

> 执行结果：通过
>
> 执行用时：0 ms, 在所有 Java 提交中击败了100.00% 的用户
>
> 内存消耗：41.6 MB, 在所有 Java 提交中击败了9.21% 的用户



## 想法2：拼接

```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        StringBuilder sb = new StringBuilder();
        for (int i = n; i < s.length() + n; i++) {
            sb.append(s.charAt(i% s.length()) );
        }
        return sb.toString();
    }
}
```

> 执行结果：通过
>
> 执行用时：6 ms, 在所有 Java 提交中击败了19.88% 的用户
>
> 内存消耗：41.1 MB, 在所有 Java 提交中击败了67.11% 的用户
>
> 通过测试用例：34 / 34