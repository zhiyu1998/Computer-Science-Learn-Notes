import React, {PureComponent, StrictMode} from 'react';

/**
 * 严格模式检测什么？
 * 1. 识别不安全的生命周期
 * 2. 使用过时的ref api
 * 3. 检查意外的副作用
    * 这个组件的constructor会被调用两次;
    * 这是严格模式下故意进行的操作,让你来查看在这里写的- -些逻辑代码被调用多次时,是否会产生- -些副作用;
    * 在生产环境中,是不会被调用两次的;
 * 4. 使用废弃的findDOMNode方法
 * 5. 检测过时的context API
 */
class Home extends PureComponent {
    constructor(props) {
        super(props);
        console.log("home constructor")
    }

    // constructor(props) {
    //     super(props);
    //     console.log("home constructor")
    // }

    // componentWillMount() {
    //     console.log("Index componentWillMount")
    // }

    render() {
        return (
            <div ref='title'>
                Home
            </div>
        );
    }
}

class Profile extends PureComponent {
    constructor(props) {
        super(props);
        console.log("profile constructor")
    }

    // UNSAFE_componentWillMount() {
    //     console.log("Index componentWillMount")
    // }

    render() {
        return (
            <div ref='title'>
                Profile
            </div>
        );
    }
}

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <StrictMode>
                    <Home />
                </StrictMode>
                <Profile />
            </div>
        );
    }
}

export default App;