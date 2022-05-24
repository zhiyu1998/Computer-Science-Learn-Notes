import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class LoginPage extends PureComponent {
    render() {
        return (
            <div>
                <h2>LoginPage</h2>
            </div>
        );
    }
}

/**
 * 实际上：return
 * 第一层是劫持了 props
 * 第二层劫持了jsx
 */
function  withAuth(WrappedComponent) {
    return props => {
        const {isLogin} = props
        if (isLogin)
            return <WrappedComponent {...props} />
        else
            return <LoginPage />
    }
}

class CartPage extends PureComponent {
    render() {
        return (
            <div>
                <h2>CartPage</h2>
            </div>
        );
    }
}

const AuthCartPage = withAuth(CartPage)

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <AuthCartPage isLogin={false} />
            </div>
        );
    }
}

App.propTypes = {};

export default App;