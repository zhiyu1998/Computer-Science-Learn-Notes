<template><div><h2 id="🍃-spring系列" tabindex="-1"><a class="header-anchor" href="#🍃-spring系列" aria-hidden="true">#</a> 🍃 Spring系列</h2>
<h3 id="⭐️-spring中都有哪些设计模式-2022热门问题" tabindex="-1"><a class="header-anchor" href="#⭐️-spring中都有哪些设计模式-2022热门问题" aria-hidden="true">#</a> ⭐️ spring中都有哪些设计模式？（2022热门问题）</h3>
<p>1、<strong>简单工厂模式</strong>：<code v-pre>BeanFactory</code>就是简单工厂模式的体现，根据传入一个唯一标识来获得 Bean 对象。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
    <span class="token function">assertBeanFactoryActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<strong>工厂方法模式</strong>：<code v-pre>FactoryBean</code>就是典型的工厂方法模式。spring在使用<code v-pre>getBean()</code>调用获得该bean时，会自动调用该bean的<code v-pre>getObject()</code>方法。每个 Bean 都会对应一个 <code v-pre>FactoryBean</code>，如 <code v-pre>SqlSessionFactory</code> 对应 <code v-pre>SqlSessionFactoryBean</code>。</p>
<p>3、<strong>单例模式</strong>：一个类仅有一个实例，提供一个访问它的全局访问点。Spring 创建 Bean 实例默认是单例的。</p>
<p>4、<strong>适配器模式</strong>：SpringMVC中的适配器<code v-pre>HandlerAdatper</code>。由于应用会有多个Controller实现，如果需要直接调用Controller方法，那么需要先判断是由哪一个Controller处理请求，然后调用相应的方法。当增加新的 Controller，需要修改原来的逻辑，违反了开闭原则（对修改关闭，对扩展开放）。</p>
<p>为此，Spring提供了一个适配器接口，每一种 Controller 对应一种 <code v-pre>HandlerAdapter</code> 实现类，当请求过来，SpringMVC会调用<code v-pre>getHandler()</code>获取相应的Controller，然后获取该Controller对应的 <code v-pre>HandlerAdapter</code>，最后调用<code v-pre>HandlerAdapter</code>的<code v-pre>handle()</code>方法处理请求，实际上调用的是Controller的<code v-pre>handleRequest()</code>。每次添加新的 Controller 时，只需要增加一个适配器类就可以，无需修改原有的逻辑。</p>
<p>常用的处理器适配器：<code v-pre>SimpleControllerHandlerAdapter</code>，<code v-pre>HttpRequestHandlerAdapter</code>，<code v-pre>AnnotationMethodHandlerAdapter</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// Determine handler for the current request.</span>
mappedHandler <span class="token operator">=</span> <span class="token function">getHandler</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">HandlerAdapter</span> ha <span class="token operator">=</span> <span class="token function">getHandlerAdapter</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Actually invoke the handler.</span>
mv <span class="token operator">=</span> ha<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>processedRequest<span class="token punctuation">,</span> response<span class="token punctuation">,</span> mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpRequestHandlerAdapter</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerAdapter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token class-name">Object</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//handler是被适配的对象，这里使用的是对象的适配器模式</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>handler <span class="token keyword">instanceof</span> <span class="token class-name">HttpRequestHandler</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@Nullable</span>
    <span class="token keyword">public</span> <span class="token class-name">ModelAndView</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpRequestHandler</span><span class="token punctuation">)</span> handler<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handleRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、<strong>代理模式</strong>：spring 的 aop 使用了动态代理，有两种方式<code v-pre>JdkDynamicAopProxy</code>和<code v-pre>Cglib2AopProxy</code>。</p>
<p>6、<strong>观察者模式</strong>：spring 中 observer 模式常用的地方是 listener 的实现，如<code v-pre>ApplicationListener</code>。</p>
<p>7、<strong>模板模式</strong>： Spring 中 <code v-pre>jdbcTemplate</code>、<code v-pre>hibernateTemplate</code> 等，就使用到了模板模式。</p>
<blockquote>
<p>详细</p>
</blockquote>
<h4 id="工厂设计模式" tabindex="-1"><a class="header-anchor" href="#工厂设计模式" aria-hidden="true">#</a> 工厂设计模式</h4>
<p>Spring使用工厂模式可以通过 <code v-pre>BeanFactory</code> 或 <code v-pre>ApplicationContext</code> 创建 bean 对象。</p>
<p><strong>两者对比：</strong></p>
<ul>
<li><code v-pre>BeanFactory</code> ：延迟注入(使用到某个 bean 的时候才会注入),相比于 <code v-pre>ApplicationContext</code> 来说会占用更少的内存，程序启动速度更快。</li>
<li><code v-pre>ApplicationContext</code> ：容器启动的时候，不管你用没用到，一次性创建所有 bean 。<code v-pre>BeanFactory</code> 仅提供了最基本的依赖注入支持，<code v-pre> ApplicationContext</code> 扩展了 <code v-pre>BeanFactory</code> ,除了有 <code v-pre>BeanFactory</code>的功能还有额外更多功能，所以一般开发人员使用 <code v-pre> ApplicationContext</code>会更多。</li>
</ul>
<p>ApplicationContext的三个实现类：</p>
<ol>
<li><code v-pre>ClassPathXmlApplication</code>：把上下文文件当成类路径资源。</li>
<li><code v-pre>FileSystemXmlApplication</code>：从文件系统中的 XML 文件载入上下文定义信息。</li>
<li><code v-pre>XmlWebApplicationContext</code>：从Web系统中的XML文件载入上下文定义信息。</li>
</ol>
<p>Example:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">FileSystemXmlApplicationContext</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemXmlApplicationContext</span><span class="token punctuation">(</span>
				<span class="token string">"C:/work/IOC Containers/springframework.applicationcontext/src/main/resources/bean-factory-config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token class-name">HelloApplicationContext</span> obj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HelloApplicationContext</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"helloApplicationContext"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		obj<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单例设计模式" tabindex="-1"><a class="header-anchor" href="#单例设计模式" aria-hidden="true">#</a> 单例设计模式</h4>
<p>在我们的系统中，有一些对象其实我们只需要一个，比如说：线程池、缓存、对话框、注册表、日志对象、充当打印机、显卡等设备驱动程序的对象。事实上，这一类对象只能有一个实例，如果制造出多个实例就可能会导致一些问题的产生，比如：程序的行为异常、资源使用过量、或者不一致性的结果。</p>
<p><strong>使用单例模式的好处:</strong></p>
<ul>
<li>对于频繁使用的对象，可以省略创建对象所花费的时间，这对于那些重量级对象而言，是非常可观的一笔系统开销；</li>
<li>由于 new 操作的次数减少，因而对系统内存的使用频率也会降低，这将减轻 GC 压力，缩短 GC 停顿时间。</li>
</ul>
<p><strong>Spring 中 bean 的默认作用域就是 singleton(单例)的。</strong> 除了 singleton 作用域，Spring 中 bean 还有下面几种作用域：</p>
<ul>
<li>prototype : 每次请求都会创建一个新的 bean 实例。</li>
<li>request : 每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效。</li>
<li>session : 每一次HTTP请求都会产生一个新的 bean，该bean仅在当前 HTTP session 内有效。</li>
<li>global-session：  全局session作用域，仅仅在基于portlet的web应用中才有意义，Spring5已经没有了。Portlet是能够生成语义代码(例如：HTML)片段的小型Java Web插件。它们基于portlet容器，可以像servlet一样处理HTTP请求。但是，与 servlet 不同，每个 portlet  都有不同的会话</li>
</ul>
<p><strong>Spring 实现单例的方式：</strong></p>
<ul>
<li>xml : <code v-pre>&lt;bean id=&quot;userService&quot; class=&quot;top.snailclimb.UserService&quot; scope=&quot;singleton&quot;/&gt;</code></li>
<li>注解：<code v-pre>@Scope(value = &quot;singleton&quot;)</code></li>
</ul>
<p><strong>Spring 通过 <code v-pre>ConcurrentHashMap</code> 实现单例注册表的特殊方式实现单例模式。Spring 实现单例的核心代码如下</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 通过 ConcurrentHashMap（线程安全） 实现单例注册表</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> singletonObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> singletonFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token string">"'beanName' must not be null"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 检查缓存中是否存在实例  </span>
            <span class="token class-name">Object</span> singletonObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//...省略了很多代码</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    singletonObject <span class="token operator">=</span> singletonFactory<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//...省略了很多代码</span>
                <span class="token comment">// 如果实例对象在不存在，我们注册到单例注册表中。</span>
                <span class="token function">addSingleton</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> singletonObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">!=</span> <span class="token constant">NULL_OBJECT</span> <span class="token operator">?</span> singletonObject <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//将对象添加到单例注册表</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">Object</span> singletonObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> singletonObject <span class="token operator">:</span> <span class="token constant">NULL_OBJECT</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代理设计模式" tabindex="-1"><a class="header-anchor" href="#代理设计模式" aria-hidden="true">#</a> 代理设计模式</h4>
<h5 id="代理模式在-aop-中的应用" tabindex="-1"><a class="header-anchor" href="#代理模式在-aop-中的应用" aria-hidden="true">#</a> 代理模式在 AOP 中的应用</h5>
<p>AOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，<strong>却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来</strong>，便于<strong>减少系统的重复代码</strong>，<strong>降低模块间的耦合度</strong>，并<strong>有利于未来的可拓展性和可维护性</strong>。</p>
<p><strong>Spring AOP 就是基于动态代理的</strong>，如果要代理的对象，实现了某个接口，那么Spring AOP会使用<strong>JDK Proxy</strong>，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候Spring AOP会使用 <strong>Cglib</strong> 生成一个被代理对象的子类来作为代理，如下图所示：</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616162330096.png" alt="image-20220616162330096" tabindex="0" loading="lazy"><figcaption>image-20220616162330096</figcaption></figure>
<p>当然你也可以使用 AspectJ ,Spring AOP 已经集成了AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。</p>
<p>使用 AOP 之后我们可以把一些通用功能抽象出来，在需要用到的地方直接使用即可，这样大大简化了代码量。我们需要增加新功能时也方便，这样也提高了系统扩展性。日志功能、事务管理等等场景都用到了 AOP 。</p>
<h4 id="模板方法" tabindex="-1"><a class="header-anchor" href="#模板方法" aria-hidden="true">#</a> 模板方法</h4>
<p>模板方法模式是一种行为设计模式，它定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。 模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤的实现方式。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是我们的模板方法</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token class-name">TemplateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">PrimitiveOperation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">PrimitiveOperation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrimitiveOperation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span>  <span class="token class-name">PrimitiveOperation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//当前类实现</span>
    <span class="token punctuation">}</span>
  
    <span class="token comment">//被子类实现的方法</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TemplateImpl</span> <span class="token keyword">extends</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当前类实现</span>
    <span class="token punctuation">}</span>
  
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当前类实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring 中 <code v-pre>jdbcTemplate</code>、<code v-pre>hibernateTemplate</code> 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。一般情况下，我们都是使用继承的方式来实现模板模式，但是 Spring 并没有使用这种方式，而是使用Callback 模式与模板方法模式配合，既达到了代码复用的效果，同时增加了灵活性。</p>
<h4 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h4>
<p>观察者模式是一种对象行为型模式。它表示的是一种对象与对象之间具有依赖关系，当一个对象发生改变的时候，这个对象所依赖的对象也会做出反应。Spring 事件驱动模型就是观察者模式很经典的一个应用。Spring  事件驱动模型非常有用，在很多场景都可以解耦我们的代码。比如我们每次添加商品的时候都需要重新更新商品索引，这个时候就可以利用观察者模式来解决这个问题。</p>
<h5 id="spring-事件驱动模型中的三种角色" tabindex="-1"><a class="header-anchor" href="#spring-事件驱动模型中的三种角色" aria-hidden="true">#</a> Spring 事件驱动模型中的三种角色</h5>
<h6 id="事件角色" tabindex="-1"><a class="header-anchor" href="#事件角色" aria-hidden="true">#</a> 事件角色</h6>
<p><code v-pre>ApplicationEvent</code> (<code v-pre>org.springframework.context</code>包下)充当事件的角色,这是一个抽象类，它继承了 <code v-pre>java.util.EventObject</code>并实现了 <code v-pre>java.io.Serializable</code>接口。</p>
<p>Spring 中默认存在以下事件，他们都是对 <code v-pre>ApplicationContextEvent</code> 的实现(继承自 <code v-pre>ApplicationContextEvent</code>)：</p>
<ul>
<li><code v-pre>ContextStartedEvent</code>：<code v-pre>ApplicationContext</code> 启动后触发的事件;</li>
<li><code v-pre>ContextStoppedEvent</code>：<code v-pre>ApplicationContext</code> 停止后触发的事件;</li>
<li><code v-pre>ContextRefreshedEvent</code>：<code v-pre>ApplicationContext</code> 初始化或刷新完成后触发的事件;</li>
<li><code v-pre>ContextClosedEvent</code>：<code v-pre>ApplicationContext</code> 关闭后触发的事件。</li>
</ul>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616162504520.png" alt="image-20220616162504520" tabindex="0" loading="lazy"><figcaption>image-20220616162504520</figcaption></figure>
<h6 id="事件监听者角色" tabindex="-1"><a class="header-anchor" href="#事件监听者角色" aria-hidden="true">#</a> 事件监听者角色</h6>
<p><code v-pre>ApplicationListener</code> 充当了事件监听者角色，它是一个接口，里面只定义了一个 <code v-pre>onApplicationEvent（）</code>方法来处理 <code v-pre>ApplicationEvent</code>。<code v-pre>ApplicationListener</code>接口类源码如下，可以看出接口定义看出接口中的事件只要实现了 <code v-pre>ApplicationEvent</code>就可以了。所以，在 Spring中我们只要实现 <code v-pre>ApplicationListener</code> 接口的 <code v-pre>onApplicationEvent()</code> 方法即可完成监听事件</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">EventListener</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">EventListener</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">E</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="事件发布者角色" tabindex="-1"><a class="header-anchor" href="#事件发布者角色" aria-hidden="true">#</a> 事件发布者角色</h6>
<p><code v-pre>ApplicationEventPublisher</code> 充当了事件的发布者，它也是一个接口。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApplicationEventPublisher</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token class-name">ApplicationEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">)</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ApplicationEventPublisher</code> 接口的 <code v-pre>publishEvent（）</code>这个方法在 <code v-pre>AbstractApplicationContext</code>类中被实现，阅读这个方法的实现，你会发现实际上事件真正是通过 <code v-pre>ApplicationEventMulticaster</code>来广播出去的。</p>
<h4 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h4>
<p>适配器模式(Adapter Pattern) 将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作，其别名为包装器(Wrapper)。</p>
<h5 id="spring-aop中的适配器模式" tabindex="-1"><a class="header-anchor" href="#spring-aop中的适配器模式" aria-hidden="true">#</a> spring AOP中的适配器模式</h5>
<p>我们知道 Spring AOP 的实现是基于代理模式，但是 Spring AOP 的增强或通知(Advice)使用到了适配器模式，与之相关的接口是 <code v-pre>AdvisorAdapter </code> 。Advice 常用的类型有：<code v-pre>BeforeAdvice</code>（目标方法调用前,前置通知）、<code v-pre>AfterAdvice</code>（目标方法调用后,后置通知）、<code v-pre>AfterReturningAdvice</code>(目标方法执行结束后，return之前)等等。每个类型Advice（通知）都有对应的拦截器:<code v-pre>MethodBeforeAdviceInterceptor</code>、<code v-pre>AfterReturningAdviceAdapter</code>、<code v-pre>AfterReturningAdviceInterceptor</code>。Spring预定义的通知要通过对应的适配器，适配成 <code v-pre>MethodInterceptor</code>接口(方法拦截器)类型的对象（如：<code v-pre>MethodBeforeAdviceInterceptor</code> 负责适配 <code v-pre>MethodBeforeAdvice</code>）。</p>
<h5 id="spring-mvc中的适配器模式" tabindex="-1"><a class="header-anchor" href="#spring-mvc中的适配器模式" aria-hidden="true">#</a> spring MVC中的适配器模式</h5>
<p>在Spring MVC中，<code v-pre>DispatcherServlet</code> 根据请求信息调用 <code v-pre>HandlerMapping</code>，解析请求对应的 <code v-pre>Handler</code>。解析到对应的 <code v-pre>Handler</code>（也就是我们平常说的 <code v-pre>Controller</code> 控制器）后，开始由 <code v-pre>HandlerAdapter</code> 适配器处理。<code v-pre>HandlerAdapter</code> 作为期望接口，具体的适配器实现类用于对目标类进行适配，<code v-pre>Controller</code> 作为需要适配的类。</p>
<p><strong>为什么要在 Spring MVC 中使用适配器模式？</strong> Spring MVC 中的 <code v-pre>Controller</code> 种类众多，不同类型的 <code v-pre>Controller</code> 通过不同的方法来对请求进行处理。如果不利用适配器模式的话，<code v-pre>DispatcherServlet</code> 直接获取对应类型的 <code v-pre>Controller</code>，需要的自行来判断，像下面这段代码一样：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">MultiActionController</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
   <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">MultiActionController</span><span class="token punctuation">)</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>xxx  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">XXX</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如我们再增加一个 <code v-pre>Controller</code>类型就要在上面代码中再加入一行 判断语句，这种形式就使得程序难以维护，也违反了设计模式中的开闭原则 – 对扩展开放，对修改关闭。</p>
<h4 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h4>
<p>装饰者模式可以动态地给对象添加一些额外的属性或行为。相比于使用继承，装饰者模式更加灵活。简单点儿说就是当我们需要修改原有的功能，但我们又不愿直接去修改原有的代码时，设计一个Decorator套在原有代码外面。其实在 JDK 中就有很多地方用到了装饰者模式，比如 <code v-pre>InputStream</code>家族，<code v-pre>InputStream</code> 类下有 <code v-pre>FileInputStream</code> (读取文件)、<code v-pre>BufferedInputStream</code> (增加缓存,使读取文件速度大大提升)等子类都在不修改 <code v-pre>InputStream</code> 代码的情况下扩展了它的功能。</p>
<figure><img src="@source/Java/eightpart/personal_images/image-20220616162704781.png" alt="image-20220616162704781" tabindex="0" loading="lazy"><figcaption>image-20220616162704781</figcaption></figure>
<p>Spring 中配置 DataSource 的时候，DataSource  可能是不同的数据库和数据源。我们能否根据客户的需求在少修改原有类的代码下动态切换不同的数据源？这个时候就要用到装饰者模式(这一点我自己还没太理解具体原理)。Spring 中用到的包装器模式在类名上含有 <code v-pre>Wrapper</code>或者 <code v-pre>Decorator</code>。这些类基本上都是动态地给一个对象添加一些额外的职责</p>
<h3 id="springboot启动流程" tabindex="-1"><a class="header-anchor" href="#springboot启动流程" aria-hidden="true">#</a> SpringBoot启动流程</h3>
<figure><img src="@source/Java/eightpart/personal_images/image-20220627213051378.png" alt="image-20220627213051378" tabindex="0" loading="lazy"><figcaption>image-20220627213051378</figcaption></figure>
<h3 id="bean生命周期" tabindex="-1"><a class="header-anchor" href="#bean生命周期" aria-hidden="true">#</a> Bean生命周期</h3>
<figure><img src="@source/Java/eightpart/personal_images/20220709213529.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>1.调用bean的构造方法创建Bean</p>
<p>2.通过反射调用setter方法进行属性的依赖注入</p>
<p>3.如果Bean实现了<code v-pre>BeanNameAware</code>接口，Spring将调用<code v-pre>setBeanName</code>()，设置 <code v-pre>Bean</code>的name（xml文件中bean标签的id）</p>
<p>4.如果Bean实现了<code v-pre>BeanFactoryAware</code>接口，Spring将调用<code v-pre>setBeanFactory()</code>把bean factory设置给Bean</p>
<p>5.如果存在<code v-pre>BeanPostProcessor</code>，Spring将调用它们的<code v-pre>postProcessBeforeInitialization</code>（预初始化）方法，在Bean初始化前对其进行处理</p>
<p>6.如果Bean实现了<code v-pre>InitializingBean</code>接口，Spring将调用它的<code v-pre>afterPropertiesSet</code>方法，然后调用xml定义的 init-method 方法，两个方法作用类似，都是在初始化 bean 的时候执行</p>
<p>7.如果存在<code v-pre>BeanPostProcessor</code>，Spring将调用它们的<code v-pre>postProcessAfterInitialization</code>（后初始化）方法，在Bean初始化后对其进行处理</p>
<p>8.Bean初始化完成，供应用使用，这里分两种情况：</p>
<p>8.1 如果Bean为单例的话，那么容器会返回Bean给用户，并存入缓存池。如果Bean实现了<code v-pre>DisposableBean</code>接口，Spring将调用它的<code v-pre>destory</code>方法，然后调用在xml中定义的 <code v-pre>destory-method</code>方法，这两个方法作用类似，都是在Bean实例销毁前执行。</p>
<p>8.2 如果Bean是多例的话，容器将Bean返回给用户，剩下的生命周期由用户控制。</p>
<h3 id="autowired-和-resource-的区别是什么" tabindex="-1"><a class="header-anchor" href="#autowired-和-resource-的区别是什么" aria-hidden="true">#</a> @Autowired 和 @Resource 的区别是什么？</h3>
<p>Spring 内置的 <code v-pre>@Autowired</code> 以及 JDK 内置的 <code v-pre>@Resource</code> 和 <code v-pre>@Inject</code> 都可以用于注入 Bean。</p>
<table>
<thead>
<tr>
<th style="text-align:left">Annotaion</th>
<th style="text-align:left">Package</th>
<th style="text-align:left">Source</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>@Autowired</code></td>
<td style="text-align:left"><code v-pre>org.springframework.bean.factory</code></td>
<td style="text-align:left">Spring 2.5+</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Resource</code></td>
<td style="text-align:left"><code v-pre>javax.annotation</code></td>
<td style="text-align:left">Java JSR-250</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>@Inject</code></td>
<td style="text-align:left"><code v-pre>javax.inject</code></td>
<td style="text-align:left">Java JSR-330</td>
</tr>
</tbody>
</table>
<p><code v-pre>@Autowired</code> 和 <code v-pre>@Resource</code>使用的比较多一些。</p>
<p><code v-pre>Autowired</code> 属于 Spring 内置的注解，默认的注入方式为 <code v-pre>byType</code>（根据类型进行匹配），也就是说会优先根据接口类型去匹配并注入 Bean （接口的实现类）。</p>
<p><strong>这会有什么问题呢？</strong> 当一个接口存在多个实现类的话，<code v-pre>byType</code>这种方式就无法正确注入对象了，因为这个时候 Spring 会同时找到多个满足条件的选择，默认情况下它自己不知道选择哪一个。</p>
<p>这种情况下，注入方式会变为 <code v-pre>byName</code>（根据名称进行匹配），这个名称通常就是类名（首字母小写）。就比如说下面代码中的 <code v-pre>smsService</code> 就是我这里所说的名称，这样应该比较好理解了吧。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// smsService 就是我们上面所说的名称</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子，<code v-pre>SmsService</code> 接口有两个实现类: <code v-pre>SmsServiceImpl1</code>和 <code v-pre>SmsServiceImpl2</code>，且它们都已经被 Spring 容器所管理。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 报错，byName 和 byType 都无法匹配到 bean</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
<span class="token comment">// 正确注入 SmsServiceImpl1 对象对应的 bean</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsServiceImpl1<span class="token punctuation">;</span>
<span class="token comment">// 正确注入  SmsServiceImpl1 对象对应的 bean</span>
<span class="token comment">// smsServiceImpl1 就是我们上面所说的名称</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"smsServiceImpl1"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还是建议通过 <code v-pre>@Qualifier</code> 注解来显示指定名称而不是依赖变量的名称。</p>
<p><code v-pre>@Resource</code>属于 JDK 提供的注解，默认注入方式为 <code v-pre>byName</code>。如果无法通过名称匹配到对应的实现类的话，注入方式会变为 <code v-pre>byType</code>。</p>
<p><code v-pre>@Resource</code> 有两个比较重要且日常开发常用的属性：<code v-pre>name</code>（名称）、<code v-pre>type</code>（类型）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Resource</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果仅指定 <code v-pre>name</code> 属性则注入方式为 <code v-pre>byName</code>，如果仅指定 <code v-pre>type</code>属性则注入方式为 <code v-pre>byType</code>，如果同时指定 <code v-pre>name</code> 和 <code v-pre>type</code>属性（不建议这么做）则注入方式为 <code v-pre>byType</code>+<code v-pre>byName</code>。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 报错，byName 和 byType 都无法匹配到 bean</span>
<span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
<span class="token comment">// 正确注入 SmsServiceImpl1 对象对应的 bean</span>
<span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsServiceImpl1<span class="token punctuation">;</span>
<span class="token comment">// 正确注入 SmsServiceImpl1 对象对应的 bean（比较推荐这种方式）</span>

<span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"smsServiceImpl1"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单总结一下：</p>
<ul>
<li><code v-pre>@Autowired</code> 是 Spring 提供的注解，<code v-pre>@Resource</code> 是 JDK 提供的注解。</li>
<li><code v-pre>Autowired</code> 默认的注入方式为 <code v-pre>byType</code>（根据类型进行匹配），<code v-pre>@Resource</code>默认注入方式为 <code v-pre>byName</code>（根据名称进行匹配）。</li>
<li>当一个接口存在多个实现类的情况下，<code v-pre>@Autowired</code> 和 <code v-pre>@Resource</code>都需要通过名称才能正确匹配到对应的 Bean。<code v-pre>Autowired</code> 可以通过 <code v-pre>@Qualifier</code> 注解来显示指定名称，<code v-pre>@Resource</code>可以通过 <code v-pre>name</code> 属性来显示指定名称。</li>
</ul>
<h3 id="请描述spring-mvc的工作流程-描述一下-dispatcherservlet-的工作流程" tabindex="-1"><a class="header-anchor" href="#请描述spring-mvc的工作流程-描述一下-dispatcherservlet-的工作流程" aria-hidden="true">#</a> 请描述Spring MVC的工作流程？描述一下 DispatcherServlet 的工作流程？</h3>
<ol>
<li>用户发送request请求到前端控制器DispatcherServlet。</li>
<li>前端控制器DispatcherServlet通过request请求的url地址，向映射器HandlerMapping请求调用对应的处理器handler。</li>
<li>映射器HandlerMapping通过url地址生产处理器执行链并返回。</li>
<li>DispatcherServlet根据处理器Handler获取处理器适配器HandlerAdapter执行HandlerAdapter处理一系列的操作，如：参数封装，数据格式转换，数据验证等操作。</li>
<li>适配器执行处理器，即执行Controller中的方法。</li>
<li>处理器完成业务逻辑后返回ModelAndView。</li>
<li>适配器将处理器的处理结果返回给前端控制器DispatcherServlet。</li>
<li>将ModelAndView中的view名称传给viewReslover。</li>
<li>viewReslover通过view名称返回具体的view。</li>
<li>将ModelAndView中的model注入到view。</li>
<li>将最终经过视图渲染的view页面响应给用户。</li>
</ol>
<figure><img src="@source/Java/eightpart/personal_images/image-20220711133221313.png" alt="image-20220711133221313" tabindex="0" loading="lazy"><figcaption>image-20220711133221313</figcaption></figure>
<h3 id="spring中构造方法注入和设值注入有什么区别" tabindex="-1"><a class="header-anchor" href="#spring中构造方法注入和设值注入有什么区别" aria-hidden="true">#</a> Spring中构造方法注入和设值注入有什么区别</h3>
<p>构造器通过构造方法实现，构造方法有无参数都可以。在大部分情况下我们都是通过类的构造器来创建对象，Spring也可以采用反射机制通过构造器完成注入，这就是构造器注入的原理。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> roleName<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Role</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> roleName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token operator">=</span>id<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>roleName<span class="token operator">=</span>roleName<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Role已被调用"</span><span class="token operator">+</span><span class="token string">"\n"</span><span class="token operator">+</span><span class="token string">"id:"</span><span class="token operator">+</span>id<span class="token operator">+</span><span class="token string">"\n"</span><span class="token operator">+</span><span class="token string">"roleName:"</span><span class="token operator">+</span>roleName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setter注入是Spring中最主流的注入方法（常用），好处就不用多说了。原理也是通过反射注入，直接上代码。（注意对应的实体类属性必须实现set，get方法。如果实体类没有属性也会被注入）。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRoleName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> roleName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRoleName</span><span class="token punctuation">(</span><span class="token class-name">String</span> roleName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>roleName <span class="token operator">=</span> roleName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> roleName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring怎么解决循环依赖的问题" tabindex="-1"><a class="header-anchor" href="#spring怎么解决循环依赖的问题" aria-hidden="true">#</a> ⭐Spring怎么解决循环依赖的问题？</h3>
<p><strong>构造器注入的循环依赖：Spring处理不了</strong>，直接抛出<code v-pre>BeanCurrentlylnCreationException</code>异常。</p>
<p>单例模式下属性注入的循环依赖：通过<strong>三级缓存处理循环依赖</strong>。</p>
<p>非单例循环依赖：无法处理。</p>
<blockquote>
<p><strong>Spring为何不能解决非单例属性之外的循环依赖？</strong></p>
<p>Spring为什么不能解决构造器的循环依赖？</p>
<p>构造器注入形成的循环依赖： 也就是beanB需要在beanA的构造函数中完成初始化，beanA也需要在beanB的构造函数中完成初始化，这种情况的结果就是两个bean都不能完成初始化，循环依赖难以解决。</p>
<p>Spring解决循环依赖主要是依赖三级缓存，但是的<strong>在调用构造方法之前还未将其放入三级缓存之中</strong>，因此后续的依赖调用构造方法的时候并不能从三级缓存中获取到依赖的Bean，因此不能解决。</p>
<hr>
<p>Spring为什么不能解决prototype作用域循环依赖？</p>
<p>这种循环依赖同样无法解决，因为spring不会缓存‘prototype’作用域的bean，而spring中循环依赖的解决正是通过缓存来实现的。</p>
<hr>
<p>Spring为什么不能解决多例的循环依赖？</p>
<p>多实例Bean是每次调用一次getBean都会执行一次构造方法并且给属性赋值，根本没有三级缓存，因此不能解决循环依赖。</p>
</blockquote>
<p>下面分析单例模式下属性注入的循环依赖是怎么处理的：</p>
<p>首先，Spring单例对象的初始化大略分为三步：</p>
<ol>
<li><code v-pre>createBeanInstance</code>：实例化bean，使用构造方法创建对象，为对象分配内存。</li>
<li><code v-pre>populateBean</code>：进行依赖注入。</li>
<li><code v-pre>initializeBean</code>：初始化bean。</li>
</ol>
<p>Spring为了解决单例的循环依赖问题，使用了<strong>三级缓存</strong>：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/** Cache of singleton objects: bean name --> bean instance */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> singletonObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/** Cache of early singleton objects: bean name --> bean instance */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> earlySingletonObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/** Cache of singleton factories: bean name --> ObjectFactory */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span><span class="token punctuation">></span></span> singletonFactories <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>第一层缓存（singletonObjects）</strong>：单例对象缓存池，已经实例化并且属性赋值，这里的对象是<strong>成熟对象</strong>；</li>
<li><strong>第二层缓存（earlySingletonObjects）</strong>：单例对象缓存池，已经实例化但尚未属性赋值，这里的对象是<strong>半成品对象</strong>；</li>
<li><strong>第三层缓存（singletonFactories）</strong>: 单例工厂的缓存</li>
</ul>
<p>如下是获取单例中</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Object</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token keyword">boolean</span> allowEarlyReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Spring首先从singletonObjects（一级缓存）中尝试获取</span>
  <span class="token class-name">Object</span> singletonObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 若是获取不到而且对象在建立中，则尝试从earlySingletonObjects(二级缓存)中获取</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isSingletonCurrentlyInCreation</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        singletonObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>earlySingletonObjects<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> allowEarlyReference<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> singletonFactory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>singletonFactories<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonFactory <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//若是仍是获取不到而且容许从singletonFactories经过getObject获取，则经过singletonFactory.getObject()(三级缓存)获取</span>
              singletonObject <span class="token operator">=</span> singletonFactory<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token comment">//若是获取到了则将singletonObject放入到earlySingletonObjects,也就是将三级缓存提高到二级缓存中</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>earlySingletonObjects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> singletonObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>singletonFactories<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">!=</span> <span class="token constant">NULL_OBJECT</span> <span class="token operator">?</span> singletonObject <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充一些方法和参数</p>
<ul>
<li><code v-pre>isSingletonCurrentlyInCreation()</code>：判断当前单例bean是否正在建立中，也就是没有初始化完成(好比A的构造器依赖了B对象因此得先去建立B对象， 或则在A的populateBean过程当中依赖了B对象，得先去建立B对象，这时的A就是处于建立中的状态。)</li>
<li><code v-pre>allowEarlyReference</code> ：是否容许从singletonFactories中经过getObject拿到对象</li>
</ul>
<p>分析getSingleton()的整个过程，Spring首先从一级缓存singletonObjects中获取。若是获取不到，而且对象正在建立中，就再从二级缓存earlySingletonObjects中获取。若是仍是获取不到且容许singletonFactories经过getObject()获取，就从三级缓存singletonFactory.getObject()(三级缓存)获取，若是获取到了则从三级缓存移动到了二级缓存。</p>
<p>从上面三级缓存的分析，咱们能够知道，Spring解决循环依赖的诀窍就在于singletonFactories这个三级cache。这个cache的类型是ObjectFactory，定义以下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在bean建立过程当中，有两处比较重要的匿名内部类实现了该接口。一处是Spring利用其建立bean的时候，另外一处就是:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token function">addSingletonFactory</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Override</span>   <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getEarlyBeanReference</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> mbd<span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处就是解决循环依赖的关键，这段代码发生在createBeanInstance以后，也就是说单例对象此时已经被建立出来的。这个对象已经被生产出来了，虽然还不完美（尚未进行初始化的第二步和第三步），可是已经能被人认出来了（根据对象引用能定位到堆中的对象），因此Spring此时将这个对象提早曝光出来让你们认识，让你们使用。</p>
<p>好比“A对象setter依赖B对象，B对象setter依赖A对象”，A首先完成了初始化的第一步，而且将本身提早曝光到singletonFactories中，此时进行初始化的第二步，发现本身依赖对象B，此时就尝试去get(B)，发现B尚未被create，因此走create流程，B在初始化第一步的时候发现本身依赖了对象A，因而尝试get(A)，尝试一级缓存singletonObjects(确定没有，由于A还没初始化彻底)，尝试二级缓存earlySingletonObjects（也没有），尝试三级缓存singletonFactories，因为A经过ObjectFactory将本身提早曝光了，因此B可以经过ObjectFactory.getObject拿到A对象(半成品)，B拿到A对象后顺利完成了初始化阶段一、二、三，彻底初始化以后将本身放入到一级缓存singletonObjects中。此时返回A中，A此时能拿到B的对象顺利完成本身的初始化阶段二、三，最终A也完成了初始化，进去了一级缓存singletonObjects中，并且更加幸运的是，因为B拿到了A的对象引用，因此B如今hold住的A对象完成了初始化。</p>
<h3 id="transactional失效场景" tabindex="-1"><a class="header-anchor" href="#transactional失效场景" aria-hidden="true">#</a> Transactional失效场景</h3>
<h4 id="transactional注解标注方法修饰符为非public" tabindex="-1"><a class="header-anchor" href="#transactional注解标注方法修饰符为非public" aria-hidden="true">#</a> Transactional注解标注方法修饰符为非public</h4>
<p>如果<code v-pre>Transactional</code>注解应用在非<code v-pre>public</code> 修饰的方法上，Transactional将会失效。</p>
<p>之所以会失效是因为在Spring AOP 代理时，如上图所示 <code v-pre>TransactionInterceptor</code> （事务拦截器）在目标方法执行前后进行拦截，<code v-pre>DynamicAdvisedInterceptor</code>（CglibAopProxy 的内部类）的 intercept 方法或 <code v-pre>JdkDynamicAopProxy</code> 的 invoke 方法会间接调用 <code v-pre>AbstractFallbackTransactionAttributeSource</code>的 <code v-pre>computeTransactionAttribute</code> 方法，获取Transactional 注解的事务配置信息。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">TransactionAttribute</span> <span class="token function">computeTransactionAttribute</span><span class="token punctuation">(</span><span class="token class-name">Method</span> method<span class="token punctuation">,</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> targetClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Don't allow no-public methods as required.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">allowPublicMethodsOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token class-name">Modifier</span><span class="token punctuation">.</span><span class="token function">isPublic</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getModifiers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此方法会检查目标方法的修饰符是否为 public，不是 public则不会获取<code v-pre>@Transactional</code> 的属性配置信息。</p>
<p><strong>注意：<code v-pre>protected</code>、<code v-pre>private</code> 修饰的方法上使用 <code v-pre>@Transactional</code> 注解，虽然事务无效，但不会有任何报错，这是我们很容犯错的一点。</strong></p>
<h4 id="注解属性-propagation-设置错误" tabindex="-1"><a class="header-anchor" href="#注解属性-propagation-设置错误" aria-hidden="true">#</a> 注解属性 propagation 设置错误</h4>
<p>这种失效是由于配置错误，若是错误的配置以下三种 propagation，事务将不会发生回滚。</p>
<p><code v-pre>TransactionDefinition.PROPAGATION_SUPPORTS</code>：如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。</p>
<p><code v-pre>TransactionDefinition.PROPAGATION_NOT_SUPPORTED</code>：以非事务方式运行，如果当前存在事务，则把当前事务挂起。</p>
<p><code v-pre>TransactionDefinition.PROPAGATION_NEVER</code>：以非事务方式运行，如果当前存在事务，则抛出异常。</p>
<h4 id="注解属性-rollbackfor-设置错误" tabindex="-1"><a class="header-anchor" href="#注解属性-rollbackfor-设置错误" aria-hidden="true">#</a> 注解属性 rollbackFor 设置错误</h4>
<p><code v-pre>rollbackFor</code> 可以指定<strong>能够触发事务回滚</strong>的异常类型。Spring<strong>默认</strong>抛出了未检查<code v-pre>unchecked</code>异常（<strong>继承自</strong> <strong><code v-pre>RuntimeException</code></strong> 的异常）或者 <code v-pre>Error</code>才回滚事务；其他异常不会触发回滚事务。<strong>如果在事务中抛出其他类型的异常，但却期望 Spring 能够回滚事务，就需要指定 rollbackFor 属性，如果未指定 rollbackFor 属性则事务不会回滚。</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 希望自定义的异常可以进行回滚</span>
<span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation<span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span><span class="token constant">REQUIRED</span><span class="token punctuation">,</span>rollbackFor<span class="token operator">=</span> <span class="token class-name">MyException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>若在目标方法中抛出的异常是 <code v-pre>rollbackFor</code> <strong>指定的异常的子类</strong>，事务同样会回滚。Spring 源码如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">getDepth</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> exceptionClass<span class="token punctuation">,</span> <span class="token keyword">int</span> depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>exceptionClass<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>exceptionName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Found it!    return depth;</span>
<span class="token punctuation">}</span>
<span class="token comment">// If we've gone as far as we can go and haven't found it...</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>exceptionClass <span class="token operator">==</span> <span class="token class-name">Throwable</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token function">getDepth</span><span class="token punctuation">(</span>exceptionClass<span class="token punctuation">.</span><span class="token function">getSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同一个类中方法调用" tabindex="-1"><a class="header-anchor" href="#同一个类中方法调用" aria-hidden="true">#</a> 同一个类中方法调用</h4>
<p>开发中避免不了会对同一个类里面的方法调用，比如有一个类Test，它的一个方法A，A再调用本类的方法B（不论方法B是用public还是private修饰），但方法A没有声明注解事务，而B方法有。则<strong>外部调用方法A</strong>之后，方法B的事务是不会起作用的。这也是经常犯错误的一个地方。</p>
<p>那为啥会出现这种情况？其实这还是由于使用 <code v-pre>Spring AOP </code>代理造成的，因为 <strong>只有当事务方法被 当前类以外的代码 调用时，才会由<code v-pre>Spring</code>生成的代理对象来管理。</strong></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//@Transactional</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/test"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * B 插入字段为 3的数据
     */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">insertB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * A 插入字段为 2的数据
     */</span>
    <span class="token keyword">int</span> insert <span class="token operator">=</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> insert<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">insertB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cityInfoDict<span class="token punctuation">.</span><span class="token function">setParentCityId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事务方法内部捕捉了异常" tabindex="-1"><a class="header-anchor" href="#事务方法内部捕捉了异常" aria-hidden="true">#</a> 事务方法内部捕捉了异常</h4>
<p>这种情况是最常见的一种 <code v-pre>@Transactional</code> 注解失效场景，</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span>
<span class="token keyword">private</span> <span class="token class-name">Integer</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> insert <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">CityInfoDict</span> cityInfoDict <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CityInfoDict</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setCityName</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cityInfoDict<span class="token punctuation">.</span><span class="token function">setParentCityId</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * A 插入字段为 2的数据
         */</span>
        insert <span class="token operator">=</span> cityInfoDictMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>cityInfoDict<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * B 插入字段为 3的数据
         */</span>
        b<span class="token punctuation">.</span><span class="token function">insertB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果B方法内部抛了异常，而A方法此时try catch了B方法的异常，那这个事务还能正常回滚吗？</p>
<p>答案：不能！</p>
<p>会抛出异常：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>org.springframework.transaction.UnexpectedRollbackException: Transaction rolled back because it has been marked as rollback-only
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为当<code v-pre>ServiceB</code>中抛出了一个异常以后，<code v-pre>ServiceB</code>标识当前事务需要<code v-pre>rollback</code>。但是<code v-pre>ServiceA</code>中由于你手动的捕获这个异常并进行处理，<code v-pre>ServiceA</code>认为当前事务应该正常<code v-pre>commit</code>。此时就出现了前后不一致，也就是因为这样，抛出了前面的<code v-pre>UnexpectedRollbackException</code>异常。</p>
<p><code v-pre>spring</code>的事务是在调用业务方法之前开始的，业务方法执行完毕之后才执行<code v-pre>commit</code> or <code v-pre>rollback</code>，事务是否执行取决于是否抛出<code v-pre>runtime异常</code>。如果抛出<code v-pre>runtime exception</code> 并在你的业务方法中没有catch到的话，事务会回滚。</p>
<p>在业务方法中一般不需要catch异常，如果<strong>非要catch一定要抛出<code v-pre>throw new RuntimeException()</code></strong>，或者注解中指定抛异常类型**<code v-pre>@Transactional(rollbackFor=Exception.class)</code>**，否则会导致事务失效，数据commit造成数据不一致，所以有些时候 try catch反倒会画蛇添足。</p>
<h4 id="数据库引擎不支持事务" tabindex="-1"><a class="header-anchor" href="#数据库引擎不支持事务" aria-hidden="true">#</a> 数据库引擎不支持事务</h4>
<p>这种情况出现的概率并不高，事务能否生效数据库引擎是否支持事务是关键。常用的MySQL数据库默认使用支持事务的<code v-pre>innodb</code>引擎。一旦数据库引擎切换成不支持事务的<code v-pre>myisam</code>，那事务就从根本上失效了。</p>
</div></template>


