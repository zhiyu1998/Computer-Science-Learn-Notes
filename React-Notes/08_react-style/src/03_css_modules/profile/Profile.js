import React, {PureComponent} from 'react';

import profileStyle from './style.module.css'

class Profile extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={profileStyle.title}>我是Profile标题</h2>
                <div>
                    <li>设置列表1</li>
                    <li>设置列表2</li>
                    <li>设置列表3</li>
                </div>
            </div>
        );
    }
}

export default Profile;