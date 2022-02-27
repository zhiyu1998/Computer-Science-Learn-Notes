import React, {PureComponent} from 'react';

import moment from "moment";

import { Input, Button } from 'antd'

const { TextArea } = Input;

class CommentInput extends PureComponent {
    constructor() {
        super();
        this.state = {
            content: '',
        }
    }

    render() {
        return (
            <div>
                <TextArea rows={4}
                          value={this.state.content}
                          onChange={e => this.handleChange(e)} />
                <Button style={{marginTop: '20px'}} type='primary' onClick={e => this.addComment()}>添加评论</Button>
            </div>
        );
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    addComment() {
        // console.log(this.state.content)
        const commonInfo = {
            id: moment().valueOf(),
            avatar: 'https://joeschmoe.io/api/v1/random',
            nickname: 'zhiyu1998',
            datetime: moment(),
            content: this.state.content
        }
        this.props.submitComment(commonInfo)

        this.setState({
            content: ''
        })
    }
}


export default CommentInput;