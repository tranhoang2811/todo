import "../../../../../../assets/fonts/themify-icons/themify-icons.css";

function Item({ name }) {
  return (
    <div className="item">
      <input type="checkbox" className="item-checkbox" />
      <p className="item-content">{name}</p>
      <button className="edit-item-button ti-pencil"></button>
      <button className="delete-item-button">Del</button>
    </div>
  );
}

export default Item;
