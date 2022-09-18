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

或者

```java
boolean isValid = Optional.ofNullable(country)
    .map(country -> country.getCity()) //Or use method reference Country::getCity
    .map(city -> city.getSchool())
    .map(school -> school.getStudent())
    .map(student -> true)
    .orElse(false);
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

