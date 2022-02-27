export default function reducer(state, action) {
  switch (action.type) {
    case "increment":
      // 这里的赋值要看useReducer怎么定义初始化值的
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
