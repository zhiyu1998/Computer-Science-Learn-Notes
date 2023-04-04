<template><div><h2 id="☕️-java基础" tabindex="-1"><a class="header-anchor" href="#☕️-java基础" aria-hidden="true">#</a> ☕️ Java基础</h2>
<h3 id="java-8的接口新增了哪些特性" tabindex="-1"><a class="header-anchor" href="#java-8的接口新增了哪些特性" aria-hidden="true">#</a> Java 8的接⼝新增了哪些特性？</h3>
<ul>
<li><strong>Lambda 表达式</strong> − Lambda允许把函数作为一个方法的参数（函数作为参数传递进方法中)。</li>
<li><strong>方法引用</strong> − 方法引用提供了非常有用的语法，可以直接引用已有Java类或对象（实例）的方法或构造器。与lambda联合使用，方法引用可以使语言的构造更紧凑简洁，减少冗余代码。</li>
<li><strong>默认方法</strong> − 默认方法就是一个在接口里面有了一个实现的方法。</li>
<li><strong>新工具</strong> − 新的编译工具，如：Nashorn引擎 jjs、 类依赖分析器jdeps。</li>
<li><strong>Stream API</strong> −新添加的Stream API（java.util.stream） 把真正的函数式编程风格引入到Java中。</li>
<li><strong>Date Time API</strong> − 加强对日期与时间的处理。</li>
<li><strong>Optional 类</strong> − Optional 类已经成为 Java 8 类库的一部分，用来解决空指针异常。</li>
<li><strong>Nashorn, JavaScript 引擎</strong> − Java 8提供了一个新的Nashorn javascript引擎，它允许我们在JVM上运行特定的javascript应用。</li>
</ul>
<h3 id="重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#重载和重写的区别" aria-hidden="true">#</a> 重载和重写的区别？</h3>
<p>发生在同一个类中，方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问
修饰符可以不同。
下面是《Java 核心技术》对重载这个概念的介绍：</p>
<p>综上：重载就是同一个类中多个同名方法根据不同的传参来执行不同的逻辑处理。
重写：
重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。</p>
<ol>
<li>返回值类型、方法名、参数列表必须相同，抛出的异常范围小于等于父类，访问修饰符范围
大于等于父类。</li>
<li>如果父类方法访问修饰符为 private/final/static 则子类就不能重写该方法，但是被 static 修饰
的方法能够被再次声明。</li>
<li>构造方法无法被重写
综上：重写就是子类对父类方法的重新改造，外部样子不能改变，内部逻辑可以改变</li>
</ol>
<figure><img src="@source/Java/eightpart/personal_images/image-20220617164632798.png" alt="image-20220617164632798" tabindex="0" loading="lazy"><figcaption>image-20220617164632798</figcaption></figure>
<figure><img src="@source/Java/eightpart/personal_images/image-20220617164418584.png" alt="image-20220617164418584" tabindex="0" loading="lazy"><figcaption>image-20220617164418584</figcaption></figure>
<h3 id="内部类了解吗" tabindex="-1"><a class="header-anchor" href="#内部类了解吗" aria-hidden="true">#</a> 内部类了解吗？</h3>
<p>在Java中，可以将⼀个类的定义放在另外⼀个类的定义内部，这就是 内部类 。内部类本身就 是类的⼀
个属性，与其他属性定义⽅式⼀致。</p>
<p>内部类可以分为四种：</p>
<p>成员内部类：在一个类中直接定义的内部类，成员内部类与普通类的成员没什么区别，可以与普通成员一样进行修饰和限制。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> radius <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">double</span> radius<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> radius<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">class</span> <span class="token class-name">Draw</span> <span class="token punctuation">{</span>     <span class="token comment">//内部类</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drawSahpe</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"drawshape"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部内部类：在方法中定义的内部类称为局部内部类。与局部变量类似</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">People</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Man</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       
    <span class="token punctuation">}</span>
   
    <span class="token keyword">public</span> <span class="token class-name">People</span> <span class="token function">getWoman</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">class</span> <span class="token class-name">Woman</span> <span class="token keyword">extends</span> <span class="token class-name">People</span><span class="token punctuation">{</span>   <span class="token comment">//局部内部类</span>
            <span class="token keyword">int</span> age <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Woman</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匿名内部类：匿名内部类就是没有名字的内部类</p>
<p>静态内部类（<strong>嵌套类</strong>）：如果你不需要内部类对象与其外围类对象之间有联系，那你可以将内部类声明为static</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        <span class="token class-name">Outter<span class="token punctuation">.</span>Inner</span> inner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Outter<span class="token punctuation">.</span>Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Outter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Outter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       
    <span class="token punctuation">}</span>
   
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Inner</span> <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token class-name">Inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashset-如何检查重复" tabindex="-1"><a class="header-anchor" href="#hashset-如何检查重复" aria-hidden="true">#</a> HashSet 如何检查重复</h3>
<p>思路整理：hashcode相同 -&gt; equals() 不同-&gt; hash再散列</p>
<ol>
<li>当你把对象加⼊HashSet时，HashSet会先计算对象的hashcode值来判断对象加⼊的位置，同时也会与其他已经加⼊的对象的hashcode值作⽐较</li>
<li>如果没有相符的hashcode，HashSet会假设对象没有重复出现。但是<strong>如果发现有相同hashcode值的对象，这时会调⽤equals()⽅法</strong>来检查hashcode相等的对象是否真的相同</li>
<li>如果两者相同，HashSet就不会让其加⼊操作成功。如果不同的话，就会重新散列到其他位置。这样我们就⼤⼤减少了equals的次数，相应就⼤⼤提⾼了执⾏速度。</li>
</ol>
<h3 id="构造方法有哪些特性" tabindex="-1"><a class="header-anchor" href="#构造方法有哪些特性" aria-hidden="true">#</a> 构造⽅法有哪些特性？</h3>
<ul>
<li>名字与类名相同</li>
<li>没有返回值，但不能⽤void声明构造函数</li>
<li>⽣成类的对象时⾃动执⾏，⽆需调⽤</li>
</ul>
<h3 id="final-static-this-super-关键字总结" tabindex="-1"><a class="header-anchor" href="#final-static-this-super-关键字总结" aria-hidden="true">#</a> final,static,this,super 关键字总结</h3>
<h4 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h4>
<p><strong>static 关键字主要有以下四种使用场景：</strong></p>
<ol>
<li><strong>修饰成员变量和成员方法:</strong> 被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享，可以并且建议通过类名调用。被 static 声明的成员变量属于静态成员变量，静态变量 存放在 Java 内存区域的方法区。调用格式：<code v-pre>类名.静态变量名</code> <code v-pre>类名.静态方法名()</code></li>
<li><strong>静态代码块:</strong> 静态代码块定义在类中方法外, 静态代码块在非静态代码块之前执行(静态代码块—&gt;非静态代码块—&gt;构造方法)。 该类不管创建多少对象，静态代码块只执行一次.</li>
<li><strong>静态内部类（static 修饰类的话只能修饰内部类）：</strong> 静态内部类与非静态内部类之间存在一个最大的区别:  非静态内部类在编译完成之后会隐含地保存着一个引用，该引用是指向创建它的外围类，但是静态内部类却没有。没有这个引用就意味着：1.  它的创建是不需要依赖外围类的创建。2. 它不能使用任何外围类的非 static 成员变量和方法。</li>
<li><strong>静态导包(用来导入类中的静态资源，1.5 之后的新特性):</strong> 格式为：<code v-pre>import static</code> 这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法。</li>
</ol>
<h4 id="final" tabindex="-1"><a class="header-anchor" href="#final" aria-hidden="true">#</a> final</h4>
<p><strong>final 关键字，意思是最终的、不可修改的，最见不得变化 ，用来修饰类、方法和变量，具有以下特点：</strong></p>
<ol>
<li>final 修饰的类不能被继承，final 类中的所有成员方法都会被隐式的指定为 final 方法；</li>
<li>final 修饰的方法不能被重写；</li>
<li>final 修饰的变量是常量，如果是基本数据类型的变量，则其数值一旦在初始化之后便不能更改；如果是引用类型的变量，则在对其初始化之后便不能让其指向另一个对象。</li>
</ol>
<p>说明：使用 final 方法的原因有两个。第一个原因是把方法锁定，以防任何继承类修改它的含义；第二个原因是效率。在早期的 Java 实现版本中，会将  final 方法转为内嵌调用。但是如果方法过于庞大，可能看不到内嵌调用带来的任何性能提升（现在的 Java 版本已经不需要使用 final  方法进行这些优化了）。类中所有的 private 方法都隐式地指定为 final。</p>
<h4 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h4>
<p>this 关键字用于引用类的当前实例。 例如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token punctuation">{</span>
    <span class="token class-name">Employees</span><span class="token punctuation">[</span><span class="token punctuation">]</span> employees<span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">manageEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> totalEmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>employees<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Total employees: "</span> <span class="token operator">+</span> totalEmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，this 关键字用于两个地方：</p>
<ul>
<li>this.employees.length：访问类 Manager 的当前实例的变量。</li>
<li>this.report（）：调用类 Manager 的当前实例的方法。</li>
</ul>
<p>此关键字是可选的，这意味着如果上面的示例在不使用此关键字的情况下表现相同。 但是，使用此关键字可能会使代码更易读或易懂。</p>
<h4 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h4>
<p>super 关键字用于从子类访问父类的变量和方法。 例如：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Super</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> number<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">showNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"number = "</span> <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sub</span> <span class="token keyword">extends</span> <span class="token class-name">Super</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">showNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，Sub 类访问父类成员变量 number 并调用其父类 Super 的 <code v-pre>showNumber（）</code> 方法。</p>
<p><strong>使用 this 和 super 要注意的问题：</strong></p>
<ul>
<li>在构造器中使用 <code v-pre>super()</code> 调用父类中的其他构造方法时，该语句必须处于构造器的首行，否则编译器会报错。另外，this 调用本类中的其他构造方法时，也要放在首行。</li>
<li>this、super 不能用在 static 方法中。</li>
</ul>
<p><strong>简单解释一下：</strong></p>
<p>被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享。而 this 代表对本类对象的引用，指向本类对象；而 super 代表对父类对象的引用，指向父类对象；所以， <strong>this 和 super 是属于对象范畴的东西，而静态方法是属于类范畴的东西</strong>。</p>
<h3 id="this与super的区别" tabindex="-1"><a class="header-anchor" href="#this与super的区别" aria-hidden="true">#</a> this与super的区别</h3>
<ul>
<li>super:它引⽤当前对象的直接⽗类中的成员（⽤来访问直接⽗类中被隐藏的⽗类中成员数据或函数，基类与派⽣类中有相同成员定义时如：super.变量名super.成员函数据名（实参）</li>
<li>this：它代表当前对象名（在程序中易产⽣⼆义性之处，应使⽤this来指明当前对象；如果函数的形参与类中的成员数据同名，这时需⽤this来指明成员变量名）</li>
<li>👻super()和this()类似，区别是：super()在⼦类中调⽤⽗类的构造⽅法，this()在本类内调⽤本类的其它构造⽅法。</li>
<li>👻super()和this()均需放在构造⽅法内第⼀⾏。</li>
<li>👻this和super不能同时出现在⼀个构造函数⾥⾯，因为this必然会调⽤其它的构造函数，其它的构造函数必然也会有super语句的存在，所以在同⼀个构造函数⾥⾯有相同的语句，就失去了语句的意义，编译器也不会通过。</li>
<li>this()和super()都指的是对象，所以，均不可以在static环境中使⽤。包括：static变量,static⽅法，static语句块。</li>
<li>👻从本质上讲，this是⼀个指向本对象的指针,然⽽super是⼀个Java关键字。</li>
</ul>
<h3 id="静态代理和动态代理" tabindex="-1"><a class="header-anchor" href="#静态代理和动态代理" aria-hidden="true">#</a> 静态代理和动态代理</h3>
<h4 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h4>
<p>代理模式就是 <strong>使用代理对象来代替对真实对象的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。</strong></p>
<p>代理模式大致有三种角色：</p>
<ul>
<li>Real Subject：真实类，也就是被代理类、委托类。用来真正完成业务服务功能；</li>
<li>Proxy：代理类。将自身的请求用 Real Subject 对应的功能来实现，代理类对象并不真正的去实现其业务功能；</li>
<li>Subject：定义 RealSubject 和 Proxy 角色都应该实现的接口。</li>
</ul>
<figure><img src="@source/Java/eightpart/personal_images/20210221222746.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>通俗来说，<strong>代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些额外的操作，并且不用修改这个方法的原有代码</strong>。如果大家学过 Spring 的 AOP，一定能够很好的理解这句话。</p>
<p>举个例子：你找了小红来帮你向小绿问话，小红就看作是代理我的代理类 Proxy，而你是 Real Subject，因为小红要传达的话其实是你说的。那么你和小红都需要实现的接口（Subject）就是说话，由于你俩都能说话，在外界看来你俩就是一样的</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723002924420.png" alt="image-20220723002924420" tabindex="0" loading="lazy"><figcaption>image-20220723002924420</figcaption></figure>
<p>看到这里，不知道大家能不能理解了为什么委托类和代理类都需要实现相同的接口？</p>
<p>那是为了保持行为的一致性，在访问者看来两者之间就没有区别。这样，通过代理类这个中间层，很好地隐藏和保护了委托类对象，能<strong>有效屏蔽外界对委托类对象的直接访问</strong>。同时，也可以在代理类上加上额外的操作，比如<strong>小红在说话之前会跳一段舞，外界就会觉得你在说话前会跳一段舞，所以，这就实现了委托类的功能增强</strong>。</p>
<p>代理模式有静态代理和动态代理两种实现方式。</p>
<h4 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h4>
<p>先来看静态代理的实现步骤：</p>
<p>1）定义一个接口（Subject）</p>
<p>2）创建一个委托类（Real Subject）实现这个接口</p>
<p>3）创建一个代理类（Proxy）同样实现这个接口</p>
<p>4）<strong>将委托类 Real Subject 注入进代理类 Proxy</strong>，在代理类的方法中调用 Real Subject 中的对应方法。这样的话，我们就可以通过代理类屏蔽对目标对象的访问，并且可以在目标方法执行前后做一些自己想做的事情。</p>
<p>从实现和应用角度来说，静态代理中，我们对目标对象的每个方法的增强都是手动完成的，非常不灵活（比如接口一旦新增加方法，目标对象和代理对象都要进行修改）且麻烦（需要对每个目标类都单独写一个代理类）。 实际应用场景非常非常少，日常开发几乎看不到使用静态代理的场景。</p>
<p>从 JVM 层面来说， <strong>静态代理在编译时就将接口、委托类、代理类这些都变成了一个个实际的 <code v-pre>.class</code> 文件。</strong></p>
<p>1）定义发送短信的接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）创建一个委托类（Real Subject）实现这个接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"send message:"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）创建一个代理类（Proxy）同样实现这个接口</p>
<p>4）将委托类 Real Subject 注入进代理类 Proxy，在代理类的方法中调用 Real Subject 中的对应方法。这样的话，我们就可以通过代理类屏蔽对目标对象的访问，并且可以在目标方法执行前后做一些自己想做的事情。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsProxy</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>

    <span class="token comment">// 将委托类注入进代理类</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SmsProxy</span><span class="token punctuation">(</span><span class="token class-name">SmsService</span> smsService<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>smsService <span class="token operator">=</span> smsService<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用委托类方法之前，我们可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method send()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用委托类方法</span>
        smsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token comment">// 调用委托类方法之后，我们同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method send()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，如何使用这个被增强的 <code v-pre>send</code> 方法呢？</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SmsService</span> smsService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SmsProxy</span> smsProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsProxy</span><span class="token punctuation">(</span>smsService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        smsProxy<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码之后，控制台打印出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>before method send<span class="token punctuation">(</span><span class="token punctuation">)</span>
send message:java
after method send<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果可以看出，我们已经增强了委托类 <code v-pre>SmsServiceImpl</code>  的 <code v-pre>send()</code> 方法。</p>
<p>当然，从上述代码我们也能看出来，静态代理存在一定的弊端。假如说我们现在新增了一个委托类实现了 <code v-pre>SmsService</code> 接口，如果我们想要对这个委托类进行增强，就需要重新写一个代理类，然后注入这个新的委托类，非常不灵活。也就是说静态代理是一个委托了对应一个代理类，能不能<strong>将代理类做成一个通用的</strong>呢？为此，动态代理应用而生。</p>
<h4 id="java-字节码生成框架" tabindex="-1"><a class="header-anchor" href="#java-字节码生成框架" aria-hidden="true">#</a> Java 字节码生成框架</h4>
<p>在讲解动态之前，我们有必要详细说一下 <code v-pre>.class</code> 字节码文件这个东西。动态代理机制和 Java 字节码生成框架息息相关。</p>
<p>在上文反射中我们提到，一个 <code v-pre>Class</code> 类对应一个 <code v-pre>.class</code> 字节码文件，也就说字节码文件中存储了一个类的全部信息。字节码其实是二进制文件，内容是只有 JVM 能够识别的机器码。</p>
<p>解析过程这样的：JVM 读取 <code v-pre>.class</code> 字节码文件，取出二进制数据，加载到内存中，解析字节码文件内的信息，生成对应的 <code v-pre>Class</code> 类对象：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003010392.png" alt="image-20220723003010392" tabindex="0" loading="lazy"><figcaption>image-20220723003010392</figcaption></figure>
<p>显然，上述这个过程是在编译期就发生的。</p>
<p>那么，由于JVM 是通过 <code v-pre>.class</code> 字节码文件（也就是二进制信息）加载类的，如果我们在运行期遵循 Java 编译系统组织 <code v-pre>.class</code> 字节码文件的格式和结构，生成相应的二进制数据，然后再把这个二进制数据加载转换成对应的类。这样，我们不就完成了在运行时动态的创建一个类。这个思想其实也就是动态代理的思想。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003018675.png" alt="image-20220723003018675" tabindex="0" loading="lazy"><figcaption>image-20220723003018675</figcaption></figure>
<p>在运行时期按照 JVM 规范对 <code v-pre>.class</code> 字节码文件的组织规则，生成对应的二进制数据。当前有很多开源框架可以完成这个功能，如</p>
<ul>
<li>ASM</li>
<li>CGLIB</li>
<li>Javassist</li>
<li>......</li>
</ul>
<p>需要注意的是，<strong>CGLIB 是基于 ASM 的</strong>。 这里简单对比一下 ASM 和 Javassist：</p>
<ul>
<li>Javassist 源代码级 API 比 ASM 中实际的字节码操作更容易使用</li>
<li>Javassist 在复杂的字节码级操作上提供了更高级别的抽象层。Javassist 源代码级 API 只需要很少的字节码知识，甚至不需要任何实际字节码知识，因此实现起来更容易、更快。</li>
<li>Javassist 使用反射机制，这使得它比 ASM 慢。</li>
</ul>
<p><strong>总的来说 ASM 比 Javassist 快得多，并且提供了更好的性能，但是 Javassist 相对来说更容易使用</strong>，两者各有千秋。</p>
<p>以 Javassist 为例，我们来看看这些框架在运行时生成 <code v-pre>.class</code> 字节码文件的强大能力。</p>
<p>正常来说，我们创建一个类的代码是这样的：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>samples</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Programmer</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">code</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I'm a Programmer,Just Coding....."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面通过 Javassist 创建和上面一模一样的 <code v-pre>Programmer</code> 类的字节码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javassist<span class="token punctuation">.</span></span><span class="token class-name">ClassPool</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javassist<span class="token punctuation">.</span></span><span class="token class-name">CtClass</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javassist<span class="token punctuation">.</span></span><span class="token class-name">CtMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javassist<span class="token punctuation">.</span></span><span class="token class-name">CtNewMethod</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyGenerator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ClassPool</span> pool <span class="token operator">=</span> <span class="token class-name">ClassPool</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 创建 Programmer 类        </span>
        <span class="token class-name">CtClass</span> cc<span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token function">makeClass</span><span class="token punctuation">(</span><span class="token string">"com.samples.Programmer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定义方法</span>
        <span class="token class-name">CtMethod</span> method <span class="token operator">=</span> <span class="token class-name">CtNewMethod</span><span class="token punctuation">.</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token string">"public void code(){}"</span><span class="token punctuation">,</span> cc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 插入方法代码</span>
        method<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span><span class="token string">"System.out.println(\"I'm a Programmer,Just Coding.....\");"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cc<span class="token punctuation">.</span><span class="token function">addMethod</span><span class="token punctuation">(</span>method<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 保存生成的字节码</span>
        cc<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">"d://temp"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过反编译工具打开 <code v-pre>Programmer.class</code> 可以看到以下代码：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003032359.png" alt="image-20220723003032359" tabindex="0" loading="lazy"><figcaption>image-20220723003032359</figcaption></figure>
<h4 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h4>
<p>了解了 Java 字节码生成框架，可以开始学习动态代理（Dynamic Proxy）了。</p>
<p>回顾一下静态代理，我们把静态代理的执行过程抽象为下图：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003049255.png" alt="image-20220723003049255" tabindex="0" loading="lazy"><figcaption>image-20220723003049255</figcaption></figure>
<p>可以看见，代理类无非是在调用委托类方法的前后增加了一些操作。委托类的不同，也就导致代理类的不同。</p>
<p>那么为了做一个通用性的代理类出来，我们把调用委托类方法的这个动作抽取出来，把它封装成一个通用性的处理类，于是就有了动态代理中的 <code v-pre>InvocationHandler</code> 角色（处理类）。</p>
<p>于是，在代理类和委托类之间就多了一个处理类的角色，这个角色主要是<strong>对代理类调用委托类方法的这个动作进行统一的调用</strong>，也就是由 <code v-pre>InvocationHandler</code> 来统一处理代理类调用委托类方法这个操作。看下图：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003057769.png" alt="image-20220723003057769" tabindex="0" loading="lazy"><figcaption>image-20220723003057769</figcaption></figure>
<p><strong>从 JVM 角度来说，动态代理是在运行时动态生成 <code v-pre>.class</code> 字节码文件 ，并加载到 JVM 中的</strong>。这个我们在 Java 字节码生成框架中已经提到过。</p>
<p>虽然动态代理在我们日常开发中使用的相对较少，但是在框架中的几乎是必用的一门技术。学会了动态代理之后，对于我们理解和学习各种框架的原理也非常有帮助，<strong>Spring AOP、RPC 等框架的实现都依赖了动态代理</strong>。</p>
<p>就 Java 来说，动态代理的实现方式有很多种，比如：</p>
<ul>
<li>JDK 动态代理</li>
<li>CGLIB 动态代理</li>
<li>Javassit 动态代理</li>
<li>......</li>
</ul>
<p>下面详细讲解这三种动态代理机制。</p>
<h4 id="jdk-动态代理机制" tabindex="-1"><a class="header-anchor" href="#jdk-动态代理机制" aria-hidden="true">#</a> JDK 动态代理机制</h4>
<p>先来看下 JDK 动态代理机制的使用步骤：</p>
<p>1）定义一个接口（Subject）</p>
<p>2）创建一个委托类（Real Subject）实现这个接口</p>
<p>3）创建一个处理类并实现 <code v-pre>InvocationHandler</code> 接口，重写其 <code v-pre>invoke</code> 方法（在 <code v-pre>invoke</code> 方法中利用反射机制调用委托类的方法，并自定义一些处理逻辑），并将委托类注入处理类</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003128864.png" alt="image-20220723003128864" tabindex="0" loading="lazy"><figcaption>image-20220723003128864</figcaption></figure>
<p>该方法有下面三个参数：</p>
<ul>
<li>proxy：代理类对象（见下一步）</li>
<li>method：还记得我们在上篇文章反射中讲到的 <code v-pre>Method.invoke</code> 吗？就是这个，我们可以通过它来调用委托类的方法（反射）</li>
</ul>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003137612.png" alt="image-20220723003137612" tabindex="0" loading="lazy"><figcaption>image-20220723003137612</figcaption></figure>
<ul>
<li>args：传给委托类方法的参数列表</li>
</ul>
<p>4）创建代理对象（Proxy）：通过 <code v-pre>Proxy.newProxyInstance()</code> 创建委托类对象的代理对象</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003147365.png" alt="image-20220723003147365" tabindex="0" loading="lazy"><figcaption>image-20220723003147365</figcaption></figure>
<p>这个方法需要 3 个参数：</p>
<ul>
<li>类加载器 ClassLoader</li>
<li>委托类实现的接口数组，至少需要传入一个接口进去</li>
<li>调用的 <code v-pre>InvocationHandler</code> 实例处理接口方法（也就是第 3 步我们创建的类的实例）</li>
</ul>
<p>也就是说：我们在通过 <code v-pre>Proxy</code> 类的 <code v-pre>newProxyInstance()</code> 创建的代理对象在调用方法的时候，实际会调用到实现了 <code v-pre>InvocationHandler</code> 接口的处理类的 <code v-pre>invoke()</code>方法，可以在 <code v-pre>invoke()</code> 方法中自定义处理逻辑，比如在方法执行前后做什么事情。</p>
<p>1）定义一个接口（Subject）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）创建一个委托类（Real Subject）实现这个接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SmsServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">SmsService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"send message:"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）创建一个处理类，并将委托类注入处理类，另外，这个处理类需要实现 <code v-pre>InvocationHandler</code> 接口，重写其 <code v-pre>invoke</code> 方法（在 <code v-pre>invoke</code> 方法中利用反射机制调用委托类的方法，并自定义一些处理逻辑）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>

    <span class="token comment">// 将委托类注入处理类（这里我们用 Object 代替，方便扩展）</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 重写 invoke 方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token comment">//调用方法之前，我们可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//调用方法之后，我们同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4）定义一个创建代理对象（Proxy）的工厂类：通过 <code v-pre>Proxy.newProxyInstance()</code> 创建委托类对象的代理对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkProxyFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
                target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5）实际使用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">SmsService</span> smsService <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">SmsService</span><span class="token punctuation">)</span> <span class="token class-name">JdkProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SmsServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
smsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码之后，控制台打印出：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>before method send
send message:Java
after method send
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cglib-动态代理机制" tabindex="-1"><a class="header-anchor" href="#cglib-动态代理机制" aria-hidden="true">#</a> CGLIB 动态代理机制</h4>
<p><strong>JDK 动态代理有一个最致命的问题是它只能代理实现了某个接口的实现类，并且代理类也只能代理接口中实现的方法，要是实现类中有自己私有的方法，而接口中没有的话，该方法不能进行代理调用</strong>。</p>
<p>为了解决这个问题，我们可以用 CGLIB 动态代理机制。</p>
<p>上文也提到过，CGLIB（Code Generation Library）是一个基于 ASM 的 Java 字节码生成框架，它允许我们在运行时对字节码进行修改和动态生成。原理就是<strong>通过字节码技术生成一个子类，并在子类中拦截父类方法的调用，织入额外的业务逻辑</strong>。关键词大家注意到没有，拦截！CGLIB 引入一个新的角色就是<strong>方法拦截器</strong> <code v-pre>MethodInterceptor</code>。和 JDK 中的处理类 <code v-pre>InvocationHandler</code> 差不多，也是用来实现方法的统一调用的。看下图：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003222393.png" alt="image-20220723003222393" tabindex="0" loading="lazy"><figcaption>image-20220723003222393</figcaption></figure>
<p>另外由于 CGLIB 采用<strong>继承</strong>的方式，所以被代理的类不能被 <code v-pre>final</code> 修饰。</p>
<p>很多知名的开源框架都使用到了 CGLIB， 例如 <strong>Spring 中的 AOP 模块中：如果目标对象实现了接口，则默认采用 JDK 动态代理，否则采用 CGLIB 动态代理</strong>。</p>
<p>来看 CGLIB 动态代理的使用步骤：</p>
<p>1）首先创建一个委托类（Real Subject）</p>
<p>2）创建一个方法拦截器实现接口 <code v-pre>MethodInterceptor</code>，并重写 <code v-pre>intercept</code> 方法。<code v-pre>intercept</code> 用于拦截并增强委托类的方法（和 JDK 动态代理 <code v-pre>InvocationHandler</code> 中的 <code v-pre>invoke</code> 方法类似）</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003232098.png" alt="image-20220723003232098" tabindex="0" loading="lazy"><figcaption>image-20220723003232098</figcaption></figure>
<p>该方法拥有四个参数：</p>
<ul>
<li>Object var1：委托类对象</li>
<li>Method var2：被拦截的方法（委托类中需要增强的方法）</li>
<li>Object[] var3：方法入参</li>
<li>MethodProxy var4：用于调用委托类的原始方法（底层也是通过反射机制，不过不是 <code v-pre>Method.invoke</code> 了，而是使用 <code v-pre>MethodProxy.invokeSuper</code> 方法）</li>
</ul>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003242424.png" alt="image-20220723003242424" tabindex="0" loading="lazy"><figcaption>image-20220723003242424</figcaption></figure>
<p>3）创建代理对象（Proxy）：通过 <code v-pre>Enhancer.create()</code> 创建委托类对象的代理对象</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220723003250555.png" alt="image-20220723003250555" tabindex="0" loading="lazy"><figcaption>image-20220723003250555</figcaption></figure>
<p>也就是说：我们在通过 <code v-pre>Enhancer</code> 类的 <code v-pre>create()</code> 创建的代理对象在调用方法的时候，实际会调用到实现了 <code v-pre>MethodInterceptor</code> 接口的处理类的 <code v-pre>intercept()</code>方法，可以在 <code v-pre>intercept()</code> 方法中自定义处理逻辑，比如在方法执行前后做什么事情。</p>
<blockquote>
<p>可以发现，CGLIB 动态代理机制和 JDK 动态代理机制的步骤差不多，CGLIB 动态代理的核心是方法拦截器 <code v-pre>MethodInterceptor</code> 和 <code v-pre>Enhancer</code>，而 JDK 动态代理的核心是处理类 <code v-pre>InvocationHandler</code> 和 <code v-pre>Proxy</code>。</p>
</blockquote>
<p>不同于 JDK 动态代理不需要额外的依赖。CGLIB 是一个开源项目，如果你要使用它的话，需要手动添加相关依赖。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1）首先创建一个委托类（Real Subject）</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AliSmsService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"send message:"</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）创建一个方法拦截器实现接口 <code v-pre>MethodInterceptor</code>，并重写 <code v-pre>intercept</code> 方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">MethodInterceptor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">MethodProxy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugMethodInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用方法之前，我们可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通过反射调用委托类的方法</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用方法之后，我们同样可以添加自己的操作</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> object<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）创建代理对象（Proxy）：通过 <code v-pre>Enhancer.create()</code> 创建委托类对象的代理对象</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">net<span class="token punctuation">.</span>sf<span class="token punctuation">.</span>cglib<span class="token punctuation">.</span>proxy<span class="token punctuation">.</span></span><span class="token class-name">Enhancer</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibProxyFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建动态代理增强类</span>
        <span class="token class-name">Enhancer</span> enhancer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置类加载器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置委托类（设置父类）</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置方法拦截器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DebugMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建代理类</span>
        <span class="token keyword">return</span> enhancer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>从 <code v-pre>setSuperclass</code> 我们就能看出，为什么说 CGLIB 是基于继承的。</p>
</blockquote>
<p>4）实际使用</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">AliSmsService</span> aliSmsService <span class="token operator">=</span> 
    <span class="token punctuation">(</span><span class="token class-name">AliSmsService</span><span class="token punctuation">)</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">AliSmsService</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
aliSmsService<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行上述代码之后，控制台打印出：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>before method send
send message:Java
after method send
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jdk-动态代理和-cglib-动态代理对比" tabindex="-1"><a class="header-anchor" href="#jdk-动态代理和-cglib-动态代理对比" aria-hidden="true">#</a> JDK 动态代理和 CGLIB 动态代理对比</h4>
<p>1）JDK 动态代理是基于实现了接口的委托类，通过接口实现代理；而 CGLIB 动态代理是基于继承了委托类的子类，通过子类实现代理。</p>
<p>2）JDK 动态代理只能代理实现了接口的类，且只能增强接口中现有的方法；而 CGLIB 可以代理未实现任何接口的类。</p>
<p>3）就二者的效率来说，大部分情况都是 JDK 动态代理的效率更高，随着 JDK 版本的升级，这个优势更加明显。</p>
<blockquote>
<p>提一嘴，常见的还有 <strong>Javassist 动态代理机制</strong>。和 CGLIB 一样，作为一个 Java 字节码生成框架，Javassist 天生就拥有在运行时动态创建一个类的能力，实现动态代理自然不在话下。 Dubbo 就是默认使用 Javassit 来进行动态代理的。</p>
</blockquote>
<h4 id="静态代理和动态代理对比" tabindex="-1"><a class="header-anchor" href="#静态代理和动态代理对比" aria-hidden="true">#</a> 静态代理和动态代理对比</h4>
<ol>
<li><strong>灵活性</strong> ：动态代理更加灵活，不需要必须实现接口，可以直接代理实现类，并且可以不需要针对每个目标类都创建一个代理类。另外，静态代理中，接口一旦新增加方法，目标对象和代理对象都要进行修改，这是非常麻烦的</li>
<li><strong>JVM 层面</strong> ：静态代理在编译时就将接口、实现类、代理类这些都变成了一个个实际的 <code v-pre>.class</code> 字节码文件。而动态代理是在运行时动态生成类字节码，并加载到 JVM 中的。</li>
</ol>
<h4 id="什么情况下使用动态代理" tabindex="-1"><a class="header-anchor" href="#什么情况下使用动态代理" aria-hidden="true">#</a> 什么情况下使用动态代理</h4>
<ol>
<li>设计模式中有一个设计原则是<strong>开闭原则</strong>，即<strong>对修改关闭，对扩展开放</strong>，我们在工作中有时会接手很多前人的代码，里面代码逻辑让人摸不着头脑，就很难去下手修改代码，那么这时我们就可以通过代理对类进行增强。</li>
<li>我们在使用 <strong>RPC 框架</strong>的时候，框架本身并不能提前知道各个业务方要调用哪些接口的哪些方法 。那么这个时候，就可用通过动态代理的方式来建立一个中间人给客户端使用，也方便框架进行搭建逻辑，某种程度上也是客户端代码和框架松耦合的一种表现。</li>
<li><strong>Spring 的 AOP</strong> 机制同样也是采用了动态代理，此处不做详细讨论。</li>
</ol>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<p>全部捋一遍下来还是收获蛮多的，我感觉只要理解了字节码在编译期生成还是在运行期生成，就差不多能够把握住静态代理和动态代理了。总结一下静态代理和动态代理中的角色：</p>
<p>静态代理：</p>
<ul>
<li>Subject：公共接口</li>
<li>Real Subject：委托类</li>
<li>Proxy：代理类</li>
</ul>
<p>JDK 动态代理：</p>
<ul>
<li>Subject：公共接口</li>
<li>Real Subject：委托类</li>
<li>Proxy：代理类</li>
<li><strong>InvocationHandler</strong>：处理类，统一调用方法</li>
</ul>
<p>CGLIB 动态代理：</p>
<ul>
<li>Subject：公共接口</li>
<li>Real Subject：委托类</li>
<li>Proxy：代理类</li>
<li><strong>MethodInterceptor</strong>：方法拦截器，统一调用方法</li>
</ul>
<h3 id="static-静态代码块与-非静态代码块-构造代码块" tabindex="-1"><a class="header-anchor" href="#static-静态代码块与-非静态代码块-构造代码块" aria-hidden="true">#</a> static{}静态代码块与{}非静态代码块(构造代码块)</h3>
<p><strong>相同点</strong>： 都是在 JVM 加载类时且在构造方法执行之前执行，在类中都可以定义多个，定义多个时按定义的顺序执行，一般在代码块中对一些 static 变量进行赋值。</p>
<p><strong>不同点</strong>： 静态代码块在非静态代码块之前执行(静态代码块 -&gt; 非静态代码块 -&gt; 构造方法)。静态代码块只在第一次 new  执行一次，之后不再执行，而非静态代码块在每 new 一次就执行一次。 非静态代码块可在普通方法中定义(不过作用不大)；而静态代码块不行。</p>
<blockquote>
<p>🐛 <strong>修正</strong>：静态代码块可能在第一次 new 对象的时候执行，但不一定只在第一次 new 的时候执行。比如通过 <code v-pre>Class.forName(&quot;ClassDemo&quot;)</code>创建 Class 对象的时候也会执行，即 new 或者 <code v-pre>Class.forName(&quot;ClassDemo&quot;)</code> 都会执行静态代码块。 一般情况下,如果有些代码比如一些项目最常用的变量或对象必须在项目启动的时候就执行的时候,需要使用静态代码块,这种代码是主动执行的。如果我们想要设计不需要创建对象就可以调用类中的方法，例如：<code v-pre>Arrays</code> 类，<code v-pre>Character</code> 类，<code v-pre>String</code> 类等，就需要使用静态方法, 两者的区别是 静态代码块是自动执行的而静态方法是被调用的时候才执行的.</p>
</blockquote>
<p>Example：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"默认构造方法！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//非静态代码块</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"非静态代码块！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//静态代码块</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"静态代码块！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"静态方法中的内容! --"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"静态方法中的代码块！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//静态代码块！--静态方法中的内容! --静态方法中的代码块！--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码输出：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>静态代码块！--非静态代码块！--默认构造方法！--静态方法中的内容! --静态方法中的代码块！--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当只执行 <code v-pre>Test.test();</code> 时输出：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>静态代码块！--静态方法中的内容! --静态方法中的代码块！--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当只执行 <code v-pre>Test test = new Test();</code> 时输出：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>静态代码块！--非静态代码块！--默认构造方法！--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>非静态代码块与构造函数的区别是：  非静态代码块是给所有对象进行统一初始化，而构造函数是给对应的对象初始化，因为构造函数是可以多个的，运行哪个构造函数就会建立什么样的对象，但无论建立哪个对象，都会先执行相同的构造代码块。也就是说，构造代码块中定义的是不同对象共性的初始化内容。</p>
<h3 id="char型变量中能否能不能存储一个中文汉字-为什么" tabindex="-1"><a class="header-anchor" href="#char型变量中能否能不能存储一个中文汉字-为什么" aria-hidden="true">#</a> char型变量中能否能不能存储⼀个中⽂汉字，为什么？</h3>
<p>char可以存储⼀个中⽂汉字，因为Java中使⽤的编码是Unicode(不选择任何特定的编码，直接使⽤字符在字符集中的编号，这是统⼀的唯⼀⽅法），⼀个char类型占2个字节（16⽐特），所以放⼀个中⽂是没问题的。</p>
<h3 id="是否可以继承string类" tabindex="-1"><a class="header-anchor" href="#是否可以继承string类" aria-hidden="true">#</a> 是否可以继承String类？</h3>
<p>String类是final类，不可以被继承。</p>
<p>补充：继承String本身就是⼀个错误的⾏为，对String类型最好的重⽤⽅式是关联关系（Has-A）和依赖关系（Use-A）⽽不是继承关系（Is-A）。</p>
<h3 id="谈谈你对多态的理解" tabindex="-1"><a class="header-anchor" href="#谈谈你对多态的理解" aria-hidden="true">#</a> 谈谈你对多态的理解？</h3>
<p>著作权归<a href="https://pdai.xn--tech-8e6h48v" target="_blank" rel="noopener noreferrer">https://pdai.tech所有<ExternalLinkIcon/></a>。 链接：<a href="https://www.pdai.tech/md/java/basic/java-basic-oop.html" target="_blank" rel="noopener noreferrer">https://www.pdai.tech/md/java/basic/java-basic-oop.html<ExternalLinkIcon/></a></p>
<p>多态分为编译时多态和运行时多态:</p>
<ul>
<li>编译时多态主要指方法的重载</li>
<li>运行时多态指程序中定义的对象引用所指向的具体类型在运行期间才确定</li>
</ul>
<p>运行时多态有三个条件:</p>
<ul>
<li>继承</li>
<li>覆盖(重写)</li>
<li>向上转型</li>
</ul>
<p>下面的代码中，乐器类(Instrument)有两个子类: Wind 和 Percussion，它们都覆盖了父类的 play() 方法，并且在 main() 方法中使用父类 Instrument 来引用 Wind 和 Percussion 对象。在 Instrument 引用调用 play() 方法时，会执行实际引用对象所在类的 play() 方法，而不是 Instrument 类的方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Instrument is playing..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Wind</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Wind is playing..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Percussion</span> <span class="token keyword">extends</span> <span class="token class-name">Instrument</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Percussion is playing..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Music</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Instrument</span><span class="token punctuation">></span></span> instruments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instruments<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Wind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        instruments<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Percussion</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Instrument</span> instrument <span class="token operator">:</span> instruments<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instrument<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>详细</p>
</blockquote>
<p>多态的概念并不难，并且在实际编码中可以说是最最高频使用率。多态就是<strong>使得同一个行为具有多个不同表现形式或形态的能力</strong>。举个形象点的例子：对于 “打印” 这个行为，使用彩色打印机 “打印” 出来的效果就是彩色的，而使用黑白打印机 “打印” 出来的效果就是黑白的。我们就称 “打印” 这个行为是多态的，彩色打印效果和黑白打印效果就是 “打印” 这个行为的两个不同的表现形式。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220618172157050.png" alt="image-20220618172157050" tabindex="0" loading="lazy"><figcaption>image-20220618172157050</figcaption></figure>
<p>还可以这样理解，<strong>同一个行为在不同的对象上会产生不同的结果</strong>。再举个形象点的例子：比如我们按下 F1 键这个行为：如果当前在 Word 下弹出的就是 Word 帮助和支持；在 Windows 下弹出的就是 Windows 帮助和支持。</p>
<h4 id="多态发生的三个必要条件" tabindex="-1"><a class="header-anchor" href="#多态发生的三个必要条件" aria-hidden="true">#</a> 多态发生的三个必要条件</h4>
<p>先看下面这段代码，首先，我们有一个基类 <code v-pre>Shape</code>，三个子类，并且都重写了基类的 <code v-pre>draw</code> 方法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Circle.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Square.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Triangle.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这几行代码就充分体现了多态性：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Shape</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Shape</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Shape</span> triangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家应该不会太陌生，就是<strong>向上转型</strong>，没错，它就是多态的体现。同样的一个 draw 方法，在这三个不同的对象上产生了三种不同的行为，多态在此体现的淋漓尽致。</p>
<p>这里需要注意的是，当使用多态方式调用方法时，编译器会首先检查父类中是否有该方法，如果没有，则编译错误；如果父类中有该方法，并且被子类重写，就会调用子类的这个方法；如果父类的方法没有被子类重写，就会调用父类的方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Shape</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用的是 Circle 的 eat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>简单来说：<strong>当父类引用变量指向子类对象后（多态），只能使用父类已声明的方法，但方法如果被重写会执行子类的方法，如果方法未被重写那么将执行父类的方法</strong>。</p>
<p>结合上述这段简单的代码，我们总结一下多态产生的必要条件：</p>
<ul>
<li>1）继承</li>
<li>2）重写</li>
<li>3）父类引用指向子类对象：<code v-pre>Parent p = new Child();</code></li>
</ul>
<figure><img src="@source/Java/eightpart/personal_images/image-20220618172217768.png" alt="image-20220618172217768" tabindex="0" loading="lazy"><figcaption>image-20220618172217768</figcaption></figure>
<h4 id="多态是如何发生的" tabindex="-1"><a class="header-anchor" href="#多态是如何发生的" aria-hidden="true">#</a> 多态是如何发生的</h4>
<p>❓ 那么，多态到底是如何发生的？编译器是如何知道父类 Shape 引用指向的是 Circle 而不是 Triangle 或 Square 呢？</p>
<p>首先，我们需要了解静态绑定和动态绑定的概念。什么是<strong>绑定</strong>？将一个方法调用同一个方法主体关联起来的过程就称作绑定。</p>
<p>若绑定发生在程序运行前，叫做<strong>静态绑定</strong>，也称<strong>前期绑定</strong>。你可能从来没有听说这个术语，因为它是<strong>面向过程</strong>语言不需选择默认的绑定方式，例如在 C 语言中就只有前期绑定这一种方法调用。</p>
<p>那么对于这段代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Shape</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Shape</span> square <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
circle<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Shape 即引用类型在编译期可知，不会被改变，而 Circle 作为实例对象类型在运行期才可知，可能会发生变化。所以如果使用前期绑定，在运行之前，编译器只知道有一个 Shape 引用，它无法得知究竟会调用哪个方法。</p>
<p>解决方法就是<strong>动态绑定</strong> Dynamic Binding，在运行时根据对象的类型自动的进行绑定，所以动态绑定也称<strong>运行时绑定</strong>。动态绑定是多态的基础。</p>
<p>注意：Java 中除了 <code v-pre>static</code>和 <code v-pre>final</code>方法（<code v-pre>private</code>方法属于 <code v-pre>final</code>方法）之外，其他所有方法都是动态绑定。这意味着通常情况下，我们不需要判断动态绑定是否会发生，它是自动发生的。</p>
<blockquote>
<p><code v-pre>final</code> 和 <code v-pre>static</code> 关键字后续会单独出文章讲解，此处就笼统的概述一下为什么这两个关键字修饰的方法是静态绑定的：</p>
<ul>
<li><code v-pre>final</code> 不允许方法重写，而多态发生的条件之一就是重写，所以 <code v-pre>final</code> 方法会在编译期间就进行绑定，即静态绑定</li>
<li><code v-pre>static</code> 方法是类直接拥有的的，与该类的任何一个对象都无关（该类的所有对象共同维护），所以也是静态绑定</li>
</ul>
</blockquote>
<h4 id="重载和重写" tabindex="-1"><a class="header-anchor" href="#重载和重写" aria-hidden="true">#</a> 重载和重写</h4>
<p>重载和重写在之前的文章中都说过了，此处正好借着多态这个主题将这两个容易混淆的概念总结一波。</p>
<p>方法的<strong>重写 Overriding</strong> 和<strong>重载 Overloading</strong> 都是是 Java 多态性的表现。</p>
<p>🔸 1）<strong>方法重写是父类与子类之间多态性的表现</strong>。其子类和父类方法的名字相同，参数个数相同，返回类型也相同，并且子类的访问权限不能比父类的严格，比如父类是 public，那么子类也只能是 public，不能比 public 更严格。也就是说，<strong>方法重写，只有方法体是不一样的，访问权限可以有限制的修改</strong>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Circle.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚨 其实，上面说的返回类型完全相同并不严格正确。下面我们来解释一下。</p>
<p>首先，我们需要知道<strong>方法的名字和参数列表称为方法的签名</strong>。例如，<code v-pre>draw()</code>  和  <code v-pre>draw(String)</code> 是两个具有相同名字， 不同签名的方法。如果在子类中定义了一个与超类签名相同的方法， 那么子类中的这个方法就覆盖/重写了超类中的这个相同签名的方法。</p>
<p>不过，<strong>返回类型不是签名的一部分</strong>， 因此，在覆盖/重写方法时， 一定要保证返回类的兼容性。 <strong>允许子类将覆盖方法的返回类型定义为原返回类型的子类型</strong>。</p>
<p>例如， 假设 <code v-pre>Shape</code> 类有</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Shape</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在后面的子类 <code v-pre>Circle</code> 中， 可以按照如下所示的方式覆盖这个方法</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Circle</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用专业术语来说，这两个 <code v-pre>draw</code> 方法具有<strong>可协变的返回类型</strong>。</p>
<p>🔸 2）方法重载并非多态的必要条件，不过可以理解成<strong>某个类的多态性的表现</strong>。所谓方法重载，就是一个类中定义了多个方法名相同，但是参数的数量或者类型不同。方法的返回类型和访问权限可以任意修改，不以它俩作为方法重载的标志。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Circle.draw()"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Circle.draw()"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Java/eightpart/personal_images/image-20220618172249142.png" alt="image-20220618172249142" tabindex="0" loading="lazy"><figcaption>image-20220618172249142</figcaption></figure>
<p>总结一下方法重载和重写：</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">方法重载</th>
<th style="text-align:center">方法重写</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">方法名</td>
<td style="text-align:center">相同</td>
<td style="text-align:center">相同</td>
</tr>
<tr>
<td style="text-align:center">参数列表</td>
<td style="text-align:center">必须不同</td>
<td style="text-align:center">必须相同</td>
</tr>
<tr>
<td style="text-align:center">返回类型</td>
<td style="text-align:center">可以不同</td>
<td style="text-align:center">子类方法的返回类型可以是原父类方法返回类型的子类型</td>
</tr>
<tr>
<td style="text-align:center">访问修饰符</td>
<td style="text-align:center">可以不同</td>
<td style="text-align:center">子类不能做更严格的限制（可以降低限制）</td>
</tr>
</tbody>
</table>
<h4 id="main-方法是否可以重载" tabindex="-1"><a class="header-anchor" href="#main-方法是否可以重载" aria-hidden="true">#</a> main 方法是否可以重载</h4>
<p>IBM 早些年出过这方面的题，考倒了一片人。首先，答案是肯定的，main 既然作为一个方法，那它当然可以被重载。</p>
<p>但是，<strong>如果是作为程序的入口，那么 main 函数只有一种写法，Java 虚拟机在运行的时候只会调用带有参数是 String 数组的那个 <code v-pre>main()</code> 方法</strong>，而其他重载的写法虚拟机是不认的，只能人为的调用。</p>
<p>举个例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">main</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"重载的 main 方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该程序运行结果如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>重载的 main 方法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看出第一个 main 方法正常调用了重载的第二个 main 方法，即 main 方法能够被完美重载。但是程序的入口仍然是第一个 main 方法即参数为 String 数组。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220618172317736.png" alt="image-20220618172317736" tabindex="0" loading="lazy"><figcaption>image-20220618172317736</figcaption></figure>
<h3 id="构造器-constructor-是否可被重写-override" tabindex="-1"><a class="header-anchor" href="#构造器-constructor-是否可被重写-override" aria-hidden="true">#</a> 构造器（constructor）是否可被重写（override）？</h3>
<p>构造器不能被继承，因此不能被重写，但可以被重载</p>
<h3 id="java-中操作字符串都有哪些类-它们之间有什么区别" tabindex="-1"><a class="header-anchor" href="#java-中操作字符串都有哪些类-它们之间有什么区别" aria-hidden="true">#</a> Java 中操作字符串都有哪些类？它们之间有什么区别？</h3>
<p>操作字符串的类有：<strong>String、StringBuffer、StringBuilder</strong>。</p>
<p>第一点: 可变和适用范围。String对象是不可变的，而StringBuffer和StringBuilder是可变字符序列。每次对String的操作相当于生成一个新的String对象，而对StringBuffer和StringBuilder的操作是对对象本身的操作，而不会生成新的对象，所以对于频繁改变内容的字符串避免使用String，因为频繁的生成对象将会对系统性能产生影响。</p>
<p>第二点: 线程安全。String由于有final修饰，是immutable的，安全性是简单而纯粹的。StringBuilder和StringBuffer的区别在于StringBuilder不保证同步，也就是说如果需要线程安全需要使用StringBuffer，不需要同步的StringBuilder效率更高</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">可变性</th>
<th>线程安全</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">String</td>
<td style="text-align:center">不可变</td>
<td>因为不可变，所以是线程安全的</td>
</tr>
<tr>
<td style="text-align:center">StringBuffer</td>
<td style="text-align:center">可变</td>
<td>线程安全的，因为其内部大多数方法都使用 <code v-pre>synchronized</code>进行同步。其效率较低</td>
</tr>
<tr>
<td style="text-align:center">StringBuilder</td>
<td style="text-align:center">可变</td>
<td>不是线程安全的，因为没有使用 <code v-pre>synchronized</code>进行同步，这也是其效率高于 StringBuffer  的原因。单线程下，优先考虑使用 StringBuilder。</td>
</tr>
</tbody>
</table>
<h3 id="string-str-i-和string-str-new-string-1-一样吗" tabindex="-1"><a class="header-anchor" href="#string-str-i-和string-str-new-string-1-一样吗" aria-hidden="true">#</a> String str = &quot;i&quot; 和String str = new String(&quot;1&quot;)⼀样吗？</h3>
<p>不⼀样，因为内存的分配⽅式不⼀样。String str=&quot;i&quot;的⽅式，JVM会将其分配到常量池中；⽽String str=new String(&quot;i&quot;)，JVM会将其分配到堆内存中。</p>
<h3 id="什么是序列化反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化反序列化" aria-hidden="true">#</a> 什么是序列化反序列化?</h3>
<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>
<p>简单来说：</p>
<ul>
<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>
<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程</li>
</ul>
<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>
<p>维基百科是如是介绍序列化的：</p>
<blockquote>
<p><strong>序列化</strong>（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象相同语义的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。</p>
</blockquote>
<p>综上：<strong>序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。</strong></p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220620170922943.png" alt="image-20220620170922943" tabindex="0" loading="lazy"><figcaption>image-20220620170922943</figcaption></figure>
<h3 id="final-finally-finalize的区别" tabindex="-1"><a class="header-anchor" href="#final-finally-finalize的区别" aria-hidden="true">#</a> final finally finalize的区别</h3>
<ul>
<li>final可以修饰类、变量、⽅法，修饰类表示该类不能被继承、修饰⽅法表示该⽅法不能被重写、修饰变量表示该变量是⼀个常量不能被重新赋值。</li>
<li>finally⼀般作⽤在try-catch代码块中，在处理异常的时候，通常我们将⼀定要执⾏的代码⽅法finally代码块中，表示不管是否出现异常，该代码块都会执⾏，⼀般⽤来存放⼀些关闭资源的代码。</li>
</ul>
<blockquote>
<p>⚠️特殊情况：当finally中包含return</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220619143704353.png" alt="image-20220619143704353" tabindex="0" loading="lazy"><figcaption>image-20220619143704353</figcaption></figure>
</blockquote>
<ul>
<li>finalize是⼀个⽅法，属于Object类的⼀个⽅法，⽽Object类是所有类的⽗类，该⽅法⼀般由垃圾回收器来调⽤，当我们调⽤System.gc()⽅法的时候，由垃圾回收器调⽤finalize()，回收垃圾，⼀个对象是否可回收的最后判断。</li>
</ul>
<blockquote>
<p>⚠️注：</p>
<ul>
<li>Java 语言提供了对象终止（finalization）机制来允许开发人员提供对象被销毁之前的自定义处理逻辑。</li>
<li>当垃圾回收器发现没有引用指向一个对象，即：垃圾回收此对象之前，总会先调用这个对象的 <code v-pre>finalize( )</code> 方法。</li>
<li><code v-pre>finalize( )</code> 方法允许在子类中被重写，用于在对象被回收时进行资源释放。通常在这个方法中进行一些资源释放和清理的工作，比如关闭文件、套接字和数据库连接等。</li>
<li><strong>永远不要主动调用某个对象的 finalize ( ) 方法，应该交给垃圾回收机制调用</strong>。理由包括下面三点：
<ul>
<li>在 <code v-pre>finalize( )</code> 执行时可能会导致对象复活。</li>
<li><code v-pre>finalize( )</code> 方法的执行时间是没有保障的，它完全由 GC 线程决定，极端情况下，若不发生 GC，则 <code v-pre>finalize( )</code> 方法将没有执行机会。</li>
<li>一个糟糕的 <code v-pre>finalize( )</code> 会严重影响 GC 的性能。</li>
</ul>
</li>
<li>从功能上来说，<code v-pre>finalize( )</code> 方法与 C++ 中的析构函数比较相似，但是 Java 采用的是基于垃圾回收器的自动内存管理机制，所以 <code v-pre>finalize( )</code> 方法在本质上不同于 C++ 中的析构函数。</li>
<li>由于 <code v-pre>finalize( )</code> 方法的存在，虚拟机中的对象一般处于三种可能的状态</li>
</ul>
</blockquote>
<h3 id="⭐java有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#⭐java有哪些数据类型" aria-hidden="true">#</a> ⭐Java有哪些数据类型</h3>
<ul>
<li>🔢 数值：byte，short，int，long</li>
<li>🧿 浮点：float，double</li>
<li>🔣 字符：char</li>
<li>☑️ 布尔：boolean</li>
</ul>
<p>这八种基本类型都有对应的包装类分别为：Byte、Short、Integer、Long、Float、Double、Character、Boolean</p>
<h4 id="基本类型和包装类型的区别" tabindex="-1"><a class="header-anchor" href="#基本类型和包装类型的区别" aria-hidden="true">#</a> 基本类型和包装类型的区别？</h4>
<ul>
<li>包装类型不赋值就是 <code v-pre>null</code> ，而基本类型有默认值且不是 <code v-pre>null</code>。</li>
<li>包装类型可用于泛型，而基本类型不可以。</li>
<li>基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中，基本数据类型的成员变量（未被 <code v-pre>static</code> 修饰 ）存放在 Java 虚拟机的堆中。包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。</li>
<li>相比于对象类型， 基本数据类型占用的空间非常小。</li>
</ul>
<p><strong>为什么说是几乎所有对象实例呢？</strong> 这是因为 HotSpot 虚拟机引入了 JIT 优化之后，会对对象进行逃逸分析，如果发现某一个对象并没有逃逸到方法外部，那么就可能通过标量替换来实现栈上分配，而避免堆上分配内存</p>
<p>⚠️注意 ： <strong>基本数据类型存放在栈中是一个常见的误区！</strong> 基本数据类型的成员变量如果没有被 <code v-pre>static</code> 修饰的话（不建议这么使用，应该要使用基本数据类型对应的包装类型），就存放在堆中。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BasicTypeVar</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="包装类型的缓存机制了解么" tabindex="-1"><a class="header-anchor" href="#包装类型的缓存机制了解么" aria-hidden="true">#</a> 包装类型的缓存机制了解么？</h4>
<p>Java 基本数据类型的包装类型的大部分都用到了缓存机制来提升性能。</p>
<p><code v-pre>Byte</code>,<code v-pre>Short</code>,<code v-pre>Integer</code>,<code v-pre>Long</code> 这 4 种包装类默认创建了数值 <strong>[-128，127]</strong> 的相应类型的缓存数据，<code v-pre>Character</code> 创建了数值在 <strong>[0,127]</strong> 范围的缓存数据，<code v-pre>Boolean</code> 直接返回 <code v-pre>True</code> or <code v-pre>False</code>。</p>
<h4 id="⭐️占用的空间大小" tabindex="-1"><a class="header-anchor" href="#⭐️占用的空间大小" aria-hidden="true">#</a> ⭐️占用的空间大小</h4>
<p>👨‍💻面试官 ： 它们的默认值和占用的空间大小知道不？</p>
<p>🙋 我 ：这 8 种基本数据类型的默认值以及所占空间的大小如下：</p>
<table>
<thead>
<tr>
<th>基本类型</th>
<th>位数</th>
<th>字节</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>int</td>
<td>32</td>
<td>4</td>
<td>0</td>
</tr>
<tr>
<td>short</td>
<td>16</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>long</td>
<td>64</td>
<td>8</td>
<td>0L</td>
</tr>
<tr>
<td>byte</td>
<td>8</td>
<td>1</td>
<td>0</td>
</tr>
<tr>
<td>char</td>
<td>16</td>
<td>2</td>
<td>'u0000'</td>
</tr>
<tr>
<td>float</td>
<td>32</td>
<td>4</td>
<td>0f</td>
</tr>
<tr>
<td>double</td>
<td>64</td>
<td>8</td>
<td>0d</td>
</tr>
<tr>
<td>boolean</td>
<td>1</td>
<td></td>
<td>false</td>
</tr>
</tbody>
</table>
<p>另外，对于 boolean，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上理解是占用 1 位，但是实际中会考虑计算机高效存储因素。</p>
<h4 id="java-中-boolean-占多少字节" tabindex="-1"><a class="header-anchor" href="#java-中-boolean-占多少字节" aria-hidden="true">#</a> Java 中 boolean 占多少字节？</h4>
<p>Oracle 官方文档地址在此：<a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html<ExternalLinkIcon/></a></p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220706230119388.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>总共 8 大基础数据类型，其余 7 个都非常明确的标明了占用多少字节，只有 boolean 模棱两可：</p>
<blockquote>
<p><strong>boolean</strong>: The <code v-pre>boolean</code> data type has only two possible values: <code v-pre>true</code> and <code v-pre>false</code>. Use this data type for simple flags that track true/false conditions. This data type represents one bit of information, but its &quot;size&quot; isn't something that's precisely defined.</p>
</blockquote>
<p>翻译下划线部分：这个数据类型表示 1 bit 的信息（true or false，编译后用 0 或 1 来表示），但是它的 size 并没有被精确地定义。也就是说，<strong>不管它占多大的空间，只有 1 个 bit 的信息是有意义的。</strong></p>
<p>事实上，boolean 到底占用多少大小的空间，“It's virtual machine dependent.”，<strong>完全取决于 Java 虚拟机本身的设计</strong>。</p>
<p>不过显然 boolean 是肯定不可能只占用 1 个 bit 的，最起码也是 1 个 Bytes（字节），因为计算机处理数据的最小单位是 1 个字节</p>
<p>《Java 虚拟机规范》对于 boolean 到底占用多少空间提供了一定的建议（只是建议，具体的实现仍然取决于每个虚拟机是否按照规范来），官方文档在这里：<a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.3.4" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.3.4<ExternalLinkIcon/></a></p>
<blockquote>
<p>Although the Java Virtual Machine defines a <code v-pre>boolean</code> type, it only provides very limited support for it. There are no Java Virtual Machine instructions solely dedicated to operations on <code v-pre>boolean</code> values. Instead, expressions in the Java programming language that operate on <code v-pre>boolean</code> values are compiled to use values of the Java Virtual Machine <code v-pre>int</code> data type.</p>
</blockquote>
<p>尽管 Java 虚拟机定义了一个布尔类型，但是它只提供了非常有限的支持，<strong>并【没有】专门用于对【boolean 值】进行操作的 Java 虚拟机指令</strong>。相反，<strong>Java 中操作 boolean 值的表达式被编译为使用 int 数据类型的值</strong>。</p>
<blockquote>
<p>The Java Virtual Machine does directly support <code v-pre>boolean</code> arrays. Its <code v-pre>newarray</code> instruction (<code v-pre>newarray</code>) enables creation of <code v-pre>boolean</code> arrays. Arrays of type <code v-pre>boolean</code> are accessed and modified using the <code v-pre>byte</code> array instructions <code v-pre>baload</code> and <code v-pre>bastore</code>.</p>
</blockquote>
<p>不过，<strong>Java 虚拟机【直接支持】【boolean 数组】</strong>，通过 <code v-pre>newarray</code> 指令创建 boolean 数组，然后通过 byte 数组指令 <code v-pre>baload</code> 和 <code v-pre>bastore</code> 来访问和修改 boolean 数组。</p>
<ul>
<li><code v-pre>newarray</code> 指令：Create new array</li>
<li><code v-pre>baload</code> 指令：Load <code v-pre>byte</code> or <code v-pre>boolean</code> from array</li>
<li><code v-pre>bastore</code> 指令：Store into <code v-pre>byte</code> or <code v-pre>boolean</code> array</li>
</ul>
<blockquote>
<p>In Oracle’s Java Virtual Machine implementation, <code v-pre>boolean</code> arrays in the Java programming language are encoded as Java Virtual Machine <code v-pre>byte</code> arrays, using 8 bits per <code v-pre>boolean</code> element.</p>
</blockquote>
<p><strong>在 Oracle 的 Java 虚拟机实现中，Java 中的 boolean 数组被编码为 byte 数组，每个 boolean 元素使用 1 字节（8 bit）</strong>。</p>
<p>总结下，Java 虚拟机规范提议：</p>
<ul>
<li>如果 boolean 是 “单独使用”：boolean 被编译为 int 类型，占 <strong>4</strong> 个字节</li>
<li>如果boolean 是以 “boolean 数组” 的形式使用：boolean 占 <strong>1</strong> 个字节，Java 虚拟机直接支持 boolean 数组，通过 <code v-pre>newarray</code> 指令创建 boolean 数组，然后通过 byte 数组指令 <code v-pre>baload</code> 和 <code v-pre>bastore</code> 来访问和修改 boolean 数组</li>
</ul>
<h3 id="float-f-3-4-是否正确" tabindex="-1"><a class="header-anchor" href="#float-f-3-4-是否正确" aria-hidden="true">#</a> float f=3.4;是否正确？</h3>
<p>不正确，赋值运算符 &quot;=&quot; 左右两边的精度类型不匹配。</p>
<p>Java中，有小数点的默认被存储为double类型，即双精度；而float类型的变量为单精度。</p>
<p>可以使用强转或加f，即 float f = (folat)3.4，float f = 3.4f。</p>
<p>测试：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">3.14222222222222222222222</span><span class="token punctuation">;</span>
    <span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">3.4</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token number">1.</span>java<span class="token operator">:</span><span class="token number">3</span><span class="token operator">:</span> 错误<span class="token operator">:</span> 不兼容的类型<span class="token operator">:</span> 从<span class="token keyword">double</span>转换到<span class="token keyword">float</span>可能会有损失
<span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token number">3.14222222222222222222222</span><span class="token punctuation">;</span>
      <span class="token operator">^</span>
<span class="token number">1</span> 个错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>拓展：Integer a = 1000，Integer b = 1000，a==b 的结果是什么？那如果 a，b 都为1，结果又是什么？</p>
</blockquote>
<p>Integer a = 1000，Integer b = 1000，a==b 结果为<strong>false</strong></p>
<p>Integer a = 1，Integer b = 1，a==b 结果为<strong>true</strong></p>
<p>这道题主要考察 Integer 包装类缓存的范围,<strong>在-128~127之间会缓存起来</strong>,比较的是直接缓存的数据,在此之外比较的是对象</p>
<h3 id="成员变量与局部变量的区别有哪些" tabindex="-1"><a class="header-anchor" href="#成员变量与局部变量的区别有哪些" aria-hidden="true">#</a> 成员变量与局部变量的区别有哪些？</h3>
<ol>
<li>从<strong>语法形式上</strong>看:成员变量是属于类的，而局部变量是在方法中定义的变量或是方法的参数；成员变量可以被public,private,static等修饰符所修饰，而<strong>局部变量不能被访问控制修饰符及static所修饰</strong>；但是，成员变量和局部变量都能被final所修饰。</li>
<li>从变量<strong>在内存中的存储方式</strong>来看:如果成员变量是使用static修饰的，那么这个成员变量是属于类的，如果没有使用static修饰，这个成员变量是属于实例的。对象存于堆内存，如果局部变量类型为基本数据类型，那么存储在栈内存，如果为引用数据类型，那存放的是指向堆内存对象的引用或者是指向常量池中的地址。</li>
<li>从变量在<strong>内存中的生存时间上</strong>看:成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动消失。</li>
<li>成员变量<strong>如果没有被赋初值</strong>:则会自动以类型的默认值而赋值（一种情况例外:被final修饰的成员变量也必须显式地赋值），而<strong>局部变量则不会自动赋值</strong>。</li>
</ol>
<h3 id="⭐接口和抽象类的区别是什么" tabindex="-1"><a class="header-anchor" href="#⭐接口和抽象类的区别是什么" aria-hidden="true">#</a> ⭐接口和抽象类的区别是什么？</h3>
<ol>
<li>接口的方法默认是public，所有方法在接口中不能有实现(Java8开始接口方法可以有默认实现），而抽象类可以有非抽象的方法。</li>
<li>接口中除了static、final变量，不能有其他变量，而抽象类中则不一定。</li>
<li>一个类可以实现多个接口，但只能实现一个抽象类。接口自己本身可以通过extends关键字扩展多个接口。</li>
<li>接口方法默认修饰符是public，抽象方法可以有public、protected和default这些修饰符（抽象方法就是为了被重写所以不能使用private关键字修饰！）。</li>
<li>从设计层面来说，抽象是对类的抽象，是一种模板设计，而接口是对行为的抽象，是一种行为的规范。</li>
</ol>
<h3 id="🌠java-泛型了解么-泛型的作用-什么是类型擦除" tabindex="-1"><a class="header-anchor" href="#🌠java-泛型了解么-泛型的作用-什么是类型擦除" aria-hidden="true">#</a> 🌠Java 泛型了解么？泛型的作用？什么是类型擦除？</h3>
<p><strong>Java 泛型（Generics）</strong> 是 JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。</p>
<p>编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 <code v-pre>ArrayList&lt;Persion&gt; persons = new ArrayList&lt;Persion&gt;()</code> 这行代码就指明了该 <code v-pre>ArrayList</code> 对象只能传入 <code v-pre>Persion</code> 对象，如果传入其他类型的对象就会报错。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并且，原生 <code v-pre>List</code> 返回类型是 <code v-pre>Object</code> ，需要手动转换类型才能使用，使用泛型后编译器自动转换。</p>
<p>泛型一般有三种使用方式:<strong>泛型类</strong>、<strong>泛型接口</strong>、<strong>泛型方法</strong>。</p>
<p>Java泛型的实现采取了“伪泛型”的策略，即Java在语法上支持泛型，但是<strong>在编译阶段会进行所谓的“类型擦除”（Type  Erasure）</strong>，将所有的泛型表示（尖括号中的内容）都替换为具体的类型（其对应的原生态类型），就像完全没有泛型一样。理解<strong>类型擦除</strong>对于用好泛型是很有帮助的，尤其是一些看起来“疑难杂症”的问题，弄明白了类型擦除也就迎刃而解了。</p>
<p>泛型的类型擦除原则是：</p>
<ul>
<li>消除类型参数声明，即删除 <code v-pre>&lt;&gt;</code>及其包围的部分。</li>
<li>根据类型参数的上下界推断并替换所有的类型参数为原生态类型：如果类型参数是无限制通配符或没有上下界限定则替换为Object，如果存在上下界限定则根据子类替换原则取类型参数的最左边限定类型（即父类）。</li>
<li>为了保证类型安全，必要时插入强制类型转换代码。</li>
<li>自动产生“桥接方法”以保证擦除类型后的代码仍然具有泛型的“多态性”。</li>
</ul>
<h4 id="擦除类定义中的类型参数" tabindex="-1"><a class="header-anchor" href="#擦除类定义中的类型参数" aria-hidden="true">#</a> 擦除类定义中的类型参数</h4>
<p><strong>无限制类型擦除</strong>  当类定义中的类型参数没有任何限制时，在类型擦除中直接被替换为Object，即形如 <code v-pre>&lt;T&gt;</code>和 <code v-pre>&lt;?&gt;</code>的类型参数都被替换为Object</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220617165626034.png" alt="image-20220617165626034" tabindex="0" loading="lazy"><figcaption>image-20220617165626034</figcaption></figure>
<p><strong>有限制类型擦除</strong>  当类定义中的类型参数存在限制（上下界）时，在类型擦除中替换为类型参数的上界或者下界，比如形如 <code v-pre>&lt;T extends Number&gt;</code>和 <code v-pre>&lt;? extends Number&gt;</code>的类型参数被替换为Number，<code v-pre>&lt;? super  Number&gt;</code>被替换为Object</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220617165706253.png" alt="image-20220617165706253" tabindex="0" loading="lazy"><figcaption>image-20220617165706253</figcaption></figure>
<h4 id="擦除方法定义中的类型参数" tabindex="-1"><a class="header-anchor" href="#擦除方法定义中的类型参数" aria-hidden="true">#</a> 擦除方法定义中的类型参数</h4>
<p>擦除方法定义中的类型参数原则和擦除类定义中的类型参数是一样的，这里仅以擦除方法定义中的有限制类型参数为例</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220617165721328.png" alt="image-20220617165721328" tabindex="0" loading="lazy"><figcaption>image-20220617165721328</figcaption></figure>
<h4 id="桥接方法和泛型的多态" tabindex="-1"><a class="header-anchor" href="#桥接方法和泛型的多态" aria-hidden="true">#</a> 桥接方法和泛型的多态</h4>
<p><a href="http://softlab.sdut.edu.cn/blog/subaochen/2017/01/generics-type-erasure/" target="_blank" rel="noopener noreferrer">http://softlab.sdut.edu.cn/blog/subaochen/2017/01/generics-type-erasure/<ExternalLinkIcon/></a></p>
<p>由于原文的篇幅过长，进行以下总结：</p>
<p>所谓的“桥接方法”（bridge method）来满足Java语法的要求，同时也保证了基于泛型的多态能够有效</p>
<p>运行的时候，会对 <code v-pre>Child</code>类的方法表进行搜索，先分析一下 <code v-pre>Child</code>类的方法表里有哪些东西：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token number">1.</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token operator">:</span> 从类型被擦除后的超类中继承过来
<span class="token number">2.</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token operator">:</span> 自己新增的方法，和超类毫无联系
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Java/eightpart/personal_images/image-20220622211220694.png" alt="image-20220622211220694" tabindex="0" loading="lazy"><figcaption>image-20220622211220694</figcaption></figure>
<h4 id="为了更深层次的理解类型擦除-选取了stackoverflow的高赞回答" tabindex="-1"><a class="header-anchor" href="#为了更深层次的理解类型擦除-选取了stackoverflow的高赞回答" aria-hidden="true">#</a> 为了更深层次的理解类型擦除，选取了Stackoverflow的高赞回答</h4>
<p>原帖：<a href="https://stackoverflow.com/questions/339699/java-generics-type-erasure-when-and-what-happens" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/339699/java-generics-type-erasure-when-and-what-happens<ExternalLinkIcon/></a></p>
<blockquote>
<p>😣问题是：<strong>When does type erasure occur?</strong> At compile time or runtime? When the class is loaded? When the class is instantiated?</p>
<p>类型擦除何时发生? 在编译时还是运行时? 当类被加载时? 当类被实例化时？</p>
</blockquote>
<p>🧐类型擦除适用于泛型的使用。类文件中肯定有元数据来说明方法/类型是否是泛型，以及约束是什么等等。但是当使用泛型时，它们被转换为编译时检查和执行时强制转换。所以这个代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> x <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被编译成</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Hi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行时，没有办法找出列表对象的 T = String 这个信息已经消失了。但是 List &lt; T &gt; 界面本身仍然宣称自己是通用的。</p>
<p>原帖：<a href="https://stackoverflow.com/questions/313584/what-is-the-concept-of-erasure-in-generics-in-java" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/313584/what-is-the-concept-of-erasure-in-generics-in-java<ExternalLinkIcon/></a></p>
<blockquote>
<p>😣What is the concept of erasure in generics in Java?</p>
<p>在 Java的类型擦除中，擦除的概念是什么？</p>
</blockquote>
<p>🧐这基本上是通过编译器技巧在 Java 中实现泛型的方式。编译后的泛型代码实际上只使用 java.lang。对象，而且有一些元数据（some metadata）可以告诉编译器它实际上是一个泛型类型。</p>
<p>当你针对一个泛型类型或方法编译一些代码时，编译器会计算出你的真正意思(例如 T 的类型参数是什么)  ，并在编译时验证你做的是正确的事情，但是发出的代码再次使用 java.lang。对象-编译器在必要时生成额外的强制转换。在执行时，List  &lt; String &gt; 和 List &lt; Date &gt; 完全相同; 编译器已经擦除了额外的类型信息。</p>
<p>比较一下 C # ，它在执行时保留信息，允许代码包含表达式，例如 typeof (T) ，它等价于 T  类——除非后者是无效的。(两者之间还有进一步的区别。NET 泛型和 Java 泛型，请注意。)在处理 Java  泛型时，类型擦除是许多“奇怪”警告/错误消息的来源。</p>
<blockquote>
<p>🥱再看一个这个回答的实战内容</p>
</blockquote>
<p>擦除，字面意思是从已编译的字节码中擦除源代码中存在的类型信息。让我们用一些代码来理解这一点。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericsErasure</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> iter <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>iter<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您编译这段代码，然后用 Java 反编译器反编译它，您将得到类似下面的代码。注意，反编译的代码不包含原始源代码中显示的类型信息的跟踪。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">PrintStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GenericsErasure</span>
<span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">GenericsErasure</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">Iterator</span> iter <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> iter<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>
            s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>iter<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="⭐-与-equals" tabindex="-1"><a class="header-anchor" href="#⭐-与-equals" aria-hidden="true">#</a> ⭐== 与 equals</h3>
<p>对于<strong>基本类型</strong>来说，== 比较的是值是否相等；</p>
<p>对于<strong>引用类型</strong>来说，== 比较的是两个引用是否指向同一个对象地址（两者在内存中存放的地址（堆内存地址）是否指向同一个地方）；</p>
<p>equals ：用来比较两个对象的内容是否相等。注意：equals 方法不能用于比较基本数据类型的变量。如果没有对 equals 方法进行重写，则比较的是引用类型的变量所指向的对象的地址（很多类重写了 equals 方法，比如 String、Integer 等把它变成了值比较，所以一般情况下 equals 比较的是值是否相等）</p>
<h3 id="hashcode-与-equals" tabindex="-1"><a class="header-anchor" href="#hashcode-与-equals" aria-hidden="true">#</a> hashCode 与 equals</h3>
<ol>
<li>如果两个对象相等，则 hashcode 一定也是相同的</li>
<li>两个对象相等,对两个 equals() 方法返回 true</li>
<li>两个对象有相同的 hashcode 值，它们也不一定是相等的</li>
<li>综上， equals() 方法被覆盖过，则 hashCode() 方法也必须被覆盖</li>
<li>hashCode() 的默认行为是对堆上的对象产生独特值。如果没有重写 hashCode() ，则该class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）</li>
</ol>
<h3 id="如何决定使用-hashmap-还是-treemap" tabindex="-1"><a class="header-anchor" href="#如何决定使用-hashmap-还是-treemap" aria-hidden="true">#</a> 如何决定使用 HashMap 还是 TreeMap？</h3>
<p><code v-pre>TreeMap&lt;K,V&gt;</code>的Key值是要求实现java.lang.Comparable，所以迭代的时候TreeMap默认是按照Key值升序排序的；TreeMap的实现是基于红黑树结构。适用于按自然顺序或自定义顺序遍历键（key）。</p>
<p><code v-pre>HashMap&lt;K,V&gt;</code>的Key值实现散列hashCode()，分布是散列的、均匀的，不支持排序；数据结构主要是桶(数组)，链表或红黑树。适用于在Map中插入、删除和定位元素。</p>
<p><strong>结论</strong>
如果你需要得到一个有序的结果时就应该使用TreeMap（因为HashMap中元素的排列顺序是不固定的）。除此之外，由于HashMap有更好的性能，所以大多不需要排序的时候我们会使用HashMap。</p>
<h3 id="⭐hashmap-的底层实现" tabindex="-1"><a class="header-anchor" href="#⭐hashmap-的底层实现" aria-hidden="true">#</a> ⭐HashMap 的底层实现</h3>
<h4 id="jdk1-8-之前" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之前" aria-hidden="true">#</a> JDK1.8 之前</h4>
<p>JDK1.8 之前 <code v-pre>HashMap</code> 底层是 <strong>数组和链表</strong> 结合在一起使用也就是 <strong>链表散列</strong>。<strong>HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) &amp; hash  判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key  是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。</strong></p>
<p><strong>所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。</strong></p>
<p><strong>JDK 1.8 HashMap 的 hash 方法源码:</strong></p>
<p>JDK 1.8 的 hash 方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> h<span class="token punctuation">;</span>
      <span class="token comment">// key.hashCode()：返回散列值也就是hashcode</span>
      <span class="token comment">// ^ ：按位异或</span>
      <span class="token comment">// >>>:无符号右移，忽略符号位，空位都以0补齐</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比一下 JDK1.7 的 HashMap 的 hash 方法源码.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This function ensures that hashCodes that differ only by</span>
    <span class="token comment">// constant multiples at each bit position have a bounded</span>
    <span class="token comment">// number of collisions (approximately 8 at default load factor).</span>

    h <span class="token operator">^=</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> h <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。</p>
<p>所谓 <strong>“拉链法”</strong> 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616155615352.png" alt="image-20220616155615352" tabindex="0" loading="lazy"><figcaption>image-20220616155615352</figcaption></figure>
<h4 id="jdk1-8-之后" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之后" aria-hidden="true">#</a> JDK1.8 之后</h4>
<p>相比于之前的版本， JDK1.8 之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616155623710.png" alt="image-20220616155623710" tabindex="0" loading="lazy"><figcaption>image-20220616155623710</figcaption></figure>
<blockquote>
<p>TreeMap、TreeSet 以及 JDK1.8 之后的 HashMap 底层都用到了红黑树。红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。</p>
</blockquote>
<blockquote>
<p>面试可以这样回答：hashmap的底层是哈希表，是基于hash算法实现的，hashmap通过put(key,value)存储，通过get(key)获取，当传入key时，hashmap会调用key.hashcode()方法计算出hash值，根据 hash 值将 value 保存在 bucket 里。当计算</p>
<p>出的 hash 值相同时，我们称之为 hash 冲突，HashMap 的做法是用链表和红黑树存储相同 hash 值的value。当 hash 冲突的个数少于等于8个时，使用链表否则使用红黑树。</p>
</blockquote>
<h3 id="⭐hashmap源码分析" tabindex="-1"><a class="header-anchor" href="#⭐hashmap源码分析" aria-hidden="true">#</a> ⭐HashMap源码分析</h3>
<h4 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h4>
<p><code v-pre>get(Object key)</code>方法根据指定的 <code v-pre>key</code>值返回对应的 <code v-pre>value</code>，该方法调用了 <code v-pre>getEntry(Object key)</code>得到相应的 <code v-pre>entry</code>，然后返回 <code v-pre>entry.getValue()</code>。因此 <code v-pre>getEntry()</code>是算法的核心。 <strong>算法思想</strong>是首先通过 <code v-pre>hash()</code>函数得到对应 <code v-pre>bucket</code>的下标，然后依次遍历冲突链表，通过 <code v-pre>key.equals(k)</code>方法来判断是否是要找的那个 <code v-pre>entry</code>。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616161400630.png" alt="image-20220616161400630" tabindex="0" loading="lazy"><figcaption>image-20220616161400630</figcaption></figure>
<p>上图中 <code v-pre>hash(k)&amp;(table.length-1)</code>等价于 <code v-pre>hash(k)%table.length</code>，原因是<em>HashMap</em>要求 <code v-pre>table.length</code>必须是2的指数，因此 <code v-pre>table.length-1</code>就是二进制低位全是1，跟 <code v-pre>hash(k)</code>相与会将哈希值的高位全抹掉，剩下的就是余数了。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//getEntry()方法</span>
<span class="token keyword">final</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>hash<span class="token operator">&amp;</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//得到冲突链表</span>
         e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//依次遍历冲突链表中的每个entry</span>
        <span class="token class-name">Object</span> k<span class="token punctuation">;</span>
        <span class="token comment">//依据equals()方法判断是否相等</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put()</h4>
<p><code v-pre>put(K key, V value)</code>方法是将指定的 <code v-pre>key, value</code>对添加到 <code v-pre>map</code>里。该方法首先会对 <code v-pre>map</code>做一次查找，看是否包含该元组，如果已经包含则直接返回，查找过程类似于 <code v-pre>getEntry()</code>方法；如果没有找到，则会通过 <code v-pre>addEntry(int hash, K key, V value, int bucketIndex)</code>方法插入新的 <code v-pre>entry</code>，插入方式为<strong>头插法</strong>。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616161439305.png" alt="image-20220616161439305" tabindex="0" loading="lazy"><figcaption>image-20220616161439305</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//addEntry()</span>
<span class="token keyword">void</span> <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">>=</span> threshold<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//自动扩容，并重新哈希</span>
        hash <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        bucketIndex <span class="token operator">=</span> hash <span class="token operator">&amp;</span> <span class="token punctuation">(</span>table<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//hash%table.length</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//在冲突链表头部插入新的entry</span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="remove" tabindex="-1"><a class="header-anchor" href="#remove" aria-hidden="true">#</a> remove()</h4>
<p><code v-pre>remove(Object key)</code>的作用是删除 <code v-pre>key</code>值对应的 <code v-pre>entry</code>，该方法的具体逻辑是在 <code v-pre>removeEntryForKey(Object key)</code>里实现的。<code v-pre>removeEntryForKey()</code>方法会首先找到 <code v-pre>key</code>值对应的 <code v-pre>entry</code>，然后删除该 <code v-pre>entry</code>(修改链表的相应引用)。查找过程跟 <code v-pre>getEntry()</code>过程类似。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616161551183.png" alt="image-20220616161551183" tabindex="0" loading="lazy"><figcaption>image-20220616161551183</figcaption></figure>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//removeEntryForKey()</span>
<span class="token keyword">final</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token function">removeEntryForKey</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//hash&amp;(table.length-1)</span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> prev <span class="token operator">=</span> table<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//得到冲突链表</span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//遍历冲突链表</span>
        <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token class-name">Object</span> k<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//找到要删除的entry</span>
            modCount<span class="token operator">++</span><span class="token punctuation">;</span> size<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">==</span> e<span class="token punctuation">)</span> table<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> next<span class="token punctuation">;</span><span class="token comment">//删除的是冲突链表的第一个entry</span>
            <span class="token keyword">else</span> prev<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
            <span class="token keyword">return</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        prev <span class="token operator">=</span> e<span class="token punctuation">;</span> e <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashmap-的长度为什么是-2-的幂次方" tabindex="-1"><a class="header-anchor" href="#hashmap-的长度为什么是-2-的幂次方" aria-hidden="true">#</a> HashMap 的长度为什么是 2 的幂次方</h3>
<p>为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash  值的范围值-2147483648 到 2147483647，前后加起来大概 40  亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个 40  亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是“ <code v-pre>(n - 1) &amp; hash</code>”。（n 代表数组长度）。这也就解释了 HashMap 的长度为什么是 2 的幂次方。</p>
<p><strong>这个算法应该如何设计呢？</strong></p>
<p>我们首先可能会想到采用%取余的操作来实现。但是，重点来了：<strong>“取余(%)操作中如果除数是 2 的幂次则等价于与其除数减一的与(&amp;)操作（也就是说 hash%length==hash&amp;(length-1)的前提是 length 是 2 的 n 次方；）。”</strong> 并且 <strong>采用二进制位操作 &amp;，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是 2 的幂次方。</strong></p>
<p>🙋‍♂️笔者认为Guide写的这个摸棱两可，所以找了一个StackOverFlow中描述更为清楚的翻译为下：</p>
<blockquote>
<p>🧚‍♂️原帖：<a href="https://stackoverflow.com/questions/53526790/why-are-hashmaps-implemented-using-powers-of-two" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/53526790/why-are-hashmaps-implemented-using-powers-of-two<ExternalLinkIcon/></a></p>
<p>当你从一个幂为2的数字中减去1得到的是一个二进制表示都是1的数字。例如16是2的幂。如果从中减去1，得到15，它的二进制表示是1111。现在，如果你用1111对任何一个数字进行位 AND  运算，你将得到这个数字的最后4位，换句话说，它等于这个数字乘以16的模(除法运算通常是一个昂贵的运算。因此，位操作通常比除法更受欢迎)。最后的4位将计算为0到15之间的任意数字，这些数字是基础数组的索引。</p>
<p>你可以改成17。在这种情况下，从中减去1得到16也就是二进制的10000。现在你对一个16的数做 AND（与&amp;）  运算，你会失去所有的位，除了从结尾开始的第5位。因此，无论取多少数，数组索引都是16或0。这意味着会有很多冲突，这反过来又意味着性能很差。您将需要 O (log n)而不是 O  (1)进行检索，因为当冲突发生时，给定桶中的所有节点都将存储在一个红黑色树中。不仅如此。如果您在一个多线程环境中使用  ConcurrentHashMap，那么您将经历大量的同步，因为所有新添加的内容最终都会以非常少的存储桶(在上述情况下只有2-0和16个)结束，并且当您在一个已经有其他节点的存储桶中添加新节点时，存储桶将被锁定，以避免由于多个线程的修改而导致的数据不一致。因此，尝试添加新节点的其他线程需要等待当前线程释放锁。</p>
<p>最后，我还应该提到，Java HashMap 实现还将键的哈希代码的16位向右移动，并在用(length-1)进行位 AND 之前对原哈希代码进行位异或操作，以确保高阶位的效果也被捕获。</p>
<p>因此，基本上要点是，如果大小是2的幂次方，那么与其他任何不是2的大小相比，键将更均匀地分布在整个数组中，最小的冲突将导致更好的检索性能(在ConcurrentHashMap 的情况下也更少的同步)。</p>
</blockquote>
<p>为什么能减少碰撞？这是因为hashmap的hash值是hashCode右移16位得到的，这么做使得hash值的低位保留了高位的信息，所以只要低位就可以了。</p>
<p>一句话，HashMap的长度为2的幂次方的原因是为了减少Hash碰撞，尽量使Hash算法的结果均匀分布。（只有当长度是2^n时，长度-1的二进制低位才全部是1）</p>
<blockquote>
<p>实际场景可以这样回答</p>
</blockquote>
<p>Hash 值的范围值比较大，使用之前需要先对数组的长度取模运算，得到的余数才是元素存放的位置也就是对应的数组下标。</p>
<p>这个数组下标的计算方法是 <code v-pre>(n - 1) &amp; hash</code></p>
<p>将HashMap的长度定为2 的幂次方，这样就可以使用 <code v-pre>(n - 1)&amp;hash</code>位运算代替%取余的操作，提高性能。</p>
<blockquote>
<p>拓展：<strong>HashMap默认加载因子为什么选择0.75呢？</strong></p>
</blockquote>
<p>0.75是对<strong>空间和时间效率</strong>的一个平衡选择，根据泊松分布，loadFactor 取0.75碰撞最小。一般不会修改，除非在时间和空间比较特殊的情况下 ：</p>
<ul>
<li>如果内存空间很多而又对时间效率要求很高，可以降低负载因子Load factor的值 。</li>
<li>如果内存空间紧张而对时间效率要求不高，可以增加负载因子loadFactor的值，这个值可以大于1。</li>
</ul>
<h3 id="hashmap-多线程操作导致死循环问题" tabindex="-1"><a class="header-anchor" href="#hashmap-多线程操作导致死循环问题" aria-hidden="true">#</a> HashMap 多线程操作导致死循环问题</h3>
<p>主要原因在于并发下的 Rehash 会造成元素之间会形成一个循环链表。不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用  HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。并发环境下推荐使用 ConcurrentHashMap 。</p>
<p>详情请查看：<a href="https://coolshell.cn/articles/9606.html" target="_blank" rel="noopener noreferrer">https://coolshell.cn/articles/9606.html<ExternalLinkIcon/></a></p>
<h4 id="为什么hashmap线程不安全" tabindex="-1"><a class="header-anchor" href="#为什么hashmap线程不安全" aria-hidden="true">#</a> 为什么HashMap线程不安全</h4>
<h5 id="put的时候导致的多线程数据不一致" tabindex="-1"><a class="header-anchor" href="#put的时候导致的多线程数据不一致" aria-hidden="true">#</a> put的时候导致的多线程数据不一致</h5>
<p>这个问题比较好想象，比如有两个线程A和B，首先A希望插入一个key-value对到HashMap中，首先计算记录所要落到的桶的索引坐标，然后获取到该桶里面的链表头结点，此时线程A的时间片用完了，而此时线程B被调度得以执行，和线程A一样执行，只不过线程B成功将记录插到了桶里面，假设线程A插入的记录计算出来的桶索引和线程B要插入的记录计算出来的桶索引是一样的，那么当线程B成功插入之后，线程A再次被调度运行时，它依然持有过期的链表头但是它对此一无所知，以至于它认为它应该这样做，如此一来就覆盖了线程B插入的记录，这样线程B插入的记录就凭空消失了，造成了数据不一致的行为。</p>
<h5 id="get操作可能因为resize而引起死循环" tabindex="-1"><a class="header-anchor" href="#get操作可能因为resize而引起死循环" aria-hidden="true">#</a> get操作可能因为resize而引起死循环</h5>
<p>见上一个问题的回答</p>
<h3 id="为什么java只有值传递" tabindex="-1"><a class="header-anchor" href="#为什么java只有值传递" aria-hidden="true">#</a> 为什么Java只有值传递</h3>
<p>个人理解，不管在方法中如何调用都是只拷贝。例如（int a, int b）就是拷贝传入的值到另外一个地址；如果传入的是（int[] arr）或者（Integer a）则就是拷贝这个的地址到另外一个地址，实质上两个（原值和拷贝的地址）都指向同一个地址。</p>
<h3 id="异常处理总结" tabindex="-1"><a class="header-anchor" href="#异常处理总结" aria-hidden="true">#</a> 异常处理总结</h3>
<p>finally 块不会被执行：</p>
<ol>
<li>在 try 或 finally 块中用了 System.exit(int) 退出程序。但是，如果 System.exit(int) 在异常
语句之后， finally 还是会被执行</li>
<li>程序所在的线程死亡。</li>
<li>关闭 CPU。</li>
</ol>
<p>下面这部分内容来自 issue:<a href="https://github.com/Snailclimb/JavaGuide/issues/190%E3%80%82" target="_blank" rel="noopener noreferrer">https://github.com/Snailclimb/JavaGuide/issues/190。<ExternalLinkIcon/></a>
<strong>注意：</strong> 当 try 语句和 finally 语句中都有 return 语句时，在方法返回之前，finally 语句的内容将被执行，并且 finally 语句的返回值将会覆盖原始的返回值。如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> value <span class="token operator">*</span> value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>《java核心技术卷一》中提到过：当finally子句包含return 语句时（当然在设计原则上是不允许在finally块中抛出异常或者 执行return语句的），将会出现一种意想不到的结果。假设利用return语句从try 语句块中退出。在方法返回前，finally子句的内容将被执行。如果finally子句中也有一个return语句，这个返回值将会覆盖原始的返回值。</p>
<h3 id="有哪些常见的-io-模型" tabindex="-1"><a class="header-anchor" href="#有哪些常见的-io-模型" aria-hidden="true">#</a> 有哪些常见的 IO 模型?</h3>
<p>UNIX 系统下， IO 模型一共有 5 种： 同步阻塞 I/O、同步非阻塞 I/O、I/O 多路复用、信号驱动 I/O 和异步 I/O。</p>
<h4 id="阻塞式-i-o" tabindex="-1"><a class="header-anchor" href="#阻塞式-i-o" aria-hidden="true">#</a> 阻塞式 I/O</h4>
<p>应用进程被阻塞，直到数据复制到应用进程缓冲区中才返回。 应该注意到，在阻塞的过程中，其它程序还可以执行，因此阻塞不意味着整个操作系统都被阻塞。因为其他程序还可以执行，因此不消耗 CPU 时间，这种模型的执行效率会比较高。 下图中，recvfrom 用于接收 Socket 传来的数据，并复制到应用进程的缓冲区 buf 中。这里把 recvfrom() 当成系统调用。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220628221701308.png" alt="image-20220628221701308" tabindex="0" loading="lazy"><figcaption>image-20220628221701308</figcaption></figure>
<h4 id="非阻塞式-i-o" tabindex="-1"><a class="header-anchor" href="#非阻塞式-i-o" aria-hidden="true">#</a> 非阻塞式 I/O</h4>
<p>应用进程执行系统调用之后，内核返回一个错误码。应用进程可以继续执行，但是需要不断的执行系统调用来获知 I/O 是否完成，这种方式称为轮询(polling)。</p>
<p>由于 CPU 要处理更多的系统调用，因此这种模型是比较低效的。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220628221710263.png" alt="image-20220628221710263" tabindex="0" loading="lazy"><figcaption>image-20220628221710263</figcaption></figure>
<h4 id="i-o-复用" tabindex="-1"><a class="header-anchor" href="#i-o-复用" aria-hidden="true">#</a> I/O 复用</h4>
<p><strong>使用 select 或者 poll 等待数据</strong>，并且可以等待多个套接字中的任何一个变为可读，这一过程会被阻塞，当某一个套接字可读时返回。之后再使用 recvfrom 把数据从内核复制到进程中。</p>
<p>它可以让单个进程具有处理多个 I/O 事件的能力。又被称为 Event Driven I/O，即事件驱动 I/O。</p>
<p>如果一个 Web 服务器没有 I/O 复用，那么每一个 Socket 连接都需要创建一个线程去处理。如果同时有几万个连接，那么就需要创建相同数量的线程。并且相比于多进程和多线程技术，I/O 复用不需要进程线程创建和切换的开销，系统开销更小。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220628221721484.png" alt="image-20220628221721484" tabindex="0" loading="lazy"><figcaption>image-20220628221721484</figcaption></figure>
<h4 id="信号驱动-i-o" tabindex="-1"><a class="header-anchor" href="#信号驱动-i-o" aria-hidden="true">#</a> 信号驱动 I/O</h4>
<p>应用进程使用 sigaction 系统调用，内核立即返回，应用进程可以继续执行，也就是说等待数据阶段应用进程是非阻塞的。内核在数据到达时向应用进程发送 SIGIO 信号，应用进程收到之后在信号处理程序中调用 recvfrom 将数据从内核复制到应用进程中。</p>
<p>相比于非阻塞式 I/O 的轮询方式，信号驱动 I/O 的 CPU 利用率更高。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220628221734114.png" alt="image-20220628221734114" tabindex="0" loading="lazy"><figcaption>image-20220628221734114</figcaption></figure>
<h4 id="异步-i-o" tabindex="-1"><a class="header-anchor" href="#异步-i-o" aria-hidden="true">#</a> 异步 I/O</h4>
<p>进行 aio_read（asynchronous read） 系统调用会立即返回，应用进程继续执行，不会被阻塞，内核会在所有操作完成之后向应用进程发送信号。</p>
<p>异步 I/O 与信号驱动 I/O 的区别在于，异步 I/O 的信号是通知应用进程 I/O 完成，而信号驱动 I/O 的信号是通知应用进程可以开始 I/O。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220628221741472.png" alt="image-20220628221741472" tabindex="0" loading="lazy"><figcaption>image-20220628221741472</figcaption></figure>
<h3 id="⭐bio-nio-aio-有什么区别" tabindex="-1"><a class="header-anchor" href="#⭐bio-nio-aio-有什么区别" aria-hidden="true">#</a> ⭐BIO,NIO,AIO 有什么区别</h3>
<figure><img src="@source/Java/eightpart/personal_images/image-20220615203937591.png" alt="image-20220615203937591" tabindex="0" loading="lazy"><figcaption>image-20220615203937591</figcaption></figure>
<blockquote>
<p>Java BIO[Blocking I/O] | 同步阻塞I/O模式</p>
</blockquote>
<figure><img src="@source/Java/eightpart/personal_images/image-20220731160638775.png" alt="image-20220731160638775" tabindex="0" loading="lazy"><figcaption>image-20220731160638775</figcaption></figure>
<p>BIO 全称Block-IO 是一种同步且阻塞的通信模式。是一个比较传统的通信方式，模式简单，使用方便。但并发处理能力低，通信耗时，依赖网速</p>
<blockquote>
<p>Java NIO[New I/O] | 同步非阻塞模式</p>
</blockquote>
<figure><img src="@source/Java/eightpart/personal_images/image-20220731160650184.png" alt="image-20220731160650184" tabindex="0" loading="lazy"><figcaption>image-20220731160650184</figcaption></figure>
<p>可以看美团技术团队2016年写的文章：<a href="https://tech.meituan.com/2016/11/04/nio.html" target="_blank" rel="noopener noreferrer">Java NIO浅析<ExternalLinkIcon/></a></p>
<p>Java 中的 NIO 于 Java 1.4 中引入，对应 <code v-pre>java.nio</code> 包，提供了Java NIO的实现主要涉及三大核心内容： <code v-pre>Channel</code> , <code v-pre>Selector</code>，<code v-pre>Buffer</code> 等抽象。Selector用于监听多个Channel的事件，比如连接打开或数据到达，因此，一个线程可以实现对多个数据Channel的管理。传统I/O基于数据流进行I/O读写操作；而Java NIO基于Channel和Buffer进行I/O读写操作，并且数据总是被从Channel读取到Buffer中，或者从Buffer写入Channel中。</p>
<p>Java 中的 NIO 可以看作是 <strong>I/O 多路复用模型</strong>。也有很多人认为，Java 中的 NIO 属于同步非阻塞 IO 模型。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220615204150338.png" alt="image-20220615204150338" tabindex="0" loading="lazy"><figcaption>image-20220615204150338</figcaption></figure>
<p>同步非阻塞 IO 模型中，应用程序会<strong>一直发起 read 调用，等待数据从内核空间拷贝到用户空间的这段时间里，线程依然是阻塞的，直到在内核把数据拷贝到用户空间</strong>。</p>
<p>相比于同步阻塞 IO 模型，同步非阻塞 IO 模型确实有了很大改进。通过轮询操作，避免了一直阻塞。</p>
<p>但是，这种 IO 模型同样存在问题：<strong>应用程序不断进行 I/O 系统调用轮询数据是否已经准备好的过程是十分消耗 CPU 资源的。</strong></p>
<p>这个时候，<strong>I/O 多路复用模型</strong> 就上场了。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220615204200618.png" alt="image-20220615204200618" tabindex="0" loading="lazy"><figcaption>image-20220615204200618</figcaption></figure>
<p>IO 多路复用模型中，线程<strong>首先发起 select 调用，询问内核数据是否准备就绪</strong>，等内核把数据准备好了，用户线程再发起 read 调用。<strong>read 调用的过程（数据从内核空间 -&gt; 用户空间）还是阻塞的</strong>。</p>
<blockquote>
<p>目前支持 IO 多路复用的系统调用，有 select，epoll 等等。select 系统调用，目前几乎在所有的操作系统上都有支持。</p>
<ul>
<li><strong>select 调用</strong> ：内核提供的系统调用，它支持一次查询多个系统调用的可用状态。几乎所有的操作系统都支持。</li>
<li><strong>epoll 调用</strong> ：linux 2.6 内核，属于 select 调用的增强版本，优化了 IO 的执行效率。</li>
</ul>
</blockquote>
<p><strong>IO 多路复用模型，通过减少无效的系统调用，减少了对 CPU 资源的消耗。</strong></p>
<p>Java 中的 NIO ，有一个非常重要的<strong>选择器 ( Selector )</strong> 的概念，也可以被称为 <strong>多路复用器</strong>。通过它，只需要一个线程便可以管理多个客户端连接。当客户端数据到了之后，才会为其服务。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220615204212255.png" alt="image-20220615204212255" tabindex="0" loading="lazy"><figcaption>image-20220615204212255</figcaption></figure>
<blockquote>
<p>Java AIO[Asynchronous I/O] | 异步非阻塞I/O模型</p>
</blockquote>
<figure><img src="@source/Java/eightpart/personal_images/image-20220731160701735.png" alt="image-20220731160701735" tabindex="0" loading="lazy"><figcaption>image-20220731160701735</figcaption></figure>
<p>AIO 也就是 NIO 2。Java 7 中引入了 NIO 的改进版 NIO 2,它是异步 IO 模型。</p>
<p>异步 IO 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220615205139466.png" alt="image-20220615205139466" tabindex="0" loading="lazy"><figcaption>image-20220615205139466</figcaption></figure>
<p>目前来说 AIO 的应用还不是很广泛。Netty 之前也尝试使用过 AIO，不过又放弃了。这是因为，Netty 使用了 AIO 之后，在 Linux 系统上的性能并没有多少提升。</p>
<p>最后，来一张图，简单总结一下 Java 中的 BIO、NIO、AIO。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220615205148242.png" alt="image-20220615205148242" tabindex="0" loading="lazy"><figcaption>image-20220615205148242</figcaption></figure>
<h3 id="⭐java集合类框架的基本接口有哪些" tabindex="-1"><a class="header-anchor" href="#⭐java集合类框架的基本接口有哪些" aria-hidden="true">#</a> ⭐Java集合类框架的基本接口有哪些？</h3>
<p>Java中的集合分为value（Conllection），key-value(Map)两种存储结构</p>
<blockquote>
<p>存储value有分为List 、Set、Queue</p>
</blockquote>
<p>List：有序，可存储重复元素</p>
<p>Set：无序，元素不可重复。根据equals和hashcode判断（如果一个对象要存储在Set中，必须重写equals和hashCode方法）</p>
<p>Queue：队列</p>
<blockquote>
<p>存储key-value的为map</p>
</blockquote>
<figure><img src="@source/Java/eightpart/personal_images/image-20220609215207876.png" alt="image-20220609215207876" tabindex="0" loading="lazy"><figcaption>image-20220609215207876</figcaption></figure>
<figure><img src="@source/Java/eightpart/personal_images/image-20220609215218381.png" alt="image-20220609215218381" tabindex="0" loading="lazy"><figcaption>image-20220609215218381</figcaption></figure>
<figure><img src="@source/Java/eightpart/personal_images/image-20220609215224938.png" alt="image-20220609215224938" tabindex="0" loading="lazy"><figcaption>image-20220609215224938</figcaption></figure>
<h3 id="⭐-arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#⭐-arraylist-与-linkedlist-区别" aria-hidden="true">#</a> ⭐ Arraylist 与 LinkedList 区别</h3>
<ol>
<li><strong>是否保证线程安全</strong>： ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；</li>
<li><strong>底层数据结构</strong>： Arraylist 底层使用的是 Object 数组； LinkedList 底层使用的是 双向链表数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）</li>
<li><strong>插入和删除是否受元素位置的影响</strong>：①ArrayList采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。比如：执行add(Ee)方法的时候，ArrayList会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置i插入和删除元素的话（add(intindex,Eelement)）时间复杂度就为O(n-i)。因为在进行上述操作的时候集合中第i和第i个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。②LinkedList采用链表存储，所以对于add(Ee)方法的插入，删除元素时间复杂度不受元素位置的影响，近似O(1)，如果是要在指定位置i插入和删除元素的话（(add(intindex,Eelement)）时间复杂度近似为o(n))因为需要先移动到指定位置再插入。</li>
<li><strong>是否支持快速随机访问</strong>：LinkedList不支持高效的随机元素访问，而ArrayList支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于get(intindex)方法)。</li>
<li><strong>内存空间占用</strong>：ArrayList的空间浪费主要体现在在list列表的结尾会预留一定的容量空间，而LinkedList的空间花费则体现在它的每一个元素都需要消耗比ArrayList更多的空间（因为要存放直接后继和直接前驱以及数据）。</li>
</ol>
<h3 id="hashmap和hashtable有什么区别" tabindex="-1"><a class="header-anchor" href="#hashmap和hashtable有什么区别" aria-hidden="true">#</a> HashMap和HashTable有什么区别</h3>
<ol>
<li><strong>HashMap</strong>可以接受为null的key和value，key为null的键值对放在下标为0的头结点的链表中，而<strong>Hashtable</strong>则不行。</li>
<li>HashMap是<strong>非线程安全</strong>的，HashTable是线程安全的。Jdk1.5提供了<strong>ConcurrentHashMap</strong>，它是HashTable的替代。</li>
<li><strong>Hashtable</strong>很多方法是<strong>同步</strong>方法，在单线程环境下它比HashMap要慢。</li>
<li><strong>哈希值的使用</strong>不同，HashTable直接使用对象的hashCode。而HashMap重新计算hash值。</li>
</ol>
<h3 id="concurrenthashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-和-hashtable-的区别" aria-hidden="true">#</a> ConcurrentHashMap 和 Hashtable 的区别</h3>
<p><code v-pre>ConcurrentHashMap</code> 和 <code v-pre>Hashtable</code> 的区别主要体现在实现线程安全的方式上不同。</p>
<p>底层数据结构：JDK1.7的 <code v-pre>ConcurrentHashMap</code>底层采用<strong>分段的数组+链表</strong>实现，JDK1.8采用的数据结构跟 <code v-pre>HashMap1.8</code>的结构一样，<strong>数组+链表/红黑二叉树</strong>。<code v-pre>Hashtable</code>和JDK1.8之前的 <code v-pre>HashMap</code>的底层数据结构类似都是采用数组+链表的形式，数组是 <code v-pre>HashMap</code>的主体，链表则是主要为了解决哈希冲突而存在的；</p>
<p>实现线程安全的方式（重要）：</p>
<ol>
<li>在JDK1.7的时候，ConcurrentHashMap（分段锁）对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。到了JDK1.8的时候已经摒弃了Segment的概念，而是直接用Node数组+链表+红黑树的数据结构来实现，并发控制使用synchronized和CAS来操作。（JDK1.6以后对synchronized锁做了很多优化）整个看起来就像是优化过且线程安全的HashMap，虽然在JDK1.8中还能看到Segment的数据结构，但是已经简化了属性，只是为了兼容旧版本；</li>
<li>HashTable和HashMap的实现原理几乎一样，差别无非是<strong>1.HashTable不允许key和value为null；2.HashTable是线程安全的。<strong>但是HashTable线程安全的策略实现代价却太大了，简单粗暴，get/put所有相关操作都是synchronized的，这相当于给整个哈希表加了一把</strong>大锁</strong>，多线程访问时候，只要有一个线程访问或操作该对象，那其他线程只能阻塞，相当于将所有的操作<strong>串行化</strong>，在竞争激烈的并发场景中性能就会非常差。</li>
</ol>
<figure><img src="@source/Java/eightpart/personal_images/image-20220606221411976.png" alt="image-20220606221411976" tabindex="0" loading="lazy"><figcaption>image-20220606221411976</figcaption></figure>
<p>JDK1.7 的 ConcurrentHashMap：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220606221435298.png" alt="image-20220606221435298" tabindex="0" loading="lazy"><figcaption>image-20220606221435298</figcaption></figure>
<p>JDK1.8 的 ConcurrentHashMap：
JDK1.8 的 ConcurrentHashMap 不在是 Segment 数组 + HashEntry 数组 + 链表，而是 Node 数组 + 链表 / 红黑树。不过，Node 只能用于链表的情况，红黑树的情况需要使用 TreeNode 。当冲突链表达到一定⻓度时，链表会转换成红黑树。</p>
<h3 id="⭐concurrenthashmap线程安全的具体实现方式-底层具体实现" tabindex="-1"><a class="header-anchor" href="#⭐concurrenthashmap线程安全的具体实现方式-底层具体实现" aria-hidden="true">#</a> ⭐ConcurrentHashMap线程安全的具体实现方式/底层具体实现</h3>
<h4 id="jdk1-7" tabindex="-1"><a class="header-anchor" href="#jdk1-7" aria-hidden="true">#</a> JDK1.7</h4>
<figure><img src="@source/Java/eightpart/personal_images/image-20220606221435298.png" alt="image-20220606221435298" tabindex="0" loading="lazy"><figcaption>image-20220606221435298</figcaption></figure>
<p>首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。</p>
<p><code v-pre>ConcurrentHashMap</code> 是由 <code v-pre>Segment </code>数组结构和 <code v-pre>HashEntry</code> 数组结构组成。</p>
<p>Segment实现了ReentrantLock,所以Segment是一种可重入锁，扮演锁的⻆色。HashEntry用于存储键值对数据。</p>
<div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre v-pre class="language-JAVA"><code>static class Segment&lt;K,V&gt; extends ReentrantLock implements Serializable {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 <code v-pre>ConcurrentHashMap</code>里包含一个 <code v-pre>Segment</code>数组。<code v-pre>Segment</code>的结构和 <code v-pre>HashMap</code>类似，是一种数组和链表结构，一个 <code v-pre>Segment</code>包含一个 <code v-pre>HashEntry</code>数组，每个 <code v-pre>HashEntry</code>是一个链表结构的元素，每个Segment守护着一个 <code v-pre>HashEntry</code>数组里的元素，当对 <code v-pre>HashEntry</code>数组的数据进行修改时，必须首先获得对应的Segment的锁。</p>
<h4 id="jdk1-8" tabindex="-1"><a class="header-anchor" href="#jdk1-8" aria-hidden="true">#</a> JDK1.8</h4>
<figure><img src="@source/Java/eightpart/personal_images/image-20220606222144072.png" alt="image-20220606222144072" tabindex="0" loading="lazy"><figcaption>image-20220606222144072</figcaption></figure>
<p><code v-pre>ConcurrentHashMap</code>取消了Segment分段锁，采用 <code v-pre>CAS</code>和 <code v-pre>synchronized</code>来保证并发安全。数据结构跟 <code v-pre>HashMap1.8</code>的结构类似，数组+链表/红黑二叉树。Java 8在链表⻓度超过一定阈值（8）时将链表（寻址时间复杂度为O(N)）转换为红黑树（寻址时间复杂度为O(log(N))）synchronized只锁定当前链表或红黑二叉树的首节点，这样只要hash不冲突，就不会产生并发，效率又提升N倍。</p>
<h3 id="说一说java反射" tabindex="-1"><a class="header-anchor" href="#说一说java反射" aria-hidden="true">#</a> 说一说Java反射？</h3>
<p>反射是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为 Java 语言的反射机制。</p>
<ul>
<li>优点：能够运行时动态获取类的实例，提高灵活性；可与动态编译结合<code v-pre>Class.forName('com.mysql.jdbc.Driver.class');</code>，加载<a href="https://www.wkcto.com/courses/mysql.html" target="_blank" rel="noopener noreferrer">MySQL<ExternalLinkIcon/></a>的驱动类。</li>
<li>缺点：使用反射性能较低，需要解析字节码，将内存中的对象进行解析。其解决方案是：通过setAccessible(true)关闭JDK的安全检查来提升反射速度；多次创建一个类的实例时，有缓存会快很多；ReflflectASM工具类，通过字节码生成的方式加快反射速度。</li>
</ul>
<blockquote>
<p>应用场景</p>
</blockquote>
<ol>
<li>JDBC连接数据库时使用<code v-pre>Class.forName()</code>通过反射加载数据库的驱动程序</li>
<li>Eclispe、IDEA等开发工具利用反射动态解析对象的类型与结构，动态提示对象的属性和方法</li>
<li>Web服务器中利用反射调用了Sevlet的<code v-pre>service</code>方法</li>
<li>JDK动态代理底层依赖反射实现</li>
</ol>
</div></template>


