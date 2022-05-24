import store from "./store/index.js";

import {
  addAction,
  decrementAction,
  incrementAction,
  subAction,
} from "./store/actionCreators.js";

// hack技术：monkeyingpatch
const next = store.dispatch;
function dispatchAndLogging(action) {
  console.log(`dispatch前 -- dispatch action:`, action);
  next(action);
  console.log(`dispatch后 -- new state: `, store.getState());
}
store.dispatch = dispatchAndLogging;

// 封装patchThunk的功能
function patchThunk(store) {
  const next = store.dispatch;

  function dispatchAndThunk(action) {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }

  store.dispatch = dispatchAndThunk;
}

patchThunk(store);
// 这时才分发action, 与redux-thunk同理
function foo(dispatch, getState) {
  dispatch(subAction(10));
}
// dispatch函数
store.dispatch(foo);

// 封装applyMiddleware
function applyMiddleware(...middlewares) {
  // const newMiddleware = [...middlewares] // 浅拷贝
  middlewares.forEach((middleware) => {
    store.dispatch = middleware(store);
  });
}

// 订阅
// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(addAction(10));
// store.dispatch(addAction(15));
// store.dispatch(subAction(8));
// store.dispatch(subAction(5));
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
