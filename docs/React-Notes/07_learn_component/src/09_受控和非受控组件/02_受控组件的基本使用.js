import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent
{
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }
    }

    render()
    {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        {/*受控组件*/}
                        用户：<input type="text"
                                  id="username"
                                  onChange={e => this.handleChange(e)}
                                  value={this.state.username}/>
                    </label>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.username);
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            username: event.target.value
        })
    }
}

App.propTypes = {};

export default App;