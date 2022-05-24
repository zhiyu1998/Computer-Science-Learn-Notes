import React, { useReducer } from "react";

import reducer from "./reducer";

export default function Home() {
  //   const [count, setCount] = useState(0);
  //useReducer
  // 参数一：reducer
  // 参数二：初始化值
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <div>
        <h2>Home当前计数：{state.counter}</h2>
        <button onClick={(e) => dispatch({ type: "increment" })}>+1</button>
        <button onClick={(e) => dispatch({ type: "decrement" })}>-1</button>
      </div>
    </div>
  );
}
