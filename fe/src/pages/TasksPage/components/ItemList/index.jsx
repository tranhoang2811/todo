import Item from "./components/Item/index.jsx";
import { useStores } from "../../../../context/rootStoreContext.js";
import { useObserver } from "mobx-react";
import { useEffect } from "react";

function ItemList() {
  const { taskStore } = useStores();
  useEffect(() => {
    taskStore.fetchTaskList();
  }, []);

  return useObserver(() => (
    <div className="items-list">
      {taskStore.tasks.map((task) => {
        return <Item name={task.name} key={task._id} />;
      })}
    </div>
  ));
}

export default ItemList;
