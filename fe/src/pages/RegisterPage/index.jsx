import Header from "./components/Header/index.jsx";
import InformationInput from "./components/InformationInput/index.jsx";
import ActionGroup from "./components/ActionGroup/index.jsx";
import GenderInput from "./components/GenderInput/index.jsx";
import AgeInput from "./components/AgeInput/index.jsx";
import "./style.css";
import "../../assets/fonts/themify-icons/themify-icons.css";

function RegisterPage() {
  return (
    <div className="register">
      <Header />
      <div className="register__description">
        <InformationInput type={"fullName"} iconType={"ti-user"} />
        <InformationInput type={"email"} iconType={"ti-email"} />
        <InformationInput type={"password"} iconType={"ti-lock"} />
        <div className="age-and-gender">
          <GenderInput />
          <AgeInput />
        </div>
        <ActionGroup />
      </div>
    </div>
  );
}

export default RegisterPage;
