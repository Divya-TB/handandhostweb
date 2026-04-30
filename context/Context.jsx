

"use client";

import React, { useEffect, useContext, useState } from "react";

const dataContext = React.createContext({
  cartProducts: [],
  wishList: [],
  compareItem: [],
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useContextElement = () => useContext(dataContext);

export default function Context({ children }) {
  const [userId, setUserId] = useState(0);

  const [homebanner, sethomebanner] = useState([]);
  const [categorybanner, setcategorybanner] = useState([]);
  const [product, setProduct] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [productreview, setProductReview] = useState([]);
  const [compareItem, setCompareItem] = useState([1, 2, 3]);
  const [quickViewItem, setQuickViewItemState] = useState();
  const [quickAddItem, setQuickAddItem] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // console.log('user_Id.............................................',Number(localStorage.getItem("userId")))
  useEffect(() => {
    const userId = Number(localStorage.getItem("userId")) || 0;
    setUserId(userId);
  }, []);

  /* ---------------- HOME BANNER ---------------- */
  useEffect(() => {
    fetch(`${API_URL}/api/homebanner`)
      .then((res) => res.json())
      .then((data) => sethomebanner(data));
      // console.log('banner...................',data)
  }, []);

  /* ---------------- CATEGORY ---------------- */
  useEffect(() => {
    fetch(`${API_URL}/api/subcategorylist`)
      .then((res) => res.json())
      .then((data) => setcategorybanner(data));
  }, []);

  /* ---------------- PRODUCTS ---------------- */
  useEffect(() => {
    console.log('user.......................',userId)
  fetch(`${API_URL}/api/homeproduct?userid=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);

      // Only apply wishlist/cart if user is logged in
      if (userId !== 0) {
        const wishlistData = data
          .filter((item) => Number(item.isWishlisted) === 1)
          .map((item) => ({
            product_ID: Number(item.id),
            productwishlist_ID:
              Number(item.productwishlist_ID) || 0,
          }));

        const cartData = data
        .filter((item) => Number(item.isAddedToCart) === 1)
        .map((item) => ({
          ...item,
          product_ID: Number(item.id),
          User_ID: userId,
          quantity: Number(item.quantity) || 1,
        }));

        setWishList(wishlistData);
        setCartProducts(cartData);
      } else {
        // Guest user → clear or keep local
        setWishList([]);
        setCartProducts([]);
      }
    });
}, [userId]);

  /* ---------------- QUICK VIEW ---------------- */
  const setQuickViewItem = async (id) => {
    const res = await fetch(
      `${API_URL}/api/home/products_detail/${id}/${userId}`
    );

    const data = await res.json();
    setQuickViewItemState(data);
  };

  /* ---------------- TOTAL PRICE ---------------- */

  useEffect(() => {
    if (!Array.isArray(cartProducts)) return;

    const subtotal = cartProducts.reduce((acc, item) => {
      return acc + (item.quantity || 0) * (item.discount_price || 0);
    }, 0);

    setTotalPrice(subtotal);
  }, [cartProducts]);


  /* ---------------- GET WISHLIST ---------------- */
  useEffect(() => {
    fetch(`${API_URL}/api/get-wishlist/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setWishList(data.data || []);
      });
  }, []);

  /* ---------------- GET CART ---------------- */
useEffect(() => {
  if (!userId) return;

  fetch(`${API_URL}/api/get-cart/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setCartProducts(Array.isArray(data) ? data : data.data || []);
    });
}, [userId]);

  /* ---------------- CHECK CART ---------------- */
 const isAddedToCartProducts = (productId) => {
  if (!Array.isArray(cartProducts)) return false;

  return cartProducts.some(
    (item) =>
      Number(item.product_ID || item.id) === Number(productId) &&
      Number(item.User_ID || userId) === Number(userId)
  );
};


const addProductToCart = async (productId, qty = 1) => {
  try {
    setCartProducts((prev) => {
      const safe = Array.isArray(prev) ? prev : [];

      const index = safe.findIndex(
        (item) =>
          Number(item.product_ID || item.id) === Number(productId)
      );

      if (index > -1) {
        const updated = [...safe];
        updated[index] = {
          ...updated[index],
          quantity: qty,
        };
        return updated;
      }

      const productData = product.find(
        (p) => Number(p.id) === Number(productId)
      );

      if (!productData) return safe;

      return [
        ...safe,
        {
          ...productData,
          product_ID: productId,
          quantity: qty,
          User_ID: userId,
        },
      ];
    });

    await fetch(`${API_URL}/api/add-to-cart`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product_ID: productId,
        User_ID: userId,
        quantity: qty,
      }),
    });

  } catch (err) {
    console.log(err);
  }
};
  /* ---------------- UPDATE CART QTY ---------------- */
 const updateQuantity = (id, qty) => {
  setCartProducts((prev) => {
    return prev.map((item) => {
      if (Number(item.product_ID || item.id) === Number(id)) {
        return { ...item, quantity: qty };
      }
      return item;
    });
  });
};


  const removeFromCart = async (productId) => {
  try {
    const item = cartProducts.find(
      (x) =>
        Number(x.product_ID || x.id) === Number(productId)
    );

    setCartProducts((prev) =>
      prev.filter(
        (x) =>
          Number(x.product_ID || x.id) !== Number(productId)
      )
    );

    const res = await fetch(
      `${API_URL}/api/remove-cart/${productId}/${userId}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (!data.status) {
      console.log("Remove failed");
    }
  } catch (err) {
    console.log(err);
  }
};

  /* ---------------- ADD WISHLIST ---------------- */
  const addToWishlist = async (id) => {
    try {
      const alreadyExists = wishList.some(
        (item) =>
          Number(item.product_ID) ===
          Number(id)
      );

      if (alreadyExists) return;

      const res = await fetch(
        `${API_URL}/api/add-to-wishlist`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            product_ID: Number(id),
            User_ID: Number(userId),
          }),
        }
      );

      const data = await res.json();

      if (data.length != 0) {
        setWishList((prev) => [
          ...prev,
          {
            product_ID: Number(id),
            productwishlist_ID:
              Number(
                data.productwishlist_ID
              ),
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* ---------------- REMOVE WISHLIST ---------------- */
  const removeFromWishlist = async (id) => {
    const item = wishList.find(
      (x) =>
        Number(x.product_ID) ===
        Number(id)
    );

    if (!item) return;

    await fetch(
      `${API_URL}/api/remove-wishlist/${item.productwishlist_ID}`,
      {
        method: "DELETE",
      }
    );

    setWishList((prev) =>
      prev.filter(
        (x) =>
          Number(x.product_ID) !==
          Number(id)
      )
    );
  };



   

  /* ---------------- CHECK WISHLIST ---------------- */
  const isAddedtoWishlist = (id) => {
    return wishList.some(
      (item) =>
        Number(item.product_ID) ===
        Number(id)
    );
  };

  /* ---------------- COMPARE ---------------- */
  const addToCompareItem = (id) => {
    if (!compareItem.includes(id)) {
      setCompareItem((prev) => [
        ...prev,
        id,
      ]);
    }
  };

  const removeFromCompareItem = (id) => {
    setCompareItem((prev) =>
      prev.filter((item) => item != id)
    );
  };

  const isAddedtoCompareItem = (id) => {
    return compareItem.includes(id);
  };

  /* ---------------- LOCAL STORAGE ---------------- */
  useEffect(() => {
    localStorage.setItem(
      "cartList",
      JSON.stringify(cartProducts)
    );
  }, [cartProducts]);

  /* ---------------- PRODUCT REVIEW ---------------- */
  useEffect(() => {
    fetch(
      `${API_URL}/api/product-review`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductReview(
          data.data || []
        );
      });
  }, []);

  /* ---------------- CONTEXT ---------------- */
  const contextElement = {
    homebanner,
    categorybanner,
    product,

    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    updateQuantity,
    removeFromCart,

    wishList,
    addToWishlist,
    removeFromWishlist,
    isAddedtoWishlist,

    quickViewItem,
    setQuickViewItem,

    quickAddItem,
    setQuickAddItem,

    addToCompareItem,
    removeFromCompareItem,
    isAddedtoCompareItem,
    compareItem,
    setCompareItem,

    productreview,
  };

  return (
    <dataContext.Provider
      value={contextElement}
    >
      {children}
    </dataContext.Provider>
  );
}