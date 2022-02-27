import React, { useRef } from "react";

/**
 * useRef的两种用法
 * 用法一：引入DOM（或者组件，但是需要是class组件）元素
 * 用法二：保存一个数据，这个对象在整个生命周期可以保存不变
 */

class TestCpn extends React.Component {
  render() {
    return <h2>TestCpn</h2>;
  }
}

function TestCpn2() {
  return <h2>TestCpn2</h2>;
}

export default function RefHookDemo01() {
  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = "Hello World";
    inputRef.current.focus();
    console.log(testRef.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text" />
      <TestCpn ref={testRef} />
      <TestCpn2 ref={testRef2} />

      <button onClick={(e) => changeDOM()}>修改DOM</button>
    </div>
  );
}
