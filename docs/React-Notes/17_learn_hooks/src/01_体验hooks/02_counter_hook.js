import React, { useState } from "react";

export default function CounterHook() {
  /**
   * Hook: useState
   * 本身是一个函数，来自react包
   * 参数:
   *  作用是给创建出来的状态一个默认值
   * 返回值：数组
   *    元素1（state）：当前state的值
   *    元素2（setState）：设置新的值，使用的一个【函数】
   * 调用规则：
   *    1. 只能在函数最外层调用Hook，不要再循环、条件判断或者子函数中调用
   *    2. 只能在React的函数组件中调用Hook,不要再其他JavaScript函数中调用
   */

  //   const arr = useState(0);
  //   const state = arr[0];
  //   const setState = arr[1];
  // 简化上面代码 [推荐写法]
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={(e) => setCount(count + 1)}>+1</button>
      <button onClick={(e) => setCount(count - 1)}>-1</button>
    </div>
  );
}
