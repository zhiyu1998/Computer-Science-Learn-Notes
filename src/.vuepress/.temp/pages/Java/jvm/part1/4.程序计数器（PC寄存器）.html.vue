<template><div><p>[TOC]</p>
<h1 id="程序计数器-pc寄存器" tabindex="-1"><a class="header-anchor" href="#程序计数器-pc寄存器" aria-hidden="true">#</a> 程序计数器（PC寄存器）</h1>
<blockquote>
<p>官方文档网址：<a href="https://docs.oracle.com/javase/specs/jvms/se8/html/index.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/specs/jvms/se8/html/index.html<ExternalLinkIcon/></a></p>
</blockquote>
<figure><img src="@source/Java/jvm/part1/images/U83K8RmmJZ4Nqr390V8gyhRLbC0kBa0nE_X31uUfH8A.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>每一个线程一份</p>
<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h3>
<p>程序计数器是一块较小的内存空间，是当前线程正在执行的那条字节码指令的地址。若当前线程正在执行的是一个本地方法，那么此时程序计数器为<code v-pre>Undefined</code>。</p>
<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3>
<ul>
<li>字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制。</li>
<li>在多线程情况下，程序计数器记录的是当前线程执行的位置，从而当线程切换回来时，就知道上次线程执行到哪了。</li>
</ul>
<h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3>
<ul>
<li>是一块较小的内存空间。</li>
<li>线程私有，每条线程都有自己的程序计数器。</li>
<li>生命周期：随着线程的创建而创建，随着线程的结束而销毁。</li>
<li>是唯一一个不会出现 <code v-pre>OutOfMemoryError</code> 的内存区域。</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PCRegisterTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">PCRegisterTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> var10000 <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过</p>
<blockquote>
<p>javap -v .\PCRegisterTest.class</p>
</blockquote>
<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre v-pre class="language-Plain"><code> stack=2, locals=4, args_size=1
         0: bipush        10
         2: istore_1
         3: bipush        20
         5: istore_2
         6: iload_1
         7: iload_2
         8: iadd
         9: istore_3
        10: return
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加入新的内容后：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PCRegisterTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>

        <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再执行命令就可以看到：</p>
<p>注：第一列 -- 指令地址（或偏移地址）-- 0 2 3 5 6....</p>
<p>第二列字符串 -- 操作指令 -- bitpush  istore....</p>
<div class="language-Plain line-numbers-mode" data-ext="Plain"><pre v-pre class="language-Plain"><code>Code:
      stack=2, locals=5, args_size=1
         0: bipush        10
         2: istore_1
         3: bipush        20
         5: istore_2
         6: iload_1
         7: iload_2
         8: iadd
         9: istore_3
        10: ldc           #2                  // String abc
        12: astore        4
        14: getstatic     #3                  // Field java/lang/System.out:Ljava/io/PrintStream;
        17: iload_1
        18: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
        21: getstatic     #3                  // Field java/lang/System.out:Ljava/io/PrintStream;
        24: iload_3
        25: invokevirtual #4                  // Method java/io/PrintStream.println:(I)V
        28: return

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>ldc：从常量池中取出常量，可以看到指向#2</li>
</ol>
<blockquote>
<p>#2 = String             #27            // abc</p>
</blockquote>
<p>#2又指向#27</p>
<blockquote>
<p>#27 = Utf8               abc</p>
</blockquote>
<ol start="2">
<li>12（astore）步骤相当于做了一下保存</li>
<li>接下来进行打印操作，涉及到System.out，这就指向了#3</li>
</ol>
<blockquote>
<p>#3 = Fieldref           #28.#29        // java/lang/System.out:Ljava/io/PrintStream;</p>
</blockquote>
<ol start="4">
<li>又指向了28和29</li>
</ol>
<blockquote>
<p>#28 = Class              #34            // java/lang/System</p>
</blockquote>
<blockquote>
<p>#29 = NameAndType        #35:#36        // out:Ljava/io/PrintStream;</p>
</blockquote>
<ol start="5">
<li>又指向34、35和36</li>
</ol>
<blockquote>
<p>#34 = Utf8               java/lang/System</p>
</blockquote>
<blockquote>
<p>#35 = Utf8               out</p>
</blockquote>
<blockquote>
<p>#36 = Utf8               Ljava/io/PrintStream;</p>
</blockquote>
<p>此时PC寄存器的作用就如下图所示</p>
<figure><img src="@source/Java/jvm/part1/images/vpLTypmMf_8MYZ8e_vAEFDRpD7Et4BjNJsgxbdz5OgY.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<h2 id="两个常见的面试问题" tabindex="-1"><a class="header-anchor" href="#两个常见的面试问题" aria-hidden="true">#</a> 两个常见的面试问题</h2>
<p><strong>使用PC寄存器存储字节码指令地址有什么用呢？<strong>或者问</strong>为什么使用 PC 寄存器来记录当前线程的执行地址呢？</strong></p>
<ol>
<li>因为CPU需要不停的切换各个线程，这时候切换回来以后，就得知道接着从哪开始继续执行</li>
<li>JVM的字节码解释器就需要通过改变PC寄存器的值来明确下一条应该执行什么样的字节码指令</li>
</ol>
<figure><img src="@source/Java/jvm/part1/images/DLpdOTedSezmL9S05SkRW9m-Eq4ZBDhHsfv3GqiS-BY.jpg" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
<p><strong>PC寄存器为什么被设定为私有的？</strong></p>
<ol>
<li>我们都知道所谓的多线程在一个特定的时间段内只会执行其中某一个线程的方法，CPU会不停地做任务切换，这样必然导致经常中断或恢复，如何保证分毫无差呢？<strong>为了能够准确地记录各个线程正在执行的当前字节码指令地址，最好的办法自然是为每一个线程都分配一个PC寄存器</strong>，这样一来各个线程之间便可以进行独立计算，从而不会出现相互干扰的情况。</li>
<li>由于CPU时间片轮限制，众多线程在并发执行过程中，任何一个确定的时刻，一个处理器或者多核处理器中的一个内核，只会执行某个线程中的一条指令。</li>
<li>这样必然导致经常中断或恢复，如何保证分毫无差呢？每个线程在创建后，都会产生自己的程序计数器和栈帧，程序计数器在各个线程之间互不影响。</li>
</ol>
<blockquote>
<p>注意并行和并发的区别，并行可以和串行作对比（并行是同一个时间段几个线程一起运作），并发是（假如一个CPU只能处理一个线程）CPU处理的时候切换着线程来看似像是并行一样的操作（也可以联想时间片轮转法）。</p>
</blockquote>
<h2 id="cpu-时间片" tabindex="-1"><a class="header-anchor" href="#cpu-时间片" aria-hidden="true">#</a> CPU 时间片</h2>
<ol>
<li>CPU时间片即CPU分配给各个程序的时间，每个线程被分配一个时间段，称作它的时间片。</li>
<li>在宏观上：我们可以同时打开多个应用程序，每个程序并行不悖，同时运行。</li>
<li>但在微观上：由于只有一个CPU，一次只能处理程序要求的一部分，如何处理公平，一种方法就是引入时间片，<strong>每个程序轮流执行</strong>。</li>
</ol>
<figure><img src="@source/Java/jvm/part1/images/Jglt1wM5XyfkO5goO5rnOregjFMRMajrV-6OX85xymw.png" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure>
</div></template>


