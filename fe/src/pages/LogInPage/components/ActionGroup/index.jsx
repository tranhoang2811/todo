import React from "react";
function ActionGroup() {
  return (
    <React.Fragment>
      <div className="account-action">
        <div className="remember-action">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me?</label>
        </div>
        <div className="forgot-password-title">
          <a href="#">
            <i>Forgot password?</i>
          </a>
        </div>
      </div>
      <div className="login-button-container">
        <input type="submit" value="Login" className="login-button-item" />
      </div>
      <div className="sign-up-now">
        <a href="./sign-up.html">Sign up now</a>
      </div>
    </React.Fragment>
  );
}

export default ActionGroup;
