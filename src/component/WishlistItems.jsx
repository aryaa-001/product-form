import React from "react";
import { useProducts } from "../context/productContext";

const WishlistItem = ({ elem }) => {
  const { itemAdded, removeFromWishlist } = useProducts();

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
        onClick={() => removeFromWishlist(elem.id)}
        className="absolute top-3 right-3 text-gray-400 hover:text-red-600
                   text-sm font-bold transition"
        title="Remove from wishlist"
      >
        ✕
      </button>

      <div
        className="w-24 h-24 rounded-lg bg-gray-50
                      flex items-center justify-center"
      >
        <img
          src={elem.imageUrl}
          alt={elem.name}
          className="max-h-full max-w-full object-contain p-2"
        />
      </div>

      <div className="flex flex-col flex-1 gap-1">
        <h2 className="font-medium text-gray-800 line-clamp-1">{elem.name}</h2>
        <p className="text-indigo-600 font-semibold">{price}</p>
      </div>

      <button
        onClick={() => {
          itemAdded(elem);
          removeFromWishlist(elem.id);
        }}
        className="px-4 py-2 rounded-lg text-sm font-medium text-white
        bg-linear-to-r from-indigo-600 to-purple-600
                   hover:from-indigo-700 hover:to-purple-700
                   active:scale-95 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default WishlistItem;
