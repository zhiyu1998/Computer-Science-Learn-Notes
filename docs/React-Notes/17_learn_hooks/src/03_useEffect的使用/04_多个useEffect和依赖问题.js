import React, { useEffect, useState } from "react";

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0);

  // 第二个参数里面有参数就依赖此参数，如果此变量发生了变化，就执行订阅事件里的内容
  useEffect(() => {
    console.log("修改DOM");
  }, [count]);

  // 第二个参数如果是一个空数组，表示谁都不依赖，只执行一次
  useEffect(() => {
    console.log("订阅事件");
  }, []);

  useEffect(() => {
    console.log("网络请求");
  }, []);

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)}> +1 </button>
    </div>
  );
}
