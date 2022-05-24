import React, {PureComponent, createRef, forwardRef} from 'react';
import PropTypes from 'prop-types';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

// 原函数
// function Index(props) {
//     console.log(props.name)
//     return <p ref={props.ref}>Index</p>
// }

// 使用高阶函数进行转发：例如profile是别人已经写好的了，要使用ref就需要进行
// 改进：使用forwardRef
// hooks可以直接使用useRef
const Profile = forwardRef(function(props, ref) {
    return <p ref={ref}>Profile</p>
})

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = createRef()
        this.homeRef = createRef()
        // 函数式组件不能有ref
        this.profileRef = createRef()
    }

    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>Hello World</h2>
                <Home ref={this.homeRef}/>
                <Profile ref={this.profileRef}/>
                <button onClick={e => this.printRef()}>打印Ref</button>
            </div>
        );
    }

    printRef() {
        console.log(this.titleRef.current)
        console.log(this.homeRef.current)
        console.log(this.profileRef.current)
    }
}

App.propTypes = {};

export default App;