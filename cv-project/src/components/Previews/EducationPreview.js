import "../../styles/Preview.css";

export default function EducationPreview({ name, start, end }) {
  return (
    <div className="preview">
      <h3>{name}</h3>
      <p>
        {start} - {end}
      </p>
    </div>
  );
}
