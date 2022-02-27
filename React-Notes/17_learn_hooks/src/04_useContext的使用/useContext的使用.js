import React, { useContext } from "react";

import { UserContext, ThemeContext } from "../App";

export default function ContextHookDemo() {
  const user = useContext(UserContext); // 新的写法
  const theme = useContext(ThemeContext);

  console.log(user, theme);

  return (
    <div>
      {/* 一开始的写法： <UserContext.Consumer>{(user) => {}}</UserContext.Consumer> */}
      <h2>ContextHookDemo</h2>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
    </div>
  );
}
