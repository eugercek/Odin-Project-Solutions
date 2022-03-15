import GeneralPreview from "./GeneralPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import React from "react";

const Preview = React.forwardRef(({ general, education, experience }, ref) => {
  return (
    <div className="previews" ref={ref}>
      <GeneralPreview {...general} />
      <h1>Education</h1>
      {education.map((e) => (
        <EducationPreview {...e} />
      ))}
      <h1>Experience</h1>
      {experience.map((e) => (
        <ExperiencePreview {...e} />
      ))}
    </div>
  );
});

export default Preview;
