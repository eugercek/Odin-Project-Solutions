import React, { Component } from "react";

import TextInput from "./TextInput";

export default class GeneralForm extends Component {
  render() {
    const { name, email, phone } = this.props;
    const { handleName, handleEmail, handlePhone } = this.props;
    return (
      <div className="General-form">
        <TextInput value={name} callback={(e) => handleName(e.target.value)} />
        <TextInput
          value={email}
          callback={(e) => handleEmail(e.target.value)}
        />
        <TextInput
          value={phone}
          callback={(e) => handlePhone(e.target.value)}
        />
      </div>
    );
  }
}
