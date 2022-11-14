import React from "react";

function LogInInformation() {
  return (
    <React.Fragment>
      <div className="login-information">
        <div className="email-container">
          <input type="text" id="email" placeholder="Email" />
        </div>

        <div className="password-container">
          <input type="text" id="password" placeholder="Password" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogInInformation;
