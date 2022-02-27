import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";

// 1. 引入saga
import saga from "./saga.js";
import reducer from "./reducer.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 应用一些中间件
// const storeEnhancer = applyMiddleware(thunkMiddleware)

// 2. 创建saga中间件
const sagaMiddleware = createSagaMiddleware();

// 3. 应用saga
const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

// 4. 让saga跑起来，前提先创建一个saga.js,在saga.js中监听要监听的事件
sagaMiddleware.run(saga);

export default store;
