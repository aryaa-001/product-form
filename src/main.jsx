import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Form from "./component/Form";
import { ProductProvider } from "./context/productContext";
import AllProduct from "./component/AllProduct";
import Cart from "./component/Cart";
import Purchased from "./component/Purchased";
import Wishlist from "./component/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Form /> },
      { path: "products", element: <AllProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "wishlist", element: <Wishlist /> }
    ],
  },
  { path: "summary", element: <Purchased /> },
]);

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <RouterProvider router={router} />
  </ProductProvider>
);
