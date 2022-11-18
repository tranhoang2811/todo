import { useState } from "react";
import Header from "./components/Header/index.jsx";
import InformationInput from "./components/InformationInput/index.jsx";
import ActionGroup from "./components/ActionGroup/index.jsx";
import GenderInput from "./components/GenderInput/index.jsx";
import AgeInput from "./components/AgeInput/index.jsx";
import "./style.css";
import "../../assets/fonts/themify-icons/themify-icons.css";

function RegisterPage() {
  const [input, setInput] = useState("");
  
  function handleSubmit(e) {
    // const data = new FormData(e.target);
    console.log(data);
  }

  // console.log(input)
  return (
    <div className="register">
      <Header />
      <div className="register__description">
        <InformationInput name="username" type={"fullName"} setInput={setInput}/>
        <InformationInput name="email" type={"email"} setInput={setInput}/>
        <InformationInput name="password" type={"password"} setInput={setInput}/>
        <div className="age-and-gender">
          <GenderInput />
          <AgeInput />
        </div>
        <ActionGroup submit={handleSubmit}/>
      </div>
    </div>
  );
}

export default RegisterPage;
