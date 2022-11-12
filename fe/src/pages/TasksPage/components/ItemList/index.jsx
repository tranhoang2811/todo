import Item from "./components/Item/index.jsx";
import { useStores } from "../../../../context/rootStoreContext.js";
import { useObserver } from "mobx-react";

function ItemList() {
  const { taskStore } = useStores();
  console.log(taskStore.tasks);
  return useObserver(() => (
    <div className="items-list">
      {taskStore.tasks.map((value, index) => {
        return <Item name={value} key={index} />;
      })}
    </div>
  ));
}

export default ItemList;
