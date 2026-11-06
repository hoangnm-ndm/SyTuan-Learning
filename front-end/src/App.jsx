import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import HeaderClient from "./components/layout/client/HeaderClient";
import FooterClient from "./components/layout/client/FooterClient";
import ShopPage from "./pages/client/ShopPage";
import AboutPage from "./pages/client/AboutPage";
import ContactPage from "./pages/client/ContactPage";
import PolicyPage from "./pages/client/PolicyPage";
import NotFoundPage from "./pages/common/NotFoundPage";
import ClientLayout from "./components/layout/client/ClientLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/layout/admin/AdminLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* client layout */}
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            {/* viet tiep vao day */}
          </Route>

          {/* auth layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
