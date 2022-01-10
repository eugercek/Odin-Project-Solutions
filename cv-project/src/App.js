import "./styles/App.css";

import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import EducationalForm from "./components/EducationalForm";
import GeneralPreview from "./components/GeneralPreview";

export default function App(props) {
  const [formData, setFormData] = useState({
    general: {
      name: "John Doe",
      email: "foo@mail.com",
      phone: "123456789",
    },
    education: [
      {
        name: "MIT",
        start: "2010-01-01",
        end: "2011-01-01",
        major: "Computer Science",
        id: 0,
      },
    ],
    experience: [
      {
        name: "Google",
        start: "2012-01-01",
        end: "2012-01-01",
      },
    ],
  });

  function handleForm(event) {
    const { name, value } = event.target;
    setFormData((p) => ({
      ...p,
      general: {
        ...p.general,
        [name]: value,
      },
    }));
  }

  return (
    <main className="app">
      <div className="forms">
        <GeneralForm {...formData.general} handleForm={handleForm} />
        {/* <EducationalForm
          obj={this.state.education[0]}
          handleName={(value) => {
            const obj = this.state.education[0];
            const rest = this.state.education.filter((o) => o.id !== 0);
            const changed = Object.assign(obj, { name: value });

            this.setState({ education: [...rest, changed] });
          }}
          handleStart={(value) =>
            this.setState({
              education: this.state.education.map((obj) =>
                obj.id === 0 ? Object.assign(obj, { start: value }) : obj
              ),
            })
          }
          handleEnd={(value) => this.educationHandle(0, "end", value)}
        /> */}
      </div>
      <div className="preview">
        <GeneralPreview {...formData.general} />
      </div>
    </main>
  );
}
