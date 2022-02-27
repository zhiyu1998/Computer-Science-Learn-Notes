import React, {PureComponent} from 'react';
import styled, {ThemeProvider} from "styled-components";

import Home from "../home";
import Profile from "../profile";

/**
 * 但是这种方案也有自己的缺陷:
    * 引用的类名,不能使用连接符(.home-title) ,在JavaScript中是不识别的;
    * 所有的className都必须使用{style.className}的形式来编写;
    * 不方便动态来修改某些样式,依然需要使用内联样式的方式;
 */

const HYButton = styled.button`
  padding: 10px 20px;
  border-color: red;
  color: red;
`

// 可以继承
const HYPrimaryButton = styled(HYButton)`
    color: #fff;
    background-color: green;
`

class Index extends PureComponent {
    render() {
        return (
            // 其他组件都可以使用这些公共的属性：themeColor: 'yellow', fontSize: '40px' 叫做theme
            <ThemeProvider theme={{themeColor: 'yellow', fontSize: '40px'}}>
                App
                <Home />
                <Profile />
                <HYButton>我是普通按钮</HYButton>
                <HYPrimaryButton>我是主要按钮</HYPrimaryButton>
            </ThemeProvider>
        );
    }
}


export default Index;