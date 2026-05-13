

"use client";

import React, { useEffect, useContext, useState } from "react";
import { useAuth } from "@/context/AuthContext";

// const { useAuth  } = useAuth();

const dataContext = React.createContext({
  cartProducts: [],
  wishList: [],
  compareItem: [],
});

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useContextElement = () => useContext(dataContext);

export default function Context({ children }) {
  const { user } = useAuth();
  const userId = user?.id;

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
  const [teamMembers, setteamMember] = useState([]);
  const [customerReview, setCustomerReview] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  // // console.log('user_Id.............................................',Number(localStorage.getItem("userId")))
  // useEffect(() => {
  //   const userId = Number(localStorage.getItem("userId")) || 0;
  //   setUserId(userId);
  // }, []);

  /*********************Team Members************************************** */

  useEffect(() => {
    fetch(`${API_URL}/api/team-members`)
      .then((res) => res.json())
      .then((data) => setteamMember(data.data || []));
      // console.log('banner...................',data)
  }, []);

   useEffect(() => {
    fetch(`${API_URL}/api/customer-review`)
      .then((res) => res.json())
      .then((data) => setCustomerReview(data.data || []));
      // console.log('banner...................',data)
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
    if (!userId) return;

    fetch(`${API_URL}/api/get-wishlist/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setWishList(data.data || []);
      });
  }, [userId]);

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




   // reset cart + wishlist when user changes

  useEffect(() => {
    setCartProducts([]);
    setWishList([]);
  }, [userId]);



//   const getAddresses = async () => {
//   try {
//     if (!userId) return;

//     const res = await fetch(
//       `${API_URL}/api/address/list/${userId}`,
//       // {
//       //   headers: {
//       //     Authorization: `Bearer ${localStorage.getItem("token")}`,
//       //   },
//       // }
//     );

//     const data = await res.json();

//     if (data.success) {
//       setAddresses(data.data);

//       // auto select default address
//       const defaultAddr = data.data.find(
//         (a) => a.is_default === 1
//       );

//       if (defaultAddr) {
//         setSelectedAddress(defaultAddr.address_ID);
//       }
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };


const getAddresses = async () => {
  try {
    if (!userId) return;

    console.log('userid...................................',userId);
    const res = await fetch(`${API_URL}/api/address/list/${userId}`);
    const data = await res.json();
    console.log("Fetched addresses:.............................", data); 

    if (data.success) {
      const list = data.data || [];

      setAddresses(list);

      // auto select default OR first
  
      const defaultAddr =
        list.find((a) => a.is_default === 1) || list[0];

      if (defaultAddr) {
        setSelectedAddress(defaultAddr.address_ID);
      } else {
        setSelectedAddress(null);
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const saveAddress = async (addressForm) => {
  try {
    const res = await fetch(`${API_URL}/api/address/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(addressForm),
    });

    const data = await res.json();

    if (data.success) {
      //  ALWAYS REFRESH FROM SERVER
      await getAddresses();
    }

    return data;
  } catch (err) {
    console.log(err);
  }
};


const placeOrder = async (payload) => {
  try {
    const res = await fetch(`${API_URL}/api/order/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};


// const openRazorpay = async (paymentData) => {

//   if (typeof window === "undefined") return;

//   if (!window.Razorpay) {
//     alert("Razorpay SDK failed to load! Check Your Internet Connection");
//     return;
//   }

//   const options = {
//     key: paymentData.key,

//     amount: Number(paymentData.amount) * 100,

//     currency: paymentData.currency,

//     name: "Hand and Host",

//     description: "Order Payment",

//     order_id: paymentData.razorpay_order_id,

//     handler: async function (response) {

//       console.log("PAYMENT SUCCESS", response);

//       alert("Payment Successful");

//       /*
//       response contains:
//       razorpay_payment_id
//       razorpay_order_id
//       razorpay_signature
//       */

//       // CALL VERIFY PAYMENT API HERE
//     },

//     prefill: {
//       name: user?.name || "",
//       email: user?.email || "",
//       contact: user?.phone_number || "",
//     },

//     theme: {
//       color: "#000000",
//     },

//     modal: {
//       ondismiss: function () {
//         console.log("Payment popup closed");
//       },
//     },
//   };

//   const razorpay = new window.Razorpay(options);

//   razorpay.on("payment.failed", function (response) {
//     console.log("PAYMENT FAILED", response);
//   });

//   razorpay.open();
// };


const openRazorpay = async (paymentData) => {

  if (!window.Razorpay) {
    alert("Razorpay SDK not loaded");
    return;
  }

  // console.log('payment method...........................',paymentData);
  const options = {

    key: paymentData.key,

    amount: Number(paymentData.amount) * 100,

    currency: paymentData.currency || "INR",

    name: "Hand and Host",

    description: "Order Payment",

    image: "/logo.png",

    order_id: paymentData.razorpay_order_id,

    handler: async function (response) {

      console.log("PAYMENT SUCCESS", response);

      try {

        const verifyRes = await fetch(
          `${API_URL}/api/payment/verify`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({

              razorpay_order_id:
                response.razorpay_order_id,

              razorpay_payment_id:
                response.razorpay_payment_id,

              razorpay_signature:
                response.razorpay_signature,

              user_ID: userId,

              order_ID: paymentData.order_ID,

              product: paymentData.product
            }),
          }
        );

        const verifyData = await verifyRes.json();

        if (verifyData.success) {

          alert("Payment Verified Successfully");

          // clear cart here if needed

          // redirect here if needed
          // router.push("/success");

        } else {

          alert("Payment verification failed");
        }

      } catch (err) {

        console.log(err);

        alert("Something went wrong");
      }
    },

    prefill: {
      name: user?.name || "",

      email: user?.email || "",

      contact: user?.phone_number || "",
    },

    notes: {
      address: "Hand and Host",
    },

    theme: {
      color: "#ece3e3",
    },

    modal: {
      ondismiss: function () {
        console.log("Payment popup closed");
      },
    },
  };

  const rzp1 = new window.Razorpay(options);

  rzp1.on("payment.failed", function (response) {

    console.log("PAYMENT FAILED", response);

    alert(response.error.description);
  });

  rzp1.open();
};


useEffect(() => {
  console.log("userId changed:.............................", userId);
  getAddresses();
}, [userId]);
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
    teamMembers,
    customerReview,


    addresses,
    setAddresses,
    selectedAddress,
    setSelectedAddress,
    saveAddress,
    getAddresses,

    openRazorpay,
    placeOrder,
  };

  return (
    <dataContext.Provider
      value={contextElement}
    >
      {children}
    </dataContext.Provider>
  );
}