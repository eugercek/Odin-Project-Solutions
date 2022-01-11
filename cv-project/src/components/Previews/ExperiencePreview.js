import "../../styles/Preview.css";

export default function ExperiencePreview({ name, start, end }) {
  return (
    <div className="preview">
      <h3>{name}</h3>
      <p>
        {start} - {end}
      </p>
    </div>
  );
}
