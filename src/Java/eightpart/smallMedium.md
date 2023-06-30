---

order: 16
author: zhiyu1998
title: 中小厂面试指南
category:
  - 中小厂
  - 八股文
---

# 中小厂面试指南

### 前言
这个系列是精选的补集，精选主要是补充知识，但是后面又加入了一些中小厂的内容也是用来补充知识，但是随着知识的增多有些感觉没法融入进去，就开创了这个小节，收录一些中小厂的面试题，有些以前有的内容就不会加入到这里（可能有一些企业都没听说过，但没关系，如果你面试的是中小厂那应该会非常有用）。

### Java
#### 泛型的桥方法？
桥方法是Java编译器在进行泛型擦除的时候生成的一个机制。因为泛型擦除可能会导致子类方法的签名和父类方法的签名不同，Java编译器会自动插入一个桥方法来保持多态性。桥方法的主要目标就是确保子类方法在参数类型上和父类保持一致，这就意味着它将子类方法的参数类型转换成父类方法的参数类型。

例如：
```java
public class Node<T> {

    public T data;

    public Node(T data) { this.data = data; }

    public void setData(T data) {
        System.out.println("Node.setData");
        this.data = data;
    }
}

public class MyNode extends Node<Integer> {
    public MyNode(Integer data) { super(data); }

    public void setData(Integer data) {
        System.out.println("MyNode.setData");
        super.setData(data);
    }
}
```

因为泛型擦除，MyNode类的setData方法和它的超类Node的setData方法签名不同。所以编译器会生成一个桥方法在MyNode类里面，它看起来大概是这样：

```java
public void setData(Object data) {
    setData((Integer) data);
}
```

这个桥方法会保持多态性并使得泛型代码在运行时期能正确执行。

### 并发
#### 为什么不推荐使用内置线程池创建方式？
Java中的内置线程池创建方式（如Executors.newFixedThreadPool()、Executors.newCachedThreadPool()）并不是最佳实践，原因如下：
1. Executors.newFixedThreadPool(int)和Executors.newSingleThreadExecutor()的问题在于它们默认使用的是无界的任务队列，也就是说，当所有线程都处于忙碌状态时，新提交的任务会继续在队列中等待，而不是被拒绝。这可能会导致在负载很高时，任务队列会持续无限制地增长，最终可能耗尽内存。
2. Executors.newCachedThreadPool()的问题在于它允许创建无限数量的线程。如果传入的任务过多，会创建大量的线程，可能导致系统过载。

因此，建议使用ThreadPoolExecutor类创建自定义线程池，以便更好地控制线程池的配置。

### MySQL
#### 主键索引和唯一索引可以存储NULL值吗？
在MySQL中，主键索引和唯一索引对于NULL值的处理是不同的。
- 主键索引：**主键索引不允许存储NULL值**。在MySQL中，主键是一种特殊的唯一索引，不仅要求索引的值唯一，而且要求索引的值非空。这是因为主键的主要任务是唯一标识表中的每一行记录，如果允许主键包含NULL值，那么就无法保证能够唯一标识每一行记录。
- 唯一索引：**唯一索引允许存储NULL值**。在MySQL中，唯一索引要求索引的值唯一，但是可以包含NULL值。这是因为在SQL标准中，NULL表示未知或者不适用，所以两个NULL值并不被认为是相等的，因此可以在唯一索引中存储多个NULL值。

总的来说，主键索引不允许存储NULL值，而唯一索引允许存储NULL值。

#### 数据量很大的情况下，数据库如要怎么加快查询？（SQL优化策略）
略

### Redis

#### 数据量很大的数据放到Redis中，需要做什么处理比较好？
一般就是询问Redis的高可用方案你们是怎么做的？

1. **主从复制**：Redis的主从复制功能允许从服务器复制主服务器的数据。这不仅可以用于数据备份，还可以用于分担读取操作的负载。如果主服务器出现故障，其中一个从服务器可以提升为主服务器，以保持服务的可用性。
2. **哨兵模式**：Redis Sentinel是一个分布式系统，用于监控Redis服务器实例，并在主服务器出现故障时进行自动故障转移。它可以自动选择一个从服务器并将其提升为新的主服务器，然后其他从服务器将开始复制新的主服务器。
3. **集群模式**：Redis Cluster提供了一种方式，可以将数据自动分片到多个Redis节点上。这不仅可以提高数据处理能力，还可以在某个节点出现故障时，通过复制的数据保持服务的可用性。

### Spring

#### spring(boot)中拦截器和过滤器的区别？
在Spring中，拦截器（Interceptor）和过滤器（Filter）都是用于在请求处理过程中添加额外的功能。尽管它们具有相似的目的，但它们在实现和用途方面存在一些不同。下面是它们的主要区别：
- 处理位置：
	- **过滤器（Filter）**：过滤器是在Java Servlet规范中定义的，当请求进入Web容器后，过滤器会在请求到达Servlet之前进行预处理。它可以处理HTTP请求和响应，并且可以修改请求和响应的头和数据。
	- **拦截器（Interceptor）**：拦截器是Spring MVC框架中的一个概念。在请求进入Controller方法之前，拦截器可以对请求进行处理。拦截器可以访问和修改请求处理的上下文。
- 实现方式：
	- **过滤器（Filter）**：过滤器需要实现javax.servlet.Filter接口，并重写init(), doFilter(), 和 destroy()方法。
	- **拦截器（Interceptor）**：拦截器需要实现org.springframework.web.servlet.HandlerInterceptor接口或者继承org.springframework.web.servlet.handler.HandlerInterceptorAdapter类，然后重写preHandle(), postHandle(), 和 afterCompletion()方法。
- 功能范围：
	- **过滤器（Filter）**：过滤器可以处理所有类型的请求，包括静态资源和动态资源。过滤器主要用于处理通用的前置和后置功能，比如日志记录、请求和响应的压缩、字符集设置等。
	- **拦截器（Interceptor）**：拦截器主要用于处理与业务相关的前置和后置功能，比如权限验证、请求参数验证等。拦截器只处理动态资源，不处理静态资源。
- 执行顺序：
	- 过滤器和拦截器都支持多个实例

在Spring中，拦截器和过滤器都可以用于在请求处理过程中添加额外的功能。过滤器更适用于通用、全局的前置和后置处理，而拦截器更适用于与业务相关的前置和后置处理。在实际开发中，可以根据具体需求选择使用它们。

#### spring 如何管理事务？
1. **编程式事务管理**：通过在代码中显式调用 TransactionManager 来管理事务。
```java
TransactionStatus status = transactionManager.getTransaction(new DefaultTransactionDefinition());
try {
    // 执行业务逻辑
    transactionManager.commit(status);
} catch (Exception e) {
    transactionManager.rollback(status);
}
```

2. **声明式事务管理**：通过在配置文件中声明事务来管理事务。这种方式 shield 了事务的细节,简化了编程模型。

在 Spring 中,声明式事务通常通过 XML 或 Java 注解来实现。

XML 配置:
```xml
<bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    <property name="dataSource" ref="dataSource" />
</bean>

<tx:advice id="txAdvice" transaction-manager="txManager">
    <tx:attributes>
        <tx:method name="*" propagation="REQUIRED" />
    </tx:attributes> 
</tx:advice>

<aop:config>
    <aop:advisor advice-ref="txAdvice" pointcut="execution(* com.foo.service.*.*(..))" />
</aop:config>
```

注解配置:
```java
@Transactional
public void doSomething() {
    // ...
}
```

#### spring(boot) 的几个事务传播级别 / spring数据传播行为？

传播是调用事务方法时来自客户端的事务行为。在Spring管理的事务中，有两种类型的事务——物理事务和逻辑事务。物理事务始终是外部事务，而逻辑事务是内部事务，在事务传播时，根据传播类型映射到物理事务。

Spring 支持 7 种事务传播行为：

| 键入            | 定义                                                         |
| --------------- | ------------------------------------------------------------ |
| `REQUIRED`      | 使用当前事务，创建一个新事务，如果不存在事务，则使用它。     |
| `REQUIRED_NEW`  | 始终创建一个新事务，如果存在，则挂起当前事务。               |
| `NESTED`        | 如果当前事务存在，则在当前事务内执行事务，否则创建一个新事务并使用它。 |
| `SUPPORTS`      | 如果存在，则使用当前事务，否则以非事务性方式执行事务。       |
| `NOT_SUPPORTED` | 以非事务性方式执行事务，如果存在，则挂起当前事务。           |
| `MANDATORY`     | 使用当前事务，如果不存在事务，则抛出异常。                   |
| `NEVER`         | 以非事务性方式执行事务，如果存在事务，则抛出异常。           |

例如：
```java
@Transactional (propagation = Propagation.SUPPORTS)
public void someServiceFacade() {
    // calling the repository layer.
}
```
如果未指定传播属性，则默认值为REQUIRED。

#### servlet 是用来干嘛的
servlet是一种Java的编程语言类，用于扩展服务器的功能，服务器托管通过请求-响应编程模型访问的应用程序。Servlet用于处理从网络服务器获得的请求，处理请求，生成响应，然后将响应发送回网络服务器。servlet主要用于处理客户端传来的HTTP请求，并返回一个响应，它能够处理的请求有doGet()和doPost()等方法。

> 参考：
> https://www.baeldung.com/intro-to-servlets
> https://docs.oracle.com/javaee/5/tutorial/doc/bnafe.html

#### SpringBootApplication 注解？
[SpringBoot 自动装配](/Java/eightpart/spring#SpringBoot 自动装配)

### MyBatis

#### mybatis # 和 $ 区别？
- #{}：这是预编译的方式。将参数放入 #{} 中，MyBatis 会在 SQL 执行前将 #{} 替换成占位符 ?，并通过预编译的 SQL 语句进行数据库操作，参数通过 JDBC 驱动的 PreparedStatement 的参数设置方法动态设置进去。这种方式可以防止 SQL 注入攻击。
- ${}：这是字符串替换的方式。将参数放入 ${} 中，MyBatis 会直接将 SQL 语句中的 ${} 替换成参数值，然后执行 SQL 语句。这种方式可能会引起 SQL 注入攻击，因为参数值在 SQL 语句拼接后，不会再被 JDBC 驱动进行任何的安全检查，而是直接被执行。所以在处理字符串类型的参数时，特别要注意可能引发的 SQL 注入问题。

#### mybatis 的一级缓存和二级缓存能不能介绍下？

**一级缓存**：一级缓存是 MyBatis 的默认缓存，当我们开启一个 SqlSession 并执行查询时，MyBatis 会将查询结果放到这个 SqlSession 关联的缓存中，这个缓存就是一级缓存。也就是说，一级缓存是 SqlSession 级别的缓存，只对当前 SqlSession 的多次查询有效。如果我们在同一个 SqlSession 中对同一个查询两次，第二次查询就可以直接从一级缓存中获取结果，而不需要再次访问数据库。但是，如果我们开启了另一个 SqlSession 或者清空了缓存，那么一级缓存就无法使用。

**二级缓存**：二级缓存是 namespace 级别的缓存，也就是在同一个 namespace 中，不同的 SqlSession 可以共享这个缓存。二级缓存的生命周期和 SqlSessionFactory 的生命周期相同，只要 SqlSessionFactory 还在，二级缓存就在。二级缓存可以跨 SqlSession，甚至可以在不同的用户间共享。当一个 SqlSession 从二级缓存中获取数据时，它会先获取一个读锁，防止其他 SqlSession 更新缓存。当这个 SqlSession 结束后，读锁就会被释放。如果在一个 SqlSession 更新了数据，并且提交了事务，那么它就会清空这个二级缓存，以防止脏读。

一级缓存是 SqlSession 级别的，它的生命周期较短，不同的 SqlSession 之间无法共享缓存。而二级缓存是全局的，生命周期较长，不同的 SqlSession 之间可以共享缓存。但是二级缓存会引入复杂性，因为它需要考虑到脏读的问题。因此，在决定是否使用二级缓存时，你需要考虑到它的优点和潜在的复杂性。

#### mybatis中resultmap的继承
在 MyBatis 中，ResultMap 的继才意味着一个 ResultMap 可以继承另一个 ResultMap 的映射属性。这是一种复用机制，可以避免在每个 ResultMap 中重复相同的映射配置。

具体来说，如果你有一个 base ResultMap，它定义了一些基本的字段映射，然后你可以创建另一个 ResultMap，使用 "extends" 属性来继承 base ResultMap，这样就会自动包含 base ResultMap 中所有的映射定义。

```xml
<resultMap id="BaseResultMap" type="com.example.YourClass">
    <result column="id" property="id" />
    <result column="name" property="name" />
</resultMap>

<resultMap id="ExtendedResultMap" extends="BaseResultMap" type="com.example.YourExtendedClass">
    <result column="extra_field" property="extraField" />
</resultMap>
```

在这个例子中，ExtendedResultMap 继承了 BaseResultMap，并添加了一个额外的字段映射。因此，ExtendedResultMap 会包含 id、name 和 extraField 这三个字段的映射。

#### mybatis plus分页插件底层原理
[源代码](https://github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/plugins/inner/PaginationInnerInterceptor.java)

MyBatis-Plus 的分页插件原理主要是基于 MyBatis 的 Interceptor 拦截器机制实现的。

1. 注册分页插件：首先在 MyBatis 配置文件中注册分页插件（PaginationInterceptor），这样 MyBatis 在执行 SQL 前会调用这个插件。
2. SQL 拦截：当执行 SQL 时，分页插件会拦截 SQL 语句，然后根据分页信息（页数、每页数量等）重写 SQL。重写的过程包括将原始 SQL 转换为分页 SQL，同时生成一个用于查询总记录数的 count SQL。
3. 执行 SQL：然后分页插件会执行重写后的分页 SQL 和 count SQL，返回查询结果和总记录数。
4. 返回结果：最后，插件会把查询结果和总记录数封装成 Page 对象，返回给调用者。

> 参考：
> 1. https://github.com/baomidou/mybatis-plus
> 2. https://www.programmersought.com/article/750810271891/

### Web & 安全

#### jwt是由什么组成？为什么要用jwt？

JWT（JSON Web Token）由三部分组成：

- 头部（Header）：头部通常包含两部分：token 的类型（即 JWT）和所使用的签名算法，例如 HMAC SHA256 或 RSA。
例如：
```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```
然后，这个JSON被Base64Url编码以形成JWT的第一部分。

- 负载（Payload）：负载包含声明。声明是关于实体（通常是用户）和其他额外的元数据的语句。声明有三种类型：注册声明（registered claims）、公共声明（public claims）和私有声明（private claims）。
```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```
- 签名（Signature）：签名用于验证发送者是否为消息的真实发送者，以及消息是否被篡改。要创建签名部分，您必须获取编码的标头、编码的有效负载、秘密、标头中指定的算法，并对其进行签名。

例如，如果您想使用HMAC SHA256算法，签名将通过以下方式创建：
```javascript
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

使用 JWT 的原因：
1. 简洁：JWT 是为了在网络应用环境间传递声明而执行的。由于数据量小，因此速度快。
2. 自包含：JWT 可以包含所有用户需要验证的信息，避免了多次查询数据库。
3. 安全：JWT 可用于防止信息被篡改，因为它们可以被签名和加密。
4. 跨域验证：JWT 提供了一种方式，使得服务提供者可以跨域进行身份验证。
5. 无状态、可扩展：JWT 在客户端存储状态信息，使得应用可以轻易扩展。

> 参考：
> https://jwt.io/introduction/ JWT官网介绍


#### 使用jwt如何实现踢人下线？
JWT（JSON Web Token）本身并不能直接实现踢人下线的功能，因为JWT是无状态的，当一旦颁发给了用户，除非它过期，否则服务器无法控制它的生命周期。

1. **黑名单制度：** 当需要踢出某个用户时，可以将该用户当前的JWT加入到一个黑名单中。每当有请求到来，服务端除了需要校验JWT的有效性外，还需要查看这个JWT是否在黑名单中。如果在黑名单中，那么就拒绝该请求，从而达到踢人下线的效果。这种方式的缺点是需要存储黑名单，可能会增加系统的复杂性和性能开销。
2. **更改用户的密钥：** JWT的生成是基于密钥的，你可以在需要踢出某个用户时，更改用于生成JWT的用户密钥。这样旧的JWT在下一次请求时，由于密钥不匹配，验证将会失败，用户被迫下线。这种方式的缺点是可能需要改变系统原有的JWT生成方式，并且在密钥更新后，所有使用旧密钥生成的JWT都将失效，不仅仅是被踢出的用户。

#### 从cookie到jwt解决了什么？
Cookie 和 JWT 都用于存储用户相关的信息，但它们解决问题的方式不同。

Cookie 是一种存储在用户本地终端上的数据，它记录用户的信息，比如语言偏好、主题、其他设置等，还可以记录用户的登录状态。服务器可以在用户的请求中读取或设置 Cookie，以跟踪和理解用户的行为和状态。

JWT（JSON Web Tokens）主要用于身份验证和信息交换。服务器通过验证用户的凭据后生成一个 JWT，然后发送给客户端。客户端在后续的请求中，包括 JWT 在内，服务器就能识别这个用户。

#### 什么RESTful？为什么要用RESTful风格？
RESTful是一种应用程序接口（API）的架构风格，它使用HTTP请求来访问和使用数据。它是构建轻量级，易维护和可扩展的Web服务的一种方式。RESTful API旨在是无状态的，这意味着服务器不会跟踪客户端的状态。相反，客户端在每个请求中发送所有必要的信息。这使得RESTful API比其他类型的API更灵活，更易于扩展。

使用RESTful风格的好处包括：
- 可扩展性：RESTful API旨在可扩展。它们可以处理大量的流量而不会降速或崩溃。
- 灵活性：RESTful API灵活，可以与任何编程语言或平台一起使用。
- 简单性：RESTful API易于使用和理解。
- 易于开发：RESTful API易于开发，因为它们使用标准的HTTP方法，如GET，POST，PUT和DELETE。

> 参考：
> 1. https://www.techtarget.com/searchapparchitecture/definition/RESTful-API
> 2. https://www.codecademy.com/article/what-is-rest
> 3. https://stackoverflow.com/questions/1568834/whats-the-difference-between-rest-restful
> 4. https://aws.amazon.com/cn/what-is/restful-api/

### 设计模式

#### 怎样使用策略模式实现用户认证？
使用策略模式实现用户认证可以提供一种灵活的方式，允许根据不同的策略选择不同的认证方式。下面是一个使用策略模式实现用户认证的简单示例：

首先，定义一个用户认证接口（AuthenticationStrategy），其中包含一个认证方法（authenticate）：
```java
interface AuthenticationStrategy {
    authenticate(username, password);
}
```

然后，实现不同的认证策略类，每个策略类都实现了认证接口，并提供了自己的认证逻辑。例如，可以实现基于用户名和密码的认证（UsernamePasswordAuthentication）和基于指纹的认证（FingerprintAuthentication）：
```java
class UsernamePasswordAuthentication implements AuthenticationStrategy {
    authenticate(username, password) {
        // 实现基于用户名和密码的认证逻辑
        // 返回认证结果
    }
}

class FingerprintAuthentication implements AuthenticationStrategy {
    authenticate(username, password) {
        // 实现基于指纹的认证逻辑
        // 返回认证结果
    }
}
```

接下来，创建一个用户认证类（AuthenticationContext），该类接受一个认证策略作为参数，并提供一个方法（executeAuthentication）执行认证过程：
```java
class AuthenticationContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    executeAuthentication(username, password) {
        return this.strategy.authenticate(username, password);
    }
}
```

使用：
```java
# 创建认证策略对象
usernamePasswordAuth = new UsernamePasswordAuthentication()
fingerprintAuth = new FingerprintAuthentication()

# 创建认证上下文对象，并指定认证策略
context = new AuthenticationContext(usernamePasswordAuth)

# 执行认证过程
result = context.executeAuthentication("username", "password")
```

在这个示例中，可以根据需要选择不同的认证策略，通过认证上下文对象执行认证过程，从而实现用户认证。你可以根据具体的需求和技术栈进行相应的修改和扩展。

#### 代理模式是什么？代码模式的具体使用场景
代理模式是一种结构型设计模式，它为其他对象提供一个代理或替身以控制对这个对象的访问。代理模式通常会创建一个接口，这个接口被两个类实现：一个是实际的类，另一个是代理类。客户端则通过代理类与实际的类进行交互。

Java 语言中的代理模式也有广泛的应用（用于任何需要增强对象功能或控制对象访问的场合）。下面是一些具体的例子：
1. Java 远程方法调用 (RMI)：Java RMI 用代理模式允许在 JVM 中调用另一台机器上 JVM 的方法。这是远程代理的一个例子。
2. Java 接口和实现类：Java中的接口和实现类也可以看作是代理模式的一种表现形式，接口充当代理角色，而具体的实现类则是实际对象。
3. Spring AOP：在 Spring 框架中，AOP（面向切面编程）就使用了代理模式，通过代理在已有功能前后添加其他操作，比如日志、事务等，这是智能引用代理的一种形式。
4. Hibernate 懒加载：Hibernate ORM 框架使用代理模式实现了懒加载。在需要访问对象的相关数据时，数据才会被实际加载和返回，这是虚拟代理的一个实例。