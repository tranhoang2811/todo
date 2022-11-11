import Header from "./components/Header/index.jsx";
import AddField from "./components/AddField/index.jsx";
import ItemList from "./components/ItemList/index.jsx";
import "./style.css";

function TasksPage() {
  return (
    <div className="container">
      <Header />
      <AddField />
      <ItemList />
    </div>
  );
}

export default TasksPage;
