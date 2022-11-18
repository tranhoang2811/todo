import React from "react";
import { useStores } from "../../../../context/rootStoreContext.js";

function ActionGroup(props) {
  const { userStore } = useStores();

  
  return (
    <React.Fragment>
      <div className="submit-information">
        <input type="submit" value="Sign up" onClick={props.submit}/>
      </div>
      <div className="login-now">
        <a href="./login-form.html">Login now</a>
      </div>
    </React.Fragment>
  );
}

export default ActionGroup;
