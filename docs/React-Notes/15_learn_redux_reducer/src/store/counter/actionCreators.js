import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from "./constance.js";

// export function addAction(num) {
//     return {
//         type: 'ADD_NUMBER',
//         num
//     }
// }

// 箭头函数
// export const addAction = (num) => {
//     return {
//         type: 'ADD_NUMBER',
//         num
//     }
// }

// 箭头函数(简化)
export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const incAction = () => ({
  type: INCREMENT,
});

export const decAction = () => ({
  type: DECREMENT,
});
