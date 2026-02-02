import React from "react";
import { useProducts } from "../context/productContext";
import WishlistItem from "./WishlistItems";

const Wishlist = () => {
  const { wishlist } = useProducts();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-indigo-700">Wishlist</h1>
        <p className="text-sm text-gray-500 mt-1">
          Products you’ve saved for later
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div
          className="h-64 flex flex-col items-center justify-center
                        rounded-xl border border-dashed text-gray-500"
        >
          <i className="ri-heart-line text-4xl mb-2"></i>
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {wishlist.map((elem) => (
            <WishlistItem key={elem.id} elem={elem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
