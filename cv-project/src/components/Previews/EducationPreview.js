export default function EducationPreview({ name, start, end }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {start} - {end}
      </p>
    </div>
  );
}
