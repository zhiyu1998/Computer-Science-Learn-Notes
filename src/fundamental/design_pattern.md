
# 🎨 设计模式

以下的概念介绍都严谨的引用《秒懂设计模式》，这是一本神一般的书，当时我在地铁上一点一点看完，完全没有一丝痛苦感，这本书实在是太奇妙了，真的佩服作者的鬼斧神工！

## 单例（Singleton）

### 概念介绍

> 单例模式（Singleton）是一种非常简单且容易理解的设计模式。顾名思义，单例即单一的实例，确切地讲就是指在某个系统中只存在一个实例，同时提供集中、统一的访问接口，以使系统行为保持协调一致。singleton一词在逻辑学中指“有且仅有一个元素的集合”，这非常恰当地概括了单例的概念，也就是“一个类仅有一个实例”。

### 饿汉式
```java
public class Sun {
    public static final Sun sun = new Sun();

    private Sun() {

    }

    public static Sun getInstance() {
        return sun;
    }
}
```

### 懒汉式
```java
public class Sun {
    public static Sun sun;

    private Sun() {

    }

    public static Sun getInstance() {
        if (sun == null) {
            sun = new Sun();
        }
        return sun;
    }
}
```

让它更加安全的写法：
```java
public class Sun {
    public static Sun sun;

    private Sun() {

    }

    public static synchronized Sun getInstance() {
        if (sun == null) {
            sun = new Sun();
        }
        return sun;
    }
}
```

当然上面的代码，线程还没进入方法内部便不管三七二十一直接加锁排队，会造成线程阻塞。要保证多线程并发下逻辑的正确性：

```java
public class Sun {
    // 关键字volatile对静态变量的修饰则能保证变量值在各线程访问时的同步性、唯一性。
    public volatile static Sun sun;

    private Sun() {

    }

    public static Sun getInstance() {
        if (sun == null) {
            // 使用synchronized关键字对Sun.class进行同步，
            // 可以保证在多线程环境下只有一个线程能够进入synchronized代码块，
            // 从而避免了多个线程同时创建多个实例的情况。
            synchronized (Sun.class) {
                if (sun == null) {
                    sun = new Sun();
                }
            }
        }
        return sun;
    }
}
```

具体来说，当sun为null时，多个线程可能会同时进入synchronized代码块并创建多个实例，从而违反了单例模式的原则。因此，使用synchronized关键字对Sun.class进行同步，可以保证在多线程环境下只有一个线程能够进入synchronized代码块，并创建一个实例，避免了多个线程同时创建多个实例的情况。

## 原型（Prototype Pattern）
### 概念
> 原型模式（Prototype），在制造业中通常是指大批量生产开始之前研发出的概念模型，并基于各种参数指标对其进行检验，如果达到了质量要求，即可参照这个原型进行批量生产。原型模式达到以原型实例创建副本实例的目的即可，并不需要知道其原始类，也就是说，原型模式可以用对象创建对象，而不是用类创建对象，以此达到效率的提升。

### 通过Java的Cloneable实现
在Java中，可以通过实现Cloneable接口并重写Object类中的clone()方法来实现原型模式。

```java
public class EnemyPlane implements Cloneable{

    /**
     * 敌机横坐标
     */
    private int x;
    /**
     * 敌机纵坐标
     */
    private int y = 0;

    public EnemyPlane(int x) {
        this.x = x;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void fly() {
        y++;
    }

    @Override
    protected EnemyPlane clone() throws CloneNotSupportedException {
        return (EnemyPlane)super.clone();
    }
}
```

创建一个工厂方法（属实是提前学习了）

```java
public class EnemyPlaneFactory {

    private static EnemyPlane prototype = new EnemyPlane(200);

    public static EnemyPlane getInstance(int x) throws CloneNotSupportedException {
        EnemyPlane clone = prototype.clone();
        clone.setX(x);
        return clone;
    }
}
```

测试

```java
public class Main {
    public static void main(String[] args) {
        try {
            EnemyPlane e1 = EnemyPlaneFactory.getInstance(12);
            EnemyPlane e2 = EnemyPlaneFactory.getInstance(12);
            e1.fly();
            System.out.println(e1.getY());
            System.out.println(e2.getY());
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }
}
// 1
// 0
```

### 自定义
首先，我们需要定义一个原型接口，它包含一个克隆方法，用于复制当前对象并返回一个新的实例。

```java
public interface Prototype {
    Prototype clone();
}
```

接下来，我们可以定义一个具体的原型类，实现Prototype接口并重写克隆方法。在本例中，我们创建一个Person类作为原型，并在克隆方法中进行对象的复制。

```java
public class Person implements Prototype {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Prototype clone() {
        return new Person(name, age);
    }

    // getter and setter methods
}
```

现在我们可以使用原型模式创建新对象了。首先，我们创建一个原型对象并设置其属性。然后，我们可以使用原型对象的克隆方法来创建一个新的对象，而不需要显式地使用构造函数。

```java
public class Main {
    public static void main(String[] args) {
        // create a prototype object
        Prototype prototype = new Person("Tom", 25);

        // clone the prototype to create a new object
        Prototype newObject = prototype.clone();

        // print the properties of the new object
        System.out.println("Name: " + ((Person) newObject).getName());
        System.out.println("Age: " + ((Person) newObject).getAge());
    }
}
```


## 工厂方法（Factory Method）

### 概念
> 制造业是一个国家工业经济发展的重要支柱，而工厂则是其根基所在。程序设计中的工厂类往往是对对象构造、实例化、初始化过程的封装，而工厂方法（Factory Method）则可以升华为一种设计模式，它对工厂制造方法进行接口规范化，以允许子类工厂决定具体制造哪类产品的实例，最终降低系统耦合，使系统的可维护性、可扩展性等得到提升。

### 简单工厂
设计一个抽象类-敌人，其中绘制作为抽象方法：

```java
public abstract class Enemy {

    protected int x;

    protected int y;

    public Enemy(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public abstract void show();
}
```

敌机设计

```java
public class Airplane extends Enemy{

    public Airplane(int x, int y) {
        super(x, y);
    }

    @Override
    public void show() {
        System.out.println("绘制飞机于上层图层，出现坐标：" + x +
                "," + y);
        System.out.println("飞机向玩家发起攻击……");
    }
}
```

坦克设计：
```java
public class Tank extends Enemy{

    public Tank(int x, int y) {
        super(x, y);
    }

    @Override
    public void show() {
        System.out.println("绘制坦克于下层图层，出现坐标：" + x +
                "," + y);
        System.out.println("坦克向玩家发起攻击……");
    }
}
```

终于到了工厂函数了！这里我使用了Java11以上的语法：

```java
public class SimpleFactory {

    private int screenWidth;

    private Random random;

    public SimpleFactory(int screenWidth) {
        this.screenWidth = screenWidth;
        this.random = new Random();
    }

    public Enemy create(String type) {
        int x = random.nextInt(screenWidth);

        return switch (type) {
            case "airplane" -> new Airplane(x, 0); // 实例化飞机
            case "tank" -> new Tank(x, 0); // 实例化坦克
            default -> throw new IllegalArgumentException("Invalid type: " + type);
        };
    }
}
```

最后测试一下：

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("游戏开始");
        SimpleFactory factory = new SimpleFactory(100);
        factory.create("airplane").show();
        factory.create("tank").show();
    }
}
```


```
游戏开始
绘制飞机于上层图层，出现坐标：9,0
飞机向玩家发起攻击……
绘制坦克于下层图层，出现坐标：2,0
坦克向玩家发起攻击……
```

### 工厂标准
先抽象出每个工厂都会有的特征-创造：

```java
public interface Factory {

    Enemy create(int screenWidth);
}

```

好的，开始创造，第一个创造飞机：

```java
public class AirplaneFactory implements Factory {
    @Override
    public Enemy create(int screenWidth) {
        Random random = new Random();
        return new Airplane(random.nextInt(screenWidth), 0);
    }
}
```

第二个创造坦克：

```java
public class TankFactory implements Factory{

    @Override
    public Enemy create(int screenWidth) {
        Random random = new Random();
        return new Tank(random.nextInt(screenWidth), 0);
    }
}
```

创造一个boss：

```java
public class Boss extends Enemy{

    public Boss(int x, int y) {
        super(x, y);
    }

    @Override
    public void show() {
        System.out.println("Boss出现坐标：" + x + "," + y);
        System.out.println("Boss向玩家发起攻击……");
    }
}
```

给boss也来个工厂：

```java
public class BossFactory implements Factory {

    @Override
    public Enemy create(int screenWidth) {
        // 让Boss出现在屏幕中央
        return new Boss(screenWidth / 2, 0);
    }
}
```

最后，就可以实践了，不得不说太符合List的设计模式了！

```java
public class Main {
    public static void main(String[] args) {
        int screenWidth = 100;
        System.out.println("游戏开始");

        Factory factory = new TankFactory();
        for (int i = 0; i < 5; i++) {
            factory.create(screenWidth).show();
        }

        factory = new AirplaneFactory();
        for (int i = 0; i < 5; i++) {
            factory.create(screenWidth).show();
        }

        System.out.println("抵达关底");
        factory = new BossFactory();
        factory.create(screenWidth).show();
    }
}
```


## 抽象工厂（Abstract Factory）

> 抽象工厂模式（Abstract Factory）是对工厂的抽象化，而不只是制造方法。我们知道，为了满足不同用户对产品的多样化需求，工厂不会只局限于生产一类产品，但是系统如果按工厂方法那样为每种产品都增加一个新工厂又会造成工厂泛滥。所以，为了调和这种矛盾，抽象工厂模式提供了另一种思路，将各种产品分门别类，基于此来规划各种工厂的制造接口，最终确立产品制造的顶级规范，使其与具体产品彻底脱钩。抽象工厂是建立在制造复杂产品体系需求基础之上的一种设计模式，在某种意义上，我们可以将抽象工厂模式理解为工厂方法模式的高度集群化升级版。



## 建造者


## 门面


## 组合


## 装饰器


## 适配器


## 享元


## 代理


## 桥接


## 模板方法


## 迭代器


## 责任链


## 策略


## 状态


## 备忘录


## 中介


## 命令


## 访问者


## 观察者


## 解释器

