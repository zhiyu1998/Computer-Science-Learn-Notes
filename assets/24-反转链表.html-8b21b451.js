import{_ as e,W as t,X as o,a0 as n,a1 as s,Z as c,$ as i,C as l}from"./framework-c8643d23.js";const p={},r=n("h2",{id:"剑指-offer-24-反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#剑指-offer-24-反转链表","aria-hidden":"true"},"#"),s(" 剑指 Offer 24. 反转链表")],-1),u={href:"https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/",target:"_blank",rel:"noopener noreferrer"},d=i(`<h3 id="直接思路" tabindex="-1"><a class="header-anchor" href="#直接思路" aria-hidden="true">#</a> 直接思路</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> curr <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>curr <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">;</span>
        prev <span class="token operator">=</span> curr<span class="token punctuation">;</span>
        curr <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(k,m){const a=l("ExternalLinkIcon");return t(),o("div",null,[r,n("p",null,[n("a",u,[s("剑指 Offer 24. 反转链表"),c(a)])]),d])}const _=e(p,[["render",v],["__file","24-反转链表.html.vue"]]);export{_ as default};
