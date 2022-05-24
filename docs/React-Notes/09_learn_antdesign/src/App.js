import React, {PureComponent} from 'react';

import moment from 'moment';

import { Button, Space, DatePicker } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

class App extends PureComponent {
    constructor() {
        super();
        this.state = {
            commentList: [],
        }
    }

    render() {

        return (
           <div style={{width: '500px', padding: '20px'}}>
               {
                   this.state.commentList.map((item, index) => {
                       return <CommentItem key={item.id} comment={item} removeItem={e => this.removeComment(index)} />
                   })
               }
               <CommentInput submitComment={info => this.submitComment(info)}/>
           </div>
        );
    }

    submitComment(info) {
        this.setState({
            commentList: [...this.state.commentList, info]
        })
    }

    removeComment(index) {
        const newCommentList = [...this.state.commentList]
        newCommentList.splice(index, 1)
        this.setState({
            commentList: newCommentList
        })
    }
}


export default App;


// 知识点

/*
import classNames from 'classnames'
class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isActive: true
        }
    }

    render() {
        const {isActive} = this.state

        const errClass = 'error'

        const warnClass = 'undefined'

        const zeroClass = 0

        return (
            <div>
                {/!*原生React中添加class方法*!/}
                <h2 className={"foo bar active title"}>我是标题2</h2>
                <h2 className={'title' + (isActive ? ' active' : '')}>我是标题2</h2>
                <h2 className={['title', (isActive ? ' active' : '')].join(' ')}>我是标题3</h2>

                {/!*使用classnames库*!/}
                <h2 className={classNames('foo', 'bar', 'active', 'title')}>我是标题4</h2>
                <h2 className={classNames({'active': isActive})}>我是标题5</h2>
                <h2 className={classNames('foo', errClass, warnClass, {'active': isActive})}>我是标题6</h2>

                <h2 className={classNames(zeroClass)}>我是标题7</h2>
            </div>
        );
    }
}*/