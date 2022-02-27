import React, {Component} from 'react';



// 创建Context对象
const UserContext = React.createContext({
    nickname: 'nan',
    level: -1
})

class ProfileHeader extends Component {
    render() {
        console.log(this.context)
        return (
            <div>
                <h2>用户昵称：{this.context.nickname}</h2>
                <h2>用户等级：{this.context.level}</h2>
            </div>
        );
    }
}
// 只有这样 context才有值
ProfileHeader.contextType = UserContext

function Profile(props) {
    return (
        <div>
            <ProfileHeader/>
            <ul>
                <li>设置1</li>
                <li>设置2</li>
                <li>设置3</li>
                <li>设置4</li>
            </ul>
        </div>
    )
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: 'zhiyu',
            level: 100,
        }
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <Profile />
                </UserContext.Provider>
            </div>
        );
    }
}

export default App