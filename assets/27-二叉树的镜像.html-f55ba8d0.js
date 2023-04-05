import{_ as e,W as t,X as o,a0 as n,a1 as s,Z as p,$ as c,C as l}from"./framework-c8643d23.js";const i={},r=n("h2",{id:"剑指-offer-27-二叉树的镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#剑指-offer-27-二叉树的镜像","aria-hidden":"true"},"#"),s(" 剑指 Offer 27. 二叉树的镜像")],-1),u={href:"https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/",target:"_blank",rel:"noopener noreferrer"},d=c(`<h3 id="利用后续遍历的递归" tabindex="-1"><a class="header-anchor" href="#利用后续遍历的递归" aria-hidden="true">#</a> 利用后续遍历的递归</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * public class TreeNode <span class="token punctuation">{</span>
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> left <span class="token operator">=</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> right  <span class="token operator">=</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            root<span class="token punctuation">.</span>left <span class="token operator">=</span> right<span class="token punctuation">;</span>
            root<span class="token punctuation">.</span>right <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> root<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(v,m){const a=l("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[n("a",u,[s("剑指 Offer 27. 二叉树的镜像"),p(a)])]),d])}const b=e(i,[["render",k],["__file","27-二叉树的镜像.html.vue"]]);export{b as default};
