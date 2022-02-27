import React, { useState, useEffect } from "react";

export default function HookCounterChangeTitle() {
  // 使用Hook时，函数组件的名字第一个字母必须是大写
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;
  });

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
