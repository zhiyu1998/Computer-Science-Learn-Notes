import React, {PureComponent} from 'react';

import Home from "../home/Home";
import Profile from "../profile/Profile";

/**
 * 此处面临的难题就是：在Home组件中编写CSS样式，如果类名相同会导致另外一个层叠样式
 * 解决方案：通过最外层的div加入类名来避免层叠。 如： home .title {}
 */
class Index extends PureComponent {
    render() {
        return (
            <div>
                App
                <Home />
                <Profile />
            </div>
        );
    }
}


export default Index;