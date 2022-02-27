import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e=> this.increment()}>+1</button>
            </div>
        );
    }

    increment() {
        this.setState({counter: this.state.counter + 1});
    }
}

class App extends
PureComponent
{
    constructor(props) {
        super(props);
        this.titleRef = createRef();
        this.titleEl = null;
        this.counterRef = createRef();
    }

    // 直接操作DOM
    // componentDidMount() {
    // }

    render()
    {
        return (
            <div>
                {/*<h2 ref="titleRef">Hello React</h2>*/}
                {/*推荐方式*/}
                <h2 ref={this.titleRef}>Hello React</h2>
                {/*第三种方式*/}
                <h2 ref={args => this.titleEl = args}>Hello React3</h2>
                <button onClick={e => this.changeText()}>改变文本</button>
                <hr/>
                {/*例子：通过APP组件改变Counter中数据*/}
                <Counter ref={this.counterRef}/>
                <br/>
                <button onClick={e => this.appBtnClick()}>app + 1</button>
            </div>
        );
    }

    /**
     * 获取REF的3种方式
     * 1. 字符串
     * 2. 【推荐】对象方式
     * 3. 函数回调
     */
    changeText() {
        // console.log(this.refs.titleRef);
        // 字符串方式（弃用）
        // this.refs.titleRef.innerHTML = 'Hello Codewhy'
        // 对象方式
        console.log(this.titleRef.current)
        this.titleRef.current.innerHTML = 'Hello Codewhy'

        // 函数方式：回调
        this.titleEl.innerHTML = 'Hello TypeScript'
    }

    appBtnClick() {
        this.counterRef.current.increment()
    }
}

App.propTypes = {};

export default App;