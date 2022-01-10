import Input from "./Input";

export default function EducationalForm({ name, start, end, major, handle }) {
  return (
    <div className="Education-form">
      <Input value={name} callback={handle} />
      <Input value={start} callback={handle} />
      <Input value={end} callback={handle} />
    </div>
  );
}
