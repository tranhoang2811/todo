import { useState } from "react";
import axios from "axios";
import TasksPage from "./pages/TasksPage/index.jsx";
import { rootStore } from "./stores/rootStore.js";
import { Provider } from "mobx-react";
function App() {
  // const [items, setItems] = useState([]);
  // const [item, setItem] = useState("");

  // const handleAddItem = () => {
  //   setItems((prev) => [...prev, item]);
  //   setItem("");
  //   createItem();
  // };

  // const createItem = () => {
  //   axios
  //     .post(" http://localhost:3000/tasks", {
  //       name: item,
  //       isDone: false,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };
  return (
    <Provider {...rootStore}>
      <TasksPage />
    </Provider>

    // Fix git
    // <div>
    //   <input
    //     value={item}
    //     onChange={(e) => {
    //       setItem(e.target.value);
    //     }}
    //   />
    //   <button onClick={handleAddItem}>Add</button>
    //   <ul>
    //     {items.map((value, index) => {
    //       return <li key={index}>{value}</li>;
    //     })}
    //   </ul>
    //   <TasksPage />
    // </div>
  );
}

export default App;
