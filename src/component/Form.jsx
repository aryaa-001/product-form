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
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg border border-gray-200">
      <h1 className="text-center font-bold text-2xl mb-6 underline font-mono">
        Create Your Product Here
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 flex flex-col"
      >
        <div className="flex flex-col gap-1">
          
          <label
            htmlFor="imageUrl"
            className="text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            {...register("imageUrl")}
            id="imageUrl"
            type="url"
            placeholder="https://example.com/image.jpg"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="productName"
            className="text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            {...register("name")}
            id="productName"
            type="text"
            placeholder="Enter product name"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            {...register("price")}
            id="price"
            type="text"
            placeholder="Enter price"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            defaultValue=""
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md
                       bg-white text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="gym">Fitness</option>
            <option value="study">Study</option>
            <option value="beauty">Beauty</option>
            <option value="beauty">Gardening</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-1/2 mx-auto mt-4 py-2 text-sm font-medium rounded-md
                     bg-blue-600 text-white hover:bg-blue-700
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
