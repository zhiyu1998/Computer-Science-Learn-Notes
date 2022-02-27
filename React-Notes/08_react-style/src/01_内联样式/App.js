import React, {PureComponent} from 'react';

/**
 ##  内联样式的优点:
 * 1.内联样式，样式之间不会有冲突
 * 2.可以动态获取当前state中的状态
 ## 内联样式的缺点:
 * 1.写法上都需要使用驼峰标识
 * 2.某些样式没有提示
 * 3.大量的样式，代码混乱
 * 4.某些样式无法编写(此如伪类/伪元素)
 */
class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            color: 'purple',
        }
    }

    render() {
        const pStyle = {
           color: this.state.color,
           textDecoration: 'underline'
        }

        return (
            <div>
                <h2 style={{fontSize:"50px", color:"red"}}>我是标题</h2>
                <p style={pStyle}>我是文字描述</p>
            </div>
        );
    }
}

export default App;