import React, { useRef, useState, useEffect } from "react";

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);
  // useRef返回一个ref对象，返回的ref对象在组件的整个生命周期保持不变
  const numRef = useRef(count);

  useEffect(() => {
    numRef.current = count;
  }, [count]);

  return (
    <div>
      {/* <h2>numRef的值: {numRef.current}</h2>
      <h2>count的值: {count}</h2> */}
      <h2>count上一次的值：{numRef.current}</h2>
      <h2>count当前值：{count}</h2>
      <button onClick={(e) => setCount(count + 10)}>+10</button>
    </div>
  );
}
