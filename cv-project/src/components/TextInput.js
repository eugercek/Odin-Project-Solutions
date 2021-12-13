import React, { Component } from "react";

export default class TextInput extends Component {
  render() {
    const { value, callback } = this.props;
    return (
      <div>
        <input type="text" value={value} onChange={callback} />
      </div>
    );
  }
}
