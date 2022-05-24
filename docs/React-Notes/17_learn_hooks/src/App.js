import React, { createContext, useState } from "react";
import Demo from "./11_自定义Hook/04_自定义Hook练习-localStorage存储.js";

export const UserContext = createContext();
export const TokenContext = createContext();

export const ThemeContext = createContext();

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {/* <CounterClass /> */}
      {/* <CounterHook /> */}
      {/* <MultiHookState /> */}

      <UserContext.Provider value={{ name: "why", age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: "30px", color: "red" }}>
          {show && <Demo />}
        </ThemeContext.Provider>
      </UserContext.Provider>

      <button onClick={(e) => setShow(!show)}>显示/隐藏</button>
    </div>
  );
}
