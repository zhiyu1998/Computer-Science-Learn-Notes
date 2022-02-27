import React, {PureComponent} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {Button} from "antd";


class SwitchTransitionDemo extends PureComponent {
    constructor() {
        super();

        this.state = {
            isOn: true
        }
    }

    render() {
        const {isOn} = this.state

        return (
            <div>
                <SwitchTransition>
                    <CSSTransition key={isOn ? 'on':'off'}
                                   classNames='btn'
                                   timeout={500}>
                        <Button onClick={e => this.setState({isOn: !isOn})}>
                            {isOn ? 'on' : 'off'}
                        </Button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        );
    }
}

export default SwitchTransitionDemo;