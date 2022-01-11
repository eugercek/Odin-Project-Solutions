import "./styles/App.css";

import { useState } from "react";
import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import GeneralPreview from "./components/GeneralPreview";
import EducationPreview from "./components/EducationPreview";

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
      },
    ],
    experience: [
      {
        name: "Google",
        start: "2012-01-01",
        end: "2012-01-01",
      },
    ],
    currentEducationIndex: 0,
    currentExperienceIndex: 0,
  });

  function handleGeneralForm(event) {
    const { name, value } = event.target;
    setFormData((p) => ({
      ...p,
      general: {
        ...p.general,
        [name]: value,
      },
    }));
  }

  function handleEducationForm(event, index) {
    const { name, value } = event.target;
    const array = [...formData.education];
    array[index] = {
      ...array[index],
      [name]: value,
    };
    setFormData((p) => ({
      ...p,
      education: array,
    }));
  }

  function addEducationForm() {
    setFormData((p) => ({
      ...p,
      education: [...p.education, { name: "", start: "", end: "" }],
    }));
  }

  function deleteEducationForm(id) {
    const willDelete = formData.education[id];
    setFormData((p) => ({
      ...p,
      education: p.education.filter((x) => x !== willDelete),
    }));
  }

  const educationFormElements = formData.education.map((education, i) => (
    <EducationForm
      {...education}
      handleForm={(event) => handleEducationForm(event, i)}
      deleteSelf={() => deleteEducationForm(i)}
    />
  ));

  const educationPreviewElements = formData.education.map((education) => (
    <EducationPreview {...education} />
  ));

  return (
    <main className="app">
      <div className="forms">
        <GeneralForm {...formData.general} handleForm={handleGeneralForm} />
        <div className="education">
          {educationFormElements}
          <button className="education--button" onClick={addEducationForm}>
            Add education
          </button>
        </div>
      </div>
      <div className="preview">
        <GeneralPreview {...formData.general} />
        {educationPreviewElements}
      </div>
    </main>
  );
}
