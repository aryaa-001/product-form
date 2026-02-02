import React, { useState, useEffect } from "react";
import { useProducts } from "../context/productContext";

const Products = ({ elem }) => {
  const { items, itemAdded, deleteProduct, productArray } = useProducts();

  const alreadyInCart = items.some((e) => e.id === elem.id); 

  let priceNumber = Number(
    String(elem.price).replace(/,/g, "")
  );
  
  priceNumber = priceNumber.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });

  return (
    <div className="h-80 w-55 shadow-xl bg-white flex flex-col border-2 rounded-xl p-2">
      <div className="h-[50%] w-full relative">
        <button
        onClick={()=>{
          return deleteProduct(elem.id)
        }}
          className="absolute top-0 -right-1 z-10 w-5 h-5 active:scale-95 cursor-pointer opacity-80 bg-red-500 text-white rounded-full text-xs font-bold flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
          title="Remove product"
        >
          X
        </button>

        <img
          src={elem.imageUrl}
          alt={elem.name}
          className="h-full rounded-xl w-full object-cover"
        />
      </div>
      <div className="text-[15px] flex flex-col gap-3 mt-4 justify-between">
        <h4>
          <b>Name:</b> {elem.name}
        </h4>
        <h4>
          <b>Price:</b> {priceNumber}
        </h4>
        <h4>
          <b>Category:</b> {elem.category}
        </h4>
        <button
          onClick={() => {
            itemAdded(elem);
          }}
          className={`border-2 cursor-pointer py-1 w-30 self-center rounded-xl
          ${
            alreadyInCart
              ? "bg-gray-400"
              : "bg-green-700 text-white active:scale-95"
          }`}
        >
          {alreadyInCart ? "Added" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Products;
