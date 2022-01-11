import Input from "../Input";

export default function GeneralForm({ name, email, phone, handleForm }) {
  return (
    <div className="general-form">
      <Input
        value={name}
        callback={handleForm}
        name="name"
        placeholder="Name"
      />
      <Input
        value={email}
        type="email"
        callback={handleForm}
        name="email"
        placeholder="Email"
      />
      <Input
        value={phone}
        type="phone"
        callback={handleForm}
        name="phone"
        placeholder="Phone Number"
      />
    </div>
  );
}
