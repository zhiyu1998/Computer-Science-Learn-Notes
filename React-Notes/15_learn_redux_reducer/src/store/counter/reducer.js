import { ADD_NUMBER, SUB_NUMBER, INCREMENT, DECREMENT } from "./constance.js";

const initialCounterInfo = {
  counter: 0,
};
function counterReducer(state = initialCounterInfo, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default counterReducer;
