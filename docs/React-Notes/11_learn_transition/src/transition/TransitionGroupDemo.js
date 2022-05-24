import React, {PureComponent} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

import {Button} from "antd";
import './TransitionGroup.css'

class TransitionGroupDemo extends PureComponent {
    constructor() {
        super();
        this.state = {
            names: ['codewhy', 'kobe', 'lilei']
        }
    }

    render() {

        return (
            <TransitionGroup>
                {
                    this.state.names.map((item, index) => {
                        return (
                            // index作为key不会增加性能,最好不使用
                            <CSSTransition
                                key={item}
                                timeout={500}
                                classNames={"item"}
                            >
                                <div>
                                    {item}
                                    <Button onClick={e => this.removeItem(index)} type="primary" danger>x</Button>
                                </div>
                            </CSSTransition>
                        )
                    })
                }
                <Button onClick={e => this.addName()}>+name</Button>
            </TransitionGroup>
        );
    }

    addName() {
        this.setState({
            names: [...this.state.names, 'zhiyu']
        })
    }

    removeItem(index) {
        this.setState({
            names: this.state.names.filter((item, indey) => {
                return index != indey
            })
        })
    }
}

export default TransitionGroupDemo;