import React from "react";
import { useForm } from "react-hook-form";
import { useProducts } from "../context/productContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { setProductData } = useProducts();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    const newData = { ...data, id: Date.now() };
    setProductData((prev) => [...prev, newData]);
    reset();
    navigate("/products");
  }

  return (
    <div
      className="h-full flex items-center justify-center
    bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50
                    overflow-hidden px-4"
    >
      <div
        className="w-full max-w-3xl rounded-2xl
                      bg-white/90 backdrop-blur
                      border border-indigo-100 shadow-xl"
      >
        <div className="px-6 py-5 border-b border-indigo-100">
          <h1 className="text-2xl font-semibold text-indigo-700">
            Add New Product
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create a product to display in your store
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Product Image URL
            </label>
            <input
              {...register("imageUrl")}
              type="url"
              placeholder="https://example.com/product.jpg"
              className="mt-1 w-full rounded-lg border placeholder:opacity-55 border-gray-300 px-3 py-2
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         outline-none transition"
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Wireless Headphones"
              className="mt-1 w-full rounded-lg border placeholder:opacity-55 border-gray-300 px-3 py-2
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Price (₹)
            </label>
            <input
              {...register("price")}
              type="text"
              placeholder="2999"
              className="mt-1 w-full rounded-lg border placeholder:opacity-55 border-gray-300 px-3 py-2
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         outline-none transition"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              {...register("category")}
              defaultValue=""
              className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                         outline-none transition"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="fitness">Fitness</option>
              <option value="study">Study</option>
              <option value="beauty">Beauty</option>
              <option value="gardening">Gardening</option>
            </select>
          </div>

          <div className="col-span-2 flex justify-end gap-3 pt-4 border-t border-indigo-100">
            <button
              type="button"
              onClick={() => navigate("/products")}
              className="px-5 py-2 rounded-lg border border-gray-300 text-sm
                         hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg text-sm font-medium text-white
              bg-linear-to-r from-indigo-600 to-purple-600
                         hover:from-indigo-700 hover:to-purple-700
                         active:scale-95 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
