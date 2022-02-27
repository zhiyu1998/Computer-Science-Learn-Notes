import React, {Component} from 'react';

class NaviBar extends Component {
    render() {
        // aaa, bbb, ccc -> this.props.children

        return (
            <div className='nav-bar'>
                <div className='nav-item nav-left'>
                    {this.props.children[0]}
                </div>
                <div className='nav-item nav-center'>
                    {this.props.children[1]}
                </div>
                <div className='nav-item nav-right'>
                    {this.props.children[2]}
                </div>
            </div>
        );
    }
}

export default NaviBar;