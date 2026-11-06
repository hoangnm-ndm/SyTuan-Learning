import React from "react";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";
import { Outlet } from "react-router";

const ClientLayout = () => {
  return (
    <>
      <HeaderClient />
      <Outlet />
      <FooterClient />
    </>
  );
};

export default ClientLayout;
