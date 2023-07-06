const e=JSON.parse('{"key":"v-b84ab384","path":"/Java/eightpart/smallMedium.html","title":"中小厂面试指南","lang":"zh-CN","frontmatter":{"order":16,"author":"zhiyu1998","title":"中小厂面试指南","category":["中小厂","八股文"],"description":"🚶前言 这个系列是精选的补集，精选主要是补充知识，但是后面又加入了一些中小厂的内容也是用来补充知识，但是随着知识的增多有些感觉没法融入进去，就开创了这个小节，收录一些中小厂的面试题，有些以前有的内容就不会加入到这里（可能有一些企业都没听说过，但没关系，如果你面试的是中小厂那应该会非常有用）。 🐦Java 泛型的桥方法？ 桥方法是Java编译器在进行...","head":[["meta",{"property":"og:url","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/Java/eightpart/smallMedium.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"中小厂面试指南"}],["meta",{"property":"og:description","content":"🚶前言 这个系列是精选的补集，精选主要是补充知识，但是后面又加入了一些中小厂的内容也是用来补充知识，但是随着知识的增多有些感觉没法融入进去，就开创了这个小节，收录一些中小厂的面试题，有些以前有的内容就不会加入到这里（可能有一些企业都没听说过，但没关系，如果你面试的是中小厂那应该会非常有用）。 🐦Java 泛型的桥方法？ 桥方法是Java编译器在进行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-06T08:45:59.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"中小厂面试指南"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:modified_time","content":"2023-07-06T08:45:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中小厂面试指南\\",\\"image\\":[\\"https://zhiyu1998.github.io/Computer-Science-Learn-Notes/Computer-Science-Learn-Notes/\\"],\\"dateModified\\":\\"2023-07-06T08:45:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"🚶前言","slug":"🚶前言","link":"#🚶前言","children":[]},{"level":2,"title":"🐦Java","slug":"🐦java","link":"#🐦java","children":[{"level":3,"title":"泛型的桥方法？","slug":"泛型的桥方法","link":"#泛型的桥方法","children":[]}]},{"level":2,"title":"♻️JVM","slug":"♻️jvm","link":"#♻️jvm","children":[{"level":3,"title":"元空间是起到什么作用？","slug":"元空间是起到什么作用","link":"#元空间是起到什么作用","children":[]}]},{"level":2,"title":"🕝并发","slug":"🕝并发","link":"#🕝并发","children":[{"level":3,"title":"为什么不推荐使用内置线程池创建方式？","slug":"为什么不推荐使用内置线程池创建方式","link":"#为什么不推荐使用内置线程池创建方式","children":[]}]},{"level":2,"title":"📑MySQL","slug":"📑mysql","link":"#📑mysql","children":[{"level":3,"title":"主键索引和唯一索引可以存储NULL值吗？","slug":"主键索引和唯一索引可以存储null值吗","link":"#主键索引和唯一索引可以存储null值吗","children":[]},{"level":3,"title":"数据量很大的情况下，数据库要怎么加快查询？（SQL优化策略）","slug":"数据量很大的情况下-数据库要怎么加快查询-sql优化策略","link":"#数据量很大的情况下-数据库要怎么加快查询-sql优化策略","children":[]},{"level":3,"title":"说说 mvcc 机制？","slug":"说说-mvcc-机制","link":"#说说-mvcc-机制","children":[]},{"level":3,"title":"mvcc 会加锁吗？","slug":"mvcc-会加锁吗","link":"#mvcc-会加锁吗","children":[]},{"level":3,"title":"mvcc 解决了幻读吗？","slug":"mvcc-解决了幻读吗","link":"#mvcc-解决了幻读吗","children":[]},{"level":3,"title":"mysql 默认的隔离级别是可重复读，那是如何保证可重复读的呢？","slug":"mysql-默认的隔离级别是可重复读-那是如何保证可重复读的呢","link":"#mysql-默认的隔离级别是可重复读-那是如何保证可重复读的呢","children":[]},{"level":3,"title":"读已提交是啥, 怎么保证的？","slug":"读已提交是啥-怎么保证的","link":"#读已提交是啥-怎么保证的","children":[]},{"level":3,"title":"联合索引在b+树怎么表示的？在对数据排序时，什么时候会根据第二个字段排序?","slug":"联合索引在b-树怎么表示的-在对数据排序时-什么时候会根据第二个字段排序","link":"#联合索引在b-树怎么表示的-在对数据排序时-什么时候会根据第二个字段排序","children":[]},{"level":3,"title":"索引底层数据是有序排序的，你知道它是怎样有序排序的原理吗？","slug":"索引底层数据是有序排序的-你知道它是怎样有序排序的原理吗","link":"#索引底层数据是有序排序的-你知道它是怎样有序排序的原理吗","children":[]},{"level":3,"title":"如果 SQL 和索引都没问题，查询还是很慢怎么办？","slug":"如果-sql-和索引都没问题-查询还是很慢怎么办","link":"#如果-sql-和索引都没问题-查询还是很慢怎么办","children":[]},{"level":3,"title":"在 mybatis-plus 有封装好的分页配置类，如果是在mysql 的话，你怎么写分页语句的？","slug":"在-mybatis-plus-有封装好的分页配置类-如果是在mysql-的话-你怎么写分页语句的","link":"#在-mybatis-plus-有封装好的分页配置类-如果是在mysql-的话-你怎么写分页语句的","children":[]},{"level":3,"title":"深分页如何优化？","slug":"深分页如何优化","link":"#深分页如何优化","children":[]},{"level":3,"title":"导致索引失效有哪些？","slug":"导致索引失效有哪些","link":"#导致索引失效有哪些","children":[]},{"level":3,"title":"or 一定会导致索引失效吗？，分析例如 where a = 1 or b = 1, 三种情况，a和b是联合索引，a是主键索引 b不是索引，a不是索引，b是主键索引","slug":"or-一定会导致索引失效吗-分析例如-where-a-1-or-b-1-三种情况-a和b是联合索引-a是主键索引-b不是索引-a不是索引-b是主键索引","link":"#or-一定会导致索引失效吗-分析例如-where-a-1-or-b-1-三种情况-a和b是联合索引-a是主键索引-b不是索引-a不是索引-b是主键索引","children":[]},{"level":3,"title":"模糊查询是哪些情况导致索引失效啊？为什么左模糊和全模糊查询会失效啊？","slug":"模糊查询是哪些情况导致索引失效啊-为什么左模糊和全模糊查询会失效啊","link":"#模糊查询是哪些情况导致索引失效啊-为什么左模糊和全模糊查询会失效啊","children":[]}]},{"level":2,"title":"📕Redis","slug":"📕redis","link":"#📕redis","children":[{"level":3,"title":"数据量很大的数据放到Redis中，需要做什么处理比较好？","slug":"数据量很大的数据放到redis中-需要做什么处理比较好","link":"#数据量很大的数据放到redis中-需要做什么处理比较好","children":[]},{"level":3,"title":"RDB会造成数据的缺失吗？","slug":"rdb会造成数据的缺失吗","link":"#rdb会造成数据的缺失吗","children":[]},{"level":3,"title":"缓存一致性策略有哪些？","slug":"缓存一致性策略有哪些","link":"#缓存一致性策略有哪些","children":[]},{"level":3,"title":"在缓存一致性过程中如果MQ宕机了怎么办？","slug":"在缓存一致性过程中如果mq宕机了怎么办","link":"#在缓存一致性过程中如果mq宕机了怎么办","children":[]}]},{"level":2,"title":"🍃Spring","slug":"🍃spring","link":"#🍃spring","children":[{"level":3,"title":"spring(boot)中拦截器和过滤器的区别？","slug":"spring-boot-中拦截器和过滤器的区别","link":"#spring-boot-中拦截器和过滤器的区别","children":[]},{"level":3,"title":"spring 如何管理事务？","slug":"spring-如何管理事务","link":"#spring-如何管理事务","children":[]},{"level":3,"title":"spring(boot) 的几个事务传播级别 / spring数据传播行为？","slug":"spring-boot-的几个事务传播级别-spring数据传播行为","link":"#spring-boot-的几个事务传播级别-spring数据传播行为","children":[]},{"level":3,"title":"servlet 是用来干嘛的","slug":"servlet-是用来干嘛的","link":"#servlet-是用来干嘛的","children":[]},{"level":3,"title":"SpringBootApplication 注解？","slug":"springbootapplication-注解","link":"#springbootapplication-注解","children":[]},{"level":3,"title":"SpringMVC 和 SpringBoot 的区别？","slug":"springmvc-和-springboot-的区别","link":"#springmvc-和-springboot-的区别","children":[]},{"level":3,"title":"说说 MVC？","slug":"说说-mvc","link":"#说说-mvc","children":[]},{"level":3,"title":"说说SpringMVC 的组件？","slug":"说说springmvc-的组件","link":"#说说springmvc-的组件","children":[]}]},{"level":2,"title":"💽MyBatis","slug":"💽mybatis","link":"#💽mybatis","children":[{"level":3,"title":"🌟 mybatis # 和 $ 区别？（中小厂热门问题）","slug":"🌟-mybatis-和-区别-中小厂热门问题","link":"#🌟-mybatis-和-区别-中小厂热门问题","children":[]},{"level":3,"title":"mybatis 的一级缓存和二级缓存能不能介绍下？","slug":"mybatis-的一级缓存和二级缓存能不能介绍下","link":"#mybatis-的一级缓存和二级缓存能不能介绍下","children":[]},{"level":3,"title":"mybatis中resultmap的继承","slug":"mybatis中resultmap的继承","link":"#mybatis中resultmap的继承","children":[]},{"level":3,"title":"mybatis plus分页插件底层原理","slug":"mybatis-plus分页插件底层原理","link":"#mybatis-plus分页插件底层原理","children":[]}]},{"level":2,"title":"🧭Web & 安全","slug":"🧭web-安全","link":"#🧭web-安全","children":[{"level":3,"title":"jwt是由什么组成？为什么要用jwt？","slug":"jwt是由什么组成-为什么要用jwt","link":"#jwt是由什么组成-为什么要用jwt","children":[]},{"level":3,"title":"使用jwt如何实现踢人下线？","slug":"使用jwt如何实现踢人下线","link":"#使用jwt如何实现踢人下线","children":[]},{"level":3,"title":"从cookie到jwt解决了什么？","slug":"从cookie到jwt解决了什么","link":"#从cookie到jwt解决了什么","children":[]},{"level":3,"title":"什么RESTful？为什么要用RESTful风格？","slug":"什么restful-为什么要用restful风格","link":"#什么restful-为什么要用restful风格","children":[]}]},{"level":2,"title":"🎨设计模式","slug":"🎨设计模式","link":"#🎨设计模式","children":[{"level":3,"title":"怎样使用策略模式实现用户认证？","slug":"怎样使用策略模式实现用户认证","link":"#怎样使用策略模式实现用户认证","children":[]},{"level":3,"title":"代理模式是什么？代码模式的具体使用场景","slug":"代理模式是什么-代码模式的具体使用场景","link":"#代理模式是什么-代码模式的具体使用场景","children":[]}]}],"git":{"createdTime":1688114697000,"updatedTime":1688633159000,"contributors":[{"name":"RrOrange","email":"542716863@qq.com","commits":2}]},"readingTime":{"minutes":42.97,"words":12890},"filePathRelative":"Java/eightpart/smallMedium.md","localizedDate":"2023年6月30日","autoDesc":true,"excerpt":""}');export{e as data};
