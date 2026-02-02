import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/productContext";
import tick from "../assets/tick.png";

const Purchased = () => {
  const { items, totalSum } = useProducts();
  const navigate = useNavigate();

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col gap-7 py-4 items-center justify-center min-h-screen px-4">
      <img
        className="h-20  w-20"
        src={tick}
        alt="success"
      />

      <h1 className="text-4xl font-bold text-center">Thanks for your order!</h1>

      <div className="w-full max-w-xl bg-white border rounded-lg shadow-md p-5">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
          Order Summary
        </h2>

        <div className="flex flex-col gap-4 h-50 line-clamp-2 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-md"
              />

              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>

              <div className="font-medium">₹{item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-5 pt-4 border-t">
          <span className="text-lg font-semibold">Total Amount</span>
          <span className="text-lg font-bold">{totalSum}</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/products")}
        className="active:scale-95 cursor-pointer py-2 px-4 bg-blue-600 text-white rounded-md"
      >
        Return to dashboard
      </button>
    </div>
  );
};

export default Purchased;
