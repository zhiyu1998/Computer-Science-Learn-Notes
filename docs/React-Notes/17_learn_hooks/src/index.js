import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  // 严格模式下组件会调用两次，如果不需要可以直接去掉
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
