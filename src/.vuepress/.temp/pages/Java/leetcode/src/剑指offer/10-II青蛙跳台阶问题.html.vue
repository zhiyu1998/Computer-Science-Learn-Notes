<template><div><h1 id="剑指-offer-10-ii-青蛙跳台阶问题" tabindex="-1"><a class="header-anchor" href="#剑指-offer-10-ii-青蛙跳台阶问题" aria-hidden="true">#</a> 剑指 Offer 10- II. 青蛙跳台阶问题</h1>
<p><a href="https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/<ExternalLinkIcon/></a></p>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2>
<p>我觉得力扣得70题对这题描述得更加清楚</p>
<blockquote>
<p>假设你正在爬楼梯。需要 n 阶你才能到达楼顶。</p>
<p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p>
<p>示例 1：</p>
<p>输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。</p>
<ol>
<li>1 阶 + 1 阶</li>
<li>2 阶</li>
</ol>
<p>示例 2：</p>
<p>输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。</p>
<ol>
<li>1 阶 + 1 阶 + 1 阶</li>
<li>1 阶 + 2 阶</li>
<li>2 阶 + 1 阶</li>
</ol>
</blockquote>
<h2 id="想法-斐波那契数列" tabindex="-1"><a class="header-anchor" href="#想法-斐波那契数列" aria-hidden="true">#</a> 想法：斐波那契数列</h2>
<p>一开始以为是卡特兰数，后面想了一下判断为斐波那契数列。</p>
<p>使用核心函数+剪枝就可以解决这个问题</p>
<p><code v-pre>1000000007是题意</code></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">numWays</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mem <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">return</span> <span class="token class-name">Fab</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token class-name">Fab</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> mem<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mem<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> sum <span class="token operator">=</span> mem<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            sum <span class="token operator">=</span> <span class="token class-name">Fab</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token class-name">Fab</span><span class="token punctuation">(</span>mem<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
            mem<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> sum<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> sum <span class="token operator">%</span> <span class="token number">1000000007</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>执行结果：通过
执行用时：0 ms, 在所有 Java 提交中击败了100.00% 的用户
内存消耗：38.2 MB, 在所有 Java 提交中击败了46.42% 的用户
通过测试用例：51 / 51</p>
</blockquote>
</div></template>


