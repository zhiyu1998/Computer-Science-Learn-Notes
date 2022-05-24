import React, {PureComponent} from 'react';
import moment from 'moment';

import {Comment, Avatar, Tooltip} from 'antd'

import { DeleteOutlined } from '@ant-design/icons'

class CommentItem extends PureComponent {
    render() {
        const {nickname, avatar, content, datetime} = this.props.comment;
        return (
            <Comment
                author={<a href='#'>{nickname}</a>}
                avatar={<Avatar src={avatar} alt="zhiyu1998" />}
                content={
                    <p>
                        {content}
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
                actions={[
                    <span onClick={e =>this.removeItem()}><DeleteOutlined />删除</span>
                ]}
            />
        );
    }

    removeItem() {
        this.props.removeItem()
    }
}

export default CommentItem;