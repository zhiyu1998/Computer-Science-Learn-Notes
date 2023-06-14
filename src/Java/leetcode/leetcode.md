---
sidebar_position: 4
title: 力扣算法模板 & 刷题顺序
category:
  - lc
---

# 算法模板
光看模板肯定看不懂的，刷几道题就明白了
- 部分参考了[lambdadong的算法小炒](https://github.com/labuladong/fucking-algorithm)

## 二分查找

```java
int binarySearch(int[] nums, int target) {
    int left = 0, right = ...;

    while(...) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            ...
        } else if (nums[mid] < target) {
            left = ...
        } else if (nums[mid] > target) {
            right = ...
        }
    }
    return ...;
}
```


## ↖️↗️双指针

### 快慢指针的常见算法

#### 判定链表中是否含有环
```java
boolean hasCycle(ListNode head) {
    while (head != null)
        head = head.next;
    return false;
}
```

```java
boolean hasCycle(ListNode head) {
    ListNode fast, slow;
    fast = slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        
        if (fast == slow) return true;
    }
    return false;
}
```

#### 已知链表中含有环，返回这个环的起始位置
```java
ListNode detectCycle(ListNode head) {
    ListNode fast, slow;
    fast = slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) break;
    }
    // 上面的代码类似 hasCycle 函数
    if (fast == null || fast.next == null) {
        // fast 遇到空指针说明没有环
        return null;
    }

    slow = head;
    while (slow != fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
```

#### 寻找链表的中点
```java
while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
}
// slow 就在中间位置
return slow;
```

#### 寻找链表的倒数第 k 个元素
```java
ListNode slow, fast;
slow = fast = head;
while (k-- > 0) 
    fast = fast.next;

while (fast != null) {
    slow = slow.next;
    fast = fast.next;
}
return slow;
```


### 左右指针的常用算法

#### 二分查找
```java
int binarySearch(int[] nums, int target) {
    int left = 0; 
    int right = nums.length - 1;
    while(left <= right) {
        int mid = (right + left) / 2;
        if(nums[mid] == target)
            return mid; 
        else if (nums[mid] < target)
            left = mid + 1; 
        else if (nums[mid] > target)
            right = mid - 1;
    }
    return -1;
}
```

#### 两数之和
```java
int[] twoSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) {
            // 题目要求的索引是从 1 开始的
            return new int[]{left + 1, right + 1};
        } else if (sum < target) {
            left++; // 让 sum 大一点
        } else if (sum > target) {
            right--; // 让 sum 小一点
        }
    }
    return new int[]{-1, -1};
}
```

#### 反转数组
```java
void reverse(int[] nums) {
    int left = 0;
    int right = nums.length - 1;
    while (left < right) {
        // swap(nums[left], nums[right])
        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++; right--;
    }
}
```

#### 滑动窗口算法
```java
/* 滑动窗口算法框架 */
void slidingWindow(string s, string t) {
    unordered_map<char, int> need, window;
    for (char c : t) need[c]++;

    int left = 0, right = 0;
    int valid = 0;
    while (right < s.size()) {
        // c 是将移入窗口的字符
        char c = s[right];
        // 右移窗口
        right++;
        // 进行窗口内数据的一系列更新
        ...

        /*** debug 输出的位置 ***/
        printf("window: [%d, %d)\n", left, right);
        /********************/

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            char d = s[left];
            // 左移窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
}
```


## ↩️ 回溯
回溯的大致模板就是以下，掌握三个核心点就行：
- 递归函数
- 递归里肯定有一个if（至少一个）
- 递归里或者外面有一个for循环
完毕，剩下的自己刷题领悟，下面是模板

```java
List<List<Integer>> res = new LinkedList<>();

/* 主函数，输入一组不重复的数字，返回它们的全排列 */
List<List<Integer>> permute(int[] nums) {
    // 记录「路径」
    LinkedList<Integer> track = new LinkedList<>();
    backtrack(nums, track);
    return res;
}

// 路径：记录在 track 中
// 选择列表：nums 中不存在于 track 的那些元素
// 结束条件：nums 中的元素全都在 track 中出现
void backtrack(int[] nums, LinkedList<Integer> track) {
    // 触发结束条件
    if (track.size() == nums.length) {
        res.add(new LinkedList(track));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        // 排除不合法的选择
        if (track.contains(nums[i]))
            continue;
        // 做选择
        track.add(nums[i]);
        // 进入下一层决策树
        backtrack(nums, track);
        // 取消选择
        track.removeLast();
    }
}
```

例题：
- [全排列](https://leetcode.cn/problems/permutations/)
- [单词搜索](https://leetcode.cn/submissions/detail/432257030/)

## 🔝 贪心
贪心的3个核心点：
- for循环
- Math.max
- 数组中的当前元素和前一个元素相关（至于为什么刷完题就知道了）

```java
bool canJump(vector<int>& nums) {
    int n = nums.size();
    int farthest = 0;
    for (int i = 0; i < n - 1; i++) {
        // 不断计算能跳到的最远距离
        farthest = max(farthest, i + nums[i]);
        // 可能碰到了 0，卡住跳不动了
        if (farthest <= i) return false;
    }
    return farthest >= n - 1;
}
```
贪心就是通过局部最优求全局最优，最两道题就明白了
- [跳跃游戏](https://leetcode.cn/problems/jump-game/)
- [买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/)

## 🛣️ 动态规划
动态规划是我最怕的题目之一，主要是要思考状态转移方程
```java
# 初始化 base case
dp[0][0][...] = base
# 进行状态转移
for 状态1 in 状态1的所有取值：
    for 状态2 in 状态2的所有取值：
        for ...
            dp[状态1][状态2][...] = 求最值(选择1，选择2...)
```
推荐两道题去理解动态规划：
- [不同路径](https://leetcode.cn/problems/unique-paths/)
- [剑指 Offer 13. 机器人的运动范围](https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/)

> 更进阶的动态规划可能还要考虑更多情况

- 考虑负数情况：[乘积最大子数组](https://leetcode.cn/problems/maximum-product-subarray/description/)

## 🌈 分治
@todo

## 🔎 并查集
@todo

# 刷题顺序

## 二叉树 

* 掌握二叉树递归与非递归遍历
* 理解 DFS 前序遍历与分治法
* 理解 BFS 层次遍历

精选：

- [ ] [二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
- [ ] [ 平衡二叉树](https://leetcode-cn.com/problems/balanced-binary-tree/)
- [ ] [二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)
- [ ] [二叉树的最近公共祖先](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [ ] [二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
- [ ] [二叉树的层序遍历 II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)
- [ ] [二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
- [ ] [验证二叉搜索树](https://leetcode-cn.com/problems/validate-binary-search-tree/)
- [ ] [二叉搜索树中的插入操作](https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/)

## 链表

* null/nil异常处理
* dummy node哑巴节点
* 快慢指针
* 插入一个节点到排序链表
* 从一个链表中移除一个节点
* 翻转链表
* 合并两个链表
* 找到链表的中间节点

- [ ] [删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
- [ ] [删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)
- [ ] [反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
- [ ] [反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)
- [ ] [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
- [ ] [分隔链表](https://leetcode-cn.com/problems/partition-list/)
- [ ] [排序链表](https://leetcode-cn.com/problems/sort-list/)
- [ ] [重排链表](https://leetcode-cn.com/problems/reorder-list/)
- [ ] [环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)
- [ ] [环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)
- [ ] [回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)
- [ ] [复制带随机指针的链表](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)



## 字符串

需要考虑的问题：

1. 要不要使用库函数
2. 双指针法
3.  反转系列
4. KMP

- [ ] [反转字符串](https://leetcode-cn.com/problems/reverse-string/)
- [ ] [反转字符串 II](https://leetcode-cn.com/problems/reverse-string-ii/)
- [ ] [剑指 Offer 05. 替换空格](https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/)
- [ ] [颠倒字符串中的单词](https://leetcode-cn.com/problems/reverse-words-in-a-string/)
- [ ] [剑指 Offer 58 - II. 左旋转字符串](https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)
- [ ] [实现 strStr()](https://leetcode-cn.com/problems/implement-strstr/)
- [ ] [重复的子字符串](https://leetcode-cn.com/problems/repeated-substring-pattern/)



## 动态规划

最长递增子序列  :arrow_right: 单词拆分 :arrow_right:  编辑距离

矩阵DP

- [ ] [三角形最小路径和](https://leetcode-cn.com/problems/triangle/)
- [ ] [最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)
- [ ] [不同路径](https://leetcode-cn.com/problems/unique-paths/)
- [ ] [不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)

序列

- [ ] [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
- [ ] [跳跃游戏](https://leetcode-cn.com/problems/jump-game/)
- [ ] [跳跃游戏 II](https://leetcode-cn.com/problems/jump-game-ii/)
- [ ] [分割回文串 II](https://leetcode-cn.com/problems/palindrome-partitioning-ii/)
- [ ] [最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
- [ ] [单词拆分](https://leetcode-cn.com/problems/word-break/)

两个序列的DP

- [ ] [最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)
- [ ] [编辑距离](https://leetcode-cn.com/problems/edit-distance/)

背包 & 零钱兑换

- [ ] [零钱兑换](https://leetcode-cn.com/problems/coin-change/)
- [ ] [背包问题](https://www.lintcode.com/problem/92/)
- [ ] [背包问题（二）](https://www.lintcode.com/problem/125/)



## 回溯

- [ ] [子集](https://leetcode.cn/problems/subsets/)
- [ ] [子集 II](https://leetcode.cn/problems/subsets-ii/)
- [ ] [全排列](https://leetcode.cn/problems/permutations/)
- [ ] [全排列 II](https://leetcode.cn/problems/permutations-ii/)
- [ ] [组合总和](https://leetcode.cn/problems/combination-sum/)
- [ ] [电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)
- [ ] [分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)
- [ ] [复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)



## 滑动窗口
- [ ] [滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)
- [ ] [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
- [ ] [字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)


## 位运算
- [ ] [2的幂](https://leetcode.cn/problems/power-of-two/)
- [ ] [返回二进制中1的个数](https://leetcode.cn/problems/number-of-1-bits/)
- [ ] [只出现一次的数字](https://leetcode.cn/problems/single-number/)
- [ ] [只出现一次的数字Ⅱ](https://leetcode.cn/problems/single-number-ii/)
- [ ] [缺失数字](https://leetcode.cn/problems/missing-number/)


## 分治
@todo

## 贪心算法
@todo



## 参考刷题顺序的仓库

- 算法模板：https://greyireland.gitbook.io/algorithm-pattern/shu-ju-jie-gou-pian/binary_tree
- labuladong 的算法：https://labuladong.gitee.io/algo/
- 代码随想录：https://github.com/youngyangyang04/leetcode-master
- 小浩算法：https://www.geekxh.com/


# 力扣常用方法封装

## 快慢指针找中间位置

```java
private ListNode endOfFirstHalf(ListNode head) {
    ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
    return slow;
}
```



## 反转链表

这里用的是力扣官方的代码，我的声明的变量稍微有点多

```java
private ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
```



## 后序遍历

```java
public void postorder(TreeNode root, List<Integer> res) {
    if (root == null) {
        return;
    }
    postorder(root.left, res);
    postorder(root.right, res);
    res.add(root.val);
}
```

## 计算最大深度
```java
private int dfs(TreeNode node) {
    if (node == null) {
        return 0;
    }
    int l = dfs(node.left) + 1;
    int r = dfs(node.right) + 1;
    return Math.max(l, r);
}
```

## 判断是否是平衡二叉树
```java
public boolean isBalanced(TreeNode root) {
        if (root == null) return true;
        return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }
```

## 如果要用HashMap统计个数
```java
HashMap<Integer, Integer> map = new HashMap<>();
// 遍历数组，统计每个数字出现的次数
for (int num : nums) {
    int count = map.getOrDefault(num, 0);
    map.put(num, count + 1);
}
```