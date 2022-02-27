import React, {Component} from 'react';

class NaviBar extends Component {
    render() {
        // aaa, bbb, ccc -> this.props.children
        const {leftSlot, centerSlot, rightSlot} = this.props

        return (
            <div className='nav-bar'>
                <div className='nav-item nav-left'>
                    {leftSlot}
                </div>
                <div className='nav-item nav-center'>
                    {centerSlot}
                </div>
                <div className='nav-item nav-right'>
                    {rightSlot}
                </div>
            </div>
        );
    }
}

export default NaviBar;