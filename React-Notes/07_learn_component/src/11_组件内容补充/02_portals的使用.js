import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';

class Modal extends PureComponent {
    render() {
        return (
            /**
             * 将子组件渲染到非父组件的子树下，同时父组件仍能对子组件做出反应，我们甚至不用做过多的dom处理
             */
            ReactDOM.createPortal(
                this.props.children,
                document.getElementById("modal")
            )
        );
    }
}

class Home extends PureComponent {
    render() {
        return (
            <div>
                <h2>Home</h2>
                <Modal>
                    <h2>Title</h2>
                </Modal>
            </div>
        );
    }
}

class App extends PureComponent
{
    render()
    {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

App.propTypes = {};

export default App;