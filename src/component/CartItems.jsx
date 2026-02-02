import React from "react";
import { useProducts } from "../context/productContext";

const CartItems = ({ elem }) => {
  const { deleteCard, decreaseQuantity, increaseQuantity } = useProducts();

  const price = Number(elem.price)

  return (
    <div className="relative w-full flex bg-white items-center gap-4 p-4 border rounded-lg shadow-sm">
      <button
        onClick={() => deleteCard(elem.id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-600
                   text-sm font-bold transition"
      >
        ✕
      </button>

      <div className="w-24 h-24 shrink-0">
        <img
          src={elem.image}
          alt={elem.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h1 className="font-medium text-lg line-clamp-1">{elem.name}</h1>
        <h2 className="text-gray-600">
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(elem.id)}
          className="w-8 h-8 border rounded-md text-lg font-medium
                     active:scale-95 hover:bg-gray-100"
        >
          -
        </button>

        <span className="min-w-5 text-center">{elem.quantity}</span>

        <button
          onClick={() => increaseQuantity(elem.id)}
          className="w-8 h-8 border rounded-md text-lg font-medium
                     active:scale-95 hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
