import React, {PureComponent} from 'react';
import styled from 'styled-components'

const HomeWrapper = styled.div`
  font-size: 12px;
  color: red;
  .banner {
    background-color: cadetblue;
    span {
      color: #fff;
      // 不能直接使用.active 要在span中使用必须加入& (&.active)
      &.active {
        color: indianred;
      }
      
      // 伪类
      &:hover {
        color: green;
      }
      
      &::after {
        content: 'aaa'
      }
    }
  }
                    `
const TitleWrapper = styled.h2`
    text-decoration: underline;
    color: ${props => props.theme.themeColor};
    font-size: ${props => props.theme.fontSize};
`

class Index extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <TitleWrapper>我是Home标题</TitleWrapper>
                <div className='banner'>
                    <span>我是轮播图1</span>
                    <span className='active'>我是轮播图2</span>
                    <span>我是轮播图3</span>
                    <span>我是轮播图4</span>
                </div>
            </HomeWrapper>
        );
    }
}

export default Index;