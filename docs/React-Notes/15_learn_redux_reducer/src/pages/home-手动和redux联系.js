import React, {PureComponent} from 'react';

import store from "../store";

import {
    addAction,
} from '../store/actionCreators'

class Home extends PureComponent {
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
                <h1>Home</h1>
                <h2>当前计数：{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
                <button onClick={e => this.addNumber(5)}>+5</button>
            </div>
        );
    }

    increment() {
        store.dispatch(addAction(1))
    }

    addNumber(num) {
        store.dispatch(addAction(num))
    }
}

export default Home;