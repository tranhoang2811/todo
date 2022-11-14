function GenderInput() {
  return (
    <div className="gender-input">
      <label htmlFor="male" className="male-label">
        Male
      </label>
      <input type="radio" id="male" name="gender" checked={true} />
      <label htmlFor="female" className="female-label">
        Female
      </label>
      <input type="radio" id="female" name="gender" />
    </div>
  );
}

export default GenderInput;
