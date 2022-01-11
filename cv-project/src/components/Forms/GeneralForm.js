import Input from "../Input";

export default function GeneralForm({ name, email, phone, handleForm }) {
  return (
    <div className="general-form">
      <Input value={name} callback={handleForm} name="name" />
      <Input value={email} type="email" callback={handleForm} name="email" />
      <Input value={phone} type="phone" callback={handleForm} name="phone" />
    </div>
  );
}
