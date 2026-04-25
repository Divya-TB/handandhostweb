// "use client";
//  import { allProducts } from "@/data/products";

// import { openCartModal } from "@/utlis/openCartModal";
// import { openWistlistModal } from "@/utlis/openWishlist";

// import React, { useEffect } from "react";
// import { useContext, useState } from "react";
// const dataContext = React.createContext();
// export const useContextElement = () => {
//   return useContext(dataContext);
// };

//  const userId = localStorage.getItem("userid") || 1;
// // const userId = 1; // Replace with actual user ID logic

// export default function Context({ children }) {
//   const [homebanner, sethomebanner] = useState([]);
//   const [categorybanner, setcategorybanner] = useState([]);
//   const [product, setProduct] = useState([]);
//   const [cartProducts, setCartProducts] = useState([]);
//   const [wishList, setWishList] = useState([1]);
//   const [compareItem, setCompareItem] = useState([1, 2, 3]);
//   // const [quickViewItem, setQuickViewItem] = useState(allProducts[0]);
//    const [quickViewItem, setQuickViewItemState] = useState();
//   const [quickAddItem, setQuickAddItem] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     fetch("http://40.192.14.4:8000/api/homebanner") // your Node API
//       .then((res) => res.json())
//       .then((data) => {
//         sethomebanner(data);
//         console.log("Home Banner Data:", data); // check in console
//       })
//       .catch((err) => console.log("API error:", err));
//   }, []);

//   useEffect(() => {
//     fetch("http://40.192.14.4:8000/api/subcategorylist") // your Node API
//       .then((res) => res.json())
//       .then((data) => {
//         setcategorybanner(data);
//         console.log("Category Banner Data:", data); // check in console
//       })
//       .catch((err) => console.log("API error:", err));
//   }, []);

//   useEffect(() => {
    
//     fetch(`http://40.192.14.4:8000/api/homeproduct?userid=${userId}`) // your Node API
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//         console.log("Product Data:................................", data); // check in console
//       })
//       .catch((err) => console.log("API error:", err));
//   }, []);

//    const setQuickViewItem = async (id) => {
//     try {
//       const res = await fetch(`http://40.192.14.4:8000/api/home/products/view/${id}`);
//       const data = await res.json();
      
//       if (data.length != 0) {
//          console.log("set Quick View Item Data:", data);
//         setQuickViewItemState(data); // 👈 important (based on your API response)
//       } else {
//         console.error("API error:", data);
//       }
//     } catch (error) {
//       console.error("Fetch failed:", error);
//     }
//   };

//   useEffect(() => {
//     const subtotal = cartProducts.reduce((accumulator, product) => {
//       return accumulator + product.quantity * product.price;
//     }, 0);
//     setTotalPrice(subtotal);
//   }, [cartProducts]);

//   const isAddedToCartProducts = (id) => {
//     if (cartProducts.filter((elm) => elm.id == id)[0]) {
//       return true;
//     }
//     return false;
//   };
//   // const addProductToCart = (id, qty, isModal = true) => {
//   //   if (!isAddedToCartProducts(id)) {
//   //     const item = {
//   //       ...allProducts.filter((elm) => elm.id == id)[0],
//   //       quantity: qty ? qty : 1,
//   //     };
//   //     setCartProducts((pre) => [...pre, item]);
//   //     if (isModal) {
//   //       openCartModal();
//   //     }
//   //   }
//   // };


//   const addProductToCart = async (id, qty = 1, isModal = true) => {
//   // if (isAddedToCartProducts(id)) return;

//   try {
//     const response = await fetch(`http://40.192.14.4:8000/api/add-to-cart`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         product_id: id,
//         user_id: userId,
//         quantity: qty ? qty : 1,
//       }),
//     });

//     const data = await response.json();

//     if (data.status === true) {
//       const item = {
//         ...allProducts.filter((elm) => elm.id == id)[0],
//         quantity: qty,
//       };

//       setCartProducts((pre) => [...pre, item]);

//       if (isModal) {
//         openCartModal();
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

//   const updateQuantity = (id, qty) => {
//     if (isAddedToCartProducts(id)) {
//       let item = cartProducts.filter((elm) => elm.id == id)[0];
//       let items = [...cartProducts];
//       const itemIndex = items.indexOf(item);

//       item.quantity = qty / 1;
//       items[itemIndex] = item;
//       setCartProducts(items);
//     }
//   };

//   // const addToWishlist = (id) => {
//   //   if (!wishList.includes(id)) {
//   //     setWishList((pre) => [...pre, id]);
//   //     openWistlistModal();
//   //   }
//   // };


//   const addToWishlist = async (id) => {
//     try {
//       // Call backend API
//       const res = await fetch("http://localhost:8000/api/add-to-wishlist", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           product_ID: id,
//           User_ID: 1, //replace with logged-in user id
//         }),
//       });

//       const data = await res.json();

//       console.log("Wishlist API response...................................:", data.length); // check API response in console

//       if (data.length != 0) {
//         // Update frontend state only if API success
//         if (!wishList.includes(id)) {
//           setWishList((pre) => [...pre, id]);
//           openWistlistModal();
//         }
//       } else {
//         console.error("Wishlist API error:", data);
//       }
//     } catch (error) {
//       console.error("API failed:", error);
//     }
//   };

//   const removeFromWishlist = (id) => {
//     if (wishList.includes(id)) {
//       setWishList((pre) => [...pre.filter((elm) => elm != id)]);
//     }
//   };
//   const addToCompareItem = (id) => {
//     if (!compareItem.includes(id)) {
//       setCompareItem((pre) => [...pre, id]);
//     }
//   };
//   const removeFromCompareItem = (id) => {
//     if (compareItem.includes(id)) {
//       setCompareItem((pre) => [...pre.filter((elm) => elm != id)]);
//     }
//   };

//   // const isAddedtoWishlist = async (id) => {
//   //   try {
//   //     const res = await fetch(`http://40.192.14.4:8000/api/home/products/view/${id}`);
//   //     const data = await res.json();
      
//   //     if (data.length != 0) {
//   //       // console.log("Quick View Item Data:", data);
//   //       setQuickViewItemState(data); // 👈 important (based on your API response)
//   //     } else {
//   //       console.error("API error:", data);
//   //     }
//   //   } catch (error) {
//   //     console.error("Fetch failed:", error);
//   //   }
//   // };
//   const isAddedtoWishlist = (id) => {
//     if (wishList.includes(id)) {
//       return true;
//     }
//     return false;
//   };
//   const isAddedtoCompareItem = (id) => {
//     if (compareItem.includes(id)) {
//       return true;
//     }
//     return false;
//   };
//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("cartList"));
//     if (items?.length) {
//       setCartProducts(items);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cartList", JSON.stringify(cartProducts));
//   }, [cartProducts]);
//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem("wishlist"));
//     if (items?.length) {
//       setWishList(items);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("wishlist", JSON.stringify(wishList));
//   }, [wishList]);

//   const contextElement = {
//     homebanner, 
//     categorybanner,
//     product,
//     cartProducts,
//     setCartProducts,
//     totalPrice,
//     addProductToCart,
//     isAddedToCartProducts,
//     removeFromWishlist,
//     addToWishlist,
//     isAddedtoWishlist,
//     quickViewItem,
//     wishList,
//     setQuickViewItem,
//     quickAddItem,
//     setQuickAddItem,
//     addToCompareItem,
//     isAddedtoCompareItem,
//     removeFromCompareItem,
//     compareItem,
//     setCompareItem,
//     updateQuantity,
//   };
//   return (
//     <dataContext.Provider value={contextElement}>
//       {children}
//     </dataContext.Provider>
//   );
// }





"use client";

import { allProducts } from "@/data/products";
import { openCartModal } from "@/utlis/openCartModal";
import { openWistlistModal } from "@/utlis/openWishlist";

import React, {
  useEffect,
  useContext,
  useState,
} from "react";

/* ONLY ADDED SAFE DEFAULT VALUES */
const dataContext = React.createContext({
  cartProducts: [],
  wishList: [],
  compareItem: [],
});

export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({
  children,
}) {
  /* ONLY ADDED SAFE USERID */
  const userId =
    typeof window !== "undefined"
      ? localStorage.getItem("userid") ||
        1
      : 1;

  // const userId = 1;

  const [homebanner, sethomebanner] =
    useState([]);
  const [
    categorybanner,
    setcategorybanner,
  ] = useState([]);
  const [product, setProduct] =
    useState([]);
  const [cartProducts, setCartProducts] =
    useState([]);

  /* YOUR LOGIC ADDED */
  const [wishList, setWishList] =
    useState([]);

  const [productreview, setProductReview] =
    useState([]);

  const [compareItem, setCompareItem] =
    useState([1, 2, 3]);

  const [
    quickViewItem,
    setQuickViewItemState,
  ] = useState();

  const [quickAddItem, setQuickAddItem] =
    useState(1);

  const [totalPrice, setTotalPrice] =
    useState(0);

  /* HOME BANNER */
  useEffect(() => {
    fetch(
      "http://40.192.14.4:8000/api/homebanner"
    )
      .then((res) => res.json())
      .then((data) =>
        sethomebanner(data)
      );
  }, []);

  /* CATEGORY */
  useEffect(() => {
    fetch(
      "http://40.192.14.4:8000/api/subcategorylist"
    )
      .then((res) => res.json())
      .then((data) =>
        setcategorybanner(data)
      );
  }, []);

  /* PRODUCTS + WISHLIST PRELOAD */
  useEffect(() => {
  fetch(`http://40.192.14.4:8000/api/homeproduct?userid=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);

      /* Wishlist preload */
      const wishlistData = data
        .filter((item) => Number(item.isWishlisted) === 1)
        .map((item) => ({
          product_ID: Number(item.id),
          productwishlist_ID: Number(item.productwishlist_ID) || 0,
        }));

      setWishList(wishlistData);

      /* Cart preload */
      const cartData = data
        .filter((item) => Number(item.isAddedToCart) === 1)
        .map((item) => ({
          ...item,
          product_ID: Number(item.id),
          User_ID: userId,
          quantity: 1,
        }));

      setCartProducts(cartData);
    });
}, []);

  /* QUICK VIEW */
  const setQuickViewItem =
    async (id) => {
      const res = await fetch(
        `http://40.192.14.4:8000/api/home/products/view/${id}`
      );

      const data =
        await res.json();

      setQuickViewItemState(data);
    };

  /* TOTAL */
  useEffect(() => {
    const subtotal =
      cartProducts.reduce(
        (acc, item) =>
          acc +
          item.quantity *
            item.price,
        0
      );

    setTotalPrice(subtotal);
  }, [cartProducts]);

  /* CART */
  const isAddedToCartProducts = (productId) => {
  return cartProducts.some(
    item =>
      Number(item.product_ID || item.id) === Number(productId) &&
      Number(item.User_ID) === Number(userId)
  );
};


 useEffect(() => {
    fetch(
      `http://40.192.14.4/api/get-wishlist/${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setWishList(data.data || []);
      });
  }, []);

  /* GET CART */
  useEffect(() => {
    fetch(
      `http://40.192.14.4:8000/api/get-cart/${userId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data || []);
      });
  }, []);


  // const addProductToCart =
  //   async (
  //     id,
  //     qty = 1,
  //     isModal = true
  //   ) => {
  //     const response =
  //       await fetch(
  //         "http://localhost:8000/api/add-to-cart",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type":
  //               "application/json",
  //           },
  //           body: JSON.stringify({
  //             product_ID: id,
  //             User_ID: userId,
  //             quantity: qty,
  //             productvariant_ID: 0
  //           }),
  //         }
  //       );

  //     const data =
  //       await response.json();

  //     if (data.status === true) {
  //       const item = {
  //         ...allProducts.filter(
  //           (elm) =>
  //             elm.id == id
  //         )[0],
  //         quantity: qty,
  //       };

  //       setCartProducts((pre) => [
  //         ...pre,
  //         item,
  //       ]);

  //       // if (isModal)
  //       //   openCartModal();
  //     }
  //   };


  const addProductToCart = async (
  id,
  qty = 1,
  isModal = true
) => {
  const response = await fetch(
    "http://40.192.14.4:8000/api/add-to-cart",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_ID: id,
        User_ID: userId,
        quantity: qty,
        productvariant_ID: 0,
      }),
    }
  );

  const data = await response.json();

  if (data.status === true) {
    const selectedProduct = product.find(
      (item) => Number(item.id) === Number(id)
    );

    if (!selectedProduct) return;

    const item = {
      ...selectedProduct,
      quantity: qty,
    };

    setCartProducts((pre) => [...pre, item]);
  }
};

  const updateQuantity = (
    id,
    qty
  ) => {
    const items = [
      ...cartProducts,
    ];

    const index =
      items.findIndex(
        (item) =>
          Number(item.id) ===
          Number(id)
      );

    if (index > -1) {
      items[index].quantity =
        qty;

      setCartProducts(items);
    }
  };

  /* ==========================
      YOUR WISHLIST LOGIC
  =========================== */

  // const addToWishlist =
  //   async (id) => {
  //     const alreadyExists =
  //       wishList.some(
  //         (item) =>
  //           Number(
  //             item.product_ID
  //           ) === Number(id)
  //       );

  //     if (alreadyExists) return;

  //     const res = await fetch(
  //       "http://40.192.14.4:8000/api/add-to-wishlist",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type":
  //             "application/json",
  //         },
  //         body: JSON.stringify({
  //           product_ID: id,
  //           User_ID: userId,
  //         }),
  //       }
  //     );

  //     const data =
  //       await res.json();

  //     setWishList((prev) => [
  //       ...prev,
  //       {
  //         product_ID:
  //           Number(id),
  //         productwishlist_ID:
  //           Number(
  //             data
  //               ?.data
  //               ?.productwishlist_ID
  //           ) || 0,
  //       },
  //     ]);

  //     openWistlistModal();
  //   };


  const addToWishlist = async (id) => {
  try {
    const alreadyExists = wishList.some(
      (item) =>
        Number(item.product_ID) === Number(id)
    );

    if (alreadyExists) return;

    const res = await fetch(
      "http://40.192.14.4:8000/api/add-to-wishlist",
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
          productwishlist_ID: Number(
            data.productwishlist_ID
          ),
        },
      ]);

      openWistlistModal();
    }
  } catch (error) {
    console.log(error);
  }
};

  const removeFromWishlist =
    async (id) => {
      const item =
        wishList.find(
          (x) =>
            Number(
              x.product_ID
            ) === Number(id)
        );

      if (!item) return;

      await fetch(
        `http://40.192.14.4:8000/api/remove-wishlist/${item.productwishlist_ID}`,
        {
          method: "DELETE",
        }
      );

      setWishList((prev) =>
        prev.filter(
          (x) =>
            Number(
              x.product_ID
            ) !== Number(id)
        )
      );
    };

  const isAddedtoWishlist = (
    id
  ) => {
    return wishList.some(
      (item) =>
        Number(
          item.product_ID
        ) === Number(id)
    );
  };

  /* COMPARE */
  const addToCompareItem = (
    id
  ) => {
    if (
      !compareItem.includes(id)
    ) {
      setCompareItem((pre) => [
        ...pre,
        id,
      ]);
    }
  };

  const removeFromCompareItem =
    (id) => {
      setCompareItem((pre) =>
        pre.filter(
          (elm) => elm != id
        )
      );
    };

  const isAddedtoCompareItem =
    (id) => {
      return compareItem.includes(
        id
      );
    };

  /* LOCAL STORAGE */
  useEffect(() => {
    const items = JSON.parse(
      localStorage.getItem(
        "cartList"
      )
    );

    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cartList",
      JSON.stringify(
        cartProducts
      )
    );
  }, [cartProducts]);


useEffect(() => {
  fetch("http://localhost:8000/api/product-review")
    .then((res) => res.json())
    .then((data) => {
      setProductReview(data.data || []);
    });
}, []);

  /* CONTEXT */
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
    

    wishList,
    addToWishlist,
    removeFromWishlist,
    isAddedtoWishlist,

    quickViewItem,
    setQuickViewItem,

    quickAddItem,
    setQuickAddItem,

    addToCompareItem,
    isAddedtoCompareItem,
    removeFromCompareItem,
    compareItem,
    setCompareItem,

    productreview

  };

  return (
    <dataContext.Provider
      value={contextElement}
    >
      {children}
    </dataContext.Provider>
  );
}




// "use client";

// import { allProducts } from "@/data/products";
// import { openCartModal } from "@/utlis/openCartModal";
// import { openWistlistModal } from "@/utlis/openWishlist";

// import React, {
//   useEffect,
//   useContext,
//   useState,
// } from "react";

// const dataContext = React.createContext({
//   cartProducts: [],
//   wishList: [],
//   compareItem: [],
// });

// export const useContextElement = () => {
//   return useContext(dataContext);
// };

// export default function Context({
//   children,
// }) {
//   const userId =
//     typeof window !== "undefined"
//       ? localStorage.getItem("userid") || 1
//       : 1;

//   const [homebanner, sethomebanner] =
//     useState([]);
//   const [
//     categorybanner,
//     setcategorybanner,
//   ] = useState([]);
//   const [product, setProduct] =
//     useState([]);
//   const [cartProducts, setCartProducts] =
//     useState([]);
//   const [wishList, setWishList] =
//     useState([]);
//   const [productreview, setProductReview] =
//     useState([]);
//   const [compareItem, setCompareItem] =
//     useState([1, 2, 3]);

//   const [
//     quickViewItem,
//     setQuickViewItemState,
//   ] = useState();

//   const [quickAddItem, setQuickAddItem] =
//     useState(1);

//   const [totalPrice, setTotalPrice] =
//     useState(0);

//   /* HOME BANNER */
//   useEffect(() => {
//     fetch(
//       "http://40.192.14.4:8000/api/homebanner"
//     )
//       .then((res) => res.json())
//       .then((data) =>
//         sethomebanner(data)
//       );
//   }, []);

//   /* CATEGORY */
//   useEffect(() => {
//     fetch(
//       "http://40.192.14.4:8000/api/subcategorylist"
//     )
//       .then((res) => res.json())
//       .then((data) =>
//         setcategorybanner(data)
//       );
//   }, []);

//   /* PRODUCTS */
//   useEffect(() => {
//     fetch(
//       `http://40.192.14.4:8000/api/homeproduct?userid=${userId}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct(data);
//       });
//   }, []);

//   /* GET WISHLIST */
 
//   /* QUICK VIEW */
//   const setQuickViewItem =
//     async (id) => {
//       const res = await fetch(
//         `http://40.192.14.4:8000/api/home/products/view/${id}`
//       );

//       const data =
//         await res.json();

//       setQuickViewItemState(data);
//     };

//   /* TOTAL */
//   useEffect(() => {
//     const subtotal =
//       cartProducts.reduce(
//         (acc, item) =>
//           acc +
//           item.quantity *
//             item.price,
//         0
//       );

//     setTotalPrice(subtotal);
//   }, [cartProducts]);

//   /* CHECK CART */
//   const isAddedToCartProducts = (
//     productId
//   ) => {
//     return cartProducts.some(
//       (item) =>
//         Number(
//           item.product_ID ||
//             item.id
//         ) === Number(productId)
//     );
//   };

//   /* ADD TO CART */
//   const addProductToCart =
//     async (
//       id,
//       qty = 1
//     ) => {
//       const response =
//         await fetch(
//           "http://40.192.14.4:8000/api/add-to-cart",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type":
//                 "application/json",
//             },
//             body: JSON.stringify({
//               product_ID: id,
//               User_ID: userId,
//               quantity: qty,
//               productvariant_ID: 0,
//             }),
//           }
//         );

//       const data =
//         await response.json();

//       if (data.status) {
//         const selectedProduct =
//           product.find(
//             (item) =>
//               Number(item.id) ===
//               Number(id)
//           );

//         if (!selectedProduct)
//           return;

//         setCartProducts((pre) => [
//           ...pre,
//           {
//             ...selectedProduct,
//             quantity: qty,
//             product_ID: id,
//           },
//         ]);

//         openCartModal();
//       }
//     };

//   /* REMOVE CART */
//   const removeFromCart =
//     async (id) => {
//       await fetch(
//         `http://40.192.14.4:8000/api/remove-cart/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//       setCartProducts((prev) =>
//         prev.filter(
//           (item) =>
//             Number(
//               item.product_ID ||
//                 item.id
//             ) !== Number(id)
//         )
//       );
//     };

//   /* UPDATE QTY */
//   const updateQuantity = (
//     id,
//     qty
//   ) => {
//     const items = [
//       ...cartProducts,
//     ];

//     const index =
//       items.findIndex(
//         (item) =>
//           Number(
//             item.product_ID ||
//               item.id
//           ) === Number(id)
//       );

//     if (index > -1) {
//       items[index].quantity =
//         qty;

//       setCartProducts(items);
//     }
//   };

//   /* ADD WISHLIST */
//   const addToWishlist =
//     async (id) => {
//       const alreadyExists =
//         wishList.some(
//           (item) =>
//             Number(
//               item.product_ID
//             ) === Number(id)
//         );

//       if (alreadyExists)
//         return;

//       const res = await fetch(
//         "http://40.192.14.4:8000/api/add-to-wishlist",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type":
//               "application/json",
//           },
//           body: JSON.stringify({
//             product_ID: id,
//             User_ID: userId,
//           }),
//         }
//       );

//       const data =
//         await res.json();

//       setWishList((prev) => [
//         ...prev,
//         {
//           product_ID: id,
//           productwishlist_ID:
//             data.productwishlist_ID,
//         },
//       ]);

//       openWistlistModal();
//     };

//   /* REMOVE WISHLIST */
//   const removeFromWishlist =
//     async (id) => {
//       const item =
//         wishList.find(
//           (x) =>
//             Number(
//               x.product_ID
//             ) === Number(id)
//         );

//       if (!item) return;

//       await fetch(
//         `http://40.192.14.4:8000/api/remove-wishlist/${item.productwishlist_ID}`,
//         {
//           method: "DELETE",
//         }
//       );

//       setWishList((prev) =>
//         prev.filter(
//           (x) =>
//             Number(
//               x.product_ID
//             ) !== Number(id)
//         )
//       );
//     };

//   const isAddedtoWishlist = (
//     id
//   ) => {
//     return wishList.some(
//       (item) =>
//         Number(
//           item.product_ID
//         ) === Number(id)
//     );
//   };

//   /* PRODUCT REVIEW */
//   useEffect(() => {
//     fetch(
//       "http://localhost:8000/api/product-review"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setProductReview(
//           data.data || []
//         );
//       });
//   }, []);

//   const contextElement = {
//     homebanner,
//     categorybanner,
//     product,

//     cartProducts,
//     setCartProducts,
//     totalPrice,
//     addProductToCart,
//     removeFromCart,
//     isAddedToCartProducts,
//     updateQuantity,

//     wishList,
//     addToWishlist,
//     removeFromWishlist,
//     isAddedtoWishlist,

//     quickViewItem,
//     setQuickViewItem,

//     quickAddItem,
//     setQuickAddItem,

//     compareItem,
//     setCompareItem,

//     productreview,
//   };

//   return (
//     <dataContext.Provider
//       value={contextElement}
//     >
//       {children}
//     </dataContext.Provider>
//   );
// }