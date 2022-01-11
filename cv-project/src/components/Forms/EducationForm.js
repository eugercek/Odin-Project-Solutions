import Input from "../Input";
import "../../styles/Form.css";

export default function EducationForm({
  name,
  start,
  end,
  handleForm,
  deleteSelf,
}) {
  return (
    <div className="education-form form-area">
      <Input
        value={name}
        callback={handleForm}
        name="name"
        placeholder="School Name"
      />
      <Input
        value={start}
        callback={handleForm}
        name="start"
        placeholder="Start Date"
      />
      <Input
        value={end}
        callback={handleForm}
        name="end"
        placeholder="End Date"
      />
      <button onClick={deleteSelf} className="delete-button">
        Delete
      </button>
    </div>
  );
}
