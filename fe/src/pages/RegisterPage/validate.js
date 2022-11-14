export function validateFullName(fullName) {
  if (fullName.value.split(" ").length >= 2) {
    return true;
  }
  signupError.innerHTML = "Full name must contains at least two words";
  fullNameInputContainer.appendChild(signupError);
  return false;
}

// Validate email
export function validateEmail(emailElement) {
  let emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegEx.test(emailElement.value)) {
    return true;
  }
  signupError.innerHTML = "Invalid Email!";
  emailInputContainer.appendChild(signupError);
  return false;
}

// Validate password
export function validatePassword(passwordElement) {
  let passwordRegEx = /[A-Z]\w{6,}[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (passwordRegEx.test(passwordElement.value)) {
    return true;
  }
  signupError.innerHTML =
    "Password must:<br>- Starts with an uppercase letter<br>- Ends with a special character<br>- Has at least 8 character";
  passwordInputContainer.appendChild(signupError);
  return false;
}

// Validate age
export function validateAge(ageElement) {
  const ageValue = Number(ageElement.value);
  if (ageValue >= 18 && ageValue < 100) {
    return true;
  }
  signupError.innerHTML = "Age must between 18 and 100";
  signupError.style.padding = "0";
  signupError.style.fontSize = "16px";
  ageInputContainer.appendChild(signupError);
  return false;
}
