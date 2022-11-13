import Header from "./components/Header/index.jsx";
import InformationInput from "./components/InformationInput/index.jsx";
import ActionGroup from "./components/ActionGroup/index.jsx";
import GenderInput from "./components/GenderInput/index.jsx";
import AgeInput from "./components/AgeInput/index.jsx";
import "./style.css";

function RegisterPage() {
  return (
    <div className="register">
      <Header />
      <div className="register__description">
        <InformationInput type={"fullname"} />
        <InformationInput type={"email"} />
        <InformationInput type={"password"} />
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
