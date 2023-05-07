---
order: 2
author: zhiyu1998
title: 工作中遇到的问题及解决方案
category:
  - 解决方案
  - 工作
---
# 工作中遇到的问题及解决方案
* 这个文档将会遇到一些工作中不是第一时间就能想到的解决方案，而是经过阅读、查阅相关资料、或者是前人的解决方案中得到的答案。
* 第二这个文档还会分享一些编码技巧，包括最常用的Java8，以及比较新的Java11、Java17的用法。
> 例子中不会使用原来的代码，而是变向的代码形式展示，防止公司代码泄露

## 两个List赋值（列表形式）某个属性

### 深拷贝源码学习

#### 方案1

在网上找了个列表赋值的，感觉还可以（很像公司的写法，但又不是），因为BeanUtils.copyProperties不能赋值列表

```java
public class CopyUtil {

    /**
     * 对象复制
     */
    public static <T> T copy(Class<T> clazz, Object source) {
        if (source == null) {
            return null;
        }
        T obj = null;
        try {
            obj = clazz.newInstance();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        BeanUtils.copyProperties(source, obj);
        return obj;
    }

    /**
     * 列表复制
     */
    public static <T> List<T> copyList(Class<T> clazz, List source) {
        List<T> target = new ArrayList<>();
        if (!CollectionUtils.isEmpty(source)){
            for (Object c: source) {
                T obj = copy(c, clazz);
                target.add(obj);
            }
        }
        return target;
    }
}
```

#### 方案2

当然我也看到其他的拷贝源码顺便贴上来学习下

```java
@FunctionalInterface
public interface BeanCopyUtilCallBack <S, T> {

    /**
     * 定义默认回调方法
     * @param t
     * @param s
     */
    void callBack(S t, T s);
}

public class BeanCopyUtil extends BeanUtils {

    /**
     * 集合数据的拷贝
     * @param sources: 数据源类
     * @param target: 目标类::new(eg: UserVO::new)
     * @return
     */
    public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> target) {
        return copyListProperties(sources, target, null);
    }


    /**
     * 带回调函数的集合数据的拷贝（可自定义字段拷贝规则）
     * @param sources: 数据源类
     * @param target: 目标类::new(eg: UserVO::new)
     * @param callBack: 回调函数
     * @return
     */
    public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> target, BeanCopyUtilCallBack<S, T> callBack) {
        List<T> list = new ArrayList<>(sources.size());
        for (S source : sources) {
            T t = target.get();
            copyProperties(source, t);
            list.add(t);
            if (callBack != null) {
                // 回调
                callBack.callBack(source, t);
            }
        }
        return list;
    }
}
```

第二个的使用方式如下：

```java
@Test
public void listCopyUp() {
    List<UserDO> userDOList = new ArrayList();
    userDOList.add(new UserDO(1L, "Van", 18, 1));
    userDOList.add(new UserDO(2L, "VanVan", 20, 2));
    List<UserVO> userVOList = BeanCopyUtil.copyListProperties(userDOList, UserVO::new);
    log.info("userVOList:{}",userVOList);
}
```

带会回掉的使用：

```java
@Test
public void listCopyUpWithCallback() {
    List<UserDO> userDOList = new ArrayList();
    userDOList.add(new UserDO(1L, "Van", 18, 1));
    userDOList.add(new UserDO(2L, "VanVan", 20, 2));
    List<UserVO> userVOList = BeanCopyUtil.copyListProperties(userDOList, UserVO::new, (userDO, userVO) ->{
        // 这里可以定义特定的转换规则
        userVO.setSex(SexEnum.getDescByCode(userDO.getSex()).getDesc());
    });
    log.info("userVOList:{}",userVOList);
}
```

#### 方案3

[StackOverflow](https://stackoverflow.com/questions/19312055/beanutils-copyproperties-to-copy-arraylist)也提供了暴力美学

```java
FromBean fromBean = new FromBean("fromBean", "fromBeanAProp", "fromBeanBProp");
ToBean toBean = new ToBean("toBean", "toBeanBProp", "toBeanCProp");
for (int i = 0; i < fromBeanList.size(); i++) {
     BeanUtils.copyProperties(toBeanList.get(i), fromBeanList.get(i));
}
```



#### 方案4（王牌方案）

使用JSON的方式进行赋值，这个真的大开眼界了

```java
// 测试数据
List<Person> ps = new ArrayList<>();
Person p1 = new Person("zhiyu", 12, true);
Person p2 = new Person("zzzs", 13, false);
Person p3 = new Person("kk", 14, true);
Person p4 = new Person("ll", 15, true);
Person p5 = new Person("oo", 16, true);
ps.add(p1);
ps.add(p2);
ps.add(p3);
ps.add(p4);
ps.add(p5);
// JSON拷贝
List<Person> people = JSON.parseArray(JSON.toJSONString(ps), Person.class);
people.forEach(item -> {
    System.out.println(item.getName() + item.getAge());
});
```

可以进一步封装

```java
import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

public class BeanUtil {


    /**
     * 对象拷贝
     *
     * @param source 源
     * @param target 目标
     */
    public static void copyProperties(Object source, Object target) {
        if (source == null) {
            return;
        }
        BeanUtils.copyProperties(source, target);
    }

    /**
     * List 对象拷贝
     *
     * @param list 源
     * @param <T>  目标
     * @return 目标
     */
    public static <T, E> List copyList(List<T> list, Class<E> clazz) {
        if (CollectionUtils.isEmpty(list)) {
            return new ArrayList();
        }
        return JSON.parseArray(JSON.toJSONString(list), clazz);
    }

    /**
     * MAP拷贝
     *
     * @param map 源
     * @return 目标
     */
    public static Map<String, Object> copyMap(Map map) {
        if (CollectionUtils.isEmpty(map)) {
            return new HashMap<>();
        }
        return JSON.parseObject(JSON.toJSONString(map));
    }

    /**
     * json 转 Map
     *
     * @param json
     * @return
     */
    public static Map<String, Object> jsonToMap(String json) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(json, Map.class);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
    
    /**
     * 获取对象 空属性
     * 
     * @param source
     * @return
     */
    private static String[] getNullPropertyNames(Object source) {
        BeanWrapper src = new BeanWrapperImpl(source);
        PropertyDescriptor[] pds = src.getPropertyDescriptors();
        Set<String> emptyNames = (Set) Arrays.stream(pds).filter((pd) -> {
            return src.getPropertyValue(pd.getName()) == null;
        }).map(FeatureDescriptor::getName).distinct().collect(Collectors.toSet());
        String[] result = new String[emptyNames.size()];
        return (String[])emptyNames.toArray(result);
    }
    
    /**
     * bean数组 转 bean数组
     *
     * @param source
     * @param function
     * @param <T>
     * @param <R>
     * @return
     */
    public static <T, R> List<R> covert2JavaBeanList(List<T> source, Function<T, R> function) {
        if (null == source || source.size() < 0) {
            return new ArrayList<>();
        }
        List<R> res = new ArrayList<>(source.size());
        for (T t : source) {
            res.add(function.apply(t));
        }
        return res;
    }
}
```





### 列表赋值

> 一开始使用了ID对应，其实不用直接顺序赋值即可
> 场景再现：目标是转换DTO的图片集到VO
1. DTO获取列表
2. 创建一个VO
3. 遍历DTO
   1. 每一个DTO转换成VO（其中图片格式不一样，而且图片是列表）
   2. 设置每一个VO的图片，每个VO的图片都使用List方式的Copy
   3. 调整其他状态
4. 完成转换

```java
// getDetail 此处是Feign处进行调用Core,返回一个DTO
List<DTO> dtos = feignClient.getDetail(id);
// 创建一个最终要返回的VOv
List<VO> vo = new ArrayList<>();
// 转换图片格式
dtos.forEach(dto -> {
    // DTO转换VO
    VO vo = CopyUtil.copy(VO.class, dto);
    // 多个DTO转换VO然后设置 【List】
    vo.setPictures(CopyUtil.copyList(fileVO.class, dto.getPictures()));
    // 单个设置(这个不太重要) 【像Integer、String...】
    vo.setName(Enums.getDescribe(dto.getStatus()));
    // 加入到VO
    detailVO.add(vo);
});
```


## 分组进行优先级排序
> 需求是这样：需要按照一定的优先级进行排序，比如数据库有这样包含这样的字段（花色）：红、蓝、白，这些都是以字符串为代表没有进行数字的比较，那么我们如何进行分组排序？
> 分页是后续在前后端联调的时候，前端要求分页才这样做的

在分页之前我们首先要做的是定义字符串的优先级, `越低优先级越高`：
```java
// 这个属于FlowerConstant类
public static final HashMap<String, Integer> flowerPriority = new HashMap<>();
static {
    flowerPriority.put(flowerEnums.RED.name(), 1);
    flowerPriority.put(flowerEnums.BLUE.name(), 2);
    flowerPriority.put(flowerEnums.WHITE.name(), 3);
}
```
### 分页后排序（每页排序）
1. 首先通过某种手段（mybatis【用的这个】、jpa）查出来了分页数据
2. 通过Stream和Comparator进行比较排序
```java
// 通过一些参数查找到数据
IPage<Flower> filteredFlowers = baseMapper.queryFlowers(...params, page);
// 排序(核心)
List<Flower> sortedFlowers = filteredFlowers.getRecords()
        .stream()
        .sorted(Comparator.comparing(Flower::getColor, (p1, p2) -> {
            if (StringUtils.isEmpty(p1)) {
                return -1;
            } else if (StringUtils.isEmpty(p2)) {
                return 1;
            } else {
                return FlowerConstant.flowerPriority.get(p1) - FlowerConstant.flowerPriority.get(p2);
            }
        })).collect(Collectors.toList());
// 分页配置;
page.setTotal(...);
res.setSize(...);
res.setRecords(...);
```
> 这个的结果就是每页都是按照这个顺序进行排序，与下面的不同是下面是整体排序再分页



看到Hutool也有相关的解决方案：

> ListUtil，一般情况下使用sortByProperty即可，但是特殊情况可以使用。
>
> 注：CollUtil也有类似的解决方案：sortPageAll、sortPageAll2方法

```java
public static void main(String[] args) {
    //Integer比较器
    @Data
    @AllArgsConstructor
    class TestBean{
        private int order;
        private String name;
    }

    final HashMap<String, Integer> flowerPriority = new HashMap<>();
    {
        flowerPriority.put("红", 1);
        flowerPriority.put("蓝", 2);
        flowerPriority.put("白", 3);
    }

    final List<TestBean> beanList = ListUtil.toList(
        new TestBean(2, "红"),
        new TestBean(1, "蓝"),
        new TestBean(5, "白"),
        new TestBean(4, "红"),
        new TestBean(3, "蓝")
    );

    List<TestBean> sorted = ListUtil.sort(beanList, (o1, o2) -> {
        if (CharSequenceUtil.isEmpty(o1.getName())) {
            return -1;
        } else if (CharSequenceUtil.isEmpty(o2.getName())) {
            return 1;
        } else {
            return flowerPriority.get(o1.getName()).compareTo(flowerPriority.get(o2.getName()));
        }
    });
    sorted.forEach(System.out::println);
}
```





### 分页前排序（整体排序）
```java
// 通过一些参数查找到数据
IPage<Flower> filteredFlowers = baseMapper.queryFlowers(...params, page);
// 分页配置;
page.setTotal(...);
res.setSize(...);
res.setRecords(...);
```
此时的SQL需要着重讲一讲：
首先再传入参数上忽略其他参数，我们把优先级map传进来(`HashMap<String, Integer>`)
```java
IPage<HlImmunePlan> queryFlowers(...,
                                @Param("enums") HashMap<String, Integer> enums,
                                Page<Flowers> page);
```
在动态SQL处我们采用FOREACH + CASE WHEN THEN 的方式进行动态排序，可以忽略掉if这些标签的用法，因为很常规，重点关注foreach。
```sql
<select id="queryFlowers" resultMap="BaseResultMap">
    SELECT
    <include refid="Base_Column_List"/>
    FROM flowers f
    <where>
        <if test="... != null and ... != ''">
            AND f.... = #{...}
        </if>
    </where>
    ORDER BY CASE
    <foreach collection="enums.entrySet()" index="key" item="val">
        WHEN p.status = '${key}' THEN
            ${val}
    </foreach>
    ELSE 5
        END
</select>
```



## 判断空值情况

> 这个情况是非常普遍的，尤其前后端联调的时候最容易出错，自己自测的时候有时候还看不出来控制问题，只能虚空写代码的时候凭空想象是否会有空值情况，判断空值情况的方法有很多，尤其是使用Hutool会更加方便，但是有些情况肯定需要使用其他方法

### Optional

我在公司遇到一个情况就是使用Map的`addAll`的情况，如果查出来的数据是空值，那么就会报错，可以使用Optional解决

```java
HashMap<String, List<dto>> map = new HashMap<>();
// 中间操作（例如加入元素等等）
Optional
    .ofNullable(map.get(xxx)
    .ifPresent(dtos::addAll);
```

链式判空：链式调用如果出现空值也会报空指针异常，使用Optional+map即可解决

```java
String address = Optional.ofNullable(order)
    .map(Order::getExpressInfo)
    .map(Order::getAddress)
    .orElse(null);
```

### 字符串判空

`Stream.of`

```java
String s = Stream.of(str1, str2, str3)
    .filter(Objects::nonNull)
    .findFirst()
    .orElse(str4);
```

封装函数：

```java
public static Optional<String> firstNonNull(String... strings) {
    return Arrays.stream(strings)
            .filter(Objects::nonNull)
            .findFirst();
}
// such as 
String s = firstNonNull(str1, str2, str3).orElse(str4);
```



### 使用Supplier`<Object> `var-args参数判断null值

这个是看网上大佬的解决方案，可能比较麻烦，还是优先使用Optional

```java
 boolean isValid = isValid(() -> address, // first level
                              () -> address.getCity(),   // second level
                              () -> address.getCountry(),// second level
                              () -> address.getStreet(), // second level
                              () -> address.getZip(),    // second level
                              () -> address.getCountry() // third level
                                           .getISO()
@SafeVarargs
public static boolean isValid(Supplier<Object>... suppliers) {
    for (Supplier<Object> supplier : suppliers) {
        if (Objects.isNull(supplier.get())) {
            // log, handle specific thing if required
            return false;
        }
    }
    return true;
}
```



## 1、0替换-异或

采用`异或(^)思想

0和1互换（原数值异或上 1）

a=0；   a^1=1;

a=1;    a^1=0;

0和2 互换（原数值异或上 2）

a=0;    a^2=2;

a=2;    a^2=0;

1和2 互换（原数值异或上 3）

a=1;    a^3=2;

a=2;    a^3=1;



## Maven构建问题（父子工程）

如果父工程使用的Spring init创建的，那么末尾它会给你添加一个build，删了即可，不然后续出问题子工程的有些依赖都添加不上

以下就是创建时会自动生成的（父），删掉即可。

```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <excludes>
                    <exclude>
                        <groupId>org.projectlombok</groupId>
                        <artifactId>lombok</artifactId>
                    </exclude>
                </excludes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

> 要记住：spring-boot-maven-plugin插件在打Jar包时会引入依赖包



## HashMap-computeIfAbsent用法

```java
import java.util.*; 
  
public class GFG { 
  
    // Main method 
    public static void main(String[] args) 
    { 
  
        Map<Integer, String> map = new Hashtable<>(); 
        map.put(1, "100RS"); 
        map.put(2, "500RS"); 
        map.put(3, "1000RS"); 
  
        System.out.println("hashTable: "
                           + map.toString()); 
  
        // 不存在健值对的情况
        // 使用computeIfAbsent方法
        map.computeIfAbsent(4, k -> "600RS"); 
  
        // 如果存在不会有任何影响
        // key为1已经存在了 
        map.computeIfAbsent(1, k -> "800RS"); 
  
        System.out.println("new hashTable: "
                           + map); 
    } 
} 
// ============================================
hashTable：{3 = 1000RS，2 = 500RS，1 = 100RS}
new hashTable：{4 = 600RS，3 = 1000RS，2 = 500RS，1 = 100RS}
```



## List转Map

### Java8之前

```java
public Map<Integer, Animal> convertListBeforeJava8(List<Animal> list) {
    Map<Integer, Animal> map = new HashMap<>();
    for (Animal animal : list) {
        map.put(animal.getId(), animal);
    }
    return map;
}
```

### Java 8

#### toMap

```java
 public Map<Integer, Animal> convertListAfterJava8(List<Animal> list) {
    Map<Integer, Animal> map = list.stream()
      .collect(Collectors.toMap(Animal::getId, Function.identity()));
    return map;
}
```

#### groupingBy

```java
HashMap<String, List<HlImmuneTodoListDtoResult>> planMap = plans.stream()
        .map(this::planApply)
        .collect(Collectors.groupingBy(HlImmuneTodoListDtoResult::getStatus, HashMap::new, Collectors.toList()));
HashMap<String, List<HlImmuneTodoListDtoResult>> jobMap = jobs.stream()
        .map(this::jobApply)
        .collect(Collectors.groupingBy(HlImmuneTodoListDtoResult::getStatus, HashMap::new, Collectors.toList()));
```



### Apache

```java
public Map<Integer, Animal> convertListWithApacheCommons2(List<Animal> list) {
    Map<Integer, Animal> map = new HashMap<>();
    MapUtils.populateMap(map, list, Animal::getId);
    return map;
}
```



### Guava

```java
public Map<Integer, Animal> convertListWithGuava(List<Animal> list) {
    Map<Integer, Animal> map = Maps
      .uniqueIndex(list, Animal::getId);
    return map;
}
```



### 问题：key值重复

> 一般出现此问题都会运行 java.lang.IllegalStateException: Duplicate key 

 (key1, key2) -> key1 表示如果出现重复使用第一个

```java
// 使用key1
 public Map<Integer, Animal> convertListAfterJava8(List<Animal> list) {
    Map<Integer, Animal> map = list.stream()
      .collect(Collectors.toMap(Animal::getId, Function.identity(), (key1, key2) -> key1));
    return map;
}
// 如果是Guava出现重复键使用：ImmutableListMultimap
Multimaps.index()
```

Guava写法(value是列表)：

```java
userList.stream().collect(Collectors.toMap(User::getId,
e -> Lists.newArrayList(e.getUsername()),
(List<String> oldList, List<String> newList) -> {
    oldList.addAll(newList);
    return oldList;
}));
```



## SQL技巧汇总

### 判断奇数的 6 种方法

> [620. 有趣的电影 - 力扣（LeetCode）](https://leetcode.cn/problems/not-boring-movies/)

* mod(x, 2) = 1 ，如果余数是 1 就是奇数。
* power(-1, x) = -1 ， 如果结果是 -1 就是奇数
* x % 2 = 1 ，如果余数是 1 就是奇数。
* x & 1 = 1 ，如果是 1 就是奇数
* x regexp '[1, 3, 5, 7, 9]$' = 1 如果为 1 就是奇数
* x>>1<<1 != x 如果右移一位在左移一位不等于原值，就是奇数



### 开窗分组技巧

> 如果要分组后进行计数使用

```
COUNT(*) OVER (PARTITION BY XXX)
```

> 如果要对某一个属性进行排名可以

```sql
id-RANK() OVER (ORDER BY xxx)
```



## 工具类封装

### BeanUtils封装

```java
/**
 * Spring-BeanUtils.copyProperties扩展类
 *
 * @author zhiyu
 * @description 解决BeanUtils.copyProperties不能浅拷贝列表及其他扩展
 * @since 2022/10/13
 */
public class BeanExtUtils extends BeanUtils {

    /**
     * 将源实例的内容复制到目标实例
     * @param source        源数据
     * @param target        目标类型
     * @param ignoreNull    是否忽略空值
     * @param <S>           源类型
     * @param <T>           目标类型
     * @return
     */
    public static <S, T> T copyProperties(S source, T target, boolean ignoreNull) {
        if (source == null) {
            return target;
        }
        if (ignoreNull) {
            copyProperties(source, target, getNullPropertyNames(source));
        } else {
            copyProperties(source, target);
        }

        return target;
    }

    /**
     * 将源实例的内容复制到目标实例
     * @param source 源数据
     * @param target 目标类型
     * @param <S>    源类型
     * @param <T>    目标类型
     * @return
     */
    public static <S, T> T copyProperties(S source, Supplier<T> target) {
        T result = target.get();
        if (source == null) {
            return result;
        }
        copyProperties(source, result);
        return result;
    }

    /**
     * 使用场景：List中每个Java实体的循环复制
     * @param sources           源实体
     * @param targetSupplier    目标实体
     * @param <S>               源实体列表的类型
     * @param <T>               目标实体列表的类型
     * @return
     */
    public static <S, T> List<T> copyListProperties(List<S> sources, Supplier<T> targetSupplier) {
        if (sources == null || sources.isEmpty()) {
            return new ArrayList<>(0);
        }
        List<T> list = new ArrayList<>(sources.size());
        for (S source : sources) {
            T target = copyProperties(source, targetSupplier);
            list.add(target);
        }
        return list;
    }

    /**
     * 获取给定对象的空字段名称数组
     * @param source 目标对象
     * @return 值为 null 的字段名称数组
     */
    public static String[] getNullPropertyNames(Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<>();
        for (java.beans.PropertyDescriptor pd : pds) {
            Object srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null) {
                emptyNames.add(pd.getName());
            }
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
    }
}
```

### CopyUtils封装

库：cglib

```java
public class CopyUtils {
    public CopyUtils() {
    }

    public static <T, S> T copySingle(Class<T> targetClazz, S sourceData) {
        if (sourceData == null) {
            return null;
        } else {
            BeanCopier beanCopier = BeanCopier.create(sourceData.getClass(), targetClazz, false);
            return copySingle(targetClazz, sourceData, beanCopier);
        }
    }

    private static <T, S> T copySingle(Class<T> targetClazz, S sourceData, BeanCopier beanCopier) {
        try {
            T temp = targetClazz.getDeclaredConstructor().newInstance();
            beanCopier.copy(sourceData, temp, (Converter)null);
            return temp;
        } catch (Exception var5) {
            return null;
        }
    }

    public static <T, S> List<T> copyMulti(Class<T> targetClazz, List<S> sourceDataList) {
        if (CollectionUtils.isEmpty(sourceDataList)) {
            return new ArrayList();
        } else {
            List<T> result = new ArrayList(sourceDataList.size());
            BeanCopier beanCopier = BeanCopier.create(sourceDataList.get(0).getClass(), targetClazz, false);
            Iterator var4 = sourceDataList.iterator();

            while(var4.hasNext()) {
                S temp = var4.next();
                result.add(copySingle(targetClazz, temp, beanCopier));
            }

            return result;
        }
    }
}
```

```java
public class CopyUtils {

    /**
     * 单值拷贝
     *
     * @param targetClazz 目标类
     * @param sourceData  源数据
     * @param <T>         目标泛型
     * @param <S>         源泛型
     * @return 拷贝对象
     */
    public static <T, S> T copySigle(Class<T> targetClazz, S sourceData) {
        if (sourceData == null) {
            return null;
        }
        //复制器 默认带缓存.所以不用存起来.
        BeanCopier beanCopier = BeanCopier.create(sourceData.getClass(), targetClazz, false);
        return copySigle(targetClazz, sourceData, beanCopier);
    }

    /**
     * 单值复制器
     *
     * @param targetClazz 目标类
     * @param sourceData  源数据
     * @param beanCopier  复制器
     * @param <T>         目标泛型
     * @param <S>         源泛型
     * @return 复制结果
     */
    private static <T, S> T copySigle(Class<T> targetClazz, S sourceData, BeanCopier beanCopier) {
        T temp;
        try {
            temp = targetClazz.newInstance();
            beanCopier.copy(sourceData, temp, null);
        } catch (Exception e) {
            return null;
        }
        return temp;
    }

    /**
     * 列表拷贝
     *
     * @param targetClazz    目标类
     * @param sourceDataList 源数据
     * @param <T>            目标泛型
     * @param <S>            源泛型
     * @return 拷贝列表
     */
    public static <T, S> List<T> copyMulti(Class<T> targetClazz, List<S> sourceDataList) {

        if (CollectionUtils.isEmpty(sourceDataList)) {
            return null;
        }
        List<T> result = new ArrayList<>(sourceDataList.size());
        BeanCopier beanCopier = BeanCopier.create(sourceDataList.get(0).getClass(), targetClazz, false);

        for (S temp : sourceDataList) {
            result.add(copySigle(targetClazz, temp, beanCopier));
        }
        return result;
    }
}
```

### 并发查询模板

```java
Java
CompletableFuture.supplyAsync(() ->
    // A查询
).thenCombine(CompletableFuture.supplyAsync(() ->
    // B查询
), (a, b) -> {
    // 组合
});
```

### 线程工厂封装

```java
public class ExecutorUtil {
    public ExecutorUtil() {
    }

    public static Future<?> submit(Runnable task) {
        return ExecutorUtil.ExecutorHolder.COMMON_EXECUTOR.submit(task);
    }

    public static <T> Future<T> submit(Callable<T> task) {
        return ExecutorUtil.ExecutorHolder.COMMON_EXECUTOR.submit(task);
    }

    public static void execute(Runnable command) {
        ExecutorUtil.ExecutorHolder.COMMON_EXECUTOR.execute(command);
    }

    public static void asyncExecute(Runnable command) {
        ExecutorUtil.ExecutorHolder.ASYNC_EXECUTOR.execute(command);
    }

    public static void toolExecute(Runnable command) {
        ExecutorUtil.ExecutorHolder.TOOL_EXECUTOR.execute(command);
    }

    public static void executeHeavyTask(Runnable command) {
        ExecutorUtil.ExecutorHolder.HEAVY_EXECUTOR.execute(command);
    }

    private static ExecutorService getCommonPool() {
        return ExecutorUtil.ExecutorHolder.COMMON_EXECUTOR;
    }

    static class BizThreadFactory implements ThreadFactory {
        private static final AtomicInteger POOL_NUMBER = new AtomicInteger(1);
        private final ThreadGroup group;
        private final AtomicInteger threadNumber = new AtomicInteger(1);
        private final String namePrefix;

        BizThreadFactory(String name) {
            SecurityManager s = System.getSecurityManager();
            this.group = s != null ? s.getThreadGroup() : Thread.currentThread().getThreadGroup();
            this.namePrefix = "newhope-biz-" + name + "-" + POOL_NUMBER.getAndIncrement() + "-thread-";
        }

        public Thread newThread(Runnable task) {
            Thread t = new Thread(this.group, task, this.namePrefix + this.threadNumber.getAndIncrement(), 0L);
            if (t.isDaemon()) {
                t.setDaemon(false);
            }

            if (t.getPriority() != 5) {
                t.setPriority(5);
            }

            return t;
        }
    }

    private static class ExecutorHolder {
        private static final ExecutorService COMMON_EXECUTOR;
        private static final ExecutorService HEAVY_EXECUTOR;
        private static final ExecutorService ASYNC_EXECUTOR;
        private static final ExecutorService TOOL_EXECUTOR;

        private ExecutorHolder() {
        }

        static {
            COMMON_EXECUTOR = new ThreadPoolExecutor(32, 64, 3000L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(16), new ExecutorUtil.BizThreadFactory("common"), new CallerRunsPolicy());
            HEAVY_EXECUTOR = new ThreadPoolExecutor(4, 8, 3000L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(4), new ExecutorUtil.BizThreadFactory("heavy"), new CallerRunsPolicy());
            ASYNC_EXECUTOR = new ThreadPoolExecutor(16, 16, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(4096), new ExecutorUtil.BizThreadFactory("async"), new CallerRunsPolicy());
            TOOL_EXECUTOR = new ThreadPoolExecutor(8, 8, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue(8), new ExecutorUtil.BizThreadFactory("tool"), new CallerRunsPolicy());
        }
    }
}
```



### 批处理简单封装

```java
public class BatchExecuteUtil {

    public static <T, R> List<R> execute(Function<List<T>, R> function, List<T> list, Integer num) {
        List<R> result = new ArrayList<>();

        for (int i = 0; i < list.size(); ) {
            result.add(function.apply(list.subList(i, Math.min(i + num, list.size()))));
            i += num;
        }
        return result;
    }
}
```

