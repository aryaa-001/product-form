import CartItems from "./CartItems";
import { useProducts } from "../context/productContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, totalSum, cartNumber } = useProducts();
  const navigate = useNavigate();

  return (
    <div className="flex gap-8">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-2xl font-medium unde text-indigo-700">
          Checkout
        </h1>

        {items.length === 0 ? (
          <div
            className="h-64 flex items-center justify-center rounded-xl
                          border border-dashed text-gray-500"
          >
            Your cart is empty
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((elem) => (
              <CartItems key={elem.id} elem={elem} />
            ))}
          </div>
        )}
      </div>

      <div className="w-80">
        <div
          className="sticky top-6 rounded-2xl border border-indigo-100
                        bg-white/90 backdrop-blur shadow-lg p-6"
        >
          <h2 className="text-lg font-medium text-gray-800 border-b pb-3 mb-4">
            Price Details
          </h2>

          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Items</span>
            <span>{cartNumber}</span>
          </div>

          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>

          <div
            className="flex justify-between font-semibold text-gray-900
                          border-t pt-3 mt-3"
          >
            <span>Total</span>
            <span>{totalSum}</span>
          </div>

          <button
            onClick={() => navigate("/summary")}
            className="mt-6 w-full py-3 rounded-xl text-sm font-medium text-white
            bg-linear-to-br from-indigo-600 to-purple-600
                       hover:from-indigo-700 hover:to-purple-700
                       active:scale-95 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
