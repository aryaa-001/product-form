import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <div className="min-h-screen flex bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50">
      <aside className="w-64 bg-linear-to-b from-indigo-700 to-purple-700 text-white shadow-xl">
        <div className="p-6">
          <h1 className="text-2xl cursor-default font-semibold tracking-tight mb-10">
            Store Admin
          </h1>
          <Navigation />
        </div>
      </aside>

      <main className="flex-1 p-6 overflow-hidden">
        <div
          className="max-w-7xl mx-auto h-full
                  bg-white/90 backdrop-blur rounded-2xl
                  shadow-xl border border-indigo-100 p-6"
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
