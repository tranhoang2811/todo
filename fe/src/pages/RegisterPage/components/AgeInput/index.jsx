function AgeInput() {
  return (
    <div className="age-input">
      <label for="age" className="age-Label">
        Age:
      </label>
      <input type="number" id="age" value="0" />
    </div>
  );
}

export default AgeInput;
