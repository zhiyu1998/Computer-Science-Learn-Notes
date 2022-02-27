import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";

export default class user extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}
