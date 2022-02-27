import React, {PureComponent} from 'react';

import {connect} from 'react-redux';

import axios from "axios";

import {
    addAction, incAction, changeBannersAction, changeRecommendsAction
} from '../store/actionCreators'

class Home extends PureComponent {
    componentDidMount() {
        axios({
            url: 'http://152.136.185.210:7878/api/hy66/home/multidata'
        }).then(res => {
            const data = res.data.data;
            this.props.changeBanners(data.banner.list)
            this.props.changeRecommends(data.recommend.list)
        })
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h2>当前计数：{this.props.counter}</h2>
                <button onClick={e => this.props.increment()}>+1</button>
                <button onClick={e => this.props.addNumber(5)}>+5</button>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    counter: state.counter
})

// 把想要dispatch的props放入
const mapDispatchToProps = dispatch => {
    return {
        increment() {
            dispatch(incAction())
        },
        addNumber(num) {
            dispatch(addAction(num))
        },
        changeBanners(banners) {
            dispatch(changeBannersAction(banners))
        },
        changeRecommends(recommends) {
            dispatch(changeRecommendsAction(recommends))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);