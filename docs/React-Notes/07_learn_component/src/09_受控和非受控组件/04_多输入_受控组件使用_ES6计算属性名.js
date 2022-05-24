import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            valid: ''
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={e => this.handleSubmit(e)}>
                    {/*真实开发使用div代替br*/}
                    <div>
                        <label htmlFor="username">
                            {/*受控组件*/}
                            用户：<input type="text"
                                      id="username"
                                      name="username"
                                      onChange={e => this.handleChange(e)}
                                      value={this.state.username}/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="password">
                            {/*受控组件*/}
                            密码：<input type="text"
                                      id="password"
                                      name="password"
                                      onChange={e => this.handleChange(e)}
                                      value={this.state.password}/>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="valid">
                            {/*受控组件*/}
                            验证：<input type="text"
                                      id="valid"
                                      name="valid"
                                      onChange={e => this.handleChange(e)}
                                      value={this.state.valid}/>
                        </label>
                    </div>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault()
        const {username, password, valid} = this.state
        console.log(username, password, valid)
    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            // ES6语法：计算属性名
            [event.target.name]: event.target.value
        })
    }
}

App.propTypes = {};

export default App;