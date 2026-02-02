import React from "react";
import { NavLink } from "react-router-dom";
import { useProducts } from "../context/productContext";

const Navigation = () => {
  const { cartNumber } = useProducts();

  const baseClasses =
    "flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition";

  return (
    <nav className="flex flex-col gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive
              ? "bg-white/20 text-white"
              : "text-indigo-100 hover:bg-white/10 hover:text-white"
          }`
        }
      >
        Create Product
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive
              ? "bg-white/20 text-white"
              : "text-indigo-100 hover:bg-white/10 hover:text-white"
          }`
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `${baseClasses} ${
            isActive
              ? "bg-white/20 text-white"
              : "text-indigo-100 hover:bg-white/10 hover:text-white"
          }`
        }
      >
        <span>Cart</span>

        {cartNumber > 0 && (
          <span
            className="ml-2 min-w-5 h-5 px-1
                       flex items-center justify-center
                       text-[11px] font-semibold
                       rounded-full
                       bg-pink-500 text-white"
          >
            {cartNumber}
          </span>
        )}
      </NavLink>
    </nav>
  );
};

export default Navigation;
