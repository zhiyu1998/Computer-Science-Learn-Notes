import React, {Component} from 'react';

function ChildCpn(props) {
    const {name, age, height} = props;

    return (
        <h2>{name + age + height}</h2>
    )
}

export default class App extends Component
{
    render()
    {
        return (
            <div>
                <ChildCpn name='why' age='18' height='1.88' />
                <ChildCpn name='kobe' age='40' height='1.98' />
            </div>
        );
    }
}