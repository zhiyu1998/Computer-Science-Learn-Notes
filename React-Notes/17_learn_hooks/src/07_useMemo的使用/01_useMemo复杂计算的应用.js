import React, { useState, useMemo } from "react";

function calcNumber(count) {
  let totalCount = 0;
  for (let i = 0; i < count; i++) {
    totalCount += i;
  }
  return totalCount;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  //   const total = calcNumber(count);
  const total = useMemo(() => {
    console.log("calcNumber重新计算");
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和：{total}</h2>
      <button onClick={(e) => setCount(count + 1)}> +1 </button>
      {/* 没有修改count值，点击这个会重新渲染；使用useMemo后就不会重新渲染，因此就可以达到性能优化 */}
      <button onClick={(e) => setShow(!show)}> reverse show </button>
    </div>
  );
}
