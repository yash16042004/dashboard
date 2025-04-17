import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectForm from "./pages/ProjectForm";
import PrivateRoute from "./components/PrivateRoute";

const RoutesComponent = () => {
  return useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "/project",
      element: (
        <PrivateRoute>
          <ProjectForm />
        </PrivateRoute>
      ),
    },
    {
      path: "/project/:id",
      element: (
        <PrivateRoute>
          <ProjectForm />
        </PrivateRoute>
      ),
    },
  ]);
};

const App = () => {
  return <RoutesComponent />;
};

export default App;
