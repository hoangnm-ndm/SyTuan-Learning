import React from "react";
import SidebarAdmin from "./SidebarAdmin";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SidebarAdmin />
      <div>
        <HeaderAdmin />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
