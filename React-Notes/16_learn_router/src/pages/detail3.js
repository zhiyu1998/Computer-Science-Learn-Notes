import React, { PureComponent } from "react";

export default class detail3 extends PureComponent {
  render() {
    const location = this.props.location;

    return (
      <div>
        <h2>Detail3 {location.state.name}</h2>
      </div>
    );
  }
}
