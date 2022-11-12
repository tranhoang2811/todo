import routerPath from "./routerPath.jsx";
import { Routes, Route } from "react-router-dom";
import TasksPage from "../pages/TasksPage/index.jsx";
import RegisterPage from "../pages/RegisterPage/index.jsx";

function Router() {
  return (
    <Routes>
      <Route path={routerPath.tasks.value} element={<TasksPage />} />
      <Route path={routerPath.register.value} element={<RegisterPage />} />
    </Routes>
  );
}

export default Router;
