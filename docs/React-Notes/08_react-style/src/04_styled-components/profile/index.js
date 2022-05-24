import React, {PureComponent} from 'react';
import styled from 'styled-components'

/**
 * 1. styled-components特效：props穿透：可以使用元组件的属性，例如input的type属性可以在定义后再使用
 *
 */
// const HYInput = styled.input`
//     background-color: lightblue;
// `

// 2. 动态设置CSS样式：attrs  && 3. 传入state作为props属性
const HYInput = styled.input.attrs({
    placeholder: 'zhiyu',
    bColor: 'red',
    color: 'purple',
})`
  background-color: lightblue;
  border-color: ${props => props.bColor};
  color: ${props => props.color}
`

class Index extends PureComponent {
    render() {
        return (
            <div>
                <HYInput type="text"/>
                <h2>我是Profile标题</h2>
                <div>
                    <li>设置列表1</li>
                    <li>设置列表2</li>
                    <li>设置列表3</li>
                </div>
            </div>
        );
    }
}

export default Index;