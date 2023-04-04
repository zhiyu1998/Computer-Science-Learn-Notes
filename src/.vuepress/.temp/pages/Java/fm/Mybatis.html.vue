<template><div><p>MyBatis ALL IN ONE</p>
<ul>
<li><a href="#%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA">环境搭建</a>
<ul>
<li><a href="#mybatis%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">Mybatis配置文件</a></li>
</ul>
</li>
<li><a href="#mybatis%E5%9F%BA%E7%A1%80%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5">mybatis基础增删改查</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8%E5%A4%96%E9%83%A8properties%E5%BC%95%E7%94%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5">使用外部properties引用数据库连接</a></li>
<li><a href="#%E4%BD%BF%E7%94%A8setttings%E4%BF%AE%E6%94%B9%E8%A1%8C%E4%B8%BA">使用setttings修改行为</a></li>
<li><a href="#typealiases%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D%E5%92%8Ctypehandlers%E7%B1%BB%E5%9E%8B%E5%A4%84%E7%90%86%E5%99%A8">typeAliases（类型别名）和typeHandlers（类型处理器）</a>
<ul>
<li><a href="#%E7%B1%BB%E5%9E%8B%E5%A4%84%E7%90%86%E5%99%A8">类型处理器</a></li>
</ul>
</li>
<li><a href="#%E4%BA%86%E8%A7%A3plugins%E6%8F%92%E4%BB%B6">【了解】plugins（插件）</a></li>
<li><a href="#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AEenvironments">环境配置（environments）</a>
<ul>
<li><a href="#%E7%8E%AF%E5%A2%83">环境</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E5%BA%93%E5%8E%82%E5%95%86%E6%A0%87%E8%AF%86databaseidprovider">数据库厂商标识（databaseIdProvider）</a></li>
<li><a href="#%E6%98%A0%E5%B0%84%E5%99%A8mappers">映射器（mappers）</a>
<ul>
<li><a href="#mappers">mappers</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E8%8E%B7%E5%8F%96%E8%87%AA%E5%A2%9Eid">SQL映射 获取自增ID</a>
<ul>
<li><a href="#%E5%9C%A8sql%E6%98%A0%E5%B0%84%E6%96%87%E4%BB%B6%E5%86%85%E7%9A%84-mapper-%E6%A0%87%E7%AD%BE%E4%B8%8B%E5%8F%AF%E4%BB%A5%E5%86%99%E7%9A%84%E4%B8%BB%E8%A6%81%E6%A0%87%E7%AD%BE%E6%9C%89">在SQL映射文件内的 mapper 标签下可以写的主要标签有</a></li>
<li><a href="#%E7%AE%80%E8%BF%B0delete-update-insert-select-%E7%9A%84%E5%B1%9E%E6%80%A7">简述：delete update insert select 的属性</a></li>
<li><a href="#%E8%8E%B7%E5%8F%96%E4%B8%BB%E9%94%AE%E8%87%AA%E5%A2%9E%E5%B1%9E%E6%80%A7">获取主键自增属性</a></li>
<li><a href="#%E8%8E%B7%E5%8F%96%E9%9D%9E%E4%B8%BB%E9%94%AE%E8%87%AA%E5%A2%9E%E5%B1%9E%E6%80%A7">获取非主键自增属性</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E4%BC%A0%E5%85%A5%E5%A4%9A%E4%B8%AA%E5%8F%82%E6%95%B0">SQL映射 传入多个参数</a>
<ul>
<li><a href="#%E4%BC%A0%E5%85%A5map">传入Map</a></li>
<li><a href="#%E5%8F%96%E5%80%BC%E5%B1%9E%E6%80%A7">#{}取值属性</a></li>
<li><a href="#%E4%B8%A4%E7%A7%8D%E5%8F%96%E5%80%BC%E6%96%B9%E5%BC%8F-">两种取值方式：${} #{}</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E6%9F%A5%E8%AF%A2%E9%9B%86%E5%90%88">SQL映射 查询集合</a>
<ul>
<li><a href="#%E5%B0%81%E8%A3%85%E6%88%90list">封装成LIST</a></li>
<li><a href="#%E5%B0%81%E8%A3%85%E6%88%90map">封装成MAP</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E8%87%AA%E5%AE%9A%E4%B9%89resulttype">SQL映射 自定义resultType</a></li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E7%BA%A7%E8%81%94%E5%B1%9E%E6%80%A7%E6%9F%A5%E8%AF%A2">SQL映射 级联属性查询</a>
<ul>
<li><a href="#%E5%BA%8F%E8%A8%80-%E4%B8%80%E5%AF%B9%E4%B8%80%E5%85%B3%E8%81%94">序言: 一对一关联</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E7%BA%A7%E8%81%94-%E4%B8%80%E5%AF%B9%E5%A4%9A-%E5%A4%9A%E5%AF%B9%E5%A4%9A">SQL映射 级联 一对多 多对多</a>
<ul>
<li><a href="#%E4%B8%80%E5%AF%B9%E5%A4%9A">一对多</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E5%88%86%E6%AD%A5%E6%9F%A5%E8%AF%A2">SQL映射 分步查询</a>
<ul>
<li><a href="#association%E5%88%86%E6%AD%A5%E6%9F%A5%E8%AF%A2">association分步查询</a></li>
<li><a href="#collection%E5%88%86%E5%B8%83%E6%9F%A5%E8%AF%A2">Collection分布查询</a></li>
</ul>
</li>
<li><a href="#sql%E6%98%A0%E5%B0%84-%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD-%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD">SQL映射 延迟加载 按需加载</a></li>
<li><a href="#%E5%8A%A8%E6%80%81sql-if">动态SQL IF</a>
<ul>
<li><a href="#%E5%AE%9E%E6%88%98%E5%8A%A8%E6%80%81sql-if">实战动态SQL IF</a></li>
</ul>
</li>
<li><a href="#%E5%8A%A8%E6%80%81sql-where-trim">动态SQL WHERE TRIM</a>
<ul>
<li><a href="#where-%E5%85%83%E7%B4%A0"><strong>where 元素</strong></a></li>
<li><a href="#trim-%E6%A0%87%E7%AD%BE">trim 标签</a></li>
</ul>
</li>
<li><a href="#%E5%8A%A8%E6%80%81sql-foreach">动态SQL FOREACH</a></li>
<li><a href="#%E5%8A%A8%E6%80%81sql-choosewhenotherwise">动态SQL CHOOSE、WHEN、OTHERWISE</a></li>
<li><a href="#%E5%8A%A8%E6%80%81sql-set">动态SQL SET</a>
<ul>
<li><a href="#%E5%8A%A8%E6%80%81%E6%9B%B4%E6%96%B0">动态更新</a></li>
</ul>
</li>
<li><a href="#ognl%E8%A1%A8%E8%BE%BE%E5%BC%8F">OGNL表达式</a>
<ul>
<li><a href="#%E4%BC%AA%E5%B1%9E">伪属</a></li>
</ul>
</li>
<li><a href="#%E5%8A%A8%E6%80%81sql-bind--include">动态SQL BIND  INCLUDE</a>
<ul>
<li><a href="#bind">bind</a></li>
<li><a href="#include">include</a></li>
</ul>
</li>
<li><a href="#%E4%B8%80%E7%BA%A7%E7%BC%93%E5%AD%98">一级缓存</a>
<ul>
<li><a href="#%E4%B8%80%E7%BA%A7%E7%BC%93%E5%AD%98%E7%9A%84%E5%A4%B1%E6%95%88%E6%83%85%E5%86%B5">一级缓存的失效情况</a></li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E7%BA%A7%E7%BC%93%E5%AD%98">二级缓存</a></li>
<li><a href="#%E7%BC%93%E5%AD%98%E7%9A%84%E6%9F%A5%E8%AF%A2%E9%A1%BA%E5%BA%8F%E5%92%8C%E5%8E%9F%E7%90%86">缓存的查询顺序和原理</a>
<ul>
<li><a href="#%E7%BC%93%E5%AD%98%E6%9F%A5%E8%AF%A2%E9%A1%BA%E5%BA%8F">缓存查询顺序</a></li>
<li><a href="#%E7%BC%93%E5%AD%98%E5%8E%9F%E7%90%86%E5%9B%BE">缓存原理图</a></li>
</ul>
</li>
<li><a href="#%E7%BC%93%E5%AD%98%E7%9A%84%E5%B1%9E%E6%80%A7">缓存的属性</a></li>
</ul>
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2>
<p>导入Maven</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.1.43<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.2.17<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建实体类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
​
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> empName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> gender<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个DAO接口</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">EmployeeDao</span> <span class="token punctuation">{</span>
​
    <span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">getEmpById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mybatis配置文件" tabindex="-1"><a class="header-anchor" href="#mybatis配置文件" aria-hidden="true">#</a> Mybatis配置文件</h3>
<p>全局配置文件：</p>
<p><a href="http://mybatis.org/dtd/mybatis-3-config.dtd" target="_blank" rel="noopener noreferrer">http://mybatis.org/dtd/mybatis-3-config.dtd<ExternalLinkIcon/></a>  dtd是一个约束文件</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Config 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-config.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--            配置连接池  --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.jdbc.Driver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql://localhost:3306/mybatis_test<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL映射文件</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--
    namespace: 名称空间  写接口的全类名，相当于告诉mybatis这个配置文件实现哪个接口
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.dao.EmployeeDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--    select 用来定义个查询操作
            id 方法名 相当于配置是对于某个方法的实现
            resultType 指定方法运行后的返回值类型(查询操作必须指定的)
            #{属性名} 取出传递过来的某个参数的值
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_employee where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在全局文件中配置SQL映射文件</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">configuration</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Config 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-config.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
    ....
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mappers</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>EmployeeMapper.xml<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mappers</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用纯JAVA测试结果：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> resource <span class="token operator">=</span> <span class="token string">"mybatis-config"</span><span class="token punctuation">;</span>
    <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取和数据库的一次会话：getConnection()</span>
    <span class="token class-name">SqlSession</span> session <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 使用SqlSession操作数据库，获取dao接口的实现</span>
    <span class="token class-name">EmployeeDao</span> mapper <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmployeeDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用之前的方法</span>
    <span class="token class-name">Employee</span> emp <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getEmpById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>emp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化写法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">InputStream</span> inputStream <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">SqlSession</span> session <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> resource <span class="token operator">=</span> <span class="token string">"mybatis-config"</span><span class="token punctuation">;</span>
        inputStream <span class="token operator">=</span> <span class="token class-name">Resources</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SqlSessionFactory</span> sqlSessionFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>inputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>
        session <span class="token operator">=</span> sqlSessionFactory<span class="token punctuation">.</span><span class="token function">openSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">EmployeeDao</span> mapper <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">EmployeeDao</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Employee</span> emp <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getEmpById</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>emp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            inputStream<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        session<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mybatis基础增删改查" tabindex="-1"><a class="header-anchor" href="#mybatis基础增删改查" aria-hidden="true">#</a> mybatis基础增删改查</h2>
<p>mybatis的CRUD一般不需要resultType，它自己会自动封装结果</p>
<p>在原来的测试基础上，如果插入要加入SqlSession的commit()，如果要选择自动commit可以把opensession的参数传入true</p>
<figure><img src="@source/Java/fm/images/347d7348-131c-4cdf-88b2-c168755d3a5c.png" alt="347d7348-131c-4cdf-88b2-c168755d3a5c" tabindex="0" loading="lazy"><figcaption>347d7348-131c-4cdf-88b2-c168755d3a5c</figcaption></figure>
<h2 id="使用外部properties引用数据库连接" tabindex="-1"><a class="header-anchor" href="#使用外部properties引用数据库连接" aria-hidden="true">#</a> 使用外部properties引用数据库连接</h2>
<p>创建一个properties</p>
<figure><img src="@source/Java/fm/images/a816b909-abe7-4b77-b8d3-790ccf309654.png" alt="a816b909-abe7-4b77-b8d3-790ccf309654" tabindex="0" loading="lazy"><figcaption>a816b909-abe7-4b77-b8d3-790ccf309654</figcaption></figure>
<p>在主配置文件下加入properties属性，属性名可以使用${}引用</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--  resource 类路径

​    url 引用类路径下或者网络路径下

--></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span> <span class="token attr-name">resource</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dbconfig.properties<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

  ....

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

​     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${driver}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

​     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${url}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

​     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${username}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

​     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${password}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>

  ....

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用setttings修改行为" tabindex="-1"><a class="header-anchor" href="#使用setttings修改行为" aria-hidden="true">#</a> 使用setttings修改行为</h2>
<p>这是 MyBatis 中极为重要的调整设置，它们会改变 MyBatis 的运行时行为。</p>
<table>
<thead>
<tr>
<th>设置名</th>
<th>描述</th>
<th>有效值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>cacheEnabled</td>
<td>全局性地开启或关闭所有映射器配置文件中已配置的任何缓存。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>lazyLoadingEnabled</td>
<td>延迟加载的全局开关。当开启时，所有关联对象都会延迟加载。 特定关联关系中可通过设置 fetchType 属性来覆盖该项的开关状态。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>aggressiveLazyLoading</td>
<td>开启时，任一方法的调用都会加载该对象的所有延迟加载属性。 否则，每个延迟加载属性会按需加载（参考 lazyLoadTriggerMethods)。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>multipleResultSetsEnabled</td>
<td>是否允许单个语句返回多结果集（需要数据库驱动支持）。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>useColumnLabel</td>
<td>使用列标签代替列名。实际表现依赖于数据库驱动，具体可参考数据库驱动的相关文档，或通过对比测试来观察。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>useGeneratedKeys</td>
<td>允许 JDBC 支持自动生成主键，需要数据库驱动支持。如果设置为 true，将强制使用自动生成主键。尽管一些数据库驱动不支持此特性，但仍可正常工作（如 Derby）。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>autoMappingBehavior</td>
<td>指定 MyBatis 应如何自动映射列到字段或属性。 NONE 表示关闭自动映射；PARTIAL 只会自动映射没有定义嵌套结果映射的字段。 FULL 会自动映射任何复杂的结果集（无论是否嵌套）。</td>
<td>NONE, PARTIAL, FULL</td>
<td>PARTIAL</td>
</tr>
<tr>
<td>autoMappingUnknownColumnBehavior</td>
<td>指定发现自动映射目标未知列（或未知属性类型）的行为。NONE: 不做任何反应WARNING: 输出警告日志（'org.apache.ibatis.session.AutoMappingUnknownColumnBehavior' 的日志等级必须设置为 WARN）FAILING: 映射失败 (抛出 SqlSessionException)</td>
<td>NONE, WARNING, FAILING</td>
<td>NONE</td>
</tr>
<tr>
<td>defaultExecutorType</td>
<td>配置默认的执行器。SIMPLE 就是普通的执行器；REUSE 执行器会重用预处理语句（PreparedStatement）； BATCH 执行器不仅重用语句还会执行批量更新。</td>
<td>SIMPLE REUSE BATCH</td>
<td>SIMPLE</td>
</tr>
<tr>
<td>defaultStatementTimeout</td>
<td>设置超时时间，它决定数据库驱动等待数据库响应的秒数。</td>
<td>任意正整数</td>
<td>未设置 (null)</td>
</tr>
<tr>
<td>defaultFetchSize</td>
<td>为驱动的结果集获取数量（fetchSize）设置一个建议值。此参数只可以在查询设置中被覆盖。</td>
<td>任意正整数</td>
<td>未设置 (null)</td>
</tr>
<tr>
<td>defaultResultSetType</td>
<td>指定语句默认的滚动策略。（新增于 3.5.2）</td>
<td>FORWARD_ONLY</td>
<td>SCROLL_SENSITIVE</td>
</tr>
<tr>
<td>safeRowBoundsEnabled</td>
<td>是否允许在嵌套语句中使用分页（RowBounds）。如果允许使用则设置为 false。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>safeResultHandlerEnabled</td>
<td>是否允许在嵌套语句中使用结果处理器（ResultHandler）。如果允许使用则设置为 false。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>mapUnderscoreToCamelCase</td>
<td>是否开启驼峰命名自动映射，即从经典数据库列名 A_COLUMN 映射到经典 Java 属性名 aColumn。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>localCacheScope</td>
<td>MyBatis 利用本地缓存机制（Local Cache）防止循环引用和加速重复的嵌套查询。 默认值为 SESSION，会缓存一个会话中执行的所有查询。 若设置值为 STATEMENT，本地缓存将仅用于执行语句，对相同 SqlSession 的不同查询将不会进行缓存。</td>
<td>SESSION</td>
<td>STATEMENT</td>
</tr>
<tr>
<td>jdbcTypeForNull</td>
<td>当没有为参数指定特定的 JDBC 类型时，空值的默认 JDBC 类型。 某些数据库驱动需要指定列的 JDBC 类型，多数情况直接用一般类型即可，比如 NULL、VARCHAR 或 OTHER。</td>
<td>JdbcType 常量，常用值：NULL、VARCHAR 或 OTHER。</td>
<td>OTHER</td>
</tr>
<tr>
<td>lazyLoadTriggerMethods</td>
<td>指定对象的哪些方法触发一次延迟加载。</td>
<td>用逗号分隔的方法列表。</td>
<td>equals,clone,hashCode,toString</td>
</tr>
<tr>
<td>defaultScriptingLanguage</td>
<td>指定动态 SQL 生成使用的默认脚本语言。</td>
<td>一个类型别名或全限定类名。</td>
<td>org.apache.ibatis.scripting.xmltags.XMLLanguageDriver</td>
</tr>
<tr>
<td>defaultEnumTypeHandler</td>
<td>指定 Enum 使用的默认 TypeHandler 。（新增于 3.4.5）</td>
<td>一个类型别名或全限定类名。</td>
<td>org.apache.ibatis.type.EnumTypeHandler</td>
</tr>
<tr>
<td>callSettersOnNulls</td>
<td>指定当结果集中值为 null 的时候是否调用映射对象的 setter（map 对象时为 put）方法，这在依赖于 Map.keySet() 或 null 值进行初始化时比较有用。注意基本类型（int、boolean 等）是不能设置成 null 的。</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>returnInstanceForEmptyRow</td>
<td>当返回行的所有列都是空时，MyBatis默认返回 null。 当开启这个设置时，MyBatis会返回一个空实例。 请注意，它也适用于嵌套的结果集（如集合或关联）。（新增于 3.4.2）</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>logPrefix</td>
<td>指定 MyBatis 增加到日志名称的前缀。</td>
<td>任何字符串</td>
<td>未设置</td>
</tr>
<tr>
<td>logImpl</td>
<td>指定 MyBatis 所用日志的具体实现，未指定时将自动查找。</td>
<td>SLF4J</td>
<td>LOG4J</td>
</tr>
<tr>
<td>proxyFactory</td>
<td>指定 Mybatis 创建可延迟加载对象所用到的代理工具。</td>
<td>CGLIB</td>
<td>JAVASSIST</td>
</tr>
<tr>
<td>vfsImpl</td>
<td>指定 VFS 的实现</td>
<td>自定义 VFS 的实现的类全限定名，以逗号分隔。</td>
<td>未设置</td>
</tr>
<tr>
<td>useActualParamName</td>
<td>允许使用方法签名中的名称作为语句参数名称。 为了使用该特性，你的项目必须采用 Java 8 编译，并且加上 -parameters 选项。（新增于 3.4.1）</td>
<td>true</td>
<td>false</td>
</tr>
<tr>
<td>configurationFactory</td>
<td>指定一个提供 Configuration 实例的类。 这个被返回的 Configuration 实例用来加载被反序列化对象的延迟加载属性值。 这个类必须包含一个签名为static Configuration getConfiguration() 的方法。（新增于 3.2.3）</td>
<td>一个类型别名或完全限定类名。</td>
<td>未设置</td>
</tr>
<tr>
<td>shrinkWhitespacesInSql</td>
<td>Removes extra whitespace characters from the SQL. Note that this also affects literal strings in SQL. (Since 3.5.5)</td>
<td>true</td>
<td>false</td>
</tr>
</tbody>
</table>
<p><strong>自动驼峰命名</strong>（<strong>mapUnderscoreToCamelCase</strong>）演示</p>
<p>在数据库中添加字段：login_account</p>
<p>在Java实体类中添加字段：loginAccount</p>
<p>mybatis配置：mapUnderscoreToCamelCase</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>

  ...

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>

​     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logImpl<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LOG4J<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

​     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mapUnderscoreToCamelCase<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>

  ...

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-13 11:02:02,098 ==> Preparing: select * from t_employee where id = ? (BaseJdbcLogger.java:137) 

DEBUG 07-13 11:02:02,127 ==> Parameters: 1(Integer) (BaseJdbcLogger.java:137) 

DEBUG 07-13 11:02:02,143 &lt;==   Total: 1 (BaseJdbcLogger.java:137) 

Employee{id=1, empName='netty', email='netty@qq.com', gender=1, loginAccount='netty'}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typealiases-类型别名-和typehandlers-类型处理器" tabindex="-1"><a class="header-anchor" href="#typealiases-类型别名-和typehandlers-类型处理器" aria-hidden="true">#</a> typeAliases（类型别名）和typeHandlers（类型处理器）</h2>
<p>起别名的三种方式：</p>
<p>默认方式起别名：别名就是全类名的最后一个类名：Employee</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
    ...
    <span class="token comment">&lt;!--    为常用全类名起别名--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAlias</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>别名为emp</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
    ...
    <span class="token comment">&lt;!--    为常用全类名起别名--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAliases</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>typeAlias</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span> <span class="token attr-name">alias</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emp<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>typeAliases</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>emp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>批量起别名：</p>
<p>使用注解起别名：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Alias</span><span class="token punctuation">(</span><span class="token string">"emp"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型处理器" tabindex="-1"><a class="header-anchor" href="#类型处理器" aria-hidden="true">#</a> 类型处理器</h3>
<hr>
<p>MyBatis 在设置预处理语句（PreparedStatement）中的参数或从结果集中取出一个值时， 都会用类型处理器将获取到的值以合适的方式转换成 Java 类型。下表描述了一些默认的类型处理器。</p>
<p>提示 从 3.4.5 开始，MyBatis 默认支持 JSR-310（日期和时间 API） 。</p>
<table>
<thead>
<tr>
<th>类型处理器</th>
<th>Java 类型</th>
<th>JDBC 类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>BooleanTypeHandler</td>
<td>java.lang.Boolean, boolean</td>
<td>数据库兼容的 BOOLEAN</td>
</tr>
<tr>
<td>ByteTypeHandler</td>
<td>java.lang.Byte, byte</td>
<td>数据库兼容的 NUMERIC 或 BYTE</td>
</tr>
<tr>
<td>ShortTypeHandler</td>
<td>java.lang.Short, short</td>
<td>数据库兼容的 NUMERIC 或 SMALLINT</td>
</tr>
<tr>
<td>IntegerTypeHandler</td>
<td>java.lang.Integer, int</td>
<td>数据库兼容的 NUMERIC 或 INTEGER</td>
</tr>
<tr>
<td>LongTypeHandler</td>
<td>java.lang.Long, long</td>
<td>数据库兼容的 NUMERIC 或 BIGINT</td>
</tr>
<tr>
<td>FloatTypeHandler</td>
<td>java.lang.Float, float</td>
<td>数据库兼容的 NUMERIC 或 FLOAT</td>
</tr>
<tr>
<td>DoubleTypeHandler</td>
<td>java.lang.Double, double</td>
<td>数据库兼容的 NUMERIC 或 DOUBLE</td>
</tr>
<tr>
<td>BigDecimalTypeHandler</td>
<td>java.math.BigDecimal</td>
<td>数据库兼容的 NUMERIC 或 DECIMAL</td>
</tr>
<tr>
<td>StringTypeHandler</td>
<td>java.lang.String</td>
<td>CHAR, VARCHAR</td>
</tr>
<tr>
<td>ClobReaderTypeHandler</td>
<td>java.io.Reader</td>
<td>-</td>
</tr>
<tr>
<td>ClobTypeHandler</td>
<td>java.lang.String</td>
<td>CLOB, LONGVARCHAR</td>
</tr>
<tr>
<td>NStringTypeHandler</td>
<td>java.lang.String</td>
<td>NVARCHAR, NCHAR</td>
</tr>
<tr>
<td>NClobTypeHandler</td>
<td>java.lang.String</td>
<td>NCLOB</td>
</tr>
<tr>
<td>BlobInputStreamTypeHandler</td>
<td>java.io.InputStream</td>
<td>-</td>
</tr>
<tr>
<td>ByteArrayTypeHandler</td>
<td>byte[]</td>
<td>数据库兼容的字节流类型</td>
</tr>
<tr>
<td>BlobTypeHandler</td>
<td>byte[]</td>
<td>BLOB, LONGVARBINARY</td>
</tr>
<tr>
<td>DateTypeHandler</td>
<td>java.util.Date</td>
<td>TIMESTAMP</td>
</tr>
<tr>
<td>DateOnlyTypeHandler</td>
<td>java.util.Date</td>
<td>DATE</td>
</tr>
<tr>
<td>TimeOnlyTypeHandler</td>
<td>java.util.Date</td>
<td>TIME</td>
</tr>
<tr>
<td>SqlTimestampTypeHandler</td>
<td>java.sql.Timestamp</td>
<td>TIMESTAMP</td>
</tr>
<tr>
<td>SqlDateTypeHandler</td>
<td>java.sql.Date</td>
<td>DATE</td>
</tr>
<tr>
<td>SqlTimeTypeHandler</td>
<td>java.sql.Time</td>
<td>TIME</td>
</tr>
<tr>
<td>ObjectTypeHandler</td>
<td>Any</td>
<td>OTHER 或未指定类型</td>
</tr>
<tr>
<td>EnumTypeHandler</td>
<td>Enumeration Type</td>
<td>VARCHAR 或任何兼容的字符串类型，用来存储枚举的名称（而不是索引序数值）</td>
</tr>
<tr>
<td>EnumOrdinalTypeHandler</td>
<td>Enumeration Type</td>
<td>任何兼容的 NUMERIC 或 DOUBLE 类型，用来存储枚举的序数值（而不是名称）。</td>
</tr>
<tr>
<td>SqlxmlTypeHandler</td>
<td>java.lang.String</td>
<td>SQLXML</td>
</tr>
<tr>
<td>InstantTypeHandler</td>
<td>java.time.Instant</td>
<td>TIMESTAMP</td>
</tr>
<tr>
<td>LocalDateTimeTypeHandler</td>
<td>java.time.LocalDateTime</td>
<td>TIMESTAMP</td>
</tr>
<tr>
<td>LocalDateTypeHandler</td>
<td>java.time.LocalDate</td>
<td>DATE</td>
</tr>
<tr>
<td>LocalTimeTypeHandler</td>
<td>java.time.LocalTime</td>
<td>TIME</td>
</tr>
<tr>
<td>OffsetDateTimeTypeHandler</td>
<td>java.time.OffsetDateTime</td>
<td>TIMESTAMP</td>
</tr>
<tr>
<td>OffsetTimeTypeHandler</td>
<td>java.time.OffsetTime</td>
<td>TIME</td>
</tr>
<tr>
<td>ZonedDateTimeTypeHandler</td>
<td>java.time.ZonedDateTime</td>
<td>TIMESTAMP</td>
</tr>
<tr>
<td>YearTypeHandler</td>
<td>java.time.Year</td>
<td>INTEGER</td>
</tr>
<tr>
<td>MonthTypeHandler</td>
<td>java.time.Month</td>
<td>INTEGER</td>
</tr>
<tr>
<td>YearMonthTypeHandler</td>
<td>java.time.YearMonth</td>
<td>VARCHAR 或 LONGVARCHAR</td>
</tr>
<tr>
<td>JapaneseDateTypeHandler</td>
<td>java.time.chrono.JapaneseDate</td>
<td>DATE</td>
</tr>
</tbody>
</table>
<h2 id="【了解】plugins-插件" tabindex="-1"><a class="header-anchor" href="#【了解】plugins-插件" aria-hidden="true">#</a> 【了解】plugins（插件）</h2>
<p>MyBatis的四大对象：</p>
<ul>
<li>
<p>Executor (update, query, flushStatements, commit, rollback, getTransaction, close, isClosed)</p>
</li>
<li>
<p>ParameterHandler (getParameterObject, setParameters)</p>
</li>
<li>
<p>ResultSetHandler (handleResultSets, handleOutputParameters)</p>
</li>
<li>
<p>StatementHandler (prepare, parameterize, batch, update, query)</p>
</li>
</ul>
<h2 id="环境配置-environments" tabindex="-1"><a class="header-anchor" href="#环境配置-environments" aria-hidden="true">#</a> 环境配置（environments）</h2>
<h3 id="环境" tabindex="-1"><a class="header-anchor" href="#环境" aria-hidden="true">#</a> 环境</h3>
<p>每一个环境都需要一个事务管理器（transactionManager）和数据源（dataSource）</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--    default 默认使用哪个环境--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environments</span> <span class="token attr-name">default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--        id 是当前环境的唯一标识--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>environment</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>development<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--            事务控制和连接池使用的是其他（如spring），这个配置可以暂时使用这个--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transactionManager</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>JDBC<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--            配置连接池  --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>POOLED<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${driver}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${url}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${username}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>${password}<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environment</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>environments</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库厂商标识-databaseidprovider" tabindex="-1"><a class="header-anchor" href="#数据库厂商标识-databaseidprovider" aria-hidden="true">#</a> 数据库厂商标识（databaseIdProvider）</h2>
<p>Mybatis配置的先后顺序：</p>
<p>properties?, settings?, typeAliases?, typeHandlers?, objectFactory?, objectWrapperFactory?, reflectorFactory?, plugins?, environments?, databaseIdProvider?, mappers?</p>
<ol>
<li>首先在主配置文件下配置厂商名字：在environments标签下面（非内部）</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--  mybatis用来考虑数据的移植性  --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>databaseIdProvider</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>DB_VENDOR<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--        name 数据库厂商标识 value 给这个标识起一个名字
            MySQL、Oracle、SQL Server
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MySQL<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mysql<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Oracle<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oracle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SQL Server<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sqlserver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>databaseIdProvider</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在SQL映射文件中就可以这样执行</li>
</ol>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Employee<span class="token punctuation">"</span></span> <span class="token attr-name">databaseId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mysql<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Employee<span class="token punctuation">"</span></span> <span class="token attr-name">databaseId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>oracle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射器-mappers" tabindex="-1"><a class="header-anchor" href="#映射器-mappers" aria-hidden="true">#</a> 映射器（mappers）</h2>
<h3 id="mappers" tabindex="-1"><a class="header-anchor" href="#mappers" aria-hidden="true">#</a> mappers</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;!--    写好的SQL映射文件需要使用mappers映射进来-->
&lt;mappers>
    &lt;!--                &lt;mapper resource="EmployeeDao.xml"/>-->
    &lt;!--
            mapper属性：
            class 直接引用接口的【全类名】，但是需要把这个SQL映射文件(.xml)放到通DAO(interface)接口一个文件夹下
                另一种用法：Dao接口直接使用注解的模式@Select @Insert @Update @Delete【不推荐,推荐配合XML使用】
                    重要的DAO写XML，不重要的直接写注解（混合开发）
            【常用】resource 在类路径下找SQL映射文件
            url 可以从磁盘/网络路径
        -->
    &lt;!--                &lt;mapper class="cn.zhiyucs.dao.EmployeeDao">&lt;/mapper>-->
    &lt;!--        批量注册
                        dao所在的包名
        -->
    &lt;!--                &lt;mapper resource="EmployeeDao.xml"/>-->
    &lt;package name="cn.zhiyucs.dao">&lt;/package>
&lt;/mappers>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：SQL映射文件名最好和Dao的接口<strong>名字一致</strong>，这样在使用class属性和package标签的时候就不会发生错误。</p>
<figure><img src="@source/Java/fm/images/bddb3003-8732-43ab-afda-f5bc7f91a340.png" alt="bddb3003-8732-43ab-afda-f5bc7f91a340" tabindex="0" loading="lazy"><figcaption>bddb3003-8732-43ab-afda-f5bc7f91a340</figcaption></figure>
<h2 id="sql映射-获取自增id" tabindex="-1"><a class="header-anchor" href="#sql映射-获取自增id" aria-hidden="true">#</a> SQL映射 获取自增ID</h2>
<h3 id="在sql映射文件内的-mapper-标签下可以写的主要标签有" tabindex="-1"><a class="header-anchor" href="#在sql映射文件内的-mapper-标签下可以写的主要标签有" aria-hidden="true">#</a> 在SQL映射文件内的 mapper 标签下可以写的主要标签有</h3>
<ul>
<li><code v-pre>&lt;cache/&gt;</code>: 缓存有关</li>
<li><code v-pre>&lt;cache-ref namespace=&quot;&quot;/&gt;</code> 缓存有关</li>
<li>delete update insert select</li>
<li><code v-pre>&lt;parameterMap id=&quot;&quot; type=&quot;&quot;&gt;&lt;/parameterMap&gt;</code> 废弃. 原本是做复杂参数映射</li>
<li><code v-pre>&lt;resultMap id=&quot;&quot;&gt;type=&quot;&quot;&lt;/resultMap&gt;</code> 结果映射，自定义结果集</li>
<li><code v-pre>&lt;sql id=&quot;&quot;/&gt;</code> 抽取可重用的sql</li>
</ul>
<h3 id="简述-delete-update-insert-select-的属性" tabindex="-1"><a class="header-anchor" href="#简述-delete-update-insert-select-的属性" aria-hidden="true">#</a> 简述：delete update insert select 的属性</h3>
<ul>
<li>id 唯一标识符</li>
<li>useGeneratedKeys 原生JDBC获取自增主键</li>
<li>keyProperty 配合useGeneratedKeys 实现获取插入数据后的自增id,让mybatis自动将自增id赋值给对象</li>
</ul>
<h3 id="获取主键自增属性" tabindex="-1"><a class="header-anchor" href="#获取主键自增属性" aria-hidden="true">#</a> 获取主键自增属性</h3>
<p>获取自增ID：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertEmployee<span class="token punctuation">"</span></span> <span class="token attr-name">useGeneratedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    insert into t_employee(empname,gender,email) values(#{empName},#{gender},#{email})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 00:22:24,082 ==>  Preparing: insert into t_employee(empname,gender,email) values(?,?,?)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:22:24,111 ==> Parameters: tomcat5(String), 1(Integer), tomcat5@qq.com(String)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:22:24,122 &lt;==    Updates: 1  (BaseJdbcLogger.java:137) 
自增ID：8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取非主键自增属性" tabindex="-1"><a class="header-anchor" href="#获取非主键自增属性" aria-hidden="true">#</a> 获取非主键自增属性</h3>
<p>获取最大的ID自增1，加入到实体类的属性里面</p>
<p><code v-pre>&lt;selectKey&gt;</code> 查询主键</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>insertEmployee2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 查询主键
        order="BEFORE" 在核心SQL语句之前运行一个SQL查到ID，将查到的ID赋值给实体类的属性
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>selectKey</span> <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>BEFORE<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>integer<span class="token punctuation">"</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select max(id)+1 from t_employee;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>selectKey</span><span class="token punctuation">></span></span>
    insert into t_employee(id,empname,gender,email) values(#{id},#{empName},#{gender},#{email})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 00:33:11,370 ==>  Preparing: select max(id)+1 from t_employee;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:33:11,393 ==> Parameters:   (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:33:11,407 &lt;==      Total: 1  (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:33:11,407 ==>  Preparing: insert into t_employee(id,empname,gender,email) values(?,?,?,?)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:33:11,409 ==> Parameters: 10(Integer), tomcat6(String), 0(Integer), tomcat6@qq.com(String)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 00:33:11,410 &lt;==    Updates: 1  (BaseJdbcLogger.java:137) 
10 //代码： Employee emp = new Employee(null, "tomcat6", "tomcat6@qq.com", 0); System.out.println(em
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql映射-传入多个参数" tabindex="-1"><a class="header-anchor" href="#sql映射-传入多个参数" aria-hidden="true">#</a> SQL映射 传入多个参数</h2>
<p><strong>传入单个参数</strong>：</p>
<p>​      基本类型：</p>
<p>​        <strong>取值：#{随便写}</strong></p>
<p>​      传入POJO</p>
<p><strong>传入多个参数</strong>：</p>
<p>​      <strong>取值：#{param1} #{param2}</strong></p>
<p>​        原因：只要传入多个参数，mybatis会自动将这些参数封装在一个map，</p>
<p>​        封装时使用的key就是参数的索引和参数的第几个表示</p>
<p>​       <code v-pre> Map&lt;String, Object&gt; map = new HashMap&lt;&gt;();</code></p>
<p>​        #{key}就是从这个map的取值</p>
<p>​      <strong>【推荐】使用指定方式封装：@Param(&quot;id&quot;) Integer id, @Param(&quot;empName&quot;) String empName</strong></p>
<p>​      为参数指定key(命名参数)</p>
<p pojo属性名="">​      <strong>传入POJO</strong>：#</p>
<p>示例：</p>
<p>接口1写法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">getEmpByIdAndName</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"empName"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> empName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpByIdAndName<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_employee where id=#{id} and empname=#{empName};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口2写法：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">getEmpByIdAndName</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">,</span> <span class="token class-name">String</span> empName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpByIdAndName<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_employee where id=#{param1} and empname=#{param2};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="传入map" tabindex="-1"><a class="header-anchor" href="#传入map" aria-hidden="true">#</a> 传入Map</h3>
<p>映射配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpByMap<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_employee where id=#{id} and empname=#{empName};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Employee</span> <span class="token function">getEmpByMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 测试查询</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testRetrieveMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"empName"</span><span class="token punctuation">,</span> <span class="token string">"netty"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Employee</span> emp <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getEmpByMap</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>emp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">56</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">844</span> <span class="token operator">==</span><span class="token operator">></span>  <span class="token class-name">Preparing</span><span class="token operator">:</span> select <span class="token operator">*</span> from t_employee where id<span class="token operator">=</span><span class="token operator">?</span> and empname<span class="token operator">=</span><span class="token operator">?</span><span class="token punctuation">;</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">56</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">872</span> <span class="token operator">==</span><span class="token operator">></span> <span class="token class-name">Parameters</span><span class="token operator">:</span> <span class="token function">1</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">netty</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">56</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token number">886</span> <span class="token operator">&lt;=</span><span class="token operator">=</span>      <span class="token class-name">Total</span><span class="token operator">:</span> <span class="token number">1</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token class-name">Employee</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> empName<span class="token operator">=</span><span class="token char">'netty'</span><span class="token punctuation">,</span> email<span class="token operator">=</span>'netty<span class="token annotation punctuation">@qq.com</span>'<span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> loginAccount<span class="token operator">=</span><span class="token char">'null'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取值属性" tabindex="-1"><a class="header-anchor" href="#取值属性" aria-hidden="true">#</a> #{}取值属性</h3>
<p>取值规则：</p>
<p key属性名="">​      #</p>
<p id,jdbcType="INTEGER">​        如：id = #</p>
<p>​          jdbcType 最可能被指定的属性(case: oracle不知道Java传入NULL是什么)</p>
<p>​          * numericScale</p>
<p>​          * resultMap</p>
<p>​          * typeHandler</p>
<p>​          * jdbcTypeName</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpById<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee where id = #{id, jdbcType=INTEGER}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两种取值方式" tabindex="-1"><a class="header-anchor" href="#两种取值方式" aria-hidden="true">#</a> 两种取值方式：${} #{}</h3>
<ul>
<li>#{} 参数是预编译的方式，参数的方式使用 ? 代替, 参数后来都是预编译设置进去</li>
<li>${} 不是参数预编译, 而是直接和sql进行拼串【不安全】, 但可以动态取表名</li>
<li>在不支持预编译的位置进行取值就可以使用${}</li>
</ul>
<h2 id="sql映射-查询集合" tabindex="-1"><a class="header-anchor" href="#sql映射-查询集合" aria-hidden="true">#</a> SQL映射 查询集合</h2>
<h3 id="封装成list" tabindex="-1"><a class="header-anchor" href="#封装成list" aria-hidden="true">#</a> 封装成LIST</h3>
<p>​    SQL配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--  resultType如果返回的集合，写的是集合里面元素的类型  --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllEmps<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">getAllEmps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>测试结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 01:12:58,909 ==>  Preparing: select * from t_employee;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 01:12:58,936 ==> Parameters:   (BaseJdbcLogger.java:137) 
DEBUG 07-15 01:12:58,951 &lt;==      Total: 7  (BaseJdbcLogger.java:137) 
Employee{id=1, empName='netty', email='netty@qq.com', gender=1, loginAccount='null'}
Employee{id=3, empName='tomcat', email='tomcat@qq.com', gender=0, loginAccount='null'}
Employee{id=5, empName='tomcat2', email='tomcat2@qq.com', gender=0, loginAccount='null'}
Employee{id=7, empName='tomcat3', email='tomcat3@qq.com', gender=0, loginAccount='null'}
Employee{id=8, empName='tomcat5', email='tomcat5@qq.com', gender=1, loginAccount='null'}
Employee{id=9, empName='tomcat6', email='tomcat6@qq.com', gender=0, loginAccount='null'}
Employee{id=10, empName='tomcat7', email='tomcat6@qq.com', gender=0, loginAccount='null'}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装成map" tabindex="-1"><a class="header-anchor" href="#封装成map" aria-hidden="true">#</a> 封装成MAP</h3>
<p>查询单个记录：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getEmpByIdRetMap<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>map<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee where id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> <span class="token function">getEmpByIdRetMap</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 01:18:09,253 ==>  Preparing: select * from t_employee where id = ?  (BaseJdbcLogger.java:137) 
DEBUG 07-15 01:18:09,287 ==> Parameters: 1(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 01:18:09,307 &lt;==      Total: 1  (BaseJdbcLogger.java:137) 
{empname=netty, gender=1, id=1, login_account=netty, email=netty@qq.com}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询多条记录：关键注解 -- <strong>@MapKey</strong></p>
<p>注意：查询多个的时候resultType写的是实体类的类型</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getAllEmpsRetMap<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Employee<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_employee;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">//    @MapKey把查出的key为id作为Map的key封装进去</span>
<span class="token annotation punctuation">@MapKey</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">></span></span> <span class="token function">getAllEmpsRetMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testRetrieveRetAllMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Employee</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getAllEmpsRetMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//        System.out.println(map);</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">01</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">03</span><span class="token punctuation">,</span><span class="token number">139</span> <span class="token operator">==</span><span class="token operator">></span>  <span class="token class-name">Preparing</span><span class="token operator">:</span> select <span class="token operator">*</span> from t_employee<span class="token punctuation">;</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">01</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">03</span><span class="token punctuation">,</span><span class="token number">165</span> <span class="token operator">==</span><span class="token operator">></span> <span class="token class-name">Parameters</span><span class="token operator">:</span>   <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">01</span><span class="token operator">:</span><span class="token number">27</span><span class="token operator">:</span><span class="token number">03</span><span class="token punctuation">,</span><span class="token number">182</span> <span class="token operator">&lt;=</span><span class="token operator">=</span>      <span class="token class-name">Total</span><span class="token operator">:</span> <span class="token number">7</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token class-name">Employee</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> empName<span class="token operator">=</span><span class="token char">'netty'</span><span class="token punctuation">,</span> email<span class="token operator">=</span>'netty<span class="token annotation punctuation">@qq.com</span>'<span class="token punctuation">,</span> gender<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> loginAccount<span class="token operator">=</span><span class="token char">'null'</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql映射-自定义resulttype" tabindex="-1"><a class="header-anchor" href="#sql映射-自定义resulttype" aria-hidden="true">#</a> SQL映射 自定义resultType</h2>
<p>应用场景：当数据库中的列名和实体类中的属性名不一致时</p>
<p>实体类的属性值：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> gender<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库中的属性名：</p>
<figure><img src="@source/Java/fm/images/51b28d1e-dc26-41a1-ad42-818e26e30bd2.png" alt="51b28d1e-dc26-41a1-ad42-818e26e30bd2" tabindex="0" loading="lazy"><figcaption>51b28d1e-dc26-41a1-ad42-818e26e30bd2</figcaption></figure>
<p>在SQL映射中自定义规则：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--    自定义结果集：
            type 指定实体类的封装规则：全类名
            id 唯一标识
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Cat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--
        column 指定在数据库里这个属性对应的列
        property 指定实体类封装这个ID的属性
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cAge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cGender<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用自定义规则：<strong>关键属性 -- resultMap</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getCatById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cat<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_cat where id = #{id};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 01:47:29,015 ==>  Preparing: select * from t_cat where id = ?;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 01:47:29,043 ==> Parameters: 1(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 01:47:29,057 &lt;==      Total: 1  (BaseJdbcLogger.java:137) 
Cat{id=1, name='加菲猫', gender=0, age=12}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql映射-级联属性查询" tabindex="-1"><a class="header-anchor" href="#sql映射-级联属性查询" aria-hidden="true">#</a> SQL映射 级联属性查询</h2>
<h3 id="序言-一对一关联" tabindex="-1"><a class="header-anchor" href="#序言-一对一关联" aria-hidden="true">#</a> 序言: 一对一关联</h3>
<p>key实体类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Key</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Lock</span> lock<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lock实体类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Lock</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> lockName<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两个类的数据库属性：</p>
<figure><img src="@source/Java/fm/images/f161d369-3eea-48af-bf04-11d9fe4d0c2e.png" alt="f161d369-3eea-48af-bf04-11d9fe4d0c2e" tabindex="0" loading="lazy"><figcaption>f161d369-3eea-48af-bf04-11d9fe4d0c2e</figcaption></figure>
<p>同时映射了外键lockid</p>
<figure><img src="@source/Java/fm/images/13e6e1c7-f56c-449e-a97d-fe46e6acfd17.png" alt="13e6e1c7-f56c-449e-a97d-fe46e6acfd17" tabindex="0" loading="lazy"><figcaption>13e6e1c7-f56c-449e-a97d-fe46e6acfd17</figcaption></figure>
<figure><img src="@source/Java/fm/images/568320a5-c6af-408f-83f4-d975a17b0799.png" alt="568320a5-c6af-408f-83f4-d975a17b0799" tabindex="0" loading="lazy"><figcaption>568320a5-c6af-408f-83f4-d975a17b0799</figcaption></figure>
<p>在SQL映射文件配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.dao.KeyDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyName<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock.id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock.lockName<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getKeyById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        SELECT
            k.id kid,k.keyname,k.lockid,
            l.id lid,l.lockName
        FROM t_key k
        LEFT JOIN t_lock l ON k.lockid = l.id
        WHERE k.id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<strong>association</strong>方式配置</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyName<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token comment">&lt;!--        自定义对象的封装规则 表示联合了一个对象
                    property：指定哪一个属性
                    javaType： 指定对象类型
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock<span class="token punctuation">"</span></span> <span class="token attr-name">javaType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Lock<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockName<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 11:47:05,874 ==>  Preparing: SELECT k.id kid,k.keyname,k.lockid, l.id lid,l.lockName FROM t_key k LEFT JOIN t_lock l ON k.lockid = l.id WHERE k.id = ?  (BaseJdbcLogger.java:137) 
DEBUG 07-15 11:47:05,899 ==> Parameters: 1(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 11:47:05,913 &lt;==      Total: 1  (BaseJdbcLogger.java:137) 
Key{id=1, keyName='1号钥匙', lock=Lock{id=1, lockName='1号锁'}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql映射-级联-一对多-多对多" tabindex="-1"><a class="header-anchor" href="#sql映射-级联-一对多-多对多" aria-hidden="true">#</a> SQL映射 级联 一对多 多对多</h2>
<p>一对多，外键放在多的一端</p>
<p>多对多，新建中间表存储对应关系</p>
<h3 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h3>
<p>实体类对Lock进行修改：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Lock</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> lockName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Key</span><span class="token punctuation">></span></span> keys<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Lock</span><span class="token punctuation">></span></span> <span class="token function">getLockById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置SQL映射：注意是<strong>ofType</strong></p>
<p><strong>如果是封装一个集合使用的是collection</strong></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.dao.LockDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Lock<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockName<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockname<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token comment">&lt;!--    定义集合元素的封装
                       property 指定哪个属性时集合属性
                       ofType 指定集合中元素的类型
        --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keys<span class="token punctuation">"</span></span> <span class="token attr-name">ofType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kid<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyname<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyName<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getLockById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        SELECT
            k.id kid,k.keyname,k.lockid,
            l.id lid,l.lockName
        FROM t_lock l
        LEFT JOIN t_key k ON l.id = k.lockid
        WHERE l.id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 12:36:13,200 ==>  Preparing: SELECT k.id kid,k.keyname,k.lockid, l.id lid,l.lockName FROM t_lock l LEFT JOIN t_key k ON l.id = k.lockid WHERE l.id = ?  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:36:13,226 ==> Parameters: 3(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:36:13,241 &lt;==      Total: 3  (BaseJdbcLogger.java:137) 
[Lock{id=3, lockName='303锁'}, Lock{id=4, lockName='303锁'}, Lock{id=5, lockName='303锁'}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql映射-分步查询" tabindex="-1"><a class="header-anchor" href="#sql映射-分步查询" aria-hidden="true">#</a> SQL映射 分步查询</h2>
<h3 id="association分步查询" tabindex="-1"><a class="header-anchor" href="#association分步查询" aria-hidden="true">#</a> association分步查询</h3>
<hr>
<p>分步思路：先查询key的lockid传到lock，查询到这个数据返回封装到key的lock属性里</p>
<p>​    分别增加一个测试接口：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Key</span> <span class="token function">getKeyByIdSimple</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">Lock</span> <span class="token function">getLcokSimple</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>LOCK类的SQL映射：Lock等待一个KEY传送过来的ID进行查询</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getLcokSimple<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Lock<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_lock where id = #{id};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>KEY类的SQL映射：</p>
<p>关键：select column属性</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!--
        select: 指定查询SQL的唯一标识，mybatis自动调用指定的SQL将查出的lock封装进来
        column: 指定哪一列的数据传送数据到这个SQL
--></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key2<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyName<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keyname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>association</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lock<span class="token punctuation">"</span></span>
                 <span class="token attr-name">javaType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Lock<span class="token punctuation">"</span></span>
                 <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.dao.LockDao.getLcokSimple<span class="token punctuation">"</span></span>
                 <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>association</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getKeyByIdSimple<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>key2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_key where id = #{id};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<p>从测试结果可以看出先查询钥匙Preparing: select * from t_key where id = ?</p>
<p>再把查出的锁lockid传入到getLcokSimple：Preparing: select * from t_lock where id = ?</p>
<p>封装到这个Key实体类</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 12:51:15,968 ==>  Preparing: select * from t_key where id = ?;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:51:15,991 ==> Parameters: 1(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:51:16,004 ====>  Preparing: select * from t_lock where id = ?;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:51:16,004 ====> Parameters: 1(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:51:16,007 &lt;====      Total: 1  (BaseJdbcLogger.java:137) 
DEBUG 07-15 12:51:16,007 &lt;==      Total: 1  (BaseJdbcLogger.java:137) 
Key{id=1, keyName='1号钥匙', lock=Lock{id=1, lockName='1号锁'}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="collection分布查询" tabindex="-1"><a class="header-anchor" href="#collection分布查询" aria-hidden="true">#</a> Collection分布查询</h3>
<hr>
<p>分步思路：先查询到LOCKid，传入到KEY的lockid，查询到多个数据封装到Lock的keys里面</p>
<p>接口:</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Lock</span> <span class="token function">getLockByIdByStep</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Key</span><span class="token punctuation">></span></span> <span class="token function">getKeysByLockId</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>KEY的SQL映射：等待一个id传入查询lockid</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getKeysByLockId<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Key<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_key where lockid = #{id};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LOCK的SQL映射：分布查询集合<code v-pre>&lt;collection&gt;</code>：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockstep<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Lock<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockName<span class="token punctuation">"</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keys<span class="token punctuation">"</span></span> <span class="token attr-name">ofType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Key<span class="token punctuation">"</span></span>
                <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.dao.KeyDao.getKeysByLockId<span class="token punctuation">"</span></span>
                <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getLockByIdByStep<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lockstep<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_lock where id = #{id};
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>DEBUG 07-15 13:19:17,367 ==>  Preparing: select * from t_lock where id = ?;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 13:19:17,417 ==> Parameters: 3(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 13:19:17,475 &lt;==      Total: 1  (BaseJdbcLogger.java:137) 
DEBUG 07-15 13:19:17,476 ==>  Preparing: select * from t_key where lockid = ?;  (BaseJdbcLogger.java:137) 
DEBUG 07-15 13:19:17,476 ==> Parameters: 3(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 13:19:17,478 &lt;==      Total: 3  (BaseJdbcLogger.java:137) 
303钥匙1
303钥匙2
303钥匙3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sql映射-延迟加载-按需加载" tabindex="-1"><a class="header-anchor" href="#sql映射-延迟加载-按需加载" aria-hidden="true">#</a> SQL映射 延迟加载 按需加载</h2>
<p>全局开启按需加载和延时加载</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>settings</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--        延迟加载--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazyLoadingEnabled<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--        属性按需加载--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>setting</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aggressiveLazyLoading<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>settings</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>局部开启：fetchType</p>
<figure><img src="@source/Java/fm/images/c27b8eb0-8eef-4365-a59d-45217c07602e.png" alt="c27b8eb0-8eef-4365-a59d-45217c07602e" tabindex="0" loading="lazy"><figcaption>c27b8eb0-8eef-4365-a59d-45217c07602e</figcaption></figure>
<h2 id="动态sql-if" tabindex="-1"><a class="header-anchor" href="#动态sql-if" aria-hidden="true">#</a> 动态SQL IF</h2>
<p>数据库数据的列：</p>
<figure><img src="@source/Java/fm/images/998e86f8-661b-4f9f-b1b7-25159c1569fa.png" alt="998e86f8-661b-4f9f-b1b7-25159c1569fa" tabindex="0" loading="lazy"><figcaption>998e86f8-661b-4f9f-b1b7-25159c1569fa</figcaption></figure>
<p>实体类的定义：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Teacher</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> course<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> birthday<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口定义：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Teacher</span><span class="token punctuation">></span></span> <span class="token function">getTeacherByCondition</span><span class="token punctuation">(</span><span class="token class-name">Teacher</span> teacher<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置SQL映射：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span>
        <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.dao.TeacherDao<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.zhiyucs.domain.Teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher_name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>class_name<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>course<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday<span class="token punctuation">"</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_teacher where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实战动态sql-if" tabindex="-1"><a class="header-anchor" href="#实战动态sql-if" aria-hidden="true">#</a> 实战动态SQL IF</h3>
<hr>
<p>查询的条件是：</p>
<ul>
<li>ID 大于条件ID</li>
<li>名字模糊搜索</li>
<li>生日小于条件生日日期</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherByCondition<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_teacher where
    <span class="token comment">&lt;!--        test 编写判断条件
                id!=null取出传入的实体类属性的id的值，判断是否为空
                OGNL表达式
                &amp;&amp; -> and
                &lt; -> &amp;lt;
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        id > #{id} and
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        teacher_name like #{name} and
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        birthday <span class="token entity named-entity" title="&lt;">&amp;lt;</span> #{birthday}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**这个test里的属性是Java中的属性而不是数据库中的</p>
<h2 id="动态sql-where-trim" tabindex="-1"><a class="header-anchor" href="#动态sql-where-trim" aria-hidden="true">#</a> 动态SQL WHERE TRIM</h2>
<h3 id="where-元素" tabindex="-1"><a class="header-anchor" href="#where-元素" aria-hidden="true">#</a> <strong>where 元素</strong></h3>
<p>只会在子元素返回任何内容的情况下才插入 “WHERE” 子句。而且，若子句的开头为 “AND” 或 “OR”，where 元素也会将它们去除。</p>
<p>完整语句：<code v-pre>select * from t_teacher WHERE id &gt; ? and birthday &lt; ?</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherByCondition<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_teacher
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            id > #{id}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            and teacher_name like #{name}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            and birthday <span class="token entity named-entity" title="&lt;">&amp;lt;</span> #{birthday}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="trim-标签" tabindex="-1"><a class="header-anchor" href="#trim-标签" aria-hidden="true">#</a> trim 标签</h3>
<p>合成的SQL语句是：<code v-pre>select * from t_teacher where id &gt; ? and birthday &lt; ?</code></p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherByCondition<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_teacher
    <span class="token comment">&lt;!--trim标签属性
        prefix 为SQL添加一个前缀
        prefixOverrides 去除字符串多余的字符串
        suffix 为整体添加后缀
        suffixOverrides 后面多了可以去掉
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>where<span class="token punctuation">"</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>and<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            id > #{id} and
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            teacher_name like #{name} and
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            birthday <span class="token entity named-entity" title="&lt;">&amp;lt;</span> #{birthday}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态sql-foreach" tabindex="-1"><a class="header-anchor" href="#动态sql-foreach" aria-hidden="true">#</a> 动态SQL FOREACH</h2>
<p>动态 SQL 的另一个常见使用场景是对<strong>集合进行遍历</strong>（尤其是在构建 <strong>IN 条件语句</strong>的时候）</p>
<p>**提示：**你可以将任何可迭代对象（如 List、Set 等）、Map 对象或者数组对象作为集合参数传递给 <em>foreach</em>。当使用可迭代对象或者数组时，index 是当前迭代的序号，item 的值是本次迭代获取到的元素。当使用 Map 对象（或者 Map.Entry 对象的集合）时，index 是键，item 是值。</p>
<p>​    接口设计：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Teacher</span><span class="token punctuation">></span></span> <span class="token function">getTeacherByIdIn</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"ids"</span><span class="token punctuation">)</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> ids<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherByIdIn<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select * from t_teacher where id IN
    <span class="token comment">&lt;!--
        collection 指定要遍历的集合的key
        index
            如果是list index指定的遍历保存了当前索引
            如果是map index指定的遍历保存了当前遍历的元素的key
        close 以什么结束
        item 每个遍历到的元素,起一个变量名
        open 以什么开始
        separator 每次遍历元素的分隔符
--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span>
             <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ids<span class="token punctuation">"</span></span>
             <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id_item<span class="token punctuation">"</span></span>
             <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>,<span class="token punctuation">"</span></span>
             <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(<span class="token punctuation">"</span></span>
             <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        #{id_item}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入方式及结果：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>List&lt;Teacher> teacher = mapper.getTeacherByIdIn(Arrays.asList(1,2,3,4,5));
DEBUG 07-15 18:28:27,017 ==>  Preparing: select * from t_teacher where id IN ( ? , ? , ? , ? , ? )  (BaseJdbcLogger.java:137) 
DEBUG 07-15 18:28:27,040 ==> Parameters: 1(Integer), 2(Integer), 3(Integer), 4(Integer), 5(Integer)  (BaseJdbcLogger.java:137) 
DEBUG 07-15 18:28:27,057 &lt;==      Total: 3  (BaseJdbcLogger.java:137) 
[Teacher{id=1, name='admin', course='语文', address='保安区', birthday=Wed Jul 01 00:00:00 CST 2020}, Teacher{id=2, name='tomcat', course='数学', address='福田区', birthday=Fri Jul 10 00:00:00 CST 2020}, Teacher{id=3, name='jerry', course='英语', address='罗湖区', birthday=Sun Jul 05 00:00:00 CST 2020}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态sql-choose、when、otherwise" tabindex="-1"><a class="header-anchor" href="#动态sql-choose、when、otherwise" aria-hidden="true">#</a> 动态SQL CHOOSE、WHEN、OTHERWISE</h2>
<p>MyBatis 提供了 choose 元素，它有点像 Java 中的 switch 语句</p>
<p>SQL映射配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherByConditionChoose<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        select * from t_teacher
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    id = #{id}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    teacher_name = #{name}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    birthday = #{birthday}
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otherwise</span><span class="token punctuation">></span></span>
                    1=1
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otherwise</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件一及结果：当id不等于空的时候就成立 -&gt; 只查询id = 传入id(1)的值</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Teacher</span> testTeach <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Teacher</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    testTeach<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    testTeach<span class="token punctuation">.</span><span class="token function">setBirthday</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Teacher</span><span class="token punctuation">></span></span> teacher <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">getTeacherByConditionChoose</span><span class="token punctuation">(</span>testTeach<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>teacher<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">37</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">,</span><span class="token number">865</span> <span class="token operator">==</span><span class="token operator">></span>  <span class="token class-name">Preparing</span><span class="token operator">:</span> select <span class="token operator">*</span> from t_teacher <span class="token class-name">WHERE</span> id <span class="token operator">=</span> <span class="token operator">?</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">37</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">,</span><span class="token number">891</span> <span class="token operator">==</span><span class="token operator">></span> <span class="token class-name">Parameters</span><span class="token operator">:</span> <span class="token function">1</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">)</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token constant">DEBUG</span> <span class="token number">07</span><span class="token operator">-</span><span class="token number">15</span> <span class="token number">18</span><span class="token operator">:</span><span class="token number">37</span><span class="token operator">:</span><span class="token number">42</span><span class="token punctuation">,</span><span class="token number">904</span> <span class="token operator">&lt;=</span><span class="token operator">=</span>      <span class="token class-name">Total</span><span class="token operator">:</span> <span class="token number">1</span>  <span class="token punctuation">(</span><span class="token class-name">BaseJdbcLogger</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">137</span><span class="token punctuation">)</span> 
<span class="token punctuation">[</span><span class="token class-name">Teacher</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">'admin'</span><span class="token punctuation">,</span> course<span class="token operator">=</span><span class="token char">'语文'</span><span class="token punctuation">,</span> address<span class="token operator">=</span><span class="token char">'保安区'</span><span class="token punctuation">,</span> birthday<span class="token operator">=</span><span class="token class-name">Wed</span> <span class="token class-name">Jul</span> <span class="token number">01</span> <span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span><span class="token operator">:</span><span class="token number">00</span> <span class="token constant">CST</span> <span class="token number">2020</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>条件二及结果：相当于测试otherwise（1=1）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>@Test
public void test4() {
    Teacher testTeach = new Teacher();
    List&lt;Teacher> teacher = mapper.getTeacherByConditionChoose(testTeach);
    System.out.println(teacher);
}
DEBUG 07-15 18:36:46,957 ==>  Preparing: select * from t_teacher WHERE 1=1  (BaseJdbcLogger.java:137) 
DEBUG 07-15 18:36:46,979 ==> Parameters:   (BaseJdbcLogger.java:137) 
DEBUG 07-15 18:36:46,992 &lt;==      Total: 3  (BaseJdbcLogger.java:137) 
[Teacher{id=1, name='admin', course='语文', address='保安区', birthday=Wed Jul 01 00:00:00 CST 2020}, Teacher{id=2, name='tomcat', course='数学', address='福田区', birthday=Fri Jul 10 00:00:00 CST 2020}, Teacher{id=3, name='jerry', course='英语', address='罗湖区', birthday=Sun Jul 05 00:00:00 CST 2020}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态sql-set" tabindex="-1"><a class="header-anchor" href="#动态sql-set" aria-hidden="true">#</a> 动态SQL SET</h2>
<h3 id="动态更新" tabindex="-1"><a class="header-anchor" href="#动态更新" aria-hidden="true">#</a> 动态更新</h3>
<p>这个更新只会更新某一个字段，其他仍然保留！</p>
<p>如果不加set在SQL语句中：update xxx set xxx, 就会多出一个逗号</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateTeacher<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>set</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            teacher_name=#{name}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>course != null and course != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            class_name=#{course}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address != null and address != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            address=#{address}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            birthday=#{birthday}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>set</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">></span></span>
        id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ognl表达式" tabindex="-1"><a class="header-anchor" href="#ognl表达式" aria-hidden="true">#</a> OGNL表达式</h2>
<p>**OGNL（ Object Graph Navigation Language ）**对象图导航语言，这是一种强大的</p>
<p>表达式语言，通过它可以非常方便的来操作对象属性。 类似于我们的EL，SpEL等</p>
<p>访问对象属性：    <a href="http://person.name" target="_blank" rel="noopener noreferrer">person.name<ExternalLinkIcon/></a></p>
<p>调用方法：        person.getName()</p>
<p>调用静态属性/方法：  @java.lang.Math@PI</p>
<p>​                   @java.util.UUID@randomUUID()</p>
<p>调用构造方法：    new com.atguigu.bean.Person(‘admin’).name</p>
<p>运算符：   <code v-pre> +,-*,/,%</code></p>
<p>逻辑运算符：    <code v-pre>in,not in,&gt;,&gt;=,&lt;,&lt;=,==,!=</code></p>
<p>​    注意：<code v-pre>xml中特殊符号如”,&gt;,&lt;等这些都需要使用转义字符</code></p>
<h3 id="伪属" tabindex="-1"><a class="header-anchor" href="#伪属" aria-hidden="true">#</a> 伪属</h3>
<hr>
<table>
<thead>
<tr>
<th>类型</th>
<th>伪属性</th>
<th>伪属性对应的 Java 方法</th>
</tr>
</thead>
<tbody>
<tr>
<td>List、Set、Map</td>
<td>size、isEmpty</td>
<td>List/Set/Map.size(),List/Set/Map.isEmpty()</td>
</tr>
<tr>
<td>List、Set</td>
<td>iterator</td>
<td>List.iterator()、Set.iterator()</td>
</tr>
<tr>
<td>Map</td>
<td>keys、values</td>
<td>Map.keySet()、Map.values()</td>
</tr>
<tr>
<td>Iterator</td>
<td>next、hasNext</td>
<td>Iterator.next()、Iterator.hasNext()</td>
</tr>
</tbody>
</table>
<h2 id="动态sql-bind-include" tabindex="-1"><a class="header-anchor" href="#动态sql-bind-include" aria-hidden="true">#</a> 动态SQL BIND  INCLUDE</h2>
<h3 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h3>
<p><code v-pre>bind</code> 元素允许你在 OGNL 表达式以外创建一个变量，并将其绑定到当前的上下文。</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trim</span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>where<span class="token punctuation">"</span></span> <span class="token attr-name">suffixOverrides</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>and<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bind</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_name<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>%' + name + '%'<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        id > #{id} and
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != ''<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        teacher_name like #{_name} and
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>birthday != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        birthday <span class="token entity named-entity" title="&lt;">&amp;lt;</span> #{birthday}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trim</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3>
<p>提取重复的SQL语句</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectSql<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> select * from t_teacher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getTeacherById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>teacher<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectSql<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">></span></span> where
    id = #{id}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一级缓存" tabindex="-1"><a class="header-anchor" href="#一级缓存" aria-hidden="true">#</a> 一级缓存</h2>
<p>一级缓存的演示：</p>
<p>一级缓存默认是存在的，只要之前查过的数据，mybatis会保存在一个缓存中（Map），下次获取直接从缓存中拿</p>
<figure><img src="@source/Java/fm/images/3744fb32-713a-4d73-af86-eff6a47c8266.png" alt="3744fb32-713a-4d73-af86-eff6a47c8266" tabindex="0" loading="lazy"><figcaption>3744fb32-713a-4d73-af86-eff6a47c8266</figcaption></figure>
<h3 id="一级缓存的失效情况" tabindex="-1"><a class="header-anchor" href="#一级缓存的失效情况" aria-hidden="true">#</a> 一级缓存的失效情况</h3>
<hr>
<p>一级缓存是SqlSession的缓存</p>
<ol>
<li>不同的SqlSession，使用不同的一级缓存</li>
</ol>
<p>只有在同一个SqlSession期间查询的数据会保存到这个SqlSession缓存中。</p>
<figure><img src="@source/Java/fm/images/82f5f462-37ab-48fe-a5c6-f1bcf8547f9b.png" alt="82f5f462-37ab-48fe-a5c6-f1bcf8547f9b" tabindex="0" loading="lazy"><figcaption>82f5f462-37ab-48fe-a5c6-f1bcf8547f9b</figcaption></figure>
<ol start="2">
<li>同一个方法不同的参数</li>
</ol>
<figure><img src="@source/Java/fm/images/bd07806c-61c4-424c-99db-0aa5f3d28166.png" alt="bd07806c-61c4-424c-99db-0aa5f3d28166" tabindex="0" loading="lazy"><figcaption>bd07806c-61c4-424c-99db-0aa5f3d28166</figcaption></figure>
<ol start="3">
<li>只要在SqlSession期间执行了一次CRUD，就会清空一级缓存</li>
</ol>
<figure><img src="@source/Java/fm/images/a9eab4da-e579-415b-aff6-19c3a9c89314.png" alt="a9eab4da-e579-415b-aff6-19c3a9c89314" tabindex="0" loading="lazy"><figcaption>a9eab4da-e579-415b-aff6-19c3a9c89314</figcaption></figure>
<ol start="4">
<li>手动清空缓存：使用SqlSession.clearCache();</li>
</ol>
<figure><img src="@source/Java/fm/images/6a8cc7cf-39f4-4189-b28d-3f17b968ab13.png" alt="6a8cc7cf-39f4-4189-b28d-3f17b968ab13" tabindex="0" loading="lazy"><figcaption>6a8cc7cf-39f4-4189-b28d-3f17b968ab13</figcaption></figure>
<h2 id="二级缓存" tabindex="-1"><a class="header-anchor" href="#二级缓存" aria-hidden="true">#</a> 二级缓存</h2>
<p>二级缓存：namespace级别的缓存</p>
<p>一级缓存在SqlSession关闭/提交以后，一级缓存的数据会放在二级缓存中；mybatis默认没有开启</p>
<ol>
<li>全局配置：开启全局缓存</li>
</ol>
<figure><img src="@source/Java/fm/images/24f72b72-160b-471f-89b1-367fad2b21df.png" alt="24f72b72-160b-471f-89b1-367fad2b21df" tabindex="0" loading="lazy"><figcaption>24f72b72-160b-471f-89b1-367fad2b21df</figcaption></figure>
<ol start="2">
<li>哪一个SQL映射要用到二级缓存加入<code v-pre>&lt;cache&gt;</code> 即可</li>
</ol>
<figure><img src="@source/Java/fm/images/55f6f3aa-4ec9-4584-96d8-8128db5bd541.png" alt="55f6f3aa-4ec9-4584-96d8-8128db5bd541" tabindex="0" loading="lazy"><figcaption>55f6f3aa-4ec9-4584-96d8-8128db5bd541</figcaption></figure>
<p>实体类需要序列号：</p>
<figure><img src="@source/Java/fm/images/a29cc3bf-65db-4ec3-91c2-8c890eaaadfe.png" alt="a29cc3bf-65db-4ec3-91c2-8c890eaaadfe" tabindex="0" loading="lazy"><figcaption>a29cc3bf-65db-4ec3-91c2-8c890eaaadfe</figcaption></figure>
<p>测试结果：</p>
<figure><img src="@source/Java/fm/images/7b49ac50-2710-47c9-a64b-87ec97593dce.png" alt="7b49ac50-2710-47c9-a64b-87ec97593dce" tabindex="0" loading="lazy"><figcaption>7b49ac50-2710-47c9-a64b-87ec97593dce</figcaption></figure>
<h2 id="缓存的查询顺序和原理" tabindex="-1"><a class="header-anchor" href="#缓存的查询顺序和原理" aria-hidden="true">#</a> 缓存的查询顺序和原理</h2>
<h3 id="缓存查询顺序" tabindex="-1"><a class="header-anchor" href="#缓存查询顺序" aria-hidden="true">#</a> 缓存查询顺序</h3>
<ol>
<li>不会出现一级缓存和二级缓存中有同一个数据</li>
</ol>
<ul>
<li>二级缓存中：一级缓存关闭了就有了</li>
<li>一级缓存中：二级缓存中没有此数据，就会看一级缓存，一级缓存没有就去查数据库，数据库查到放到一级缓存</li>
</ul>
<ol start="2">
<li>任何时候都是先看二级缓存，再看一级缓存，再去查数据库</li>
</ol>
<h3 id="缓存原理图" tabindex="-1"><a class="header-anchor" href="#缓存原理图" aria-hidden="true">#</a> 缓存原理图</h3>
<p>一级缓存只能使用自己的</p>
<p>二级缓存只要一级缓存关闭就能使用</p>
<figure><img src="@source/Java/fm/images/dc0a195a-51c1-4df7-870d-097c35f1189b.jpg" alt="dc0a195a-51c1-4df7-870d-097c35f1189b" tabindex="0" loading="lazy"><figcaption>dc0a195a-51c1-4df7-870d-097c35f1189b</figcaption></figure>
<h2 id="缓存的属性" tabindex="-1"><a class="header-anchor" href="#缓存的属性" aria-hidden="true">#</a> 缓存的属性</h2>
<p>局部使用二级缓存的属性<strong>useCache</strong><img src="@source/Java/fm/images/f5de420f-5c18-4cb4-b049-ea9c4083ad27.png" alt="f5de420f-5c18-4cb4-b049-ea9c4083ad27" loading="lazy"></p>
<p>增删改的<strong>flushCache</strong> 默认是true，会清空一级缓存和二级缓存</p>
<p>查询默认是false<img src="@source/Java/fm/images/8d60fb00-9212-4f2c-89a8-8ac092b4ca56.png" alt="8d60fb00-9212-4f2c-89a8-8ac092b4ca56" loading="lazy"></p>
</div></template>


