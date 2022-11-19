import { useStores } from "../../../../context/rootStoreContext.js";
import { useState } from "react";

function AddField() {
  const { taskStore } = useStores();
  const [itemContent, setItemContent] = useState("");
  function handleAddItem() {
    taskStore.addTask(itemContent);
    setItemContent("");
  };

  return (
    <div className="add-item-container">
      <input
        className="item-input"
        placeholder="What do you need to do today?"
        onChange={(event) => setItemContent(event.target.value)}
        value={itemContent}
      />
      <button type="button" className="add-item-button" onClick={handleAddItem}>
        ADD
      </button>
    </div>
  );
}

export default AddField;
