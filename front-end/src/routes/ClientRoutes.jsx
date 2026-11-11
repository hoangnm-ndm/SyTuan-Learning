import ClientLayout from "../components/layout/client/ClientLayout";
import AboutPage from "../pages/client/AboutPage";
import ContactPage from "../pages/client/ContactPage";
import PolicyPage from "../pages/client/PolicyPage";
import ShopPage from "../pages/client/ShopPage";
import HomePage from "../pages/client/HomePage";
import ProductDetailPage from "../pages/client/ProductDetailPage";

export const ClientRoutes = {
  path: "/",
  element: <ClientLayout />,
  children: [
    { path: "", element: <HomePage /> },
    { path: "products", element: <ShopPage /> },
    { path: "products/:id", element: <ProductDetailPage /> },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "policy",
      element: <PolicyPage />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
  ],
};
