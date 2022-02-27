import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

function enhanceRegionProps(WrappedComponent) {
    return props => {
        return <WrappedComponent {...props} region='中国'/>
    }

}

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>Home: {`昵称： ${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
            </div>
        );
    }
}

// 两种方法实现导出
// export default enhanceRegionProps(Index)
const EnhanceHome = enhanceRegionProps(Home) // 这里还需在标签那里修改

class About extends PureComponent {
    render() {
        return (
            <div>
                <h2>About: {`昵称： ${this.props.nickname} 等级：${this.props.level} 区域：${this.props.region}`}</h2>
            </div>
        );
    }
}

const EnhanceAbout = enhanceRegionProps(About)

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                App
                <EnhanceHome nickname='zhiyu' level={99} />
                <EnhanceAbout nickname='ren' level={90} />
            </div>
        );
    }
}

App.propTypes = {};

export default App;