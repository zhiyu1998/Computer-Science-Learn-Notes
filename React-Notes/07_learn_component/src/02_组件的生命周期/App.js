import React, { Component } from 'react'

class Cpn extends Component {
    render() {
        return (
            <div>
                <h2>我是CPN组件</h2>
            </div>
        )
    }

    componentWillUnmount() {
        console.log("执行了组件的componentWillUnmount函数 ");
    }
}

export default class extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            isShow: true,
        }
        console.log("执行了组件的constructor函数 ");
    }

    render() {
        console.log("执行了组件的render函数 ");

        return (
            <div>
                我是App——组件生命周期类
                <h2>当前计数：{this.state.count}</h2>
                <button onClick={() => this.increment()}>+1</button>
                <hr></hr>
                <button onClick={e => this.changeCpnShow()}>切换</button>
                {this.state.isShow && <Cpn />}
            </div>
        )
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

    changeCpnShow() {
        this.setState({isShow: !this.state.isShow})
    }

    componentDidMount() {
        console.log("执行了组件的componentDidMount函数 ");
    }


    componentDidUpdate() {
        console.log("执行了组件的componentDidUpdate函数 ");
    }
}
