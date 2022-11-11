import Item from "./components/Item/index.jsx";

function ItemList() {
  return (
    <div className="items-list">
      <Item name={"test content"} key={123} />
    </div>
  );
}

export default ItemList;
