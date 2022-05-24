import React, { PureComponent } from "react";

export default class detail extends PureComponent {
  render() {
    const match = this.props.match;

    return (
      <div>
        <h2>Detail: {match.params.id}</h2>
      </div>
    );
  }
}
