import React from "react";
import { useProducts } from "../context/productContext";

const Products = ({ elem }) => {
  const { items, itemAdded, deleteProduct, wishlistAdded, wishlist } =
    useProducts();

  const alreadyInCart = items.some((e) => e.id === elem.id);
  const isWishlisted = wishlist.some((e) => e.id === elem.id);

  let priceNumber = Number(String(elem.price).replace(/,/g, ""));
  priceNumber = priceNumber.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div
      className="relative w-64 rounded-2xl bg-white/90 backdrop-blur
                    border border-indigo-100 shadow-lg
                    hover:shadow-xl transition"
    >
      <div className="relative h-44 w-full rounded-t-2xl bg-gray-50 flex items-center justify-center">
        <img
          src={elem.imageUrl}
          alt={elem.name}
          className="max-h-full rounded-3xl max-w-full object-contain p-3"
        />

        <button
          onClick={() => deleteProduct(elem.id)}
          className="absolute top-2 right-2 w-6 h-6 rounded-full
                     bg-red-500 text-white text-xs font-bold
                     flex items-center justify-center
                     hover:bg-red-600 active:scale-95"
        >
          ✕
        </button>

        <i
          onClick={() => wishlistAdded(elem)}
          className={`absolute bottom-2 right-2 text-xl cursor-pointer transition
            ${
              isWishlisted
                ? "ri-heart-fill text-red-500"
                : "ri-heart-line text-black hover:text-red-400"
            }`}
        ></i>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-medium text-gray-800 line-clamp-1">{elem.name}</h3>

        <p className="text-indigo-600 font-semibold">{priceNumber}</p>

        <p className="text-xs text-gray-500 capitalize">{elem.category}</p>

        <button
          onClick={() => itemAdded(elem)}
          disabled={alreadyInCart}
          className={`mt-3 w-full py-2 rounded-lg text-sm font-medium transition ${
            alreadyInCart
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 active:scale-95"
          }`}
        >
          {alreadyInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default Products;
