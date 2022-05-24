import React, {PureComponent, createContext} from 'react';
import PropTypes from 'prop-types';

// 创建Context
const UserContext = createContext({
    nickname: '默认',
    level: -1,
    region: '中国'
})

// 定义高阶组件
function withUser(WrappedComponent) {
    return props => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <WrappedComponent {...props} {...user}/>
                    }
                }
            </UserContext.Consumer>
        )
    }
}

class Home extends PureComponent {
    render() {
        return (
         <h2>Home: {`昵称： ${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
    );
    }
}


class About extends PureComponent {
    render() {
        return (
            <h2>About: {`昵称： ${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
        );
    }
}

class Detail extends PureComponent {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.nickname}</li>
                    <li>{this.props.level}</li>
                    <li>{this.props.region}</li>
                </ul>
            </div>
        );
    }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)
const UserDetail = withUser(Detail)

class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <UserContext.Provider value={{nickname: 'why', level: 99, region: '中国'}}>
                    <UserHome/>
                    <UserAbout/>
                    <UserDetail/>
                </UserContext.Provider>
            </div>
        );
    }
}

App.propTypes = {};

export default App;