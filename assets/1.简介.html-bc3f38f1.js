import{_ as n,W as a,X as s,$ as e}from"./framework-c8643d23.js";const i="/Computer-Science-Learn-Notes/assets/h-pJUG547OI4k7Wz-Os0G9LhwusZkTJv8vRGDNNltbc-ca3333f2.webp",l="/Computer-Science-Learn-Notes/assets/Y6CoDWJvuYNYqKNPgkVHX_lTbRLnXTpD2TB6Z3LyfNA-627e62bd.webp",t="/Computer-Science-Learn-Notes/assets/hiGOvDYQi_G8ce4NiDZ2G9HxPDrUaRsPPGlsIY7U2w-8d88e5ec.webp",c="/Computer-Science-Learn-Notes/assets/uScZ972NAql4Qkv9XGNFX5qGzpahJ7xxbGL2-u0vPs-bf9b40f2.webp",d={},r=e('<p>[toc]</p><h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1><h2 id="jvm位置" tabindex="-1"><a class="header-anchor" href="#jvm位置" aria-hidden="true">#</a> JVM位置</h2><figure><img src="'+i+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>JVM是运行在操作系统之上，它与硬件没有直接的交互</p><h3 id="jdk的构成" tabindex="-1"><a class="header-anchor" href="#jdk的构成" aria-hidden="true">#</a> JDK的构成</h3><figure><img src="'+l+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="jvm整体结构" tabindex="-1"><a class="header-anchor" href="#jvm整体结构" aria-hidden="true">#</a> JVM整体结构</h2><p>【要求会画】</p><figure><img src="'+t+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="java代码执行流程" tabindex="-1"><a class="header-anchor" href="#java代码执行流程" aria-hidden="true">#</a> JAVA代码执行流程</h2><figure><img src="'+c+`" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="区分栈的指令集架构和寄存器的指令集架构" tabindex="-1"><a class="header-anchor" href="#区分栈的指令集架构和寄存器的指令集架构" aria-hidden="true">#</a> 区分栈的指令集架构和寄存器的指令集架构</h2><p>Java编译器输入的指令流基本上是一种基于栈的指令集架构，另外一种指令集架构则是基于寄存器的指令集架构。</p><p>栈的指令集架构：</p><ul><li>跨平台性</li><li>指令集小，指令多</li><li>执行性能比寄存器差</li></ul><p>基于寄存器的指令集架构:</p><ul><li>性能优秀、执行更快</li><li>完全依赖硬件，可移植性差</li></ul><h3 id="查看java反编译以后字节码的生产情况" tabindex="-1"><a class="header-anchor" href="#查看java反编译以后字节码的生产情况" aria-hidden="true">#</a> 查看Java反编译以后字节码的生产情况</h3><p>代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackStruTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        int i = 2 + 3;</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> k <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>javap -v xxxxx.class</p></blockquote><p>主要可以看：Code部分</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>Classfile /C:/Users/54271/Documents/Java/JVMDemo/target/classes/chapter01/StackStruTest.class
  Last modified 2021-11-9; size 468 bytes
  MD5 checksum 3ba8eef9c3a64cdb9cb67f7b00c5f548
  Compiled from &quot;StackStruTest.java&quot;
public class chapter01.StackStruTest
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #3.#21         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
   #2 = Class              #22            // chapter01/StackStruTest
   #3 = Class              #23            // java/lang/Object
   #4 = Utf8               &lt;init&gt;
   #5 = Utf8               ()V
   #6 = Utf8               Code
   #7 = Utf8               LineNumberTable
   #8 = Utf8               LocalVariableTable
   #9 = Utf8               this
  #10 = Utf8               Lchapter01/StackStruTest;
  #11 = Utf8               main
  #12 = Utf8               ([Ljava/lang/String;)V
  #13 = Utf8               args
  #14 = Utf8               [Ljava/lang/String;
  #15 = Utf8               i
  #16 = Utf8               I
  #17 = Utf8               j
  #18 = Utf8               k
  #19 = Utf8               SourceFile
  #20 = Utf8               StackStruTest.java
  #21 = NameAndType        #4:#5          // &quot;&lt;init&gt;&quot;:()V
  #22 = Utf8               chapter01/StackStruTest
  #23 = Utf8               java/lang/Object
{
  public chapter01.StackStruTest();
    descriptor: ()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: return
      LineNumberTable:
        line 3: 0
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       5     0  this   Lchapter01/StackStruTest;

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=4, args_size=1
         0: iconst_2
         1: istore_1
         2: iconst_3
         3: istore_2
         4: iload_1
         5: iload_2
         6: iadd
         7: istore_3
         8: return
      LineNumberTable:
        line 6: 0
        line 7: 2
        line 8: 4
        line 9: 8
      LocalVariableTable:
        Start  Length  Slot  Name   Signature
            0       9     0  args   [Ljava/lang/String;
            2       7     1     i   I
            4       5     2     j   I
            8       1     3     k   I
}
SourceFile: &quot;StackStruTest.java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jvm生命周期" tabindex="-1"><a class="header-anchor" href="#jvm生命周期" aria-hidden="true">#</a> JVM生命周期</h2><h3 id="虚拟机的启动" tabindex="-1"><a class="header-anchor" href="#虚拟机的启动" aria-hidden="true">#</a> 虚拟机的启动</h3><p>Java虚拟机的启动是通过引导类加载器(bootstrap class loader) 创建一个初始类(initial class) 来完成的，这个类是由虚拟机的具体实现指定的。</p><h3 id="虚拟机执行" tabindex="-1"><a class="header-anchor" href="#虚拟机执行" aria-hidden="true">#</a> 虚拟机执行</h3><p>测试代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackStruTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello JVM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看当前JVM执行的进程</p><blockquote><p>jps</p></blockquote><p>执行后即可看到以下内容：</p><p>执行中</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>15936
24208 RemoteMavenServer36
26468 StackStruTest
13656 Jps
16504
22764 Launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后：</p><div class="language-Plain line-numbers-mode" data-ext="Plain"><pre class="language-Plain"><code>15936
24208 RemoteMavenServer36
24964 Jps
16504
22764 Launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="虚拟机退出" tabindex="-1"><a class="header-anchor" href="#虚拟机退出" aria-hidden="true">#</a> 虚拟机退出</h3><ul><li>正常结束</li><li>发生异常或错误</li><li>存储系统错误导致虚拟机终止</li><li>某线程调用Runtime类或System类的exit方法，或Runtime类的halt方法，并且Java安全管理器也允许这次exit或halt操作（主动结束程序）</li><li>JNI（Java Native Interface）</li></ul>`,39),u=[r];function p(v,o){return a(),s("div",null,u)}const b=n(d,[["render",p],["__file","1.简介.html.vue"]]);export{b as default};
