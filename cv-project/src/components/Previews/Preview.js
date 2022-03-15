import GeneralPreview from "./GeneralPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

export default function Preview({ general, education, experience }) {
  return (
    <div className="previews">
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
}
