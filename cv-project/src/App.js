import "./App.css";
import React from "react";
import GeneralForm from "./components/GeneralForm";
import GeneralPreview from "./components/GeneralPreview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      email: "foo@mail.com",
      phone: "123456789",
    };
  }

  handleName = (value) => this.setState({ name: value });
  handleEmail = (value) => this.setState({ email: value });
  handlePhone = (value) => this.setState({ phone: value });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="forms">
            <GeneralForm
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              handleName={this.handleName}
              handleEmail={this.handleEmail}
              handlePhone={this.handlePhone}
            />
          </div>
          <div className="preview">
            <GeneralPreview
              name={this.state.name}
              email={this.state.email}
              phone={this.state.phone}
            />
          </div>
        </header>
      </div>
    );
  }
}
