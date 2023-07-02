import{_ as n,W as s,X as i,$ as e}from"./framework-c8643d23.js";const l="/Computer-Science-Learn-Notes/assets/image-20220414083224689-796ee491.webp",a="/Computer-Science-Learn-Notes/assets/image-20220605230344345-96a1db91.webp",t={},d=e('<h1 id="react笔记" tabindex="-1"><a class="header-anchor" href="#react笔记" aria-hidden="true">#</a> React笔记</h1><h2 id="安装脚手架命令" tabindex="-1"><a class="header-anchor" href="#安装脚手架命令" aria-hidden="true">#</a> 安装脚手架命令</h2><h3 id="npx" tabindex="-1"><a class="header-anchor" href="#npx" aria-hidden="true">#</a> npx</h3><blockquote><p>npx create-react-app my-app</p></blockquote><p>(npx comes with npm 5.2+ and higher, see instructions for older npm versions)</p><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3><blockquote><p>npm init react-app my-app</p></blockquote><p>npm init <code>&lt;initializer&gt;</code> is available in npm 6+</p><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> Yarn</h3><blockquote><p>yarn create react-app my-app</p></blockquote><p>yarn create is available in Yarn 0.25+</p><figure><img src="'+l+`" alt="image-20220414083224689" tabindex="0" loading="lazy"><figcaption>image-20220414083224689</figcaption></figure><h2 id="原生开发" tabindex="-1"><a class="header-anchor" href="#原生开发" aria-hidden="true">#</a> 原生开发</h2><p>JS改变某个标签的文字</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token comment">// 原生开发 -- 命令式编程</span>
   <span class="token keyword">let</span> message <span class="token operator">=</span>  <span class="token string">&quot;Hello World&quot;</span>
   <span class="token keyword">const</span> titleEL <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
   titleEL<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> message

   <span class="token keyword">const</span> btnEL <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&quot;btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
   btnEL<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;click&quot;</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;按钮发送了点击&quot;</span><span class="token punctuation">)</span>
     message <span class="token operator">=</span> <span class="token string">&#39;Hello React&#39;</span>
     titleEL<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> message
   <span class="token punctuation">}</span><span class="token punctuation">)</span>

   <span class="token comment">// React -- 声明式编程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="react开发" tabindex="-1"><a class="header-anchor" href="#react开发" aria-hidden="true">#</a> React开发</h3><h4 id="react开发需要以来的库" tabindex="-1"><a class="header-anchor" href="#react开发需要以来的库" aria-hidden="true">#</a> React开发需要以来的库</h4><ul><li>react：核心文件</li><li>react-dom：React渲染不同平台</li><li>babel：jsx转换为React代码</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>   <span class="token comment">&lt;!-- 加载 React。--&gt;</span>
  <span class="token comment">&lt;!-- 注意: 部署时，将 &quot;development.js&quot; 替换为 &quot;production.min.js&quot;。--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@17/umd/react.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@17/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/babel-standalone@6/babel.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重构原生代码" tabindex="-1"><a class="header-anchor" href="#重构原生代码" aria-hidden="true">#</a> 重构原生代码</h4><p>重构上述更改文字的代码，使用React</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>let message = &quot;Hello World&quot;;

function btnClick() {
    message = &#39;Hello React&#39;
    // 与vue 不同，在React变量改变不会渲染，要手动渲染
    render()
}

function render() {
    // &lt;h2&gt;&lt;/h2&gt;  JSX代码
    // JSX特点：多个标签最外层（根）只能有一个标签
    ReactDOM.render(
        &lt;div&gt;
            &lt;h2&gt;{message}&lt;/h2&gt;
            &lt;button onClick={btnClick}&gt;改变文本&lt;/button&gt;
        &lt;/div&gt;, 
        document.getElementById(&#39;app&#39;)
    )
}

render()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次重构React代码，使其标准化：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//封装APP
class App extends React.Component {
    constructor() {
        super()
        // this.message = &#39;Hello World&#39;
        this.state = {
            message: &#39;Hello World&#39;
        }
    }

    render() {
        return (
            &lt;div&gt;
                &lt;h2&gt;{this.state.message}&lt;/h2&gt;
                &lt;button onClick={this.btnClick.bind(this)}&gt;改变文本&lt;/button&gt;
            &lt;/div&gt;
        )
    }

    btnClick() {
        console.log(this);
        // this.state.message = &#39;Hello React&#39;
        // 不能手动调用this.render()
        // 也不能使用this.state.message
        // 要使用setState传递对象
        this.setState({
            message: &#39;Hello React&#39;
        })
    }
}

ReactDOM.render(&lt;App/&gt;, document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3><ol><li>集成时，React.Component中的‘C’应该大写</li><li>construct中的state带this</li><li>render中需要渲染的变量除了带上单胡须&#39;{}&#39;外，还要带上this.state.变量</li><li>注意ReactDOM.render中的render不要拼写错误</li></ol><h2 id="jsx语法-语法补充" tabindex="-1"><a class="header-anchor" href="#jsx语法-语法补充" aria-hidden="true">#</a> JSX语法 &amp; 语法补充</h2><h3 id="类的语法补充" tabindex="-1"><a class="header-anchor" href="#类的语法补充" aria-hidden="true">#</a> 类的语法补充</h3><p>ES5创建一个类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES5中定义类</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token comment">// 类中定义函数</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">&quot;running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6创建一个类</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ES6中通过class创建类</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构造方法, 方法名固定</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token comment">// 定义方法</span>
    <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token string">&#39;running&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;why&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6中继承父类：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>

    <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;running&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sno</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 子类必须初始化父类</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sno <span class="token operator">=</span> sno
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;Student:why&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">,</span> stu<span class="token punctuation">.</span>age<span class="token punctuation">,</span> stu<span class="token punctuation">.</span>sno<span class="token punctuation">)</span>
stu<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例练习-实践for循环" tabindex="-1"><a class="header-anchor" href="#案例练习-实践for循环" aria-hidden="true">#</a> 案例练习 -- 实践for循环</h3><ul><li>方法一是利用for (element of array)</li><li>方法二是用ES6语法中的map实现。注：外边是一个大括号</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class App extends React.Component{
    constructor() {
        super()
        this.state = {
            message: &#39;Hello World&#39;,
            movies: [&#39;大话西游&#39;, &#39;盗梦空间&#39;, &#39;星际穿越&#39;, &#39;流浪地球&#39;]
        }
    }

    render() {
        const liArray = []
        for (let movie of this.state.movies) {
            liArray.push(&lt;li&gt;{movie}&lt;/li&gt;)
        }

        return(
            &lt;div&gt;
                &lt;h2&gt;电影列表1&lt;/h2&gt;
                &lt;ul&gt;
                    {liArray}
                &lt;/ul&gt;

                &lt;h2&gt;电影列表2&lt;/h2&gt;
                &lt;ul&gt;
                    {
                        this.state.movies.map(one =&gt; {
                            return &lt;li&gt;{one}&lt;/li&gt;
                        })
                    }
                &lt;/ul&gt;
            &lt;/div&gt;
        )
    }
}

ReactDOM.render(&lt;App/&gt;, document.getElementById(&#39;app&#39;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例联系-this的运用" tabindex="-1"><a class="header-anchor" href="#案例联系-this的运用" aria-hidden="true">#</a> 案例联系 -- this的运用</h3><ul><li>根据目前所学的方法，如果方法中要使用this，必须bind(this)，不然就是undefined</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            &lt;div&gt;
                &lt;h2&gt;当前计数：{this.state.counter}&lt;/h2&gt;
                {/* 绑定this，方便方法使用this */}
                &lt;button onClick={this.increment.bind(this)}&gt;+&lt;/button&gt;
                &lt;button onClick={this.decrement.bind(this)}&gt;-&lt;/button&gt;
            &lt;/div&gt;
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx语法" tabindex="-1"><a class="header-anchor" href="#jsx语法" aria-hidden="true">#</a> JSX语法</h3><blockquote><p>React 使用 JSX 来替代常规的 JavaScript。</p></blockquote><blockquote><p>JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。</p></blockquote><blockquote><p>与Vue不同，Vue使用的是模板语法（v-if、v-for）</p></blockquote><h4 id="书写规范" tabindex="-1"><a class="header-anchor" href="#书写规范" aria-hidden="true">#</a> 书写规范</h4><ol><li><p>只能有一个根元素</p></li><li><p>为了方便阅读，在render函数中的return后加入&#39;()&#39;</p></li><li><p>JSX可以是单标签，也可以双标签</p><ol><li>单标签尾巴必须是&#39;/&gt;&#39; ，如下所示</li></ol></li></ol><h4 id="注释书写" tabindex="-1"><a class="header-anchor" href="#注释书写" aria-hidden="true">#</a> 注释书写</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>render() {
    return (
        &lt;div&gt;
            {/* 我是一个注释 */}
            Hello World
        &lt;/div&gt;
    )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌入变量-数据" tabindex="-1"><a class="header-anchor" href="#嵌入变量-数据" aria-hidden="true">#</a> 嵌入变量/数据</h4><p>纲要：</p><ul><li>{}中可以显示的内容</li><li>{}中不可以显示的内容。为什么？如果非要显示如何使用？</li><li>JSX对象能用{}显示吗？</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class App extends React.Component {
    constructor() {
        super()
        this.state = {
            // 在{}中可以正常显示的内容
            name: &#39;rzy&#39;,
            age: 18,
            names: [&#39;abc&#39;, &#39;cba&#39;, &#39;nba&#39;],

            // 在{}不能显示的内容/忽略
            // 为什么？真实渲染时经常会作判断，例如：三元运算符，判断为null就不会显示，不然容易出BUG
            // 如果需要渲染出来
            test1: null,
            test2: undefined,
            test3: false,

            // 对象不能作为jsx的子类
            friend: {
                name: &#39;why&#39;,
                age: 40
            }
        }
    }

    render() {
        return (
            &lt;div&gt;
                &lt;h2&gt;{this.state.name}&lt;/h2&gt;
                &lt;h2&gt;{this.state.age}&lt;/h2&gt;
                &lt;h2&gt;{this.state.names}&lt;/h2&gt;


                &lt;h2&gt;{this.state.test1}&lt;/h2&gt;
                &lt;h2&gt;{this.state.test2}&lt;/h2&gt;
                &lt;h2&gt;{this.state.test3}&lt;/h2&gt;

                {/* 硬显示 */}
                &lt;h2&gt;{this.state.test1+&#39;&#39;}&lt;/h2&gt;
                &lt;h2&gt;{this.state.test2+&#39;&#39;}&lt;/h2&gt;
                &lt;h2&gt;{this.state.test3.toString()}&lt;/h2&gt;

                {/* 对象作为子类 -- 错*/}
                {/* &lt;h2&gt;{this.state.friend}&lt;/h2&gt;*/}
            &lt;/div&gt;
        )
    }
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="嵌入表达式" tabindex="-1"><a class="header-anchor" href="#嵌入表达式" aria-hidden="true">#</a> 嵌入表达式</h4><p>提纲：</p><ul><li>运算符表达式</li><li>三元运算符</li><li>函数调用</li><li>对象解构</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: &#39;kobe&#39;,
            lastName: &#39;bryant&#39;,
            isLogin: true
        }
    }

    render() {
        // 对象的解构
        const { firstName, lastName, isLogin } = this.state

        return (
            &lt;div&gt;
                {/* 运算符表达式 */}
                &lt;h2&gt;{firstName + &#39; &#39; + lastName}&lt;/h2&gt;
                &lt;h2&gt;{20 * 50}&lt;/h2&gt;

                {/* 三元运算符 */}
                &lt;h2&gt;{isLogin ? &#39;欢迎回来&#39; : &#39;请先登录&#39;}&lt;/h2&gt;

                {/* 函数调用 */}
                &lt;h2&gt;{this.getFullName()}&lt;/h2&gt;
            &lt;/div&gt;
        )
    }

    // 区别于setState，因为setState在类内，需要bind，getFullName不在父类中，自己定义所以不用bind
    getFullName() {
        return this.state.firstName + &quot; &quot; + this.state.lastName
    }
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="绑定属性" tabindex="-1"><a class="header-anchor" href="#绑定属性" aria-hidden="true">#</a> 绑定属性</h4><p>纲要：</p><ul><li>绑定普通属性</li><li>绑定class</li><li>绑定style</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>function getSizeImage(imgUrl, size) {
    return imgUrl + \`?param=\${size}y\${size}\`
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            title: &#39;标题&#39;,
            imgUrl: &#39;http://p4.music.126.net/-8A5EGZ8hz3byulhycfk2Q==/109951165108319236.webp&#39;,
            link: &#39;http://www.baidu.com&#39;,
            active: true
        }
    }

    render() {
        const {title, imgUrl, link, active} = this.state

        return (
            &lt;div&gt;
                {/* 绑定普通属性 */}
                &lt;h2 title={title}&gt;我是标题&lt;/h2&gt;
                &lt;img src={getSizeImage(imgUrl, 140)} alt=&quot;&quot; /&gt;
                &lt;a href={link} target=&quot;_blank&quot;&gt;百度一下&lt;/a&gt;
                {/* 绑定class */}
                &lt;div className=&quot;box&quot;&gt;我是div元素&lt;/div&gt;
                &lt;div className={&quot;box &quot; + (active ? &#39;active&#39; : &#39;&#39;)}&gt;我是div元素&lt;/div&gt;
                &lt;label htmlFor=&quot;&quot;&gt;&lt;/label&gt;
                {/* 绑定style */}
                &lt;div style={{color: &#39;red&#39;, fontSize: &#39;50px&#39;}}&gt;我是div，绑定style属性&lt;/div&gt;
            &lt;/div&gt;
        )
    }
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="绑定事件" tabindex="-1"><a class="header-anchor" href="#绑定事件" aria-hidden="true">#</a> 绑定事件</h4><p>纲要：</p><ul><li>绑定事件不像html一样onclick，使用驼峰：onClick</li><li>绑定this的<strong>四种</strong>方案</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: &#39;按钮发送了点击！！&#39;,
            counter: 100
        },
            this.btnClick3 = this.btnClick3.bind(this) // 方案2：构造器绑定
    }

    render() {
        return (
            &lt;div&gt;
                &lt;button onClick={this.btnClick}&gt;按钮1&lt;/button&gt;
                {/* 方案1：通过bind绑定this */}
                &lt;button onClick={this.btnClick2.bind(this)}&gt;按钮2&lt;/button&gt;
                {/* 方案2：构造器绑定 */}
                &lt;button onClick={this.btnClick3}&gt;按钮3&lt;/button&gt;
                {/* 方案3：定义函数时，使用箭头函数 */}
                &lt;button onClick={this.btnClick4}&gt;按钮4&lt;/button&gt;
                {/* 方案4（推荐）：直接传入一个箭头函数，在箭头函数中直接传入需要执行的函数*/}
                &lt;button onClick={() =&gt; { this.btnClick5() }}&gt;按钮5&lt;/button&gt;
            &lt;/div&gt;
        )
    }

    btnClick() {
        console.log(&#39;按钮发送了点击！！&#39;);
    }

    btnClick2() {
        console.log(this.state.message);
    }

    btnClick3() {
        console.log(this.state.message);
    }

    // 箭头函数中永不绑定this，ES6中给对象增加属性的方式：class.field
    btnClick4 = () =&gt; {
        // 如果使用this这里不存在就会往上层找
        console.log(this.state.counter);
    }

    btnClick5() {
        console.log(this.state.counter);
    }
}

ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h4><p>提纲：</p><ul><li>传递event</li><li>传递函数参数，使用箭头函数</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;

    &lt;!-- React开发依赖 --&gt;
    &lt;script src=&quot;../js/react.development.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;../js/react-dom.development.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 生产环境中不建议使用 --&gt;
    &lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;

    &lt;script type=&quot;text/babel&quot;&gt;
      class App extends React.Component {
        constructor() {
          super()

          this.state = {
            movies: [&#39;大话西游&#39;, &#39;海王&#39;, &#39;流浪地球&#39;, &#39;盗梦空间&#39;]
          }
        }

        render() {
          return (
            &lt;div&gt;
              &lt;button onClick={ (e)=&gt;{ this.btnClick(e) } }&gt;按钮&lt;/button&gt;
              &lt;ul&gt;
                {
                  this.state.movies.map((movie, index, arr)=&gt; {
                    return &lt;li onClick={(e) =&gt; {this.liClick(movie, index, e)}}&gt;{movie}&lt;/li&gt;
                  })
                }
              &lt;/ul&gt;
            &lt;/div&gt;
          )
        }

        btnClick(event) {
          console.log(event);
        }

        liClick(movie, index, e) {
          console.log(movie + &#39;: &#39; + index);
          console.log(e);
        }

      }

      ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h4><p>Part one：</p><ul><li><em>逻辑判断</em></li><li><em>三元运算符</em></li><li><em>逻辑与</em></li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;

    &lt;!-- React开发依赖 --&gt;
    &lt;script src=&quot;../js/react.development.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;../js/react-dom.development.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 生产环境中不建议使用 --&gt;
    &lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;

    &lt;script type=&quot;text/babel&quot;&gt;
      class App extends React.Component {
        constructor() {
          super()
          this.state = {
            isLogin: true
          }
        }

        render() {
          {/* 对象的解构 */}
          const {isLogin} = this.state

          {/* 逻辑判断 */}
          let welcome = null
          if (isLogin == true) {
            welcome = &lt;h2&gt;欢迎回来&lt;/h2&gt;
          } else {
            welcome = &lt;h2&gt;请先登录！&lt;/h2&gt;
          }

          return (
            &lt;div&gt;
              {/* 三元运算符 */}
              {welcome}
              &lt;button onClick={()=&gt;{this.loginClick()}}&gt;{isLogin ? &#39;退出&#39; : &#39;登录&#39;}&lt;/button&gt;

              &lt;hr/&gt;

              {/* JS中最优方案：逻辑与 */}
              &lt;h2&gt;{isLogin &amp;&amp; &#39;你哈啊,zhiyu&#39;}&lt;/h2&gt;
            &lt;/div&gt;
          )
        }

        loginClick() {
          this.setState({
            isLogin: !this.state.isLogin
          })
        }
      }

      ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>part two：</p><ul><li>利用<code>style={{CSS属性名：属性值}}</code>进行动态条件判断</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;

    &lt;!-- React开发依赖 --&gt;
    &lt;script src=&quot;../js/react.development.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;../js/react-dom.development.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 生产环境中不建议使用 --&gt;
    &lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;

    &lt;script type=&quot;text/babel&quot;&gt;
      class App extends React.Component {
        constructor() {
          super()
          this.state = {
            isLogin: true
          }
        }

        render() {
          const { isLogin } = this.state

          return (
            &lt;div&gt;
              &lt;button onClick={e =&gt; this.loginClick()}&gt;{isLogin ? &#39;退出&#39; : &#39;登录&#39;}&lt;/button&gt;
              &lt;h2 style={{display: isLogin ? &#39;block&#39; : &#39;none&#39;}}&gt;你好啊，zhiyu&lt;/h2&gt;
            &lt;/div&gt;
          )
        }

        loginClick() {
          this.setState({
            isLogin: !this.state.isLogin
          }) 
        }
      }

      ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h4><ul><li>列表遍历</li><li>列表过滤</li><li>列表截取</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Document&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;

    &lt;!-- React开发依赖 --&gt;
    &lt;script src=&quot;../js/react.development.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;../js/react-dom.development.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 生产环境中不建议使用 --&gt;
    &lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;

    &lt;script type=&quot;text/babel&quot;&gt;
      class App extends React.Component {
        constructor() {
          super()
          this.state = {
            names: [&#39;javascript&#39;, &#39;java&#39;, &#39;C#&#39;, &#39;Cpp&#39;, &#39;Python&#39;],
            numbers: [100, 120, 123, 501, 201, 520, 310]
          }
        }

        render() {
          const {names, numbers} = this.state

          return (
            &lt;div&gt;
              &lt;ul&gt;
                {
                  names.map((item)=&gt; {
                    return &lt;li&gt;{item}&lt;/li&gt;
                  })
                }
              &lt;/ul&gt;
              &lt;hr/&gt;
              &lt;p&gt;数字列表：过滤&lt;/p&gt;
              &lt;ul&gt;
                {
                  numbers.filter(number =&gt; number &gt;= 50)
                  .map(item =&gt; &lt;li&gt;{item}&lt;/li&gt;)
                }
              &lt;/ul&gt;
              &lt;hr/&gt;
              &lt;p&gt;数字列表：截取&lt;/p&gt;
              &lt;ul&gt;
                {
                  numbers.slice(0, 4).map(item =&gt; &lt;li&gt;{item}&lt;/li&gt;)
                }
              &lt;/ul&gt;
            &lt;/div&gt;
          )
        }
      }

      ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-书籍计算" tabindex="-1"><a class="header-anchor" href="#案例-书籍计算" aria-hidden="true">#</a> 案例--书籍计算</h3><p>综合应用以上JSX语法：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;书籍内容填充&lt;/title&gt;
    &lt;style&gt;
      table {
        border: 1px solid #000;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #000;
        padding: 10px 10px;
        text-align: center;
      }

      th {
        background-color: #bdc3c7;
      }

      .count {
        margin: 5px
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;&lt;/div&gt;

    &lt;!-- React开发依赖 --&gt;
    &lt;script src=&quot;../js/react.development.js&quot;&gt;&lt;/script&gt;
    &lt;script src=&quot;../js/react-dom.development.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 生产环境中不建议使用 --&gt;
    &lt;script src=&quot;../js/babel.min.js&quot;&gt;&lt;/script&gt;

    &lt;script src=&quot;./formatUtil.js&quot;&gt;&lt;/script&gt;
    &lt;script type=&quot;text/babel&quot;&gt;
      class App extends React.Component {
        constructor() {
          super()
          this.state = {
            books: [
              {
                id: 1,
                name: &#39;《算法导论》&#39;,
                date: &#39;2006-9&#39;,
                price: 85.00,
                count: 1
              },
              {
                id: 2,
                name: &#39;《黑豹红狼》&#39;,
                date: &#39;2021-5&#39;,
                price: 57.80,
                count: 1
              },
              {
                id: 3,
                name: &#39;《乡下人》&#39;,
                date: &#39;2021-5&#39;,
                price: 66.00,
                count: 1
              },
              {
                id: 4,
                name: &#39;《切尔诺贝利的午夜》&#39;,
                date: &#39;2021-3&#39;,
                price: 62.40,
                count: 1
              },
              {
                id: 5,
                name: &#39;《认识世界：古代与中世纪哲学》&#39;,
                date: &#39;2021-4&#39;,
                price: 71.90,
                count: 1
              }
            ]
          }
        }

        render() {
          return this.state.books.length ? this.renderBooks() : this.renderEmptyTips();
        }

        getTotalPrice() {
          {/*let totalPrice = 0
          for (let item of this.state.books) {
            totalPrice += item.price * item.count
          }
        return formatPrice(totalPrice)*/}
          const totalPrice = this.state.books.reduce((pre, item)=&gt;{
            return pre + item.price * item.count;
          }, 0)
          return formatPrice(totalPrice);
        }

        removeBook(index) {
          this.setState({
            books: this.state.books.filter((item, indey) =&gt; index != indey)
          })
        }

        changeBookCount(index, count) {
          let duplicateOfBooks = [...this.state.books]
          console.log(duplicateOfBooks[index].count);
          if (duplicateOfBooks[index].count + count &gt;= 0) {
            duplicateOfBooks[index].count += count
            this.setState({
              books: duplicateOfBooks
            })
          }
        }

        renderBooks() {
          const {books} = this.state
          return (
            &lt;div&gt;
              &lt;table&gt;
                &lt;thead&gt;
                  &lt;th&gt;&lt;/th&gt;
                  &lt;th&gt;书籍名称&lt;/th&gt;
                  &lt;th&gt;出版日期&lt;/th&gt;
                  &lt;th&gt;价格&lt;/th&gt;
                  &lt;th&gt;购买数量&lt;/th&gt;
                  &lt;th&gt;操作&lt;/th&gt;
                &lt;/thead&gt;
                &lt;tbody&gt;
                  {
                    books.map((item, index) =&gt; {
                      return (
                        &lt;tr&gt;
                          &lt;td&gt;{index+1}&lt;/td&gt;
                          &lt;td&gt;{item.name}&lt;/td&gt;
                          &lt;td&gt;{item.date}&lt;/td&gt;
                          &lt;td&gt;{formatPrice(item.price)}&lt;/td&gt;
                          &lt;td&gt;
                            &lt;button onClick={e =&gt; this.changeBookCount(index, -1)}&gt;-&lt;/button&gt;
                            &lt;span className=&#39;count&#39;&gt;{item.count}&lt;/span&gt;
                            &lt;button onClick={e =&gt; this.changeBookCount(index, +1)}&gt;+&lt;/button&gt;
                          &lt;/td&gt;
                          &lt;td&gt;&lt;button onClick={() =&gt; this.removeBook(index)}&gt;移除&lt;/button&gt;&lt;/td&gt;
                        &lt;/tr&gt;
                      )
                    })
                  }
                &lt;/tbody&gt;
              &lt;/table&gt;
              &lt;h2&gt;总价格：{this.getTotalPrice()}&lt;/h2&gt;
            &lt;/div&gt;
          )
        }

        renderEmptyTips() {
          return (
            &lt;h2&gt;购物车为空~！&lt;/h2&gt;
          )
        }
      }

      ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;app&#39;))
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react组件化开发" tabindex="-1"><a class="header-anchor" href="#react组件化开发" aria-hidden="true">#</a> React组件化开发</h2><h3 id="render函数能返回什么类型" tabindex="-1"><a class="header-anchor" href="#render函数能返回什么类型" aria-hidden="true">#</a> render函数能返回什么类型</h3><ul><li><p>React元素</p><ul><li>JSX创建</li></ul></li><li><p>数组或fragments</p></li><li><p>Protals</p></li><li><p>字符串或数值类型</p></li><li><p>布尔类型或null</p></li></ul><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3><p>常用的生命周期：</p><ul><li><p>Constructor</p><ul><li>通过给this.state复制对象来初始化内部的state</li><li>为事件绑定实例（this）</li></ul></li><li><p>componentDidMount</p><ul><li>依赖于DOM的操作</li><li>（推荐）发送网络请求</li><li>添加订阅</li></ul></li><li><p>componentDidUpdate</p><ul><li>组件更新</li><li>网络请求</li></ul></li><li><p>componentWillUnmount</p><ul><li>清除操作</li></ul></li></ul><p>整个生命周期：</p><figure><img src="`+a+'" alt="image-20220605230344345" tabindex="0" loading="lazy"><figcaption>image-20220605230344345</figcaption></figure><p>具体可以参考：<code>https://www.runoob.com/react/react-component-life-cycle.html</code></p><p>or <code>https://zh-hans.reactjs.org/docs/state-and-lifecycle.html</code></p>',91),c=[d];function v(u,r){return s(),i("div",null,c)}const p=n(t,[["render",v],["__file","react.html.vue"]]);export{p as default};
