import React, {PureComponent} from 'react';

import store from "../store";
import {subAction} from "../store/actionCreators";

class About extends PureComponent {
    constructor() {
        super();

        this.state = {
            counter: store.getState().counter
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                counter: store.getState().counter
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div>
                <h1>About</h1>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.decrement()}>-1</button>
                <button onClick={e => this.subNumber(5)}>-5</button>
            </div>
        );
    }

    decrement() {
        store.dispatch(subAction(1))
    }

    subNumber(num) {
        store.dispatch(subAction(num))
    }
}

export default About;