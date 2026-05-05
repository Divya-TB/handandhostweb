// "use client";

// import React from "react";
// import { useContextElement } from "@/context/Context";

// export default function CartDrawer({ open, setOpen }) {
//   const {
//     cartProducts,
//     totalPrice,
//     updateQuantity,
//     removeFromCart,
//   } = useContextElement();

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`cart-overlay ${open ? "show" : ""}`}
//         onClick={() => setOpen(false)}
//       />

//       {/* Drawer */}
//       <div className={`cart-drawer ${open ? "open" : ""}`}>
//         <div className="cart-header">
//           <h4>Your Cart</h4>
//           <button onClick={() => setOpen(false)}>✕</button>
//         </div>

//         <div className="cart-body">
//           {cartProducts.length === 0 ? (
//             <p className="empty">Cart is empty</p>
//           ) : (
//             cartProducts.map((item) => (
//               <div key={item.product_ID} className="cart-item">
//                 <div className="cart-info">
//                   <p>{item.V_ProductName}</p>
//                   <span>₹ {item.price}</span>
//                 </div>

//                 <div className="qty">
//                   <button
//                     onClick={() =>
//                       updateQuantity(
//                         item.product_ID,
//                         item.quantity - 1
//                       )
//                     }
//                   >
//                     -
//                   </button>

//                   <span>{item.quantity}</span>

//                   <button
//                     onClick={() =>
//                       updateQuantity(
//                         item.product_ID,
//                         item.quantity + 1
//                       )
//                     }
//                   >
//                     +
//                   </button>
//                 </div>

//                 <button
//                   onClick={() =>
//                     removeFromCart(item.product_ID)
//                   }
//                 >
//                   🗑
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="cart-footer">
//           <h4>Total: ₹ {totalPrice}</h4>
//           <button className="checkout-btn">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function CartDrawer({ open, setOpen }) {
  const {
    cartProducts,
    totalPrice,
    updateQuantity,
    removeFromCart,
  } = useContextElement();

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-header">
          <h4>Your Cart</h4>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="cart-body">
          {cartProducts.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            cartProducts.map((item) => (
  <div key={item.product_ID} className="cart-item">
    
    {/* IMAGE */}
    <div className="cart-img">
      <img
        src={item.mainimage}
        alt={item.title}
      />
    </div>

    {/* DETAILS */}
    <div className="cart-details">
      
      {/* top row: name + delete */}
      <div className="cart-top">
        <p className="title">{item.title}</p>

        <span className="price">
        ₹ {Number(item.discount_price || 0) * Number(item.quantity || 0)}
        </span>

        
      </div>

      {/* quantity row */}
      <div className="cart-bottom">
        <div className="qty">
          <button
            onClick={() =>
                updateQuantity(
                item.product_ID,
                item.quantity > 1 ? item.quantity - 1 : 1
                )
            }
            >
            -
            </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              updateQuantity(item.product_ID, item.quantity + 1)
            }
          >
            +
          </button>
        </div>

        <button
          className="delete-btn"
          onClick={() => removeFromCart(item.id)}
        >
          🗑
        </button>
      </div>
    </div>
  </div>
))
          )}
        </div>

        <div className="cart-footer">
          <h4>Total: ₹ {totalPrice}</h4>
          <Link href="/checkout">
             <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
}