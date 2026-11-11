import AdminLayout from "../components/layout/admin/AdminLayout";
import CategoryManagement from "../pages/admin/CategoryManagement";
import Dashboard from "../pages/admin/Dashboard";
import ProductFormPage from "../pages/admin/ProductFormPage";
import ProductManagement from "../pages/admin/ProductManagement";
import Settings from "../pages/admin/Settings";
import UserManagement from "../pages/admin/UserManagement";

export const AdminRoutes = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    { path: "", element: <Dashboard /> },
    { path: "products", element: <ProductManagement /> },
    { path: "products/update/:id", element: <ProductFormPage /> },
    { path: "products/add", element: <ProductFormPage /> },
    { path: "categories", element: <CategoryManagement /> },
    { path: "users", element: <UserManagement /> },
    { path: "settings", element: <Settings /> },
  ],
};
