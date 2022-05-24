import React, { PureComponent } from "react";

import Home from "./pages/home5-redux-saga";
import About from "./pages/about3";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <hr />
        <About />
      </div>
    );
  }
}

export default App;
