import React, {PureComponent} from 'react';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            friends: [
                {name: "lilei", age: 20},
                {name: "lily", age: 25},
                {name: "lucy", age: 33}
            ],
        }
    }

    // [推荐] 优化函数，还有种写法就是把Component替换成PureComponent
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextContext.friends != this.state.friends) {
    //         return true
    //     }
    //     return false
    // }

    render() {
        return (
            <div>
                <h2>好友列表</h2>
                <ul>
                    {
                        this.state.friends.map((item, index) => {
                            return <li key={item.name}>
                                姓名：{item.name}
                                年龄：{item.age}
                                <button onClick={e => this.incrementAge(index)}>age + 1</button>
                            </li>
                        })
                    }
                </ul>
                <button onClick={e => this.insertFriend()}>添加数据</button>
            </div>
        );
    }

    insertFriend() {
        // 在开发中不要这样来做
        /*const newFriend = {name: "tom", age: 30}
        this.state.friends.push(newFriend)

        this.setState({
            friends: this.state.friends
        })*/

        // 推荐做法
        // ES6 展开运算符 [...array]
        const newFriend = [...this.state.friends] // 区别上述的直接赋值，这里会创建一块内存空间
        newFriend.push({name: "tom", age: 20})
        this.setState({
            friends: newFriend
        })
    }

    incrementAge(index) {
        const newFriend = [...this.state.friends]
        newFriend[index].age += 1
        this.setState({
            friends: newFriend
        })
    }
}

export default App;