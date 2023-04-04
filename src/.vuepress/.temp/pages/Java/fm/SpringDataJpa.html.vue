<template><div><h1 id="spring-data-jpa-all-in-one" tabindex="-1"><a class="header-anchor" href="#spring-data-jpa-all-in-one" aria-hidden="true">#</a> Spring Data JPA ALL IN ONE</h1>
<ul>
<li><a href="#%E6%A6%82%E8%BF%B0">概述</a></li>
<li><a href="#hibernate-jpa">Hibernate JPA</a>
<ul>
<li><a href="#%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0">注解实现</a></li>
<li><a href="#hibernate-jpa%E7%9A%84crud">Hibernate JPA的CRUD</a>
<ul>
<li><a href="#%E6%9F%A5%E8%AF%A2%E6%93%8D%E4%BD%9C%E4%BB%A5%E5%8F%8A%E5%8C%BA%E5%88%AB">查询操作以及区别</a></li>
<li><a href="#%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C">删除操作</a></li>
<li><a href="#%E6%9B%B4%E6%96%B0%E6%93%8D%E4%BD%9C">更新操作</a></li>
<li><a href="#jpql%E6%9F%A5%E8%AF%A2">JPQL查询</a>
<ul>
<li><a href="#%E6%9F%A5%E8%AF%A2%E5%85%A8%E9%83%A8">查询全部</a></li>
<li><a href="#%E5%80%92%E5%8F%99%E6%9F%A5%E8%AF%A2">倒叙查询</a></li>
<li><a href="#%E7%BB%9F%E8%AE%A1%E6%9F%A5%E8%AF%A2">统计查询</a></li>
<li><a href="#%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2">分页查询</a></li>
<li><a href="#%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2">条件查询</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA">环境搭建</a></li>
<li><a href="#%E5%85%A5%E9%97%A8%E7%BC%96%E5%86%99jpa%E5%AE%9E%E7%8E%B0">入门编写JPA实现</a>
<ul>
<li><a href="#%E5%8A%9F%E8%83%BD%E6%B5%8B%E8%AF%95">功能测试</a></li>
</ul>
</li>
<li><a href="#%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90">源码分析</a></li>
<li><a href="#%E5%A4%8D%E6%9D%82%E6%9F%A5%E8%AF%A2">复杂查询</a></li>
<li><a href="#jpql%E6%9F%A5%E8%AF%A2-1">JPQL查询</a></li>
<li><a href="#sql%E6%9F%A5%E8%AF%A2">SQL查询</a>
<ul>
<li><a href="#%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2-1">条件查询</a></li>
</ul>
</li>
<li><a href="#%E6%96%B9%E6%B3%95%E5%90%8D%E7%A7%B0%E8%A7%84%E5%88%99%E6%9F%A5%E8%AF%A2">方法名称规则查询</a></li>
<li><a href="#jpaspecificationexecutor%E6%96%B9%E6%B3%95">JpaSpecificationExecutor方法</a>
<ul>
<li><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%9F%A5%E8%AF%A2%E6%9D%A1%E4%BB%B6--%E5%8A%A8%E6%80%81%E6%9F%A5%E8%AF%A2">自定义查询条件 / 动态查询</a></li>
<li><a href="#%E5%A4%9A%E6%9D%A1%E4%BB%B6%E6%9F%A5%E8%AF%A2">多条件查询</a></li>
<li><a href="#%E6%A8%A1%E7%B3%8A%E6%9F%A5%E8%AF%A2">模糊查询</a></li>
<li><a href="#%E6%8E%92%E5%BA%8F">排序</a></li>
<li><a href="#%E5%88%86%E9%A1%B5%E6%9F%A5%E8%AF%A2-1">分页查询</a></li>
</ul>
</li>
<li><a href="#%E5%A4%9A%E8%A1%A8%E6%9F%A5%E8%AF%A2">多表查询</a>
<ul>
<li><a href="#%E4%B8%80%E5%AF%B9%E5%A4%9A">一对多</a></li>
<li><a href="#%E5%A4%9A%E5%AF%B9%E5%A4%9A">多对多</a></li>
<li><a href="#%E5%AE%9E%E4%BD%93%E7%B1%BB%E4%B8%AD%E7%9A%84%E5%85%B3%E7%B3%BB">实体类中的关系</a></li>
<li><a href="#orm%E5%88%86%E6%9E%90%E6%AD%A5%E9%AA%A4">ORM分析步骤</a></li>
<li><a href="#%E4%B8%80%E5%AF%B9%E5%A4%9A%E6%A1%88%E4%BE%8B">一对多案例</a></li>
<li><a href="#%E5%A4%9A%E5%AF%B9%E5%A4%9A%E6%A1%88%E4%BE%8B">多对多案例</a></li>
</ul>
</li>
<li><a href="#%E5%AF%B9%E8%B1%A1%E5%AF%BC%E8%88%AA%E6%9F%A5%E8%AF%A2">对象导航查询</a></li>
<li><a href="#%E8%A7%A3%E5%86%B3%E4%B8%AD%E6%96%87%E4%B9%B1%E7%A0%81%E9%97%AE%E9%A2%98">解决中文乱码问题</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E5%BA%93%E6%A3%80%E6%B5%8B">数据库检测</a></li>
</ul>
</li>
</ul>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>描述：Spring Data JPA, part of the larger Spring Data family, makes it easy to easily implement JPA based repositories. This module deals with enhanced support for JPA based data access layers. It makes it easier to build Spring-powered applications that use data access technologies.</p>
<p>功能：</p>
<ul>
<li>Sophisticated support to build repositories based on Spring and JPA</li>
<li>Support for <a href="http://www.querydsl.com/" target="_blank" rel="noopener noreferrer">Querydsl<ExternalLinkIcon/></a> predicates and thus type-safe JPA queries</li>
<li>Transparent auditing of domain class</li>
<li>Pagination support, dynamic query execution, ability to integrate custom data access code</li>
<li>Validation of @Query annotated queries at bootstrap time</li>
<li>Support for XML based entity mapping</li>
<li>JavaConfig based repository configuration by introducing @EnableJpaRepositories</li>
</ul>
<p><strong>SpringData只需写接口就可以完成增删改查、分页操作等</strong></p>
<figure><img src="@source/Java/fm/JpaImg/56.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="hibernate-jpa" tabindex="-1"><a class="header-anchor" href="#hibernate-jpa" aria-hidden="true">#</a> Hibernate JPA</h2>
<p>要求必须在类路径下创建META-INF文件夹下的xml文件：</p>
<figure><img src="@source/Java/fm/JpaImg/57.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>查看JPA的XML写法：</p>
<figure><img src="@source/Java/fm/JpaImg/58.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/59.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>编写XML的配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>persistence</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://java.sun.com/xml/ns/persistence<span class="token punctuation">"</span></span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!--需要配置persistence-unit节点
        持久化单元：
            name:持久化单元名称
            transaction-type:事务管理方式
                JTA:分布式事务管理
                RESOURCE_LOCAL:本地事务管理
    --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>persistence-unit</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myJpa<span class="token punctuation">"</span></span> <span class="token attr-name">transaction-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>RESOURCE_LOCAL<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--jap的实现方式--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>provider</span><span class="token punctuation">></span></span>org.hibernate.jpa.HibernatePersistenceProvider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>provider</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--数据库信息--></span>
        <span class="token comment">&lt;!--可选配置：配置jap实现方的配置信息--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--            数据库信息
                用户名:javax.persistence.jdbc.user
                密码:javax.persistence.jdbc.password
                驱动:javax.persistence.jdbc.driver
                数据库地址:javax.persistence.jdbc.url
--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javax.persistence.jdbc.user<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javax.persistence.jdbc.password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javax.persistence.jdbc.driver<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.jdbc.Driver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javax.persistence.jdbc.url<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql:///jpa<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

<span class="token comment">&lt;!--            配置JPA实现方(hibernate)的配置信息
                显示SQL hibernate.show_sql
                自动创建数据库表 hibernate.hbm2ddl.auto
                    create  程序运行时创建数据库表（如果有表先删除表再创建）
                    update  程序运行时创建表（如果有表不会创建表）
                    none    不会创建表
--></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hibernate.show_sql<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hibernate.hbm2ddl.auto<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>create<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>persistence-unit</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>persistence</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写实体类:</p>
<figure><img src="@source/Java/fm/JpaImg/60.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="注解实现" tabindex="-1"><a class="header-anchor" href="#注解实现" aria-hidden="true">#</a> 注解实现</h3>
<ol>
<li>实体类和表的映射关系</li>
</ol>
<ul>
<li>@Entity: 声明实体类</li>
<li>@Table: 配置实体类和表的映射关系</li>
<li>
<pre><code> name: 配置数据库表的名称
</code></pre>
</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/61.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="2">
<li>实体类中属性和表中字段的映射关系</li>
</ol>
<ul>
<li>@Id 声明主键的配置</li>
<li>@GeneratedValue 配置主键生成策略
<ul>
<li>strategy
<ul>
<li>GenerationType.IDENTITY：自增 MySQL
<ul>
<li>底层数据库必须支持自动增长（底层数据库支持的自动增长方式，对id自增）</li>
</ul>
</li>
<li>GenerationType.SEQUENCE： 序列，Oracle
<ul>
<li>底层数据库必须支持序列</li>
</ul>
</li>
<li>GenerationType.TABLE：JPA提供的一种机制，通过一张数据库的形式帮助我们主键完成自增</li>
<li>GenerationType.AUTO：由程序自动帮助我们选择主键生成策略</li>
</ul>
</li>
</ul>
</li>
<li>@Column 配置属性和字段的映射关系
<ul>
<li>name：数据库表中字段的名称</li>
</ul>
</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/62.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>JPA的操作步骤：</strong></p>
<ol>
<li>加载配置文件创建工厂（实体管理器工厂）对象</li>
</ol>
<ul>
<li>Persisitence：静态方法（根据持久化单元名称创建实体管理器工厂）</li>
<li>createEntityMnagerFactory（持久化单元名称）</li>
</ul>
<p>作用：创建实体管理器工厂</p>
<ol start="2">
<li>通过实体管理器工厂实体管理器</li>
</ol>
<ul>
<li>EntityManagerFactory ：获取EntityManager对象
<ul>
<li>方法：createEntityManager</li>
<li>内部维护的很多的内容
<ul>
<li>内部维护了数据库信息，</li>
</ul>
</li>
<li>维护了缓存信息</li>
<li>维护了所有的实体管理器对象</li>
<li>再创建EntityManagerFactory的过程中会根据配置创建数据库表</li>
</ul>
</li>
<li>EntityManagerFactory的创建过程比较浪费资源
<ul>
<li>特点：线程安全的对象</li>
<li>多个线程访问同一个EntityManagerFactory不会有线程安全问题</li>
<li><em>如何解决EntityManagerFactory的创建过程浪费资源（耗时）的问题？</em>
<ul>
<li>思路：创建一个公共的EntityManagerFactory的对象</li>
<li><strong>静态代码块的形式创建EntityManagerFactory</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
<ol start="3">
<li>获取事务对象，开启事务</li>
</ol>
<ul>
<li>EntityManager对象：实体类管理器
<ul>
<li>beginTransaction : 创建事务对象</li>
<li>presist ： 保存</li>
<li>merge  ： 更新</li>
<li>remove ： 删除</li>
<li>find/getRefrence ： 根据id查询</li>
</ul>
</li>
<li>Transaction 对象 ： 事务
<ul>
<li>begin：开启事务</li>
<li>commit：提交事务</li>
<li>rollback：回滚</li>
</ul>
</li>
</ul>
<ol start="4">
<li>
<p>完成CRUD操作</p>
</li>
<li>
<p>提交事务（回滚事务）</p>
</li>
<li>
<p>释放资源</p>
</li>
</ol>
<figure><img src="@source/Java/fm/JpaImg/63.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意：</p>
<p>解决中文乱码问题：更改URL</p>
<figure><img src="@source/Java/fm/JpaImg/64.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="hibernate-jpa的crud" tabindex="-1"><a class="header-anchor" href="#hibernate-jpa的crud" aria-hidden="true">#</a> Hibernate JPA的CRUD</h3>
<h4 id="查询操作以及区别" tabindex="-1"><a class="header-anchor" href="#查询操作以及区别" aria-hidden="true">#</a> 查询操作以及区别</h4>
<p>使用EntityManager 的 find 和 getReference 对比</p>
<figure><img src="@source/Java/fm/JpaImg/65.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="删除操作" tabindex="-1"><a class="header-anchor" href="#删除操作" aria-hidden="true">#</a> 删除操作</h4>
<figure><img src="@source/Java/fm/JpaImg/66.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h4>
<figure><img src="@source/Java/fm/JpaImg/68.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h4 id="jpql查询" tabindex="-1"><a class="header-anchor" href="#jpql查询" aria-hidden="true">#</a> JPQL查询</h4>
<p><em>1.</em> <em>创建<strong>query</strong>查询对象</em>*</p>
<ul>
<li>
<p><strong>getResultList:</strong> 直接将查询封装为List集合</p>
</li>
<li>
<p><strong>getSingleResult:</strong> 得到唯一的结果集</p>
</li>
</ul>
<p><em>2.</em> <em>对参数进行赋值</em></p>
<p><em>3.</em> 查询，并得到返回结果</p>
<figure><img src="@source/Java/fm/JpaImg/67.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="查询全部" tabindex="-1"><a class="header-anchor" href="#查询全部" aria-hidden="true">#</a> 查询全部</h5>
<figure><img src="@source/Java/fm/JpaImg/69.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="倒叙查询" tabindex="-1"><a class="header-anchor" href="#倒叙查询" aria-hidden="true">#</a> 倒叙查询</h5>
<figure><img src="@source/Java/fm/JpaImg/70.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="统计查询" tabindex="-1"><a class="header-anchor" href="#统计查询" aria-hidden="true">#</a> 统计查询</h5>
<figure><img src="@source/Java/fm/JpaImg/71.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h5>
<figure><img src="@source/Java/fm/JpaImg/72.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h5 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h5>
<figure><img src="@source/Java/fm/JpaImg/73.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2>
<p>pom.xml</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring.version</span><span class="token punctuation">></span></span>5.0.2.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hibernate.version</span><span class="token punctuation">></span></span>5.0.7.Final<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hibernate.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slf4j.version</span><span class="token punctuation">></span></span>1.6.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slf4j.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>log4j.version</span><span class="token punctuation">></span></span>1.2.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>log4j.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c3p0.version</span><span class="token punctuation">></span></span>0.9.1.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c3p0.version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mysql.version</span><span class="token punctuation">></span></span>5.1.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mysql.version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- junit单元测试 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>4.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- spring beg --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.aspectj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>aspectjweaver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.6.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-aop<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-context<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-context-support<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--Spring对ORM的支持包--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-orm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-beans<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- spring end --></span>

    <span class="token comment">&lt;!-- hibernate beg --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.hibernate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>hibernate-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${hibernate.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.hibernate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>hibernate-entitymanager<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${hibernate.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.hibernate<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>hibernate-validator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.1.Final<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- hibernate end --></span>

    <span class="token comment">&lt;!-- c3p0 beg --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>c3p0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>c3p0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${c3p0.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- c3p0 end --></span>

    <span class="token comment">&lt;!-- log end --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>log4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${log4j.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.slf4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>slf4j-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${slf4j.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.slf4j<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>slf4j-log4j12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${slf4j.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- log end --></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${mysql.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!--spring data jpa的坐标--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-data-jpa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.9.0.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>${spring.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- el beg 使用spring data jpa 必须引入 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>javax.el<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javax.el-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.glassfish.web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>javax.el<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.2.4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- el end --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="入门编写jpa实现" tabindex="-1"><a class="header-anchor" href="#入门编写jpa实现" aria-hidden="true">#</a> 入门编写JPA实现</h2>
<p>创建一个Spring和JPA的配置：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>aop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/aop<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/context<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>jdbc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/jdbc<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>tx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/tx<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xmlns:</span>jpa</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/data/jpa<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>task</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/task<span class="token punctuation">"</span></span>
       <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
      http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
      http://www.springframework.org/schema/aop http://www.springframework.org/schema/aop/spring-aop.xsd
      http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd
      http://www.springframework.org/schema/jdbc http://www.springframework.org/schema/jdbc/spring-jdbc.xsd
      http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd
      http://www.springframework.org/schema/data/jpa
      http://www.springframework.org/schema/data/jpa/spring-jpa.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--    Spring 和 Spring data jpa 的配置--></span>

<span class="token comment">&lt;!--    创建entityManagerFactory对象交给spring容器管理--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>entityManagerFactory<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--        配置的扫描的包（实体类所在的包）--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>packagesToScan<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.zhiyu.domain<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--        JPA的实现方式--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>persistenceProvider<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.hibernate.jpa.HibernatePersistenceProvider<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--        JPA的供应商适配器--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jpaVendorAdapter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!--                配置是否自动创建数据库表--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>generateDdl<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--                指定数据库类型--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>database<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MYSQL<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--                数据库方言（支持的特有语法）--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>databasePlatform<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.hibernate.dialect.MySQLDialect<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token comment">&lt;!--                是否显示SQL语句--></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showSql<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--        JPA的方言(高级特性)--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jpaDialect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.orm.jpa.vendor.HibernateJpaDialect<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>property</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--    创建数据库连接池--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mchange.v2.c3p0.ComboPooledDataSource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbcUrl<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jdbc:mysql:///jpa<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>driverClass<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.mysql.jdbc.Driver<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--    整合SpringDataJpa--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">jpa:</span>repositories</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.zhiyu.dao<span class="token punctuation">"</span></span> <span class="token attr-name">transaction-manager-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tx<span class="token punctuation">"</span></span> <span class="token attr-name">entity-manager-factory-ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>entityManagerFactory<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">jpa:</span>repositories</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--    配置事务管理器--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tx<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.orm.jpa.JpaTransactionManager<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>entityManagerFactory<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>entityManagerFactory<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--    声明式事务--></span>

<span class="token comment">&lt;!--    配置包扫描--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.zhiyu<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个实现类：</p>
<figure><img src="@source/Java/fm/JpaImg/49.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>符合SpringJpa的dao层接口规范
<ul>
<li>JpaRepository &lt;操作的实体类类型, 实体类的主键属性的类型&gt;
<ul>
<li>封装了基本CRUD操作</li>
</ul>
</li>
<li>JpaSpecificationExecutor &lt;操作的实体类类型&gt;
<ul>
<li>封装了复杂查询（分页）</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">CustomerDao</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">JpaSpecificationExecutor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/Java/fm/JpaImg/50.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/51.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="功能测试" tabindex="-1"><a class="header-anchor" href="#功能测试" aria-hidden="true">#</a> 功能测试</h3>
<p>根据ID查询一个</p>
<figure><img src="@source/Java/fm/JpaImg/52.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>save保存或更新</strong></p>
<ul>
<li>根据传递的对象是否存在主键id</li>
<li>如果没有id主键属性，保存</li>
<li>存在id主键属性，根据id查询数据，更新数据</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/53.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>删除：</p>
<figure><img src="@source/Java/fm/JpaImg/54.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>查询所有：</p>
<figure><img src="@source/Java/fm/JpaImg/55.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>小结：</p>
<ol>
<li>搭建环境
<ol>
<li>创建工程导入坐标</li>
<li>配置spring的配置文件（配置spring Data jpa的整合）</li>
<li>编写实体类（Customer），使用jpa注解配置映射关系</li>
</ol>
</li>
<li>编写一个符合springDataJpa的dao层接口
<ol>
<li>只需要编写dao层接口，不需要编写dao层接口的实现类</li>
<li>dao层接口规范
<ol>
<li>需要继承两个接口（JpaRepository，JpaSpecificationExecutor）</li>
<li>需要提供响应的泛型</li>
</ol>
</li>
</ol>
</li>
</ol>
<ul>
<li>findOne（id） ：根据id查询</li>
<li>save(customer):保存或者更新（依据：传递的实体类对象中，是否包含id属性）</li>
<li>delete（id） ：根据id删除</li>
<li>findAll() : 查询全部</li>
</ul>
<h2 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h2>
<p>以findOne为例分析：</p>
<figure><img src="@source/Java/fm/JpaImg/44.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>继承了动态代理：InvocationHandler
生成的代理对象是：SimpleJpaRepository</p>
<figure><img src="@source/Java/fm/JpaImg/45.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>SimpleJpaRepository 对基本的JPA增删改查进行了封装</p>
<figure><img src="@source/Java/fm/JpaImg/46.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>通过EntityManager进行查询（em）</p>
<figure><img src="@source/Java/fm/JpaImg/47.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>basepackage：对此包下的DAO接口进行动态代理增强</p>
<figure><img src="@source/Java/fm/JpaImg/48.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>小结：</strong></p>
<ol>
<li>通过JdkDynamicAopProxy的invoke方法创建了一个动态代理对象</li>
<li>SimpleJpaRepository当中封装了JPA的操作（借助JPA的api完成数据库的CRUD）</li>
<li>通过hibernate完成数据库操作（封装了jdbc）</li>
</ol>
<h2 id="复杂查询" tabindex="-1"><a class="header-anchor" href="#复杂查询" aria-hidden="true">#</a> 复杂查询</h2>
<p>统计查询：</p>
<figure><img src="@source/Java/fm/JpaImg/41.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>判断是否存在：</p>
<figure><img src="@source/Java/fm/JpaImg/42.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>延迟加载getOne</p>
<p>注：需要加上@Transactional注解</p>
<figure><img src="@source/Java/fm/JpaImg/43.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="jpql查询-1" tabindex="-1"><a class="header-anchor" href="#jpql查询-1" aria-hidden="true">#</a> JPQL查询</h2>
<ul>
<li>需要将JPQL语句配置到接口方法上</li>
</ul>
<ol>
<li>
<p>特有的查询：需要在dao接口上配置方法</p>
</li>
<li>
<p>在新添加的方法上，使用注解的形式配置jpql查询语句</p>
</li>
<li>
<p>注解 ： @Query</p>
</li>
</ol>
<figure><img src="@source/Java/fm/JpaImg/37.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/38.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/39.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>注意：</p>
<ul>
<li>需要手动添加事务的支持</li>
<li>默认执行之后会回滚事务</li>
<li><strong>@Rollback</strong> <em>设置自动回滚</em>
<ul>
<li>true | false</li>
</ul>
</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/40.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="sql查询" tabindex="-1"><a class="header-anchor" href="#sql查询" aria-hidden="true">#</a> SQL查询</h2>
<ol>
<li>特有的查询：需要在dao接口上配置方法</li>
<li>在新添加的方法上，使用注解的形式配置sql查询语句</li>
<li>注解 ： @Query
<ol>
<li>value ：jpql语句 | sql语句</li>
<li><strong>nativeQuery</strong> ：false（使用jpql查询） | true（使用本地查询：sql查询）是否使用本地查询</li>
</ol>
</li>
</ol>
<figure><img src="@source/Java/fm/JpaImg/34.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/35.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="条件查询-1" tabindex="-1"><a class="header-anchor" href="#条件查询-1" aria-hidden="true">#</a> 条件查询</h3>
<figure><img src="@source/Java/fm/JpaImg/36.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="方法名称规则查询" tabindex="-1"><a class="header-anchor" href="#方法名称规则查询" aria-hidden="true">#</a> 方法名称规则查询</h2>
<p>findBy+对象中属性的名称（首字母大写）：代表查询
含义：根据属性名称进行查询
例如： custName -&gt; CustName</p>
<ul>
<li>
<pre><code> findByCustName -&gt; 根据客户名称查询
</code></pre>
</li>
<li>
<pre><code> 在SpingDataJPA的运行阶段：会根据名称进行解析: find from xxx(实体类) 属性名称 where custName = ？
</code></pre>
</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/30.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/31.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>findBy + 属性名称（根据属性名称进行完成匹配的查询=） + 查询方式（Like | isnull）</strong>：条件查询
findByCustNameLike</p>
<figure><img src="@source/Java/fm/JpaImg/32.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>findBy + 属性名 + 多条件连接符(and | or) + 属性名 + 查询方式</strong>：多条件查询</p>
<figure><img src="@source/Java/fm/JpaImg/33.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="jpaspecificationexecutor方法" tabindex="-1"><a class="header-anchor" href="#jpaspecificationexecutor方法" aria-hidden="true">#</a> JpaSpecificationExecutor方法</h2>
<p><strong>Specification</strong>  查询条件</p>
<ol>
<li>自定义我们自己的 <em>Specification</em> 实现类</li>
<li>需要实现的方法：toPredicate
<ol>
<li><em>Root</em>：查询的根对象（查询的任何属性都可以从根对象获取）</li>
<li><em>CriteriaQuery</em>：顶层查询对象，自定义查询方式</li>
<li><em>CriteriaBuilder</em> ：查询的构造器，封装了很多的查询条件</li>
</ol>
</li>
</ol>
<p>查询单个对象：</p>
<p>T findOne(<em>Specification</em><code v-pre>&lt;T&gt;</code> spec);</p>
<p>查询列表：</p>
<p><em>List</em><code v-pre>&lt;T&gt;</code> findAll(<em>Specification</em><code v-pre>&lt;T&gt;</code> spec);</p>
<p>查询全部，分页</p>
<ul>
<li>pageable 分页参数</li>
<li>返回分页：PageBean</li>
</ul>
<p><em>Page</em><code v-pre>&lt;T&gt;</code> findAll(<em>Specification</em><code v-pre>&lt;T&gt;</code> spec, <em>Pageable</em> pageable);</p>
<p>查询列表，排序</p>
<ul>
<li>Sort 排序参数</li>
</ul>
<p><em>List</em><code v-pre>&lt;T&gt;</code> findAll(<em>Specification</em><code v-pre>&lt;T&gt;</code> spec, Sort sort);</p>
<p>统计查询：</p>
<p><em>long</em> count(<em>Specification</em><code v-pre>&lt;T&gt;</code> spec);</p>
<h3 id="自定义查询条件-动态查询" tabindex="-1"><a class="header-anchor" href="#自定义查询条件-动态查询" aria-hidden="true">#</a> 自定义查询条件 / 动态查询</h3>
<ol>
<li>实现Specification接口（提供泛型，查询的对象类型）</li>
<li>实现toPredicate方法（构造查询条件）</li>
<li>需要借助方法中的两个参数（
<ol>
<li>root:获取需要查询的对象属性</li>
<li>CriteriaQuery  CriteriaBuilder:构造查询条件,内部封装了很多查询条件 <em>）</em></li>
</ol>
</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> spec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Predicate</span> <span class="token function">toPredicate</span><span class="token punctuation">(</span><span class="token class-name">Root</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> root<span class="token punctuation">,</span> <span class="token class-name">CriteriaQuery</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> query<span class="token punctuation">,</span> <span class="token class-name">CriteriaBuilder</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取比较的属性</span>
        <span class="token class-name">Path</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> custName <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"custName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 构造查询条件</span>
        <span class="token comment">//      参数一：比较的属性（path对象）</span>
        <span class="token comment">//      参数二：当前需要比较的取值</span>
        <span class="token class-name">Predicate</span> predicate <span class="token operator">=</span> cb<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>custName<span class="token punctuation">,</span> <span class="token string">"传智播客"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> predicate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Customer</span> customer <span class="token operator">=</span> customerDao<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多条件查询" tabindex="-1"><a class="header-anchor" href="#多条件查询" aria-hidden="true">#</a> 多条件查询</h3>
<p>root： 用来获取属性</p>
<ul>
<li>客户名称</li>
<li>所属行业</li>
</ul>
<p>cb: 构造查询</p>
<ol>
<li>构造客户没的精准匹配查询</li>
<li>构造所属行业的精准匹配查询</li>
<li>将以上两个查询联系起来</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> spec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Predicate</span> <span class="token function">toPredicate</span><span class="token punctuation">(</span><span class="token class-name">Root</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> root<span class="token punctuation">,</span> <span class="token class-name">CriteriaQuery</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> query<span class="token punctuation">,</span> <span class="token class-name">CriteriaBuilder</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Path</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> custName <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"custName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Path</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> custIndustry <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"custIndustry"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Predicate</span> p1 <span class="token operator">=</span> cb<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>custName<span class="token punctuation">,</span> <span class="token string">"传智播客"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Predicate</span> p2 <span class="token operator">=</span> cb<span class="token punctuation">.</span><span class="token function">equal</span><span class="token punctuation">(</span>custIndustry<span class="token punctuation">,</span> <span class="token string">"it教育"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 组合条件</span>
        <span class="token class-name">Predicate</span> res <span class="token operator">=</span> cb<span class="token punctuation">.</span><span class="token function">and</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//                cb.or(); // 或拼接多个查询条件</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">Customer</span> customer <span class="token operator">=</span> customerDao<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h3>
<ul>
<li>equal: 直接得到path对象（属性）,然后进行比较即可</li>
<li>gt, lt, ge, le, like, 得到path对象,根据path指定比较的参数类型,再去进行比较</li>
<li>指定方式：<a href="http://path.as" target="_blank" rel="noopener noreferrer">path.as<ExternalLinkIcon/></a>(类型的字节码对象)</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> spec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Specification</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Predicate</span> <span class="token function">toPredicate</span><span class="token punctuation">(</span><span class="token class-name">Root</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> root<span class="token punctuation">,</span> <span class="token class-name">CriteriaQuery</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> query<span class="token punctuation">,</span> <span class="token class-name">CriteriaBuilder</span> cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Path</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> custName <span class="token operator">=</span> root<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"custName"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Predicate</span> like <span class="token operator">=</span> cb<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span>custName<span class="token punctuation">.</span><span class="token function">as</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"传智播客"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> like<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> customerDao<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h3>
<p>创建排序对象,需要调用构造方法实例化sort对象</p>
<ul>
<li>参数一： 排序的顺序 Sort.Direction.ASC(DESC)</li>
<li>参数二： 排序的属性名</li>
</ul>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">Sort</span> sort <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sort</span><span class="token punctuation">(</span><span class="token class-name">Sort<span class="token punctuation">.</span>Direction</span><span class="token punctuation">.</span><span class="token constant">DESC</span><span class="token punctuation">,</span> <span class="token string">"custId"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Customer</span><span class="token punctuation">></span></span> list1 <span class="token operator">=</span> customerDao<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span>spec<span class="token punctuation">,</span> sort<span class="token punctuation">)</span><span class="token punctuation">;</span>
list1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分页查询-1" tabindex="-1"><a class="header-anchor" href="#分页查询-1" aria-hidden="true">#</a> 分页查询</h3>
<p>用法及三个比较重要的方法：</p>
<figure><img src="@source/Java/fm/JpaImg/29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2>
<h3 id="一对多" tabindex="-1"><a class="header-anchor" href="#一对多" aria-hidden="true">#</a> 一对多</h3>
<ul>
<li>一的一方：主表</li>
<li>多的一方：从表</li>
<li>外键：需要在从表上新建一列作为外键，它的取值源于主表的主键</li>
</ul>
<h3 id="多对多" tabindex="-1"><a class="header-anchor" href="#多对多" aria-hidden="true">#</a> 多对多</h3>
<ul>
<li>中间表：中间表中最少应该由两个字段组成，这两个字段作为外键指向两张表的主键，又组合成了联合主键。</li>
</ul>
<h3 id="实体类中的关系" tabindex="-1"><a class="header-anchor" href="#实体类中的关系" aria-hidden="true">#</a> 实体类中的关系</h3>
<ul>
<li>包含关系</li>
<li>继承关系</li>
</ul>
<h3 id="orm分析步骤" tabindex="-1"><a class="header-anchor" href="#orm分析步骤" aria-hidden="true">#</a> ORM分析步骤</h3>
<ol>
<li>明确表关系</li>
<li>描述外键|中间表</li>
<li>编写实体类，在实体类中描述表关系（包含关系）</li>
<li>配置映射关系</li>
</ol>
<h3 id="一对多案例" tabindex="-1"><a class="header-anchor" href="#一对多案例" aria-hidden="true">#</a> 一对多案例</h3>
<p>客户和联系人的案例（一对多关系）
客户：一家公司
联系人：这家公司的员工</p>
<p>一个客户可以具有多个联系人
一个联系人从属于一家公司</p>
<p>配置客户和联系人之间的关系（一对多关系）</p>
<p>使用注解的形式配置多表关系</p>
<p>声明关系</p>
<ul>
<li>@OneToMany : 配置一对多关系</li>
<li>targetEntity:对方对象的字节码</li>
</ul>
<p>配置外键（中间表）</p>
<ul>
<li>@JoinColumn 配置外键</li>
<li>name: 外键字段名称</li>
<li>referencedColumnName：参照的主表的主键字段名称（在主表配置）</li>
</ul>
<p>在客户实体类上（一的一方）添加了外键配置,所以对于客户而言,也具备了维护外键的作用</p>
<figure><img src="@source/Java/fm/JpaImg/12.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>配置联系人到客户的多对一的关系</strong></p>
<p>使用注解的形式配置多对一关系</p>
<ul>
<li>@ManyToOne： 配置多对一关系</li>
<li>targetEntity:对方的实体类字节码</li>
</ul>
<p>配置外键（中间表）</p>
<p>配置外键的过程中，配置到多的一方,就会在多的一方维护外键</p>
<figure><img src="@source/Java/fm/JpaImg/13.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>(<strong>注</strong>：设置getter和setter)</p>
<p><strong>注入JPA的配置信息</strong></p>
<p>加载JPA的基本配置信息和JPA实现方式的配置信息</p>
<ul>
<li>hibernate.hbm2ddl.auto:自动创建数据库表
<ul>
<li>create:每次都会创建数据库表</li>
<li>pdate:有表不会重新创建,没有表才会重新创建</li>
</ul>
</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/14.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>测试</strong></p>
<figure><img src="@source/Java/fm/JpaImg/15.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>配置客户到联系人：</p>
<figure><img src="@source/Java/fm/JpaImg/16.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>配置联系人到客户：</p>
<figure><img src="@source/Java/fm/JpaImg/17.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>多了一条update语句：</p>
<ul>
<li>
<p>由于一的一方可以维护外键，会发送update语句</p>
</li>
<li>
<p>解决：只需要在一的一方放弃维护权即可</p>
</li>
</ul>
<figure><img src="@source/Java/fm/JpaImg/18.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>级联删除</strong></p>
<figure><img src="@source/Java/fm/JpaImg/19.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/20.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/21.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="多对多案例" tabindex="-1"><a class="header-anchor" href="#多对多案例" aria-hidden="true">#</a> 多对多案例</h3>
<p>案例：用户和角色（多对多关系）
用户：
角色：
分析步骤</p>
<ol>
<li>
<p>明确表关系</p>
<ol>
<li>多对多关系</li>
</ol>
</li>
<li>
<p>确定表关系（描述 外键|中间表）</p>
<ol>
<li>中间间表</li>
</ol>
</li>
<li>
<p>编写实体类，再实体类中描述表关系（包含关系）</p>
<ol>
<li>用户：包含角色的集合</li>
<li>角色：包含用户的集合</li>
</ol>
</li>
<li>
<p>配置映射关系</p>
</li>
</ol>
<p><strong>配置多对多映射关系</strong></p>
<ol>
<li>声明表关系的配置
<ol>
<li>@ManyToMany 代表对方实体类的字节码</li>
</ol>
</li>
<li>配置中间表（包含两个外键）
<ol>
<li>@JoinTable
<ol>
<li>joinColumns 当前对象在中间表中的外键</li>
</ol>
</li>
<li>@JoinColumn
<ol>
<li>name: 外键名</li>
<li>referencedColumnName:参照的主表的主键名</li>
<li>inverseJoinColumns 对方对象在中间表的外键</li>
</ol>
</li>
<li>@JoinColumn</li>
</ol>
</li>
</ol>
<figure><img src="@source/Java/fm/JpaImg/22.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/23.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>放弃维护：</p>
<figure><img src="@source/Java/fm/JpaImg/24.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>这个roles来源于另外一张表：</p>
<figure><img src="@source/Java/fm/JpaImg/25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>级联操作</strong></p>
<figure><img src="@source/Java/fm/JpaImg/26.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>级联添加</p>
<figure><img src="@source/Java/fm/JpaImg/27.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>级联删除</p>
<figure><img src="@source/Java/fm/JpaImg/28.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="对象导航查询" tabindex="-1"><a class="header-anchor" href="#对象导航查询" aria-hidden="true">#</a> 对象导航查询</h2>
<p>1.对象导航查询</p>
<p>​	查询一个对象的同时，通过此对象查询他的关联对象</p>
<p>​	案例：客户和联系人</p>
<p>​	从一方查询多方</p>
<p>​		* 默认：使用延迟加载（****）</p>
<p>​	从多方查询一方</p>
<p>​		* 默认：使用立即加载</p>
<p>一方查多方：默认延迟加载</p>
<figure><img src="@source/Java/fm/JpaImg/8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更改加载方式：（不推荐使用）</p>
<figure><img src="@source/Java/fm/JpaImg/9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><strong>从多方查询一方（默认立即加载）</strong></p>
<figure><img src="@source/Java/fm/JpaImg/11.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="解决中文乱码问题" tabindex="-1"><a class="header-anchor" href="#解决中文乱码问题" aria-hidden="true">#</a> 解决中文乱码问题</h2>
<figure><img src="@source/Java/fm/JpaImg/1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="数据库检测" tabindex="-1"><a class="header-anchor" href="#数据库检测" aria-hidden="true">#</a> 数据库检测</h3>
<p>使用：<strong>show variables like 'character%';</strong> 检查数据库是否是UTF-8
如果是：</p>
<figure><img src="@source/Java/fm/JpaImg/2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>解决：</p>
<figure><img src="@source/Java/fm/JpaImg/3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>设置：</p>
<figure><img src="@source/Java/fm/JpaImg/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/Java/fm/JpaImg/6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>更改完后：</p>
<figure><img src="@source/Java/fm/JpaImg/7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</div></template>


