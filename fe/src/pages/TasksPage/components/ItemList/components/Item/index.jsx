import "../../../../../../assets/fonts/themify-icons/themify-icons.css";
import { useStores } from "../../../../../../context/rootStoreContext.js";

function Item(props) {
  const { taskStore } = useStores();

  const handleDeleteTask = () => {
    taskStore.removeTask(props.targetId);
  };

  return (
    <div className="item">
      <input type="checkbox" className="item-checkbox" />
      <p className="item-content">{props.name}</p>
      <button className="edit-item-button ti-pencil"></button>
      <button className="delete-item-button" onClick={handleDeleteTask}>
        Del
      </button>
    </div>
  );
}

export default Item;
