import React, { Component } from "react";

export default class GeneralPreview extends Component {
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    );
  }
}
