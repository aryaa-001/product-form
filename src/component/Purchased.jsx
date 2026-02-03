import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/productContext";
import Lottie from "lottie-react";
import successAnimation from "../assets/success.json";

const Purchased = () => {
  const { items, totalSum } = useProducts();
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center
    bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50
                    overflow-hidden "
    >
      <div
        className="w-full max-w-2xl bg-white/90 backdrop-blur
                      rounded-2xl shadow-xl border border-indigo-100 p-5
                      flex flex-col items-center gap-3"
      >
        <div
          className="w-20 h-20 rounded-full bg-green-100
                        flex items-center justify-center"
        >
          <Lottie
            animationData={successAnimation}
            loop={false}
            className="w-20 h-20"
          />
        </div>

        <h1 className="text-3xl cursor-default font-semibold text-gray-800 text-center">
          Order Confirmed
        </h1>

        <p className="text-sm cursor-default text-gray-500 text-center max-w-md">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div
          className="w-full rounded-xl border border-indigo-100
                        bg-white shadow-sm p-5"
        >
          <h2 className="text-lg cursor-default font-medium text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="flex flex-col gap-4 max-h-48 overflow-y-auto">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-lg bg-gray-50
                                flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain p-1"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-medium cursor-default text-gray-800 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm cursor-default text-gray-500">Qty: {item.quantity}</p>
                </div>

                <div className="font-medium cursor-default text-gray-800">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex justify-between items-center mt-5 pt-4
                          border-t font-semibold"
          >
            <span className="cursor-default">Total</span>
            <span className="text-indigo-600 cursor-default">{totalSum}</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/products")}
          className="mt-2 px-6 py-3 rounded-xl text-sm font-medium text-white
          bg-linear-to-r from-indigo-600 to-purple-600
                     hover:from-indigo-700 hover:to-purple-700
                     active:scale-95 transition cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Purchased;
