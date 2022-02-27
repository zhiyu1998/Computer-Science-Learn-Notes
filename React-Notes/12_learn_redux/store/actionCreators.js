import {
    ADD_NUMBER,
    SUB_NUMBER,
    INCREMENT,
    DECREMENT
} from './constance.js'
// export function addAction(num) {
//     return {
//         type: 'ADD_NUMBER',
//         num
//     }
// }

// export const addAction = (num) => {
//     return {
//         type: 'ADD_NUMBER',
//         num
//     }
// }

// 小括号表示里面的内容是一个对象，如果没有里面就是函数体
export const addAction = (num) => ({
    type: ADD_NUMBER,
    num
})

export const subAction = (num) => ({
    type: SUB_NUMBER,
    num
})

export const incrementAction = () => ({
    type: INCREMENT
})

export const decrementAction = () => ({
    type: DECREMENT
})