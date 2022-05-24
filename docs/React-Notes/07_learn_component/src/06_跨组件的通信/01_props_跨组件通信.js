import React, {Component} from 'react';

function ProfileHeader(props) {
    return (
        <div>
            <h2>用户昵称：{props.nickname}</h2>
            <h2>用户等级：{props.level}</h2>
        </div>
    )
}

function Profile(props) {
    return (
        <div>
            {/*<ProfileHeader nickname={props.nickname} level={props.level} />*/}
            {/*======================属性展开======================*/}
            <ProfileHeader {...props}/>
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
        // const {nickname, level} = this.state

        return (
            <div>
                <Profile {...this.state} />
            </div>
        );
    }
}

export default App