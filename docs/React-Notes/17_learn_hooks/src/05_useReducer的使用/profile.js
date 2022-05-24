import React, { useReducer } from "react";
import reducer from "./reducer";

export default function Profile() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h2>Profile当前计数：{state.counter}</h2>
      <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
      <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
}
