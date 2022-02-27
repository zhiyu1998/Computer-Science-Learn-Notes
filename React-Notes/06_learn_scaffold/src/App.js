// import React from 'react';
// const {Component} = React;

import React, {Component} from "react"

export default class App extends Component {
    constructor(props) {
        super()
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <h2>
                    当前计数：{this.state.count}
                </h2>
            </div>
        )
    }
}