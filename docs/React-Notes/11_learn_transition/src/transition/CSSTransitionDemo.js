import React, {PureComponent} from 'react';

import {CSSTransition} from "react-transition-group";

import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
class CssTransitionDemo extends PureComponent {

    constructor() {
        super();

        this.state = {
            isShow: true
        }
    }

    render() {
        const { isShow } = this.state

        return (
            <div>
                <Button onClick={e => {
                    this.setState({isShow: !isShow
                }
                )}}>
                    显示/隐藏
                </Button>
                {/* 几个重要的属性：in 控制是否展示, timeout, classNames前缀, unmountOnExit退出动画结束后要不要删除DOM, appear第一次加载的动画 */}
                {/* CSS样式对应3种状态 */}
                {/* 第一类：开始状态，对应的类是-appear, -enter, exit */}
                {/* 第二类：执行动画，对应的类是-appear-active, -enter-active, -exit-active */}
                {/* 第三类：执行结束，对应的类是-appear-done, -enter-done, -exit-done */}
                <CSSTransition in={isShow}
                               classNames="card"
                               timeout={300}
                               unmountOnExit={true}
                               appear
                               onEnter={ el => console.log("进入状态") }
                               onEntering={ el => console.log("正在进入") }
                               onEntered={ el => console.log("进入完成") }
                               onExit={ el => console.log("退出状态") }
                               onExiting={ el => console.log("正在退出") }
                               onExited={ el => console.log("退出完成") }
                >
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </CSSTransition>
            </div>
        );
    }
}

export default CssTransitionDemo;