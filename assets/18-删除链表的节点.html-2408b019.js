import{_ as e,W as t,X as p,a0 as n,a1 as s,Z as o,$ as i,C as c}from"./framework-c8643d23.js";const l={},u=n("h2",{id:"剑指-offer-18-删除链表的节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#剑指-offer-18-删除链表的节点","aria-hidden":"true"},"#"),s(" 剑指 Offer 18. 删除链表的节点")],-1),d={href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/?favorite=xb9nqhhg",target:"_blank",rel:"noopener noreferrer"},r=i(`<h3 id="解法1" tabindex="-1"><a class="header-anchor" href="#解法1" aria-hidden="true">#</a> 解法1</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">deleteNode</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> pre<span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> point <span class="token operator">=</span> head<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>point <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>point<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre<span class="token punctuation">.</span>next <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            pre <span class="token operator">=</span> point<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>point <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> point <span class="token operator">=</span> point<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(v,m){const a=c("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",d,[s("剑指 Offer 18. 删除链表的节点 - 力扣（LeetCode）"),o(a)])]),r])}const h=e(l,[["render",k],["__file","18-删除链表的节点.html.vue"]]);export{h as default};
