function InformationInput(props) {
  return (
    <div className={`${props.type}-input`}>
      <div className="input-container">
        <label
          for={`${props.type}`}
          className={`${props.type}-icon ti-user input-icon`}
        ></label>
        <input
          type="text"
          id={`${props.type}`}
          className="input-information"
          placeholder={props.type[0].toUpperCase() + props.type.substring(1)}
        />
      </div>
    </div>
  );
}

export default InformationInput;
