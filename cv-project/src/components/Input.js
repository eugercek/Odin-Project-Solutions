import "../styles/Input.css";

export default function Input({
  value,
  callback,
  type = "text",
  name,
  placeholder,
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={callback}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
