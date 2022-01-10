export default function GeneralPreview({ name, email, phone }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}
