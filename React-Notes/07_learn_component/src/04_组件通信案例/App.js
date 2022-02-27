import React, {Component} from 'react';

import TabControl from "./TabControl";

class App extends Component {
    constructor(props) {
        super(props);

        this.titles =  ['新款', '精选', '流行']

        this.state = {
            currentTitle: '新款',

        }
    }

    render() {
        const {currentTitle} = this.state

        return (
            <div>
                <TabControl itemClick={index => this.itemClick(index)} titles={this.titles} />
                <h2>{currentTitle}</h2>
            </div>
        );
    }

    itemClick(index) {
        this.setState({
            currentTitle: this.titles[index]
        })
    }
}

export default App;