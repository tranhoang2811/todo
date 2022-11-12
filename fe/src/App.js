import Router from "./Router/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { rootStore } from "./stores/rootStore.js";
import { Provider } from "mobx-react";
function App() {
  return (
    <Provider {...rootStore}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
