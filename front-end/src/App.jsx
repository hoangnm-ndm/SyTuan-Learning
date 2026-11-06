import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AdminLayout from "./components/layout/admin/AdminLayout";
import ClientLayout from "./components/layout/client/ClientLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import AboutPage from "./pages/client/AboutPage";
import ContactPage from "./pages/client/ContactPage";
import PolicyPage from "./pages/client/PolicyPage";
import ShopPage from "./pages/client/ShopPage";
import NotFoundPage from "./pages/common/NotFoundPage";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
  
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Route>
    
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<ProductManagement />} />
            
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> */}

      <AppRouter />
    </>
  );
}

export default App;
