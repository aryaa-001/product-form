import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="flex gap-10">
        <div className="border-r-2 p-10">
          <Navigation />
        </div>
        <div className="min-h-screen w-[80%] p-5 justify-center">
          <Outlet />
        </div>
    </div>
  );
};

export default Layout;
