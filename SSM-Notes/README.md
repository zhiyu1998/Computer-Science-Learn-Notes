# SSM配置步骤

## 导包模板

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.7</maven.compiler.source>
    <maven.compiler.target>1.7</maven.compiler.target>
    <spring-version>5.2.4.RELEASE</spring-version>
  </properties>

  <dependencies>
<!--  AOP  -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aop</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-aspects</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>cglib</groupId>
      <artifactId>cglib</artifactId>
      <version>3.2.5</version>
    </dependency>
    <dependency>
      <groupId>aopalliance</groupId>
      <artifactId>aopalliance</artifactId>
      <version>1.0</version>
    </dependency>
    <dependency>
      <groupId>org.aspectj</groupId>
      <artifactId>aspectjweaver</artifactId>
      <version>1.9.5</version>
    </dependency>
<!--  IOC  -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-beans</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-context</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-core</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-expression</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>commons-logging</groupId>
      <artifactId>commons-logging</artifactId>
      <version>1.2</version>
    </dependency>
<!--  JDBC  -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-jdbc</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-orm</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-tx</artifactId>
      <version>${spring-version}</version>
    </dependency>
<!--  测试  -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-test</artifactId>
      <version>${spring-version}</version>
      <scope>test</scope>
    </dependency>
<!--  SpringMVC  -->
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-web</artifactId>
      <version>${spring-version}</version>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>${spring-version}</version>
    </dependency>
<!--  文件上传下载  -->
    <dependency>
      <groupId>commons-fileupload</groupId>
      <artifactId>commons-fileupload</artifactId>
      <version>1.3.3</version>
    </dependency>
    <dependency>
      <groupId>commons-io</groupId>
      <artifactId>commons-io</artifactId>
      <version>2.4</version>
    </dependency>
<!--  JSTL  -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>jstl</artifactId>
      <version>1.2</version>
    </dependency>
    <dependency>
      <groupId>taglibs</groupId>
      <artifactId>standard</artifactId>
      <version>1.1.2</version>
    </dependency>
<!--  数据校验  -->
    <dependency>
      <groupId>org.hibernate.validator</groupId>
      <artifactId>hibernate-validator</artifactId>
      <version>6.1.2.Final</version>
    </dependency>
    <dependency>
      <groupId>org.hibernate.validator</groupId>
      <artifactId>hibernate-validator-annotation-processor</artifactId>
      <version>6.1.2.Final</version>
    </dependency>
    <dependency>
      <groupId>com.fasterxml</groupId>
      <artifactId>classmate</artifactId>
      <version>1.5.1</version>
    </dependency>
    <dependency>
      <groupId>org.jboss.logging</groupId>
      <artifactId>jboss-logging</artifactId>
      <version>3.4.1.Final</version>
    </dependency>
    <dependency>
      <groupId>javax.validation</groupId>
      <artifactId>validation-api</artifactId>
      <version>2.0.1.Final</version>
    </dependency>
<!--  AJAX  -->
    <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-annotations</artifactId>
      <version>2.10.2</version>
    </dependency>
    <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-core</artifactId>
      <version>2.10.2</version>
    </dependency>
    <dependency>
      <groupId>com.fasterxml.jackson.core</groupId>
      <artifactId>jackson-databind</artifactId>
      <version>2.10.2</version>
    </dependency>
<!--  验证码  -->
    <dependency>
      <groupId>com.github.penggle</groupId>
      <artifactId>kaptcha</artifactId>
      <version>2.3.2</version>
    </dependency>
<!--  mybatis  -->
    <dependency>
      <groupId>org.mybatis</groupId>
      <artifactId>mybatis</artifactId>
      <version>3.5.5</version>
    </dependency>
    <dependency>
      <groupId>log4j</groupId>
      <artifactId>log4j</artifactId>
      <version>1.2.17</version>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>5.1.43</version>
    </dependency>
    <dependency>
      <groupId>com.mchange</groupId>
      <artifactId>c3p0</artifactId>
      <version>0.9.5.2</version>
    </dependency>
      <dependency>
          <groupId>org.mybatis</groupId>
          <artifactId>mybatis-spring</artifactId>
          <version>2.0.5</version>
      </dependency>
<!--  mybatis第三方缓存  -->
    <dependency>
      <groupId>net.sf.ehcache</groupId>
      <artifactId>ehcache-core</artifactId>
      <version>2.6.11</version>
    </dependency>
    <dependency>
      <groupId>org.mybatis.caches</groupId>
      <artifactId>mybatis-ehcache</artifactId>
      <version>1.1.0</version>
    </dependency>
    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-api</artifactId>
      <version>2.12.1</version>
    </dependency>
    <dependency>
      <groupId>org.slf4j</groupId>
      <artifactId>slf4j-log4j12</artifactId>
      <version>1.7.25</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
```



## 配置web.xml

```xml
<!DOCTYPE web-app PUBLIC
2
        "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
3
        "http://java.sun.com/dtd/web-app_2_3.dtd" >
4
​
5
<web-app>
6
    <display-name>Archetype Created Web Application</display-name>
7
​
8
    <listener>
9
        <listener-class>
10
            org.springframework.web.context.ContextLoaderListener
11
        </listener-class>
12
    </listener>
13
    <!--contextConfigLocation在 ContextLoaderListener类中的默认值是 /WEB-INF/applicationContext.xml-->
14
    <context-param>
15
        <param-name>contextConfigLocation</param-name>
16
        <param-value>classpath:spring/spring-config.xml</param-value>
17
        <!-- <param-value>classpath:applicationContext*.xml</param-value> -->
18
    </context-param>
19
​
20
    <filter>
21
        <filter-name>characterEncodingFilter</filter-name>
22
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
23
        <init-param>
24
            <param-name>encoding</param-name>
25
            <param-value>utf-8</param-value>
26
        </init-param>
27
        <init-param>
28
            <param-name>forceEncoding</param-name>
29
            <param-value>true</param-value>
30
        </init-param>
31
    </filter>
32
    <filter-mapping>
33
        <filter-name>characterEncodingFilter</filter-name>
34
        <url-pattern>/*</url-pattern>
35
    </filter-mapping>
36
​
37
    <filter>
38
        <filter-name>hiddenHttpMethodFilter</filter-name>
39
        <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
40
    </filter>
41
    <filter-mapping>
42
        <filter-name>hiddenHttpMethodFilter</filter-name>
43
        <url-pattern>/*</url-pattern>
44
    </filter-mapping>
45
​
46
    <servlet>
47
        <servlet-name>dispatcherServlet</servlet-name>
48
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
49
        <init-param>
50
            <param-name>contextConfigLocation</param-name>
51
            <param-value>classpath:spring/springmvc-config.xml</param-value>
52
        </init-param>
53
        <load-on-startup>1</load-on-startup>
54
    </servlet>
55
    <servlet-mapping>
56
        <servlet-name>dispatcherServlet</servlet-name>
57
        <url-pattern>/</url-pattern>
58
    </servlet-mapping>
59
</web-app> 
```



## 建立项目结构

根据需求创建：

![005d4b3e-4998-4603-80d6-51f0459a1f41](img/005d4b3e-4998-4603-80d6-51f0459a1f41.png)



## 配置SpringMVC

```xml
<?xml version="1.0" encoding="UTF-8"?>
2
<beans xmlns="http://www.springframework.org/schema/beans"
3
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
4
       xmlns:context="http://www.springframework.org/schema/context"
5
       xmlns:mvc="http://www.springframework.org/schema/mvc"
6
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd">
7
​
8
<!--  SpringMVC只扫描控制器，禁用默认的规则  -->
9
    <context:component-scan base-package="cn.zhiyucs" use-default-filters="false">
10
        <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
11
    </context:component-scan>
12
​
13
<!--  配置内部视图解析器  -->
14
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
15
        <property name="prefix" value="/WEB-INF/pages/"></property>
16
        <property name="suffix" value=".jsp"></property>
17
    </bean>
18
​
19
<!--  配置文件上传解析器  -->
20
    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
21
        <property name="defaultEncoding" value="utf-8"></property>
22
        <property name="maxUploadSize" value="#{1024*1024*20}"></property>
23
    </bean>
24
​
25
<!--  扫描静态资源  -->
26
    <mvc:default-servlet-handler />
27
<!--  扫描动态  -->
28
    <mvc:annotation-driven></mvc:annotation-driven>
29
</beans>
```



## 配置Spring Mybatis 事务

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans.xsd 
        http://www.springframework.org/schema/context 
        http://www.springframework.org/schema/context/spring-context.xsd
        http://www.springframework.org/schema/aop
        http://www.springframework.org/schema/aop/spring-aop.xsd
        http://www.springframework.org/schema/tx
        http://www.springframework.org/schema/tx/spring-tx.xsd">
    <!--  Spring除了控制器不要, 不用use-default-filters  -->
    <context:component-scan base-package="cn.zhiyucs">
        <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
    </context:component-scan>
    <!--  导入数据源配置文件  -->
    <context:property-placeholder location="classpath:dbconfig.properties"></context:property-placeholder>
    <!--  配置数据源  -->
    <bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="user" value="${jdbc.user}"></property>
        <property name="password" value="${jdbc.password}"></property>
        <property name="driverClass" value="${jdbc.driverClass}"></property>
        <property name="jdbcUrl" value="${jdbc.jdbcUrl}"></property>
        <property name="maxPoolSize" value="${jdbc.maxPoolSize}"></property>
        <property name="minPoolSize" value="${jdbc.minPoolSize}"></property>
    </bean>
    <!--  配置mybatis  -->
    <!--  可以根据配置文件得到SqlSessionFactory  -->
    <bean id="sqlSessionFactoryBean" class="org.mybatis.spring.SqlSessionFactoryBean">
        <!--     配置文件位置   -->
        <property name="configLocation" value="classpath:mybatis/mybatis-config.xml"></property>
        <property name="dataSource" ref="dataSource"></property>
        <!--    指定xml映射文件的位置    -->
        <property name="mapperLocations" value="classpath:mybatis/mapper/*.xml"></property>
    </bean>
    <!--  把每一个dao接口实现加入到ioc容器中  -->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <!--    指定dao接口所在的包    -->
        <property name="basePackage" value="cn.zhiyucs.dao"></property>
    </bean>
    <!--  配置事务控制  -->
    <bean id="tm" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"></property>
    </bean>
    <!--  配置事务切入点,切入点表达式  -->
    <aop:config>
        <aop:pointcut id="pt" expression="execution(* cn.zhiyucs.service.*.*(..))"/>
        <aop:advisor advice-ref="interceptor" pointcut-ref="pt"></aop:advisor>
    </aop:config>
    <!--  事务增强/建议  -->
    <tx:advice transaction-manager="tm" id="interceptor">
        <!--     配置事务属性   -->
        <tx:attributes>
            <tx:method name="*" rollback-for="java.lang.Exception"/>
            <tx:method name="get*" read-only="true" />
        </tx:attributes>
    </tx:advice>
</beans>
```

### dbconfig

```properties
jdbc.user=root
jdbc.password=root
jdbc.jdbcUrl=jdbc:mysql://localhost:3306/mybatis_test
jdbc.driverClass=com.mysql.jdbc.Driver
jdbc.maxPoolSize=20
jdbc.minPoolSize=5
```

### mybatis-config

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <settings>
        <setting name="lazyLoadingEnabled" value="true"/>
        <setting name="aggressiveLazyLoading" value="true"/>
        <setting name="cacheEnabled" value="true"/>
    </settings>
</configuration>
```

### mapper

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="cn.zhiyucs.dao.TeacherDao">
    <resultMap id="teacher" type="cn.zhiyucs.entity.Teacher">
        <id column="id" property="id" />
        <result column="teacher_name" property="name" />
        <result column="class_name" property="course" />
        <result column="address" property="address" />
        <result column="birthday" property="birthday" />
    </resultMap>
    
    <select id="getTeacherById" resultMap="teacher">
        select * from t_teacher where id = #{id}
    </select>
</mapper>
```