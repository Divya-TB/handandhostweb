// // "use client";

// // import React from "react";
// // import Link from "next/link";

// // const orders = [
// //   {
// //     id: "#ORD-1025",
// //     date: "May 12, 2026",
// //     status: "Delivered",
// //     payment: "Paid",
// //     total: 2499,
// //     items: 3,
// //   },
// //   {
// //     id: "#ORD-1024",
// //     date: "May 10, 2026",
// //     status: "Processing",
// //     payment: "Paid",
// //     total: 1299,
// //     items: 1,
// //   },
// //   {
// //     id: "#ORD-1023",
// //     date: "May 08, 2026",
// //     status: "Cancelled",
// //     payment: "Refunded",
// //     total: 899,
// //     items: 2,
// //   },
// // ];

// // const getStatusClass = (status: string) => {
// //   switch (status) {
// //     case "Delivered":
// //       return "success";
// //     case "Processing":
// //       return "warning";
// //     case "Cancelled":
// //       return "danger";
// //     default:
// //       return "";
// //   }
// // };

// // export default function Orders() {
// //   return (
// //     <div className="my-account-content">
// //       <div className="account-orders">
// //         <div className="orders-header">
// //           <div>
// //             <h4 className="title">My Orders</h4>
// //             <p className="subtitle">
// //               Track, manage and review your recent orders
// //             </p>
// //           </div>

// //           <div className="orders-count">
// //             Total Orders: <strong>{orders.length}</strong>
// //           </div>
// //         </div>

// //         <div className="orders-table-wrapper">
// //           <table className="orders-table">
// //             <thead>
// //               <tr>
// //                 <th>Order ID</th>
// //                 <th>Date</th>
// //                 <th>Status</th>
// //                 <th>Payment</th>
// //                 <th>Items</th>
// //                 <th>Total</th>
// //                 <th align="right">Action</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {orders.map((order, index) => (
// //                 <tr key={index}>
// //                   <td>
// //                     <div className="order-id">{order.id}</div>
// //                   </td>

// //                   <td>{order.date}</td>

// //                   <td>
// //                     <span
// //                       className={`status-badge ${getStatusClass(
// //                         order.status
// //                       )}`}
// //                     >
// //                       {order.status}
// //                     </span>
// //                   </td>

// //                   <td>{order.payment}</td>

// //                   <td>{order.items} Items</td>

// //                   <td className="fw-6">₹{order.total}</td>

// //                   <td align="right">
// //                     <Link
// //                       href={`/my-account-orders-details`}
// //                       className="view-btn"
// //                     >
// //                       View Details
// //                     </Link>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>

// //           {orders.length === 0 && (
// //             <div className="empty-orders">
// //               <h5>No Orders Found</h5>
// //               <p>You haven’t placed any orders yet.</p>

// //               <Link href="/shop" className="shop-btn">
// //                 Start Shopping
// //               </Link>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .account-orders {
// //           background: #fff;
// //           border-radius: 20px;
// //           padding: 24px;
// //           border: 1px solid #ececec;
// //         }

// //         .orders-header {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           margin-bottom: 24px;
// //           gap: 15px;
// //           flex-wrap: wrap;
// //         }

// //         .title {
// //           font-size: 28px;
// //           font-weight: 700;
// //           margin-bottom: 6px;
// //           color: #111;
// //         }

// //         .subtitle {
// //           color: #777;
// //           font-size: 14px;
// //           margin: 0;
// //         }

// //         .orders-count {
// //           background: #f7f7f7;
// //           padding: 10px 16px;
// //           border-radius: 12px;
// //           font-size: 14px;
// //         }

// //         .orders-table-wrapper {
// //           overflow-x: auto;
// //         }

// //         .orders-table {
// //           width: 100%;
// //           border-collapse: collapse;
// //         }

// //         .orders-table thead {
// //           background: #f8f8f8;
// //         }

// //         .orders-table th {
// //           padding: 16px;
// //           font-size: 14px;
// //           font-weight: 600;
// //           color: #444;
// //           text-align: left;
// //           white-space: nowrap;
// //         }

// //         .orders-table td {
// //           padding: 18px 16px;
// //           border-bottom: 1px solid #f0f0f0;
// //           font-size: 15px;
// //           color: #222;
// //           vertical-align: middle;
// //         }

// //         .orders-table tbody tr {
// //           transition: 0.3s ease;
// //         }

// //         .orders-table tbody tr:hover {
// //           background: #fafafa;
// //         }

// //         .order-id {
// //           font-weight: 700;
// //           color: #111;
// //         }

// //         .status-badge {
// //           padding: 7px 14px;
// //           border-radius: 30px;
// //           font-size: 13px;
// //           font-weight: 600;
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .status-badge.success {
// //           background: rgba(34, 197, 94, 0.12);
// //           color: #16a34a;
// //         }

// //         .status-badge.warning {
// //           background: rgba(245, 158, 11, 0.12);
// //           color: #d97706;
// //         }

// //         .status-badge.danger {
// //           background: rgba(239, 68, 68, 0.12);
// //           color: #dc2626;
// //         }

// //         .view-btn {
// //           background: #111;
// //           color: #fff;
// //           padding: 10px 18px;
// //           border-radius: 10px;
// //           font-size: 14px;
// //           font-weight: 600;
// //           text-decoration: none;
// //           transition: 0.3s ease;
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //         }

// //         .view-btn:hover {
// //           background: #333;
// //         }

// //         .empty-orders {
// //           text-align: center;
// //           padding: 70px 20px;
// //         }

// //         .empty-orders h5 {
// //           font-size: 24px;
// //           margin-bottom: 10px;
// //         }

// //         .empty-orders p {
// //           color: #777;
// //           margin-bottom: 24px;
// //         }

// //         .shop-btn {
// //           display: inline-flex;
// //           align-items: center;
// //           justify-content: center;
// //           background: #111;
// //           color: #fff;
// //           padding: 12px 22px;
// //           border-radius: 12px;
// //           text-decoration: none;
// //           font-weight: 600;
// //         }

// //         @media (max-width: 768px) {
// //           .title {
// //             font-size: 22px;
// //           }

// //           .orders-table th,
// //           .orders-table td {
// //             padding: 14px 12px;
// //             font-size: 13px;
// //           }

// //           .view-btn {
// //             padding: 8px 14px;
// //             font-size: 13px;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }


// "use client";

// import React from "react";
// import Link from "next/link";

// export default function Orders() {
//   const orders = [
//     {
//       id: "#HH10245",
//       date: "14 May 2026",
//       status: "Delivered",
//       total: 2499,
//       items: [
//         {
//           name: "Modern Wooden Chair",
//           image:
//             "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
//           qty: 1,
//           price: 2499,
//         },
//       ],
//     },
//     {
//       id: "#HH10244",
//       date: "10 May 2026",
//       status: "Processing",
//       total: 5299,
//       items: [
//         {
//           name: "Minimal Sofa Set",
//           image:
//             "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=600&auto=format&fit=crop",
//           qty: 1,
//           price: 5299,
//         },
//       ],
//     },
//   ];

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "Delivered":
//         return "delivered";
//       case "Processing":
//         return "processing";
//       case "Cancelled":
//         return "cancelled";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="orders-page">
//       <div className="orders-top">
//         <div>
//           <h2>My Orders</h2>
//           <p>Track, return or buy things again</p>
//         </div>

//         <div className="search-box">
//           <input type="text" placeholder="Search all orders" />
//         </div>
//       </div>

//       {orders.map((order, index) => (
//         <div className="order-card" key={index}>
//           {/* Top Header */}
//           <div className="order-header">
//             <div className="header-item">
//               <span>ORDER PLACED</span>
//               <strong>{order.date}</strong>
//             </div>

//             <div className="header-item">
//               <span>TOTAL</span>
//               <strong>₹{order.total}</strong>
//             </div>

//             <div className="header-item">
//               <span>SHIP TO</span>
//               <strong>Divya</strong>
//             </div>

//             <div className="header-item order-id">
//               <span>ORDER #</span>
//               <strong>{order.id}</strong>
//             </div>
//           </div>

//           {/* Product Section */}
//           {order.items.map((item, i) => (
//             <div className="order-body" key={i}>
//               <div className="product-left">
//                 <div className="image-box">
//                   <img src={item.image} alt={item.name} />
//                 </div>

//                 <div className="product-details">
//                   <div
//                     className={`status ${getStatusClass(order.status)}`}
//                   >
//                     {order.status}
//                   </div>

//                   <h4>{item.name}</h4>

//                   <p>Quantity: {item.qty}</p>

//                   <p className="price">₹{item.price}</p>

//                   <div className="button-group">
//                     <button className="buy-btn">
//                       Buy Again
//                     </button>

//                     <Link
//                       href="/my-account-orders-details"
//                       className="track-btn"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               <div className="product-right">
//                 <button className="invoice-btn">
//                   Download Invoice
//                 </button>

//                 <button className="help-btn">
//                   Get Help
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}

//       <style jsx>{`
//         .orders-page {
//           width: 100%;
//         }

//         .orders-top {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 20px;
//           margin-bottom: 25px;
//           flex-wrap: wrap;
//         }

//         .orders-top h2 {
//           font-size: 30px;
//           font-weight: 700;
//           margin-bottom: 5px;
//           color: #111;
//         }

//         .orders-top p {
//           color: #666;
//           margin: 0;
//           font-size: 14px;
//         }

//         .search-box input {
//           width: 320px;
//           height: 48px;
//           border: 1px solid #ddd;
//           border-radius: 12px;
//           padding: 0 16px;
//           outline: none;
//           font-size: 14px;
//           background: #fff;
//         }

//         .order-card {
//           border: 1px solid #e5e7eb;
//           border-radius: 18px;
//           overflow: hidden;
//           background: #fff;
//           margin-bottom: 24px;
//         }

//         .order-header {
//           background: #f8f9fa;
//           padding: 18px 24px;
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 20px;
//           border-bottom: 1px solid #ececec;
//         }

//         .header-item span {
//           display: block;
//           font-size: 11px;
//           color: #777;
//           margin-bottom: 6px;
//           letter-spacing: 0.5px;
//         }

//         .header-item strong {
//           font-size: 14px;
//           color: #111;
//           font-weight: 600;
//         }

//         .order-id {
//           text-align: right;
//         }

//         .order-body {
//           padding: 24px;
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//           align-items: flex-start;
//         }

//         .product-left {
//           display: flex;
//           gap: 20px;
//           flex: 1;
//         }

//         .image-box {
//           width: 130px;
//           height: 130px;
//           border-radius: 14px;
//           overflow: hidden;
//           background: #f5f5f5;
//           flex-shrink: 0;
//         }

//         .image-box img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .product-details {
//           flex: 1;
//         }

//         .status {
//           display: inline-flex;
//           padding: 6px 14px;
//           border-radius: 30px;
//           font-size: 12px;
//           font-weight: 600;
//           margin-bottom: 12px;
//         }

//         .status.delivered {
//           background: rgba(34, 197, 94, 0.12);
//           color: #16a34a;
//         }

//         .status.processing {
//           background: rgba(245, 158, 11, 0.12);
//           color: #d97706;
//         }

//         .status.cancelled {
//           background: rgba(239, 68, 68, 0.12);
//           color: #dc2626;
//         }

//         .product-details h4 {
//           font-size: 20px;
//           margin-bottom: 10px;
//           color: #111;
//           font-weight: 600;
//         }

//         .product-details p {
//           color: #666;
//           font-size: 14px;
//           margin-bottom: 8px;
//         }

//         .price {
//           font-size: 18px !important;
//           font-weight: 700;
//           color: #111 !important;
//         }

//         .button-group {
//           display: flex;
//           gap: 12px;
//           margin-top: 20px;
//           flex-wrap: wrap;
//         }

//         .buy-btn,
//         .track-btn,
//         .invoice-btn,
//         .help-btn {
//           height: 44px;
//           padding: 0 20px;
//           border-radius: 12px;
//           border: none;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           text-decoration: none;
//         }

//         .buy-btn {
//           background: #111;
//           color: #fff;
//         }

//         .buy-btn:hover {
//           background: #222;
//         }

//         .track-btn {
//           background: #f3f4f6;
//           color: #111;
//         }

//         .track-btn:hover {
//           background: #e5e7eb;
//         }

//         .product-right {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           min-width: 200px;
//         }

//         .invoice-btn,
//         .help-btn {
//           background: #fff;
//           border: 1px solid #ddd;
//           color: #111;
//         }

//         .invoice-btn:hover,
//         .help-btn:hover {
//           background: #f9f9f9;
//         }

//         @media (max-width: 992px) {
//           .order-header {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .order-id {
//             text-align: left;
//           }

//           .order-body {
//             flex-direction: column;
//           }

//           .product-right {
//             width: 100%;
//             flex-direction: row;
//           }
//         }

//         @media (max-width: 768px) {
//           .orders-top {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           .search-box {
//             width: 100%;
//           }

//           .search-box input {
//             width: 100%;
//           }

//           .order-header {
//             grid-template-columns: 1fr;
//           }

//           .product-left {
//             flex-direction: column;
//           }

//           .image-box {
//             width: 100%;
//             height: 220px;
//           }

//           .product-right {
//             flex-direction: column;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



// "use client";

// import React, {
//   useEffect,
//   useState,
// } from "react";

// import Link from "next/link";

// import {
//   useOrderContext,
// } from "@/context/OrderContext";

// export default function Orders() {

//   const {
//     orders,
//     loading,
//     getOrders,
//   } = useOrderContext();

//   const [search, setSearch] =
//     useState("");

//   useEffect(() => {
//     getOrders();
//   }, []);

//   // =========================================
//   // STATUS CLASS
//   // =========================================

//   const getStatusClass = (
//     status
//   ) => {

//     switch (status) {

//       case "Delivered":
//         return "delivered";

//       case "Processing":
//         return "processing";

//       case "Cancelled":
//         return "cancelled";

//       case "Placed":
//         return "placed";

//       default:
//         return "";
//     }
//   };

//   // =========================================
//   // FILTER ORDERS
//   // =========================================

//   const filteredOrders =
//     orders.filter((order) =>
//       order.invoice_no
//         ?.toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   // =========================================
//   // LOADING
//   // =========================================

//   if (loading) {

//     return (
//       <div className="loading-box">
//         Loading Orders...
//       </div>
//     );
//   }

//   return (
//     <div className="orders-page">

//       {/* TOP */}

//       <div className="orders-top">

//         <div>
//           <h2>My Orders</h2>

//           <p>
//             Track, return or buy
//             things again
//           </p>
//         </div>

//         <div className="search-box">

//           <input
//             type="text"
//             placeholder="Search by invoice number"
//             value={search}
//             onChange={(e) =>
//               setSearch(
//                 e.target.value
//               )
//             }
//           />

//         </div>
//       </div>

//       {/* EMPTY */}

//       {filteredOrders.length ===
//       0 ? (

//         <div className="empty-orders">

//           <h3>
//             No Orders Found
//           </h3>

//           <p>
//             You haven't placed
//             any orders yet.
//           </p>

//           <Link
//             href="/shop"
//             className="shop-btn"
//           >
//             Continue Shopping
//           </Link>

//         </div>

//       ) : (

//         filteredOrders.map(
//           (order, index) => (

//             <div
//               className="order-card"
//               key={index}
//             >

//               {/* HEADER */}

//               <div className="order-header">

//                 <div className="header-item">

//                   <span>
//                     ORDER PLACED
//                   </span>

//                   <strong>
//                     {new Date(
//                       order.ordered_at
//                     ).toDateString()}
//                   </strong>

//                 </div>

//                 <div className="header-item">

//                   <span>TOTAL</span>

//                   <strong>
//                     ₹
//                     {
//                       order.total_amount
//                     }
//                   </strong>

//                 </div>

//                 <div className="header-item">

//                   <span>
//                     PAYMENT
//                   </span>

//                   <strong>
//                     {
//                       order.payment_status
//                     }
//                   </strong>

//                 </div>

//                 <div className="header-item order-id">

//                   <span>
//                     ORDER #
//                   </span>

//                   <strong>
//                     {
//                       order.invoice_no
//                     }
//                   </strong>

//                 </div>

//               </div>

//               {/* PRODUCTS */}

//               {order.order_items?.map(
//                 (item, i) => (

//                   <div
//                     className="order-body"
//                     key={i}
//                   >

//                     <div className="product-left">

//                       <div className="image-box">

//                         <img
//                           src={
//                             item.product_image
//                           }
//                           alt={
//                             item.product_name
//                           }
//                         />

//                       </div>

//                       <div className="product-details">

//                         <div
//                           className={`status ${getStatusClass(
//                             order.order_status
//                           )}`}
//                         >

//                           {
//                             order.order_status
//                           }

//                         </div>

//                         <h4>
//                           {
//                             item.product_name
//                           }
//                         </h4>

//                         <p>
//                           Quantity:{" "}
//                           {
//                             item.quantity
//                           }
//                         </p>

//                         <p className="price">
//                           ₹
//                           {item.price}
//                         </p>

//                         <div className="button-group">

//                           <Link
//                             href={`/my-account-orders-details`}
//                             className="track-btn"
//                           >
//                             View Details
//                           </Link>

//                         </div>

//                       </div>

//                     </div>

//                     <div className="product-right">

//                       {order.invoice_pdf && (

//                         <a
//                           href={
//                             order.invoice_pdf
//                           }
//                           target="_blank"
//                           className="invoice-btn"
//                         >
//                           Download Invoice
//                         </a>

//                       )}

//                       <button className="help-btn">
//                         Get Help
//                       </button>

//                     </div>

//                   </div>
//                 )
//               )}

//             </div>
//           )
//         )
//       )}

//       <style jsx>{`
//         .orders-page {
//           width: 100%;
//         }

//         .orders-top {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           gap: 20px;
//           margin-bottom: 25px;
//           flex-wrap: wrap;
//         }

//         .orders-top h2 {
//           font-size: 30px;
//           font-weight: 700;
//           margin-bottom: 5px;
//           color: #111;
//         }

//         .orders-top p {
//           color: #666;
//           margin: 0;
//           font-size: 14px;
//         }

//         .search-box input {
//           width: 320px;
//           height: 48px;
//           border: 1px solid #ddd;
//           border-radius: 12px;
//           padding: 0 16px;
//           outline: none;
//           font-size: 14px;
//           background: #fff;
//         }

//         .order-card {
//           border: 1px solid #e5e7eb;
//           border-radius: 18px;
//           overflow: hidden;
//           background: #fff;
//           margin-bottom: 24px;
//         }

//         .order-header {
//           background: #f8f9fa;
//           padding: 18px 24px;
//           display: grid;
//           grid-template-columns: repeat(
//             4,
//             1fr
//           );
//           gap: 20px;
//           border-bottom: 1px solid #ececec;
//         }

//         .header-item span {
//           display: block;
//           font-size: 11px;
//           color: #777;
//           margin-bottom: 6px;
//           letter-spacing: 0.5px;
//         }

//         .header-item strong {
//           font-size: 14px;
//           color: #111;
//           font-weight: 600;
//         }

//         .order-id {
//           text-align: right;
//         }

//         .order-body {
//           padding: 24px;
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//           align-items: flex-start;
//         }

//         .product-left {
//           display: flex;
//           gap: 20px;
//           flex: 1;
//         }

//         .image-box {
//           width: 130px;
//           height: 130px;
//           border-radius: 14px;
//           overflow: hidden;
//           background: #f5f5f5;
//           flex-shrink: 0;
//         }

//         .image-box img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .product-details {
//           flex: 1;
//         }

//         .status {
//           display: inline-flex;
//           padding: 6px 14px;
//           border-radius: 30px;
//           font-size: 12px;
//           font-weight: 600;
//           margin-bottom: 12px;
//         }

//         .status.delivered {
//           background: rgba(
//             34,
//             197,
//             94,
//             0.12
//           );
//           color: #16a34a;
//         }

//         .status.processing {
//           background: rgba(
//             245,
//             158,
//             11,
//             0.12
//           );
//           color: #d97706;
//         }

//         .status.cancelled {
//           background: rgba(
//             239,
//             68,
//             68,
//             0.12
//           );
//           color: #dc2626;
//         }

//         .status.placed {
//           background: rgba(
//             59,
//             130,
//             246,
//             0.12
//           );
//           color: #2563eb;
//         }

//         .product-details h4 {
//           font-size: 20px;
//           margin-bottom: 10px;
//           color: #111;
//           font-weight: 600;
//         }

//         .product-details p {
//           color: #666;
//           font-size: 14px;
//           margin-bottom: 8px;
//         }

//         .price {
//           font-size: 18px !important;
//           font-weight: 700;
//           color: #111 !important;
//         }

//         .button-group {
//           display: flex;
//           gap: 12px;
//           margin-top: 20px;
//           flex-wrap: wrap;
//         }

//         .track-btn,
//         .invoice-btn,
//         .help-btn {
//           height: 44px;
//           padding: 0 20px;
//           border-radius: 12px;
//           border: none;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           text-decoration: none;
//         }

//         .track-btn {
//           background: #111;
//           color: #fff;
//         }

//         .track-btn:hover {
//           background: #222;
//         }

//         .product-right {
//           display: flex;
//           flex-direction: column;
//           gap: 12px;
//           min-width: 200px;
//         }

//         .invoice-btn,
//         .help-btn {
//           background: #fff;
//           border: 1px solid #ddd;
//           color: #111;
//         }

//         .empty-orders {
//           text-align: center;
//           padding: 80px 20px;
//           background: #fff;
//           border-radius: 18px;
//           border: 1px solid #ececec;
//         }

//         .shop-btn {
//           margin-top: 20px;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           background: #111;
//           color: #fff;
//           height: 46px;
//           padding: 0 24px;
//           border-radius: 12px;
//           text-decoration: none;
//         }

//         .loading-box {
//           padding: 60px;
//           text-align: center;
//           font-size: 18px;
//           font-weight: 600;
//         }

//         @media (max-width: 992px) {
//           .order-header {
//             grid-template-columns: repeat(
//               2,
//               1fr
//             );
//           }

//           .order-id {
//             text-align: left;
//           }

//           .order-body {
//             flex-direction: column;
//           }

//           .product-right {
//             width: 100%;
//             flex-direction: row;
//           }
//         }

//         @media (max-width: 768px) {
//           .orders-top {
//             flex-direction: column;
//             align-items: flex-start;
//           }

//           .search-box {
//             width: 100%;
//           }

//           .search-box input {
//             width: 100%;
//           }

//           .order-header {
//             grid-template-columns: 1fr;
//           }

//           .product-left {
//             flex-direction: column;
//           }

//           .image-box {
//             width: 100%;
//             height: 220px;
//           }

//           .product-right {
//             flex-direction: column;
//           }
//         }
//       `}</style>

//     </div>
//   );
// }



"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  useOrderContext,
} from "@/context/OrderContext";

export default function Orders() {

  const {
    orders,
    loading,
    getOrders,
  } = useOrderContext();

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    getOrders();
  }, []);

  // =========================================
  // STATUS CLASS
  // =========================================

  const getStatusClass = (
    status
  ) => {

    switch (status) {

      case "Delivered":
        return "delivered";

      case "Processing":
        return "processing";

      case "Cancelled":
        return "cancelled";

      case "Placed":
        return "placed";

      default:
        return "";
    }
  };

  // =========================================
  // FILTER ORDERS
  // =========================================

  const filteredOrders =
    orders.filter((order) =>
      order.invoice_no
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // =========================================
  // LOADING
  // =========================================

  if (loading) {

    return (
      <div className="loading-box">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="orders-page">

      {/* TOP */}

      <div className="orders-top">

        <div>

          <h2>My Orders</h2>

          <p>
            Track, return or buy
            things again
          </p>

        </div>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search all orders"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

        </div>

      </div>

      {/* EMPTY */}

      {filteredOrders.length ===
      0 ? (

        <div className="empty-orders">

          <h3>
            No Orders Found
          </h3>

          <p>
            You haven't placed
            any orders yet.
          </p>

          <Link
            href="/shop"
            className="shop-btn"
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        filteredOrders.map(
          (order, index) => (

            <div
              className="order-card"
              key={index}
            >

              {/* HEADER */}

              <div className="order-header">

                <div className="header-item">

                  <span>
                    ORDER PLACED
                  </span>

                  <strong>
                    {new Date(
                      order.ordered_at
                    ).toDateString()}
                  </strong>

                </div>

                <div className="header-item">

                  <span>TOTAL</span>

                  <strong>
                    ₹
                    {
                      order.total_amount
                    }
                  </strong>

                </div>

                <div className="header-item">

                  <span>
                    SHIP TO
                  </span>

                  <strong>
                    {
                      order.address
                        ?.full_name ||
                      "Customer"
                    }
                  </strong>

                </div>

                <div className="header-item order-id">

                  <span>
                    ORDER #
                  </span>

                  <strong>
                    {
                      order.invoice_no
                    }
                  </strong>

                </div>

              </div>

              {/* PRODUCTS */}

              {order.order_items?.map(
                (
                  item,
                  i
                ) => (

                  <div
                    className="order-body"
                    key={i}
                  >

                    <div className="product-left">

                      <div className="image-box">

                        <img
                          src={
                            item.product_image
                          }
                          alt={
                            item.product_name
                          }
                        />

                      </div>

                      <div className="product-details">

                        <div
                          className={`status ${getStatusClass(
                            order.order_status
                          )}`}
                        >

                          {
                            order.order_status
                          }

                        </div>

                        <h4>
                          {
                            item.product_name
                          }
                        </h4>

                        <p>
                          Quantity:{" "}
                          {
                            item.quantity
                          }
                        </p>

                        <p className="price">

                          ₹
                          {
                            item.price
                          }

                        </p>

                        <div className="button-group">

                          <button
                            className="buy-btn"
                          >
                            Buy Again
                          </button>

                          <Link
                            href={`/my-account-orders-details`}
                            className="track-btn"
                          >
                            View Details
                          </Link>

                        </div>

                      </div>

                    </div>

                    <div className="product-right">

                      {order.invoice_pdf && (

                        <a
                          href={
                            order.invoice_pdf
                          }
                          target="_blank"
                          className="invoice-btn"
                        >
                          Download Invoice
                        </a>

                      )}

                      <button className="help-btn">
                        Get Help
                      </button>

                    </div>

                  </div>
                )
              )}

            </div>
          )
        )
      )}

      <style jsx>{`
        
      `}</style>

    </div>
  );
}