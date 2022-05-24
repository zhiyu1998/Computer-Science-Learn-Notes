import React, { PureComponent, Fragment } from 'react';

class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            // 如果不希望使用div可以使用fragment代替
            // <Fragment>
            //     <h2>当前计数: {this.state.counter}</h2>
            //     <button onClick={e=> this.increment()}>+1</button>
            // </Fragment>

            // fragment短语法：不能添加任何属性
            <>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e=> this.increment()}>+1</button>
            </>
        );
    }

    increment() {
        this.setState({counter: this.state.counter + 1});
    }
}

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <Counter />
            </div>
        );
    }
}

export default App ;