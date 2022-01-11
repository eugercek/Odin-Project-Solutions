import Input from "../Input";
import "../../styles/Form.css";

export default function ExperienceForm({
  name,
  start,
  end,
  handleForm,
  deleteSelf,
}) {
  return (
    <div className="experience-form form-area">
      <Input
        value={name}
        callback={handleForm}
        name="name"
        placeholder="Company Name"
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
