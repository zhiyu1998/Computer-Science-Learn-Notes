import React, {Component} from 'react';


// 创建Context对象
const UserContext = React.createContext({
    nickname: 'nan',
    level: -1
})

const ThemeContext = React.createContext({
    color: 'black'
})

function ProfileHeader() {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <ThemeContext.Consumer >
                            {
                                theme => {
                                    return (
                                        <div>
                                            <h2 style={{color : theme.color}}>用户昵称：{value.nickname}</h2>
                                            <h2>用户等级：{value.level}</h2>
                                            <h2>颜色： {theme.color}</h2>
                                        </div>
                                    )
                                }
                            }
                        </ThemeContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    )
}


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

        /**
         * setState 一定是异步吗？ 在下列情况下可能是同步
         * 1、 在setTimeout中更新
         * 2、 原始DOM事件：document.getElementById("btn").addEventListener('click', () => {})
         * @type {{level: number, nickname: string}}
         */
        this.state = {
            nickname: 'zhiyu',
            level: 20,
        }
    }

    render() {
        return (
            <div>
                <UserContext.Provider value={this.state}>
                    <ThemeContext.Provider value={{color: 'red'}}>
                        <Profile/>
                    </ThemeContext.Provider>
                </UserContext.Provider>
            </div>
        );
    }
}

export default App