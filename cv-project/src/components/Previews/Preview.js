import GeneralPreview from "./GeneralPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";

export default function Preview({ general, education, experience }) {
  return (
    <div className="previews">
      <GeneralPreview {...general} />
      {education.map((e) => (
        <EducationPreview {...e} />
      ))}
      {experience.map((e) => (
        <ExperiencePreview {...e} />
      ))}
    </div>
  );
}
