import React, {Component} from 'react';

class CounterButton extends Component {
    render() {
        const {increment} = this.props
        return (
            <div>
                <button onClick={increment}>+</button>
            </div>
        );
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数： {this.state.counter}</h2>
                {/*方法一*/}
                {/*<CounterButton increment={this.increment.bind(this)}/> */}
                {/*方法二*/}
                <CounterButton increment={e => this.increment()}/>
            </div>
        );
    }

    increment() {
        this.setState({counter: this.state.counter + 1});
    }
}

export default App;