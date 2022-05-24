import React, {PureComponent} from 'react';

import { EventEmitter } from 'events';

const eventBus = new EventEmitter

// 事件总线：event bus
class Home extends PureComponent {
    // 添加事件监听
    componentDidMount() {
        eventBus.addListener('sayHello', this.handleSayHelloListener)
    }

    // 删除事件监听
    componentWillUnmount() {
        eventBus.removeListener('sayHello', this.handleSayHelloListener)
    }

    handleSayHelloListener(message, num) {
        console.log(message, num)
    }

    render() {
        return (
            <div>
                Home

            </div>
        );
    }
}

class Profile extends React.PureComponent {
    render() {
        return (
            <div>
                Profile
                <button onClick={e => this.emmitEvent(e)}>Profile按钮</button>
            </div>
        );
    }

    // 发送事件
    emmitEvent() {
        eventBus.emit('sayHello', 'Hello Index', 123)
    }
}

class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        );
    }
}

export default App;