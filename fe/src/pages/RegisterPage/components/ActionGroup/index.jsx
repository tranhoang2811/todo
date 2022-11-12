import React from "react";

function ActionGroup() {
  return (
    <React.Fragment>
      <div className="submit-information">
        <input type="submit" value="Sign up" />
      </div>
      <div className="login-now">
        <a href="./login-form.html">Login now</a>
      </div>
    </React.Fragment>
  );
}

export default ActionGroup;
