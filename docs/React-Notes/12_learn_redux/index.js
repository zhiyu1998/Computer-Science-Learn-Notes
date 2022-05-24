import store from './store/index.js'

import {
    addAction, decrementAction, incrementAction,
    subAction
} from "./store/actionCreators.js";

// 订阅
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addAction(10))
store.dispatch(addAction(15))
store.dispatch(subAction(8))
store.dispatch(subAction(5))
store.dispatch(incrementAction())
store.dispatch(decrementAction())