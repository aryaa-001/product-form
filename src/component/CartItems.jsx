import React from "react";
import { useProducts } from "../context/productContext";

const CartItems = ({ elem }) => {
  const { deleteCard, decreaseQuantity, increaseQuantity } = useProducts();

  const price = Number(elem.price).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div
      className="relative flex items-center gap-5 p-4 rounded-xl
                    bg-white/90 backdrop-blur border border-indigo-100
                    shadow-sm hover:shadow-md transition"
    >
      <button
        onClick={() => deleteCard(elem.id)}
        className="absolute top-3 cursor-pointer right-3 text-gray-400 hover:text-red-600
                   text-sm font-bold transition"
      >
        ✕
      </button>

      <div className="w-24 h-24 rounded-lg bg-gray-50 flex items-center justify-center">
        <img
          src={elem.image}
          alt={elem.name}
          className="max-h-full max-w-full object-contain p-2"
        />
      </div>

      <div className="flex flex-col flex-1 gap-1">
        <h2 className="font-medium text-gray-800 cursor-default line-clamp-1">{elem.name}</h2>
        <p className="text-indigo-600 cursor-default font-semibold">{price}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQuantity(elem.id)}
          className="w-8 h-8 rounded-lg cursor-pointer border border-gray-300
                     text-lg font-medium hover:bg-gray-100
                     active:scale-95 transition"
        >
          −
        </button>

        <span className="min-w-6 cursor-default text-center font-medium">{elem.quantity}</span>

        <button
          onClick={() => increaseQuantity(elem.id)}
          className="w-8 h-8 rounded-lg cursor-pointer border border-gray-300
                     text-lg font-medium hover:bg-gray-100
                     active:scale-95 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
