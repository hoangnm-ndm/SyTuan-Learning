import { createBrowserRouter, RouterProvider } from "react-router";
import { AdminRoutes } from "./AdminRoutes";
import { ClientRoutes } from "./ClientRoutes";

const routes = createBrowserRouter([ClientRoutes, AdminRoutes]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
