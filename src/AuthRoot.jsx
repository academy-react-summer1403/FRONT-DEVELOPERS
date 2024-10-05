import React from "react";
import NavbarAuth from "./components/NavbarAuth";
import FooterAuth from "./components/FooterAuth";
import { Outlet } from "react-router-dom";

const AuthRoot = () => {
  return (
    <div>
      <NavbarAuth />

      <Outlet />
      <FooterAuth />
    </div>
  );
};

export default AuthRoot;
