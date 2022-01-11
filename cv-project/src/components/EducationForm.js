import Input from "./Input";

export default function EducationalForm({
  name,
  start,
  end,
  handleForm,
  deleteSelf,
}) {
  return (
    <div className="Education-form">
      <Input value={name} callback={handleForm} name="name" />
      <Input value={start} callback={handleForm} name="start" />
      <Input value={end} callback={handleForm} name="end" />
      <button onClick={deleteSelf}>Delete</button>
    </div>
  );
}
