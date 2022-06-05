# 实现 strStr()

https://leetcode-cn.com/problems/implement-strstr/

## 问题描述

实现 strStr() 函数。

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。



说明：

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。



## 娱乐写法

```java
class Solution {
    public int strStr(String haystack, String needle) {
        return haystack.indexOf(needle);
    }
}
```

> 执行结果：通过
>
> 执行用时：0 ms, 在所有 Java 提交中击败了100.00% 的用户
>
> 内存消耗：39 MB, 在所有 Java 提交中击败了88.24% 的用户
>
> 通过测试用例：75 / 75



## 暴力匹配

写了半天的KMP，代码没写出来，人倒是写没了，完结撒花！

```java
class Solution {
    public int strStr(String haystack, String needle) {
        final int M = haystack.length();
        final int N = needle.length();


        for (int i = 0; i <= M - N; i++) {
            int j;
            for (j = 0; j < N; j++) {
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    break;
                }
            }
            if (j == N) return i;
        }
        return -1;
    }
}
```



## KMP

有点遗忘KMP算法的小伙伴可以转移到：https://labuladong.github.io/algo/3/26/97/ ，当理解了状态机的概念KMP写出来也就不远了



个人对状态机在KMP中的理解：

转移位置是怎样转移的？如果在状态机中发生不匹配的时候，（比如图中第一次不匹配的位置是A和B，pat的第四个位置）此时是B，状态机直接转移到第一个位置，所以i对应的就是pat的第一个位置；同理，第二次不匹配发生在A和C（因为匹配的是A）直接转到状态3，所以当前位置pat和i对应的位置就是pat的第三个位置（指向pat的位置前面有两个字母）；总的意思是状态机转移的位置就是pat和i当前所指向的位置。

![](https://labuladong.github.io/algo/images/kmp/kmp.gif)

接下来还要理解两个概念：状态推进、状态重启

及像遇到A为什么要转移到状态3？遇到B为什么能转移到状态0？

![](https://labuladong.github.io/algo/images/kmp/forward.jpg)

然后实现它

```java
public class KMP {

    private int[][] dp;

    public KMP(String pat) {
        int M = pat.length();
        dp = new int[M][256];
        // 影子状态
        int X = 0;
        // 启动 (X的最初变化也是因为有它)
        dp[0][pat.charAt(0)] = 1;

        for (int i = 1; i < M; i++) {
            for (int j = 0; j < 256; j++) {
                // 只有遇到pat中一样的字符 -> 推进状态
                if (pat.charAt(i) == j) {
                    dp[i][j] = i + 1;
                } else { // 其他字符 -> 重启状态
                    dp[i][j] = dp[X][j];
                }
            }
            // 更新影子 (以ABABC为例, 一开始影子是0，
            // 到第二个A（位置3），此时X=0，所以去dp中[0]的65（'A'）位置找，也就是启动A的位置(0) --> X = 1
            // B的位置(位置4)，此时X=1，在dp[1][66]的值为2，说明下次重启会在位置3) --> X = 2
            // 注：这里的dp[1][66]的值为什么==2, 在1的位置上(ABABC)刚好为B，所以这个值为i + 1 = 2
            X = dp[X][pat.charAt(i)];
        }
    }

    public int search(String txt, String pat) {
        final int N = txt.length();
        final int M = pat.length();

        int j = 0;
        for (int i = 0; i < N; i++) {
            j = dp[j][txt.charAt(i)];
            if (j == M) return i - M + 1;
        }
        return -1;
    }
}
```

> 执行结果：通过
>
> 执行用时：3 ms, 在所有 Java 提交中击败了75.11% 的用户
>
> 内存消耗：41.4 MB, 在所有 Java 提交中击败了23.58% 的用户
>
> 通过测试用例：75 / 75
