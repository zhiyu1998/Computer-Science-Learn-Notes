import React, {Component} from 'react';
import PropTypes from 'prop-types';

function ChildCpn(props) {
    const {name, age, height} = props;
    const {names} = props

    return (
        <div>
            <h2>{name + age + height}</h2>
            <ul>
                {/*这里必须使用大括号，如果里面使用了运算*/}
                {
                    names.map((item, index) => {
                        return <li>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

// ES6 中 class fields写法
class ChildCpn2 extends Component{

    static propTypes = {

    }

    static defaultProps = {

    }
}

/**
 * 类型验证：使用propTypes
 *  require: 必须要传入的属性
 * @type {{names, name, age, height}}
 */
ChildCpn.propTypes = {
    name: PropTypes.string,
    // name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number,
    names: PropTypes.array
}

// 默认值
ChildCpn.defaultProps = {
    name: 'why',
    age: 30,
    height: 1.98,
    names: ['aaa', 'bbb']
}

export default class App extends Component {
    render() {
        return (
            <div>
                <ChildCpn name='why' age='18' height='1.88' names={['abc', 'cba']}/>
                <ChildCpn name='kobe' age='40' height='1.98' names={['nba', 'mba']}/>
            </div>
        );
    }
}