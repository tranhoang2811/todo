import Header from "./components/Header/index.jsx";
import ActionGroup from "./components/ActionGroup/index.jsx";
import LogInInformation from "./components/LogInInformation/index.jsx";
import "./style.css";

function LogInPage() {
  return (
    <div id="login-form">
      <Header />
      <LogInInformation />
      <ActionGroup />
    </div>
  );
}

export default LogInPage;
