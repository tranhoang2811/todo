function GenderInput() {
  return (
    <div className="gender-input">
      <label for="male" className="male-label">
        Male
      </label>
      <input type="radio" id="male" name="gender" checked="true" />
      <label for="female" className="female-label">
        Female
      </label>
      <input type="radio" id="female" name="gender" />
    </div>
  );
}

export default GenderInput;
