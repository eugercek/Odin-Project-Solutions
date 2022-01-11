export default function ExperiencePreview({ name, start, end }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {start} - {end}
      </p>
    </div>
  );
}
