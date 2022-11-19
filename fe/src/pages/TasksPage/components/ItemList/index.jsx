import Item from "./components/Item/index.jsx";
import { useStores } from "../../../../context/rootStoreContext.js";
import { observer } from "mobx-react";
import { useEffect } from "react";

function ItemList() {
  const { taskStore } = useStores();
  useEffect(() => {
    taskStore.fetchTaskList();
  }, []);

  return ( 
    <div className="items-list">
      // check array before
      { Array.isArray(taskStore?.tasks) && taskStore?.tasks.map((task) => {
        return <Item name={task.name} key={task._id} targetId={task._id} />;
      })}
    </div>
  );
}

export default observer(ItemList);
