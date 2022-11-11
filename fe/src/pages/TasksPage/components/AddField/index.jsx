function AddField() {
  return (
    <div className="add-item-container">
      <input
        type="text"
        className="item-input"
        placeholder="What do you need to do today?"
      />
      <button type="button" className="add-item-button">
        ADD
      </button>
    </div>
  );
}

export default AddField;
