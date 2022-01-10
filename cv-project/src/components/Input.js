export default function Input({ value, callback, type = "text", name }) {
  return (
    <div>
      <input type={type} value={value} onChange={callback} name={name} />
    </div>
  );
}
