import React, {PureComponent} from 'react';
import './style.css'

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2 className='title'>我是Home标题</h2>
                <div className='banner'>
                    <p>我是轮播图</p>
                </div>
            </div>
        );
    }
}

export default Home;