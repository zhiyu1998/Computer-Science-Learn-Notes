// 不能通过ES6进行导入

const redux = require('redux')

const initialState = {
    counter: 0
}

// 4. reducer(纯函数)
function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            // 不能写为 state.counter += action.num
            // 下面这个写法是先拷贝state再进行加减法保证了纯函数
            return {...state, counter: state.counter + 1}
        case "DECREMENT":
            return {...state, counter: state.counter - 1}
        case "ADD_NUMBER":
            return {...state, counter: state.counter + action.num}
        case "SUB_NUMBER":
            return {...state, counter: state.counter - action.num}
    }
}

// 1. store
const store = redux.createStore(reducer)

// 5. 订阅store修改
store.subscribe(() => {
    console.log("counter", store.getState().counter)
})

// 2. actions
const action1 = {type: 'INCREMENT'}
const action2 = {type: 'DECREMENT'}

const action3 = {type: 'ADD_NUMBER', num: 5}
const action4 = {type: 'SUB_NUMBER', num: 12}

// 3. 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)