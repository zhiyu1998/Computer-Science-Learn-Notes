import React, { useState, useMemo } from "react";

const HYInfo = (props) => {
  console.log("HYInfo重新渲染");
  return (
    <h2>
      名字：{props.info.name} 年龄：{props.info.age}
    </h2>
  );
};

export default function MemoHookDemo2() {
  console.log("MemoHookDemo2组件重新渲染");
  //   const info = { name: "why", age: 18 };
  const info = useMemo(() => {
    return { name: "why", age: 18 }; // useMemo优化的地方;useCallback是优化的是函数
  }, []);
  const [show, setShow] = useState(true);

  return (
    <div>
      <HYInfo info={info} />
      <button onClick={(e) => setShow(!show)}> reverse show </button>
    </div>
  );
}
