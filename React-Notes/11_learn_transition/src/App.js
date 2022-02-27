import React, {PureComponent} from 'react';
import CssTransitionDemo from './transition/CSSTransitionDemo'
import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from "./transition/TransitionGroupDemo";

class App extends PureComponent {
    // Transition: 该组件与平台无关
    // CssTransition: 通常完成过渡动画效果
    // SwitchTransition: 两个组件显示和隐藏切换时使用该组件
    // TransitionGroup: 将多个动画组件包裹其中，一般用于类别中元素的动画
    render() {
        return (
            <div style={{textAlign: 'center', padding: '30px', margin: '0 auto'}}>
                <CssTransitionDemo/>
                <SwitchTransitionDemo/>
                <TransitionGroupDemo />
            </div>
        );
    }
}

export default App;