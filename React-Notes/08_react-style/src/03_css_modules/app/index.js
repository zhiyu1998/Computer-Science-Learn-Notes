import React, {PureComponent} from 'react';

import Home from "../home/Home";
import Profile from "../profile/Profile";

/**
 * 但是这种方案也有自己的缺陷:
    * 引用的类名,不能使用连接符(.home-title) ,在JavaScript中是不识别的;
    * 所有的className都必须使用{style.className}的形式来编写;
    * 不方便动态来修改某些样式,依然需要使用内联样式的方式;
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