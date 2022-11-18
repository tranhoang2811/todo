import { useState } from "react";
import { useStores } from "../../../../context/rootStoreContext.js";


function InformationInput(props) {
  const { userStore } = useStores();
  // const [input, setInput] = useState("");

  return (
    <div className={`${props.type}-input`}>
      <div className="input-container">
        <label
          htmlFor={`${props.type}`}
          className={`${props.type}-icon ${props.iconType} input-icon`}
        ></label>
        <input
          type="text"
          id={`${props.type}`}
          className="input-information"
          placeholder={props.type[0].toUpperCase() + props.type.substring(1)}
          onChange = {(e) => props.setInput(e.target.value)}
          // value = {input}
        />
      </div>
    </div>
  );
}

export default InformationInput;
