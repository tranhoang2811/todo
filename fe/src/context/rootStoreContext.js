import { createContext, useContext } from "react";
import { rootStore } from "../stores/rootStore.js";

export const rootStoreContext = createContext(rootStore);

export const useStores = () => useContext(rootStoreContext);
