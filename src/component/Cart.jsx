import CartItems from "./CartItems";
import { useProducts } from "../context/productContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, totalSum, cartNumber } = useProducts();

  const navigate = useNavigate();

  return (
    <div className="h-full w-full pt-7 flex ">
      
      <div className=" h-full px-5 flex flex-col gap-5 overflow-y-auto scroll-smooth w-[70%]">
      <h1 className="text-2xl fixed -top-1 self-center h-13 bg-[rgb(239,239,239)] pt-3 text-center z-99 w-190 font-sans font-medium  mb-2">Shopping cart</h1>
        {items.map((elem) => {
          return <CartItems key={elem.id} elem={elem} />;
        })}
      </div>

      <div className="0 p-5 border-2 rounded-xl h-full w-[30%]">
        <div className="h-60 w-full flex gap-4 flex-col p-3 rounded-2xl bg-white">
          <h2 className="border-b-2 self-center text-[#939191]">
            Price details
          </h2>
          <h2 className="text-[#646262] font-medium">
            Number of items{" "}
            <span className="ml-20 font-medium">{cartNumber}</span>
          </h2>
          <h2 className="text-[#646262] font-medium">
            Delivery charges{" "}
            <span className="ml-20 font-medium text-green-600">Free</span>
          </h2>
          <h2 className="text-black/90 font-medium ">
            Total Amount <span className="ml-17 font-medium">{totalSum} /-</span>
          </h2>
          <button
            onClick={() => {
              return navigate("/summary");
            }}
            className="bg-blue-600 text-white hover:bg-blue-700 w-[50%] py-2 rounded-xl mx-auto mt-3 active:scale-95"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
