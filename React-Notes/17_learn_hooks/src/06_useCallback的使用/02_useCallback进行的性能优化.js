import React, { useState, useCallback, memo } from "react";

/**
 * useCallback 的使用场景
 * 场景：在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理
 */

const HYButton = memo((props) => {
  // 父组件重新渲染的时候，子组件也会跟着渲染
  console.log(props.title + " HYButton重新渲染");
  return <button onClick={props.increment}>HYButton +1</button>;
});

export default function CallbackHookDemo2() {
  console.log("CallbackHookDemo2重新渲染");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

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
      <h2>CallbackHookDemo2: {count}</h2>
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} />

      <br />

      <button onClick={(e) => setShow(!show)}>show切换</button>
    </div>
  );
}
