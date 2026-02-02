import React from "react";
import { useProducts } from "../context/productContext";
import Products from "./Products";

const AllProduct = () => {
  const { productArray } = useProducts();

  return (
    <div className="min-h-screen w-full grid grid-cols-4 gap-8 justify-items-center">
      {productArray.map((elem, idx) => (
        <Products key={idx} elem={elem} />
      ))}
    </div>
  );
};

export default AllProduct;
