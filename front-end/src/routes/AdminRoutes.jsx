import AdminLayout from "../components/layout/admin/AdminLayout";
import CategoryManagement from "../pages/admin/CategoryManagement";
import Dashboard from "../pages/admin/Dashboard";
import ProductManagement from "../pages/admin/ProductManagement";
import Settings from "../pages/admin/Settings";
import UserManagement from "../pages/admin/UserManagement";

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { path: "", element: <Dashboard /> },
    { path: "products", element: <ProductManagement /> },
    { path: "categories", element: <CategoryManagement /> },
    { path: "users", element: <UserManagement /> },
    { path: "settings", element: <Settings /> },
  ],
};
