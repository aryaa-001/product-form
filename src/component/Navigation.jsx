import React from "react";
import { NavLink } from "react-router-dom";
import { useProducts } from "../context/productContext";

const Navigation = () => {
  const { cartNumber } = useProducts();

  return (
    <div className="flex flex-col gap-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 text-sm font-medium rounded-md
       ${
         isActive
           ? "bg-blue-700 text-white"
           : "bg-blue-600 text-white hover:bg-blue-700"
       }
       focus:outline-none focus:ring-2 focus:ring-blue-400`
        }
      >
        Create form
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          `px-4 py-2 text-sm font-medium rounded-md border
       ${
         isActive
           ? "bg-blue-100 border-blue-400 text-blue-800"
           : "bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100"
       }
       focus:outline-none focus:ring-2 focus:ring-blue-300`
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `relative px-4 py-2 text-sm font-medium rounded-md border
     ${
       isActive
         ? "bg-blue-100 border-blue-400 text-blue-800"
         : "bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100"
     }
     focus:outline-none focus:ring-2 focus:ring-blue-300`
        }
      >
        Cart
        <span
          className="absolute -top-1 -right-1 
               min-w-4.5 h-4.5
               flex items-center justify-center
               text-[11px] font-semibold
               rounded-full
               bg-red-600 text-white"
        >
          {cartNumber}
        </span>
      </NavLink>
    </div>
  );
};

export default Navigation;
