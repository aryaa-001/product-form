import React from "react";
import { useProducts } from "../context/productContext";
import Products from "./Products";
import { NavLink } from "react-router-dom";

const AllProduct = () => {
  const { productArray } = useProducts();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-indigo-700">All Products</h1>

        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
             transition
             ${
               isActive
                 ? "bg-indigo-600 text-white shadow"
                 : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
             }`
          }
        >
          <i className="ri-heart-fill text-lg"></i>
          Wishlist
        </NavLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {productArray.map((elem) => (
          <Products key={elem.id} elem={elem} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
