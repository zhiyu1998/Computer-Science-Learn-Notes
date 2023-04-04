<template><div><h2 id="剑指-offer-26-树的子结构" tabindex="-1"><a class="header-anchor" href="#剑指-offer-26-树的子结构" aria-hidden="true">#</a> 剑指 Offer 26. 树的子结构</h2>
<p><a href="https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/" target="_blank" rel="noopener noreferrer">剑指 Offer 26. 树的子结构<ExternalLinkIcon/></a></p>
<h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3>
<p>推荐阅读：<a href="https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/solution/yi-pian-wen-zhang-dai-ni-chi-tou-dui-che-uhgs/" target="_blank" rel="noopener noreferrer">一篇文章带你吃透对称性递归(思路分析+解题模板+案例解读) - 树的子结构 - 力扣（LeetCode）<ExternalLinkIcon/></a></p>
<p>思路：</p>
<ol>
<li>A和B任意为空都不能是子节点</li>
<li><code v-pre>isSubStructure(A.left, B) || isSubStructure(A.right, B);</code> 判断A的左节点下是不是存在子结构或是右节点，目的是推进递归</li>
<li><code v-pre>isContain</code>进行内部判断
<ol>
<li><code v-pre>B == null</code> 如果A不为空或是为空，但是B为空，那么这个节点不用以B为判断，所以返回true</li>
<li><code v-pre>A == null || A.val != B.val</code> 本题以A为主结构，所以A为空了，那么子结构长什么都不重要了；A的值和B的值不同更是，所以返回false</li>
<li>这个判断是以左节点比较左节点，右节点比较右节点</li>
</ol>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token class-name">B</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">isContain</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isSubStructure</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isContain</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">TreeNode</span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">B</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">A</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token class-name">A</span><span class="token punctuation">.</span>val <span class="token operator">!=</span> <span class="token class-name">B</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">isContain</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>left<span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isContain</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>right<span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


