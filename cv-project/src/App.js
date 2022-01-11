import "./styles/App.css";

import { useState } from "react";
import GeneralForm from "./components/Forms/GeneralForm";
import EducationForm from "./components/Forms/EducationForm";
import ExperienceForm from "./components/Forms/ExperienceForm";
import GeneralPreview from "./components/Previews/GeneralPreview";
import EducationPreview from "./components/Previews/EducationPreview";
import ExperiencePreview from "./components/Previews/ExperiencePreview";

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

  function handleOtherForm(event, index, root) {
    const { name, value } = event.target;
    const array = [...formData[root]];
    array[index] = {
      ...array[index],
      [name]: value,
    };
    setFormData((p) => ({
      ...p,
      [root]: array,
    }));
  }

  function addForm(root) {
    setFormData((p) => ({
      ...p,
      [root]: [...p[root], {}],
    }));
  }

  function deleteForm(id, root) {
    const willDelete = formData[root][id];
    setFormData((p) => ({
      ...p,
      [root]: p[root].filter((x) => x !== willDelete),
    }));
  }

  const educationFormElements = formData.education.map((education, i) => (
    <EducationForm
      {...education}
      handleForm={(event) => handleOtherForm(event, i, "education")}
      deleteSelf={() => deleteForm(i, "education")}
    />
  ));

  const educationPreviewElements = formData.education.map((education) => (
    <EducationPreview {...education} />
  ));

  const experienceFormElements = formData.experience.map((experience, i) => (
    <ExperienceForm
      {...experience}
      handleForm={(event) => handleOtherForm(event, i, "experience")}
      deleteSelf={() => deleteForm(i, "experience")}
    />
  ));

  const experiencePreviewElements = formData.experience.map((experience) => (
    <ExperiencePreview {...experience} />
  ));

  return (
    <main className="app">
      <div className="forms">
        <GeneralForm {...formData.general} handleForm={handleGeneralForm} />
        <div className="education">
          {educationFormElements}
          <button
            className="education--button"
            onClick={(e) => addForm("education")}
          >
            Add education
          </button>
        </div>
        <div className="experience">
          {experienceFormElements}
          <button
            className="experience--button"
            onClick={(e) => addForm("experience")}
          >
            Add experience
          </button>
        </div>
      </div>
      <div className="preview">
        <GeneralPreview {...formData.general} />
        {educationPreviewElements}
        {experiencePreviewElements}
      </div>
    </main>
  );
}
