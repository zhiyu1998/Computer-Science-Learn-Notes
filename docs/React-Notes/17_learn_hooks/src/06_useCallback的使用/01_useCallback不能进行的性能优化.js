import React, { useState, useCallback } from "react";

export default function CallbackHookDemo() {
  const [count, setCount] = useState(0);

  const increment1 = () => {
    console.log("执行increment函数1");
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    console.log("执行increment函数2");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>CallbackHookDemo: {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  );
}
