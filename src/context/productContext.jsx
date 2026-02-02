import { createContext, useContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [productArray, setProductData] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("item")) || [];
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const wishlistAdded = (elem) => {
    setWishlist((prev) => {
      const alreadyExist = prev.some((e) => e.id === elem.id);

      if (alreadyExist) return prev.filter((e) => e.id !== elem.id);

      return [...prev, { ...elem }];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((e) => e.id !== id));
  };

  const itemAdded = (elem) => {
    setItems((prev) => {
      const alreadyExist = prev.some((e) => e.id === elem.id);

      if (alreadyExist) return prev;

      return [
        ...prev,
        {
          id: elem.id,
          image: elem.imageUrl,
          name: elem.name,
          price: elem.price,
          quantity: 1,
        },
      ];
    });
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(items));
  }, [items]);

  function deleteCard(id) {
    setItems((prev) => prev.filter((e) => e.id !== id));
  }

  function deleteProduct(id) {
    setProductData((prev) => prev.filter((e) => e.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productArray));
  }, [productArray]);

  let sum = 0;
  let totalSum;
  items.forEach((elem) => {
    sum = sum + Number(elem.price) * elem.quantity;
    totalSum = sum.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return totalSum;
  });

  function increaseQuantity(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(id) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
  let cartNumber = 0;
  items.forEach((e) => {
    cartNumber = cartNumber + e.quantity;
    return cartNumber;
  });

  return (
    <ProductContext.Provider
      value={{
        productArray,
        setProductData,
        items,
        setItems,
        deleteCard,
        itemAdded,
        totalSum,
        cartNumber,
        increaseQuantity,
        decreaseQuantity,
        deleteProduct,
        wishlist,
        setWishlist,
        wishlistAdded,
        removeFromWishlist,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
