import "../../styles/Preview.css";

export default function GeneralPreview({ name, email, phone }) {
  return (
    <div className="preview">
      <p>
        <strong>{name}</strong>
      </p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}
