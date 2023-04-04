<template><div><h1 id="vue-2" tabindex="-1"><a class="header-anchor" href="#vue-2" aria-hidden="true">#</a> Vue 2</h1>
<ul>
<li><a href="#vue-2">Vue 2</a>
<ul>
<li><a href="#%E6%8E%8C%E6%8F%A1%E7%AC%AC%E4%B8%80%E4%B8%AAvue%E7%A8%8B%E5%BA%8F">（掌握）第一个Vue程序</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E5%88%97%E8%A1%A8%E7%9A%84%E5%B1%95%E7%A4%BA">（掌握）列表的展示</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E8%AE%A1%E6%95%B0%E5%99%A8%E6%A1%88%E4%BE%8B">（掌握）计数器案例</a></li>
<li><a href="#%E7%90%86%E8%A7%A3mvvm%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F">（理解）MVVM开发模式</a></li>
<li><a href="#%E7%90%86%E8%A7%A3vue%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">（理解）Vue的生命周期</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1mustache-%E6%8F%92%E5%80%BC%E6%93%8D%E4%BD%9C">（掌握）mustache 插值操作</a>
<ul>
<li><a href="#mustache">Mustache</a></li>
<li><a href="#v-once%E6%8C%87%E4%BB%A4">v-once指令</a></li>
<li><a href="#v-html%E6%8C%87%E4%BB%A4">v-html指令</a></li>
<li><a href="#v-text%E6%8C%87%E4%BB%A4">v-text指令</a></li>
<li><a href="#v-pre%E6%8C%87%E4%BB%A4">v-pre指令</a></li>
<li><a href="#v-cloak%E6%8C%87%E4%BB%A4">v-cloak指令</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1v-bind%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">（掌握）v-bind的基本使用</a>
<ul>
<li><a href="#%E7%BB%91%E5%AE%9Aclass">绑定class</a></li>
<li><a href="#%E7%BB%91%E5%AE%9Astyle">绑定style</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">(掌握)计算属性的基本使用</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1v-on%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E5%92%8C%E8%AF%AD%E6%B3%95%E7%B3%96">(掌握)v-on的基本使用和语法糖</a>
<ul>
<li><a href="#v-on%E7%9A%84%E4%BC%A0%E5%8F%82%E9%97%AE%E9%A2%98">v-on的传参问题</a></li>
<li><a href="#v-on%E7%9A%84%E4%BF%AE%E9%A5%B0%E7%AC%A6">v-on的修饰符</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1es6%E9%83%A8%E5%88%86%E8%AF%AD%E6%B3%95%E6%80%BB%E7%BB%93">(掌握)ES6部分语法总结</a>
<ul>
<li><a href="#let--var%E7%9A%84%E5%8C%BA%E5%88%AB">let &amp; var的区别</a></li>
<li><a href="#const">const</a></li>
<li><a href="#%E5%AF%B9%E8%B1%A1%E5%A2%9E%E5%BC%BA%E5%86%99%E6%B3%95">对象增强写法</a></li>
<li><a href="#filtermapreduce-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">filter/map/reduce 高阶函数</a>
<ul>
<li><a href="#filter">filter</a></li>
<li><a href="#map%E7%9A%84%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8">map的函数使用</a></li>
<li><a href="#reduce%E7%9A%84%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8">reduce的函数使用</a></li>
</ul>
</li>
<li><a href="#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E7%9A%84%E6%80%9D%E6%83%B3">函数式编程的思想</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD">(掌握)条件判断</a>
<ul>
<li><a href="#v-if-v-else-if-v-else%E7%9A%84%E4%BD%BF%E7%94%A8">v-if v-else-if v-else的使用</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1v-for%E9%81%8D%E5%8E%86%E6%95%B0%E7%BB%84%E5%92%8C%E5%AF%B9%E8%B1%A1">(掌握)v-for遍历数组和对象</a>
<ul>
<li><a href="#%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1">遍历对象</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1-%E8%A7%A3%E5%86%B3%E8%99%9A%E6%8B%9Fdom%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD%E5%90%8E%E8%BE%93%E5%85%A5%E4%B8%8D%E5%8F%98%E7%9A%84%E9%97%AE%E9%A2%98">(掌握) 解决虚拟DOM条件判断后输入不变的问题</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1v-show%E7%9A%84%E4%BD%BF%E7%94%A8%E5%8F%8Av-if%E7%9A%84%E5%8C%BA%E5%88%AB">(掌握)v-show的使用及v-if的区别</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E8%BF%87%E6%BB%A4%E5%99%A8">(掌握)过滤器</a></li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E5%93%8D%E5%BA%94%E5%BC%8F%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95">(掌握)响应式数组方法</a>
<ul>
<li><a href="#push-">push ()</a></li>
<li><a href="#pop-">pop ()</a></li>
<li><a href="#shift--%E5%88%A0%E9%99%A4%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0">shift () :删除数组中的第一个元素</a></li>
<li><a href="#unshift-values--%E5%9C%A8%E6%95%B0%E7%BB%84%E6%9C%80%E5%89%8D%E9%9D%A2%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0">unshift (...values) : 在数组最前面添加元素</a></li>
<li><a href="#splice-startnum-deletecount-values--%E5%88%A0%E9%99%A4%E6%8F%92%E5%85%A5%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0">splice (startNum, deleteCount, ...values) : 删除/插入/替换元素</a></li>
<li><a href="#sort-">sort ()</a></li>
<li><a href="#reverse-">reverse ()</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1v-model-%E8%A1%A8%E5%8D%95%E7%BB%91%E5%AE%9A">(掌握)v-model 表单绑定</a>
<ul>
<li><a href="#v-model%E7%9A%84%E5%8E%9F%E7%90%86%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A">v-model的原理（双向绑定）</a></li>
<li><a href="#v-model%E7%BB%93%E5%90%88radio">v-model结合radio</a></li>
<li><a href="#v-model%E7%BB%93%E5%90%88checkbox">v-model结合checkbox</a></li>
<li><a href="#v-model%E7%BB%93%E5%90%88select">v-model结合select</a></li>
<li><a href="#%E5%80%BC%E7%BB%91%E5%AE%9A">值绑定</a></li>
<li><a href="#%E4%BF%AE%E9%A5%B0%E7%AC%A6">修饰符</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1%E7%BB%84%E4%BB%B6%E5%8C%96">(掌握)组件化</a>
<ul>
<li><a href="#%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6%E5%92%8C%E5%B1%80%E9%83%A8%E7%BB%84%E4%BB%B6">全局组件和局部组件</a></li>
<li><a href="#%E7%88%B6%E7%BB%84%E4%BB%B6%E5%92%8C%E5%AD%90%E7%BB%84%E4%BB%B6">父组件和子组件</a></li>
<li><a href="#%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6%E5%92%8C%E8%AF%AD%E6%B3%95%E7%B3%96">注册组件和语法糖</a></li>
<li><a href="#%E6%A8%A1%E6%9D%BF%E7%9A%84%E5%88%86%E7%A6%BB%E5%86%99%E6%B3%95">模板的分离写法</a></li>
<li><a href="#%E7%BB%84%E4%BB%B6%E4%B8%AD%E7%9A%84%E6%95%B0%E6%8D%AE%E5%AD%98%E6%94%BE">组件中的数据存放</a></li>
<li><a href="#%E6%80%9D%E8%80%83">思考</a>
<ul>
<li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88data%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%AA%E5%87%BD%E6%95%B0">为什么data必须是个函数</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1-%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1">(掌握) 父子组件通信</a>
<ul>
<li><a href="#%E9%A9%BC%E5%B3%B0%E5%91%BD%E5%90%8D%E9%97%AE%E9%A2%98">驼峰命名问题</a></li>
<li><a href="#%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6----%E5%AD%90%E4%BC%A0%E7%88%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">父子组件 -- 子传父的基本使用</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1-%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AE%BF%E9%97%AE%E6%96%B9%E5%BC%8F">(掌握) 父子组件的访问方式</a>
<ul>
<li><a href="#%E7%88%B6%E8%AE%BF%E9%97%AE%E5%AD%90children%E7%9A%84%E4%BD%BF%E7%94%A8">父访问子：$children的使用</a></li>
<li><a href="#%E7%88%B6%E8%AE%BF%E9%97%AE%E5%AD%90refs%E7%9A%84%E4%BD%BF%E7%94%A8">父访问子：$refs的使用</a></li>
<li><a href="#%E4%B8%8D%E5%B8%B8%E7%94%A8-%E5%AD%90%E8%AE%BF%E9%97%AE%E7%88%B6parent--root">(不常用) 子访问父：$parent / $root</a></li>
</ul>
</li>
<li><a href="#%E6%8E%8C%E6%8F%A1-slot%E6%8F%92%E6%A7%BD%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">(掌握) slot插槽的基本使用</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8">基本使用</a></li>
<li><a href="#%E9%BB%98%E8%AE%A4%E5%80%BC">默认值</a></li>
<li><a href="#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD">具名插槽</a></li>
<li><a href="#%E7%BC%96%E8%AF%91%E4%BD%9C%E7%94%A8%E5%9F%9F">编译作用域</a></li>
<li><a href="#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD">作用域插槽</a></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="掌握-第一个vue程序" tabindex="-1"><a class="header-anchor" href="#掌握-第一个vue程序" aria-hidden="true">#</a> （掌握）第一个Vue程序</h2>
<p>ES6的写法：let 变量/const 常量</p>
<p>以前的JS编程方式：命令式编程</p>
<p>Vuejs的编程方式：声明式编程</p>
<ol>
<li>创建一个Vue对象</li>
</ol>
<figure><img src="@source/frontend/vue/img/1.png" alt="1" tabindex="0" loading="lazy"><figcaption>1</figcaption></figure>
<ol start="2">
<li>
<p>el 属性：该属性决定了Vue对象挂在到哪一个元素</p>
</li>
<li>
<p>data属性：该属性会村粗一些数据</p>
</li>
</ol>
<h2 id="掌握-列表的展示" tabindex="-1"><a class="header-anchor" href="#掌握-列表的展示" aria-hidden="true">#</a> （掌握）列表的展示</h2>
<figure><img src="@source/frontend/vue/img/2.png" alt="2" tabindex="0" loading="lazy"><figcaption>2</figcaption></figure>
<h2 id="掌握-计数器案例" tabindex="-1"><a class="header-anchor" href="#掌握-计数器案例" aria-hidden="true">#</a> （掌握）计数器案例</h2>
<p>新的属性：methods</p>
<p>新的指定：@click（v-on:click），该指令用于监听某个元素的点击事件。执行的方法是methods定义的方法</p>
<p>语法糖：简写</p>
<figure><img src="@source/frontend/vue/img/3.png" alt="3" tabindex="0" loading="lazy"><figcaption>3</figcaption></figure>
<h2 id="理解-mvvm开发模式" tabindex="-1"><a class="header-anchor" href="#理解-mvvm开发模式" aria-hidden="true">#</a> （理解）MVVM开发模式</h2>
<figure><img src="@source/frontend/vue/img/4.png" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure>
<figure><img src="@source/frontend/vue/img/5.jpg" alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure>
<h2 id="理解-vue的生命周期" tabindex="-1"><a class="header-anchor" href="#理解-vue的生命周期" aria-hidden="true">#</a> （理解）Vue的生命周期</h2>
<figure><img src="@source/frontend/vue/img/6.png" alt="6" tabindex="0" loading="lazy"><figcaption>6</figcaption></figure>
<p>中文版</p>
<figure><img src="@source/frontend/vue/img/7.png" alt="7" tabindex="0" loading="lazy"><figcaption>7</figcaption></figure>
<h2 id="掌握-mustache-插值操作" tabindex="-1"><a class="header-anchor" href="#掌握-mustache-插值操作" aria-hidden="true">#</a> （掌握）mustache 插值操作</h2>
<h3 id="mustache" tabindex="-1"><a class="header-anchor" href="#mustache" aria-hidden="true">#</a> Mustache</h3>
<p>{{ Mustache }} 插值操作，可以让两个变量组合在一起</p>
<figure><img src="@source/frontend/vue/img/8.png" alt="8" tabindex="0" loading="lazy"><figcaption>8</figcaption></figure>
<figure><img src="@source/frontend/vue/img/9.png" alt="9" tabindex="0" loading="lazy"><figcaption>9</figcaption></figure>
<h3 id="v-once指令" tabindex="-1"><a class="header-anchor" href="#v-once指令" aria-hidden="true">#</a> v-once指令</h3>
<figure><img src="@source/frontend/vue/img/10.png" alt="10" tabindex="0" loading="lazy"><figcaption>10</figcaption></figure>
<figure><img src="@source/frontend/vue/img/11.png" alt="11" tabindex="0" loading="lazy"><figcaption>11</figcaption></figure>
<h3 id="v-html指令" tabindex="-1"><a class="header-anchor" href="#v-html指令" aria-hidden="true">#</a> v-html指令</h3>
<figure><img src="@source/frontend/vue/img/12.png" alt="12" tabindex="0" loading="lazy"><figcaption>12</figcaption></figure>
<h3 id="v-text指令" tabindex="-1"><a class="header-anchor" href="#v-text指令" aria-hidden="true">#</a> v-text指令</h3>
<p>不灵活，一般不使用</p>
<h3 id="v-pre指令" tabindex="-1"><a class="header-anchor" href="#v-pre指令" aria-hidden="true">#</a> v-pre指令</h3>
<p>和<code v-pre>&lt;pre&gt;</code>标签的效果一致</p>
<h3 id="v-cloak指令" tabindex="-1"><a class="header-anchor" href="#v-cloak指令" aria-hidden="true">#</a> v-cloak指令</h3>
<p>等待解析，解析后会把v-cloak删除</p>
<figure><img src="@source/frontend/vue/img/13.png" alt="13" tabindex="0" loading="lazy"><figcaption>13</figcaption></figure>
<h2 id="掌握-v-bind的基本使用" tabindex="-1"><a class="header-anchor" href="#掌握-v-bind的基本使用" aria-hidden="true">#</a> （掌握）v-bind的基本使用</h2>
<p>基本语法格式：<strong>v-bind:属性</strong>=&quot;data里的数据&quot;</p>
<p>一般都是从服务器获取数据</p>
<figure><img src="@source/frontend/vue/img/14.png" alt="14" tabindex="0" loading="lazy"><figcaption>14</figcaption></figure>
<p>语法糖的写法： <strong>:属性</strong></p>
<p><img src="@source/frontend/vue/img/15.png" alt="15" loading="lazy">**</p>
<h3 id="绑定class" tabindex="-1"><a class="header-anchor" href="#绑定class" aria-hidden="true">#</a> 绑定class</h3>
<p>对象语法：当属性为true的时候，该类名有效。</p>
<figure><img src="@source/frontend/vue/img/17.jpg" alt="17" tabindex="0" loading="lazy"><figcaption>17</figcaption></figure>
<figure><img src="@source/frontend/vue/img/16.png" alt="16" tabindex="0" loading="lazy"><figcaption>16</figcaption></figure>
<p>另外，在标签里在加入class会合并v-bind:class，不会被覆盖。</p>
<p>也可以使用methods中的方法：</p>
<figure><img src="@source/frontend/vue/img/18.jpg" alt="18" tabindex="0" loading="lazy"><figcaption>18</figcaption></figure>
<p>(了解)数组语法：</p>
<figure><img src="@source/frontend/vue/img/19.jpg" alt="19" tabindex="0" loading="lazy"><figcaption>19</figcaption></figure>
<h3 id="绑定style" tabindex="-1"><a class="header-anchor" href="#绑定style" aria-hidden="true">#</a> 绑定style</h3>
<p>两种写法：
对象：</p>
<figure><img src="@source/frontend/vue/img/20.jpg" alt="20" tabindex="0" loading="lazy"><figcaption>20</figcaption></figure>
<p>数组（使用情况比较少）：</p>
<figure><img src="@source/frontend/vue/img/21.png" alt="21" tabindex="0" loading="lazy"><figcaption>21</figcaption></figure>
<h2 id="掌握-计算属性的基本使用" tabindex="-1"><a class="header-anchor" href="#掌握-计算属性的基本使用" aria-hidden="true">#</a> (掌握)计算属性的基本使用</h2>
<figure><img src="@source/frontend/vue/img/22.png" alt="22" tabindex="0" loading="lazy"><figcaption>22</figcaption></figure>
<p>计算总值：</p>
<figure><img src="@source/frontend/vue/img/23.png" alt="23" tabindex="0" loading="lazy"><figcaption>23</figcaption></figure>
<p>计算属性的getter和setter（完整写法）：</p>
<figure><img src="@source/frontend/vue/img/24.png" alt="24" tabindex="0" loading="lazy"><figcaption>24</figcaption></figure>
<p>计算属性和methods的对比：</p>
<ul>
<li>computed比methods多具有缓存</li>
</ul>
<h2 id="掌握-v-on的基本使用和语法糖" tabindex="-1"><a class="header-anchor" href="#掌握-v-on的基本使用和语法糖" aria-hidden="true">#</a> (掌握)v-on的基本使用和语法糖</h2>
<figure><img src="@source/frontend/vue/img/25.png" alt="25" tabindex="0" loading="lazy"><figcaption>25</figcaption></figure>
<h3 id="v-on的传参问题" tabindex="-1"><a class="header-anchor" href="#v-on的传参问题" aria-hidden="true">#</a> v-on的传参问题</h3>
<p>重点：如果需要传入event</p>
<ol>
<li>不写()</li>
<li>写$event</li>
</ol>
<figure><img src="@source/frontend/vue/img/26.png" alt="26" tabindex="0" loading="lazy"><figcaption>26</figcaption></figure>
<figure><img src="@source/frontend/vue/img/27.png" alt="27" tabindex="0" loading="lazy"><figcaption>27</figcaption></figure>
<h3 id="v-on的修饰符" tabindex="-1"><a class="header-anchor" href="#v-on的修饰符" aria-hidden="true">#</a> v-on的修饰符</h3>
<ol>
<li>.stop
防止冒泡执行</li>
</ol>
<figure><img src="@source/frontend/vue/img/28.png" alt="28" tabindex="0" loading="lazy"><figcaption>28</figcaption></figure>
<ol start="2">
<li>.prevent
当有submit和action的时候停止action的跳转，只执行submit的方法</li>
</ol>
<figure><img src="@source/frontend/vue/img/29.png" alt="29" tabindex="0" loading="lazy"><figcaption>29</figcaption></figure>
<ol start="3">
<li>.enter
只有按下Enter的时候才会执行</li>
</ol>
<figure><img src="@source/frontend/vue/img/30.png" alt="30" tabindex="0" loading="lazy"><figcaption>30</figcaption></figure>
<ol start="4">
<li>.once
当前方法只执行一次</li>
</ol>
<figure><img src="@source/frontend/vue/img/31.png" alt="31" tabindex="0" loading="lazy"><figcaption>31</figcaption></figure>
<h2 id="掌握-es6部分语法总结" tabindex="-1"><a class="header-anchor" href="#掌握-es6部分语法总结" aria-hidden="true">#</a> (掌握)ES6部分语法总结</h2>
<h3 id="let-var的区别" tabindex="-1"><a class="header-anchor" href="#let-var的区别" aria-hidden="true">#</a> let &amp; var的区别</h3>
<h3 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h3>
<p>常量的含义是指向的对象不能修改，但是可以改变对象内部的属性</p>
<h3 id="对象增强写法" tabindex="-1"><a class="header-anchor" href="#对象增强写法" aria-hidden="true">#</a> 对象增强写法</h3>
<p>对象的字面量：</p>
<figure><img src="@source/frontend/vue/img/32.png" alt="32" tabindex="0" loading="lazy"><figcaption>32</figcaption></figure>
<figure><img src="@source/frontend/vue/img/33.png" alt="33" tabindex="0" loading="lazy"><figcaption>33</figcaption></figure>
<h3 id="filter-map-reduce-高阶函数" tabindex="-1"><a class="header-anchor" href="#filter-map-reduce-高阶函数" aria-hidden="true">#</a> filter/map/reduce 高阶函数</h3>
<p>命令式编程/声明式编程
面向对象编程（对象）/函数式编程（函数）</p>
<h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h4>
<p>可选参数：</p>
<ul>
<li>value</li>
<li>index</li>
<li>array</li>
</ul>
<p>filter中的回调函数必须返回一个boolean值</p>
<ul>
<li>true:函数内部会自动将这次回调的n加入到新的数组中</li>
<li>false:函数内部过滤掉这次n</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">222</span><span class="token punctuation">,</span> <span class="token number">444</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newNums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNums<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map的函数使用" tabindex="-1"><a class="header-anchor" href="#map的函数使用" aria-hidden="true">#</a> map的函数使用</h4>
<p>可选参数</p>
<ul>
<li>value</li>
<li>index</li>
<li>array</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> new2Nums <span class="token operator">=</span> newNums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>new2Nums<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reduce的函数使用" tabindex="-1"><a class="header-anchor" href="#reduce的函数使用" aria-hidden="true">#</a> reduce的函数使用</h4>
<p>对数组中所有的内容进行汇总</p>
<ul>
<li>previousValues</li>
<li>currentValues</li>
<li>currentIndex</li>
<li>Array</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>new2Nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preValue<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> preValue <span class="token operator">+</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// new2Nums Array(4) [ 20, 40, 80, 100 ]</span>
<span class="token comment">// 第一次 preValue = 0, n = 20 (注：preValue和上一次reduce的return有关)</span>
<span class="token comment">// 第二次 20               40</span>
<span class="token comment">// 第三次 60               80</span>
<span class="token comment">// 第四次 140              100</span>
<span class="token comment">// 240</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数式编程的思想" tabindex="-1"><a class="header-anchor" href="#函数式编程的思想" aria-hidden="true">#</a> 函数式编程的思想</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> prev <span class="token operator">+</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="掌握-条件判断" tabindex="-1"><a class="header-anchor" href="#掌握-条件判断" aria-hidden="true">#</a> (掌握)条件判断</h2>
<h3 id="v-if-v-else-if-v-else的使用" tabindex="-1"><a class="header-anchor" href="#v-if-v-else-if-v-else的使用" aria-hidden="true">#</a> v-if v-else-if v-else的使用</h3>
<p>参考：<a href="https://cn.vuejs.org/v2/guide/conditional.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/v2/guide/conditional.html<ExternalLinkIcon/></a></p>
<h2 id="掌握-v-for遍历数组和对象" tabindex="-1"><a class="header-anchor" href="#掌握-v-for遍历数组和对象" aria-hidden="true">#</a> (掌握)v-for遍历数组和对象</h2>
<figure><img src="@source/frontend/vue/img/34.png" alt="34" tabindex="0" loading="lazy"><figcaption>34</figcaption></figure>
<h3 id="遍历对象" tabindex="-1"><a class="header-anchor" href="#遍历对象" aria-hidden="true">#</a> 遍历对象</h3>
<p>对象：</p>
<figure><img src="@source/frontend/vue/img/35.png" alt="35" tabindex="0" loading="lazy"><figcaption>35</figcaption></figure>
<ol>
<li>在遍历对象过称中，如果只是获取一个值，那么获取到的是value</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>获取key和value 格式(value, key)</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value, key) in info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{value}}-{{key}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>获取key和value和index  格式(value, key, index)</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(value, key, index) in info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{value}}-{{key}}-{{index}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="掌握-解决虚拟dom条件判断后输入不变的问题" tabindex="-1"><a class="header-anchor" href="#掌握-解决虚拟dom条件判断后输入不变的问题" aria-hidden="true">#</a> (掌握) 解决虚拟DOM条件判断后输入不变的问题</h2>
<p>问题：
切换后不管是账号还是邮箱都是输入的文字都是不变的
直接观看视频：<a href="https://www.bilibili.com/video/BV15741177Eh?p=33" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV15741177Eh?p=33<ExternalLinkIcon/></a></p>
<h2 id="掌握-v-show的使用及v-if的区别" tabindex="-1"><a class="header-anchor" href="#掌握-v-show的使用及v-if的区别" aria-hidden="true">#</a> (掌握)v-show的使用及v-if的区别</h2>
<ul>
<li>v-if：当条件为false时，包含v-if的元素，根本不会存在dom中</li>
<li>v-show：当条件为false时，v-show只是给元素添加一个行内样式：display:none</li>
</ul>
<p>选择：</p>
<p>当需要显示/隐藏之间切换很频繁时候，使用v-show</p>
<p>当只有一次切换时，使用v-if</p>
<h2 id="掌握-过滤器" tabindex="-1"><a class="header-anchor" href="#掌握-过滤器" aria-hidden="true">#</a> (掌握)过滤器</h2>
<p>调用：<img src="@source/frontend/vue/img/36.png" alt="36" loading="lazy"></p>
<p>方法：</p>
<figure><img src="@source/frontend/vue/img/37.png" alt="37" tabindex="0" loading="lazy"><figcaption>37</figcaption></figure>
<h2 id="掌握-响应式数组方法" tabindex="-1"><a class="header-anchor" href="#掌握-响应式数组方法" aria-hidden="true">#</a> (掌握)响应式数组方法</h2>
<h3 id="push" tabindex="-1"><a class="header-anchor" href="#push" aria-hidden="true">#</a> push ()</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.push('rzy');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pop" tabindex="-1"><a class="header-anchor" href="#pop" aria-hidden="true">#</a> pop ()</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.pop();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="shift-删除数组中的第一个元素" tabindex="-1"><a class="header-anchor" href="#shift-删除数组中的第一个元素" aria-hidden="true">#</a> shift () :删除数组中的第一个元素</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.shift();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="unshift-values-在数组最前面添加元素" tabindex="-1"><a class="header-anchor" href="#unshift-values-在数组最前面添加元素" aria-hidden="true">#</a> unshift (...values) : 在数组最前面添加元素</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.unshift('abc', 'bbb');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="splice-startnum-deletecount-values-删除-插入-替换元素" tabindex="-1"><a class="header-anchor" href="#splice-startnum-deletecount-values-删除-插入-替换元素" aria-hidden="true">#</a> splice (startNum, deleteCount, ...values) : 删除/插入/替换元素</h3>
<ul>
<li>删除元素：第二个参数传入要删除几个元素（如果没有传，就删除后面所有的元素）</li>
<li>替换元素：第二个参数表示要替换几个元素，后面是用于替换前面的元素</li>
<li>插入元素：第二个参数传入0，后面跟上插入的元素</li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.splice(1, 3, 'e', 't', 'c');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort ()</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.sort();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="reverse" tabindex="-1"><a class="header-anchor" href="#reverse" aria-hidden="true">#</a> reverse ()</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>this.letters.reverse();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="掌握-v-model-表单绑定" tabindex="-1"><a class="header-anchor" href="#掌握-v-model-表单绑定" aria-hidden="true">#</a> (掌握)v-model 表单绑定</h2>
<p>概览：</p>
<ul>
<li>使用</li>
<li>原理</li>
<li>三种结合方式</li>
<li>修饰符</li>
</ul>
<figure><img src="@source/frontend/vue/img/38.jpg" alt="38" tabindex="0" loading="lazy"><figcaption>38</figcaption></figure>
<h3 id="v-model的原理-双向绑定" tabindex="-1"><a class="header-anchor" href="#v-model的原理-双向绑定" aria-hidden="true">#</a> v-model的原理（双向绑定）</h3>
<figure><img src="@source/frontend/vue/img/39.png" alt="39" tabindex="0" loading="lazy"><figcaption>39</figcaption></figure>
<h3 id="v-model结合radio" tabindex="-1"><a class="header-anchor" href="#v-model结合radio" aria-hidden="true">#</a> v-model结合radio</h3>
<figure><img src="@source/frontend/vue/img/40.png" alt="40" tabindex="0" loading="lazy"><figcaption>40</figcaption></figure>
<h3 id="v-model结合checkbox" tabindex="-1"><a class="header-anchor" href="#v-model结合checkbox" aria-hidden="true">#</a> v-model结合checkbox</h3>
<figure><img src="@source/frontend/vue/img/41.png" alt="41" tabindex="0" loading="lazy"><figcaption>41</figcaption></figure>
<h3 id="v-model结合select" tabindex="-1"><a class="header-anchor" href="#v-model结合select" aria-hidden="true">#</a> v-model结合select</h3>
<figure><img src="@source/frontend/vue/img/42.jpg" alt="42" tabindex="0" loading="lazy"><figcaption>42</figcaption></figure>
<h3 id="值绑定" tabindex="-1"><a class="header-anchor" href="#值绑定" aria-hidden="true">#</a> 值绑定</h3>
<figure><img src="@source/frontend/vue/img/43.png" alt="43" tabindex="0" loading="lazy"><figcaption>43</figcaption></figure>
<h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3>
<p>前提：<img src="@source/frontend/vue/img/44.png" alt="44" loading="lazy"></p>
<p><strong>修饰符lazy</strong>:失去焦点/回车的时候才会加载（变量更新）</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model.lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{message}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>v-model默认赋值类型为string</p>
<p><strong>修饰符number</strong>:把内容自动转为数字类型</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{typeof(age)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修饰符trim</strong>:除去两边的空格</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model.trim</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="掌握-组件化" tabindex="-1"><a class="header-anchor" href="#掌握-组件化" aria-hidden="true">#</a> (掌握)组件化</h2>
<figure><img src="@source/frontend/vue/img/45.jpg" alt="45" tabindex="0" loading="lazy"><figcaption>45</figcaption></figure>
<figure><img src="@source/frontend/vue/img/46.png" alt="46" tabindex="0" loading="lazy"><figcaption>46</figcaption></figure>
<h3 id="全局组件和局部组件" tabindex="-1"><a class="header-anchor" href="#全局组件和局部组件" aria-hidden="true">#</a> 全局组件和局部组件</h3>
<p>全局组件：</p>
<figure><img src="@source/frontend/vue/img/47.png" alt="47" tabindex="0" loading="lazy"><figcaption>47</figcaption></figure>
<p>局部组件：</p>
<figure><img src="@source/frontend/vue/img/48.jpg" alt="48" tabindex="0" loading="lazy"><figcaption>48</figcaption></figure>
<h3 id="父组件和子组件" tabindex="-1"><a class="header-anchor" href="#父组件和子组件" aria-hidden="true">#</a> 父组件和子组件</h3>
<figure><img src="@source/frontend/vue/img/49.png" alt="49" tabindex="0" loading="lazy"><figcaption>49</figcaption></figure>
<h3 id="注册组件和语法糖" tabindex="-1"><a class="header-anchor" href="#注册组件和语法糖" aria-hidden="true">#</a> 注册组件和语法糖</h3>
<figure><img src="@source/frontend/vue/img/50.png" alt="50" tabindex="0" loading="lazy"><figcaption>50</figcaption></figure>
<h3 id="模板的分离写法" tabindex="-1"><a class="header-anchor" href="#模板的分离写法" aria-hidden="true">#</a> 模板的分离写法</h3>
<p>使用<code v-pre>&lt;script&gt;</code>标签</p>
<figure><img src="@source/frontend/vue/img/51.png" alt="51" tabindex="0" loading="lazy"><figcaption>51</figcaption></figure>
<p>使用<code v-pre>&lt;template&gt;</code>标签</p>
<figure><img src="@source/frontend/vue/img/52.png" alt="52" tabindex="0" loading="lazy"><figcaption>52</figcaption></figure>
<h3 id="组件中的数据存放" tabindex="-1"><a class="header-anchor" href="#组件中的数据存放" aria-hidden="true">#</a> 组件中的数据存放</h3>
<figure><img src="@source/frontend/vue/img/53.png" alt="53" tabindex="0" loading="lazy"><figcaption>53</figcaption></figure>
<h3 id="思考" tabindex="-1"><a class="header-anchor" href="#思考" aria-hidden="true">#</a> 思考</h3>
<h4 id="为什么data必须是个函数" tabindex="-1"><a class="header-anchor" href="#为什么data必须是个函数" aria-hidden="true">#</a> 为什么data必须是个函数</h4>
<ol>
<li>如果是一个函数，每次都创建一个独立的空间而不对其他组件造成影响</li>
</ol>
<figure><img src="@source/frontend/vue/img/54.jpg" alt="54" tabindex="0" loading="lazy"><figcaption>54</figcaption></figure>
<ol start="2">
<li>如果是一个对象，每次创建都引用同一个对象，就会改变一个组件其他也跟着改变</li>
</ol>
<figure><img src="@source/frontend/vue/img/55.jpg" alt="55" tabindex="0" loading="lazy"><figcaption>55</figcaption></figure>
<h2 id="掌握-父子组件通信" tabindex="-1"><a class="header-anchor" href="#掌握-父子组件通信" aria-hidden="true">#</a> (掌握) 父子组件通信</h2>
<figure><img src="@source/frontend/vue/img/56.png" alt="56" tabindex="0" loading="lazy"><figcaption>56</figcaption></figure>
<p>type的数据类型：</p>
<figure><img src="@source/frontend/vue/img/57.jpg" alt="57" tabindex="0" loading="lazy"><figcaption>57</figcaption></figure>
<h3 id="驼峰命名问题" tabindex="-1"><a class="header-anchor" href="#驼峰命名问题" aria-hidden="true">#</a> 驼峰命名问题</h3>
<figure><img src="@source/frontend/vue/img/58.png" alt="58" tabindex="0" loading="lazy"><figcaption>58</figcaption></figure>
<h3 id="父子组件-子传父的基本使用" tabindex="-1"><a class="header-anchor" href="#父子组件-子传父的基本使用" aria-hidden="true">#</a> 父子组件 -- 子传父的基本使用</h3>
<figure><img src="@source/frontend/vue/img/59.png" alt="59" tabindex="0" loading="lazy"><figcaption>59</figcaption></figure>
<p>小结：</p>
<figure><img src="@source/frontend/vue/img/60.jpg" alt="60" tabindex="0" loading="lazy"><figcaption>60</figcaption></figure>
<h2 id="掌握-父子组件的访问方式" tabindex="-1"><a class="header-anchor" href="#掌握-父子组件的访问方式" aria-hidden="true">#</a> (掌握) 父子组件的访问方式</h2>
<h3 id="父访问子-children的使用" tabindex="-1"><a class="header-anchor" href="#父访问子-children的使用" aria-hidden="true">#</a> 父访问子：$children的使用</h3>
<figure><img src="@source/frontend/vue/img/61.png" alt="61" tabindex="0" loading="lazy"><figcaption>61</figcaption></figure>
<h3 id="父访问子-refs的使用" tabindex="-1"><a class="header-anchor" href="#父访问子-refs的使用" aria-hidden="true">#</a> 父访问子：$refs的使用</h3>
<figure><img src="@source/frontend/vue/img/62.png" alt="62" tabindex="0" loading="lazy"><figcaption>62</figcaption></figure>
<h3 id="不常用-子访问父-parent-root" tabindex="-1"><a class="header-anchor" href="#不常用-子访问父-parent-root" aria-hidden="true">#</a> (不常用) 子访问父：$parent / $root</h3>
<figure><img src="@source/frontend/vue/img/63.png" alt="63" tabindex="0" loading="lazy"><figcaption>63</figcaption></figure>
<h2 id="掌握-slot插槽的基本使用" tabindex="-1"><a class="header-anchor" href="#掌握-slot插槽的基本使用" aria-hidden="true">#</a> (掌握) slot插槽的基本使用</h2>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<figure><img src="@source/frontend/vue/img/64.png" alt="64" tabindex="0" loading="lazy"><figcaption>64</figcaption></figure>
<h3 id="默认值" tabindex="-1"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h3>
<figure><img src="@source/frontend/vue/img/65.png" alt="65" tabindex="0" loading="lazy"><figcaption>65</figcaption></figure>
<p>如果有多个值，同时放入到组件进行替换时，一起作为替换元素</p>
<figure><img src="@source/frontend/vue/img/66.png" alt="66" tabindex="0" loading="lazy"><figcaption>66</figcaption></figure>
<h3 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h3>
<p><s>通过给slot添加name，给添加的标签加上slot可以任意修改插槽</s></p>
<figure><img src="@source/frontend/vue/img/67.png" alt="67" tabindex="0" loading="lazy"><figcaption>67</figcaption></figure>
<p>自 2.6.0 起有所更新。已废弃的使用 slot 的语法（上图），改用 v-slot 指令：</p>
<figure><img src="@source/frontend/vue/img/68.png" alt="68" tabindex="0" loading="lazy"><figcaption>68</figcaption></figure>
<h3 id="编译作用域" tabindex="-1"><a class="header-anchor" href="#编译作用域" aria-hidden="true">#</a> 编译作用域</h3>
<p>父组件模板的所有东西都会在父级作用域内编译；子组件模板的所有东西都会在子级作用域内编译</p>
<figure><img src="@source/frontend/vue/img/69.jpg" alt="69" tabindex="0" loading="lazy"><figcaption>69</figcaption></figure>
<h3 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h3>
<p><s>父组件替换插槽的标签，但是内容由子组件来提供</s></p>
<figure><img src="@source/frontend/vue/img/70.png" alt="70" tabindex="0" loading="lazy"><figcaption>70</figcaption></figure>
<p>自 2.6.0 起有所更新。已废弃的使用 <strong>slot-scope</strong> 的语法，改用</p>
<figure><img src="@source/frontend/vue/img/71.png" alt="71" tabindex="0" loading="lazy"><figcaption>71</figcaption></figure>
</div></template>


