import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                App: {this.props.name}
            </div>
        );
    }
}

function enhanceComponent(WrapperComponent) {
    class NewComponent extends PureComponent {
        render() {
            // 这里...this.props可以从index.js的属性中拿到值
            return <WrapperComponent {...this.props}/>
        }
    }

    NewComponent.displayName = 'Kobe'
    return NewComponent
}

function enhanceComponent2(WrapperComponent) {
    function NewComponent(props) {
        return <WrapperComponent {...props} />
    }

    // displayName --> 给组件改名字
    NewComponent.displayName = 'Kobe'
    return NewComponent
}

const EnhanceComponent = enhanceComponent2(App)

App.propTypes = {};

export default EnhanceComponent;
