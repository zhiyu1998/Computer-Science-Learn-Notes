// import {connect} from "../utils/connect";
import {connect} from "react-redux";

import {
    decAction,
    subAction
} from "../store/actionCreators";

function About(props) {
    return (
        <div>
            <h1>About</h1>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e => props.decrement()}>-1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>
            <h1>Banner</h1>
            <ul>
                {
                    props.banners.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
            <h1>Recommend</h1>
            <ul>
                {
                    props.recommends.map((item, index) => {
                        return <li key={item.acm}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

// 把想要映射的state放入 [最好不要直接返回对象,而是直接返回一个函数,函数里面返回一个对象]
// 因为直接返回对象, 里面的store不明确
const mapStateToProps = state => {
    return {
        counter: state.counter,
        banners: state.banners,
        recommends: state.recommends,
    }
};

// 把想要dispatch的props放入
const mapDispatchToProps = dispatch => {
    return {
        decrement: function () {
            dispatch(decAction())
        },
        subNumber: function (num) {
            dispatch(subAction(num))
        }
    }

};

// connect()(About)

export default connect(mapStateToProps, mapDispatchToProps)(About);