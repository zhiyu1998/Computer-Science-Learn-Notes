import React, { Component } from 'react'

class ChildCpn extends Component {
    // 不去使用这个也是可以的
    // this.props = props 在 constructor 里面不写也是可以的，在render函数、componentWillMount中也可以使用this.props
    /*constructor(props) {
        super(props);

        this.props = props
    }*/


    render() {
        const {name, age, height} = this.props;

        return (
            <div>
                <h2>子组件展示数据： {name + " " + age + " " + height}</h2>
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name='why' age='18' height='1.88' />
                <ChildCpn name='kobe' age='40' height='1.98' />
            </div>
        )
    }
}
