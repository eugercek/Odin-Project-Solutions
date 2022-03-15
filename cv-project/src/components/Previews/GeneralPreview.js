import "../../styles/GeneralPreview.css";
import { HiMail, HiPhone } from "react-icons/hi";
import userImg from "../../styles/user.png";

export default function GeneralPreview({ name, email, phone }) {
  return (
    <div className="general-preview">
      <img src={userImg} alt="User" className="user-image"></img>
      <div className="all-infos">
        <h1 className="name">{name}</h1>
        <div className="info-container">
          <div className="icon-glue">
            <HiMail />
            <span className="email">{email}</span>
          </div>
          <div className="icon-glue">
            <HiPhone />
            <span className="phone">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
