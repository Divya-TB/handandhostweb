

"use client";

import React, { useEffect, useState } from "react";
import Slider1 from "../sliders/Slider1";
import ColorSelect from "../ColorSelect";
import SizeSelect from "../SizeSelect";
import QuantitySelect from "../QuantitySelect";
import Image from "next/image";
import ProductStikyBottom from "../ProductStikyBottom";
import axios from "axios";
import Link from "next/link";

export default function Details1({ product }) {
  const [activeColor, setActiveColor] = useState("gray");
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const [productDetails, setProductDetails] = useState(null);

  const [isCartAdded, setIsCartAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL;

  const userId =
  typeof window !== "undefined"
    ? Number(localStorage.getItem("userId"))
    : null;

  /* ======================================
      GET PRODUCT DETAILS
  ====================================== */
  // useEffect(() => {
  //   if (product?.id) {
  //     getProductDetails();
  //   }
  // }, [product?.id]);

  // const getProductDetails = async () => {
  //   try {
  //     const res = await axios.get(
  //       `${API_URL}/api/products-detail/${product.id}/${userId || 0}`
  //     );

  //     // API returns direct object (NOT res.data.success)
  //     const data = res.data;

  //     setProductDetails(data);

  //     // FIXED FIELD MAPPING
  //     setQuantity(data.quantity || 1);

  //     setIsCartAdded(
  //       data.isAddedToCart == 1 || data.isAddedToCart === true
  //     );

  //     setIsWishlisted(
  //       data.isWishlisted == 1 || data.isWishlisted === true
  //     );

  //   } catch (error) {
  //     console.log("Error fetching product details", error);
  //   }
  // };

useEffect(() => {
  if (!product) return;
  const isInCart = (val) => val === 1 || val === "1" || val === true;
  const isInWish = (val) => val === 1 || val === "1" || val === true;
  const isCart = isInCart(product.isAddedToCart);
  const isWish = isInWish(product.isWishlisted);

  setProductDetails(product);
  setQuantity(product.quantity || 1);

  setIsCartAdded(isCart);
  setIsWishlisted(isWish);
}, [product]);

const syncFromResponse = (updatedProduct) => {
  setProductDetails(updatedProduct);

  setIsCartAdded(Number(updatedProduct.isAddedToCart) === 1);
  setIsWishlisted(Number(updatedProduct.isWishlisted) === 1);
};
  /* ======================================
      LOGIN CHECK
  ====================================== */
  const checkLogin = () => {
    if (!userId) {
      setShowPopup(true);
      return false;
    }
    return true;
  };

  /* ======================================
      ADD TO CART
  ====================================== */
  const addProductToCart = async (productId, qty) => {
    if (!checkLogin()) return;

    try {
      await axios.post(`${API_URL}/api/add-to-cart`, {
        product_ID: productId,
        User_ID: userId,
        quantity: qty,
      });

      const updated = {
        ...productDetails,
        isAddedToCart: 1
      };
      syncFromResponse(updated);
      // getProductDetails();
    } catch (error) {
      console.log(error);
      alert("Failed to add to cart");
    }
  };

  /* ======================================
      REMOVE FROM CART
  ====================================== */
  const removeFromCart = async (productId) => {
    try {
      await axios.post(`${API_URL}/api/remove-cart`, {
        product_ID: productId,
        User_ID: userId,
      });

      setIsCartAdded(false);
      // getProductDetails();
    } catch (error) {
      console.log(error);
      alert("Failed to remove from cart");
    }
  };

  /* ======================================
      WISHLIST TOGGLE
  ====================================== */
  const toggleWishlist = async () => {
    if (!checkLogin()) return;

    try {
      if (isWishlisted) {
        await axios.get(
          `${API_URL}/api/remove-wishlist/${productDetails.productwishlist_ID}`
        );

        setIsWishlisted(false);
      } else {
        await axios.post(`${API_URL}/api/add-to-wishlist`, {
          product_ID: productDetails.id,
          User_ID: userId,
        });

        setIsWishlisted(true);
      }

      // getProductDetails();
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };

  const buyNow = () => {
    if (!checkLogin()) return;
    window.location.href = "/checkout";
  };

  const data = productDetails || product;

  return (
    <>
      <section className="flat-spacing">
        <div className="tf-main-product section-image-zoom">
          <div className="container">
            <div className="row">

              {/* LEFT */}
              <div className="col-md-6">
                <div className="tf-product-media-wrap sticky-top">
                  <Slider1
                      setActiveColor={setActiveColor}
                      activeColor={activeColor}
                      firstItem={
                        data.productImages?.length > 0
                          ? data.productImages[0].image
                          : data.mainimage
                      }
                      productImages={data.productImages}   // ADD THIS
                    />
                </div>
              </div>

              {/* RIGHT */}
              <div className="col-md-6">
                <div className="tf-product-info-wrap position-relative mw-100p-hidden ">
                  <div className="tf-product-info-list other-image-zoom">

                    <div className="tf-product-info-heading">
                      <div className="tf-product-info-name">

                        <div className="text text-btn-uppercase">
                          {data.category_name || data.category || "Category"}
                        </div>

                        <h3 className="name">
                          {data.title}
                        </h3>

                      </div>

                     <div
                        className="tf-product-info-price"
                        style={{ display: "flex", gap: "5px", alignItems: "center" }}
                      >
                        <h5
                          className="old-price"
                          style={{ textDecoration: "line-through", opacity: 0.6, margin: 0 }}
                        >
                          ₹{Number(data.price).toFixed(2)}
                        </h5>

                        <h5 className="price-on-sale font-2" style={{ margin: 0 }}>
                          ₹{Number(data.discount_price).toFixed(2)}
                        </h5>
                      </div>
                    </div>

                    {/* OPTIONS */}
                    <div className="tf-product-info-choose-option">

                      {/* <ColorSelect
                        setActiveColor={setActiveColor}
                        activeColor={activeColor}
                      /> */}

                      <SizeSelect variant={data.variant} />

                      {/* QTY */}
                      <div className="tf-product-info-quantity">
                        <div className="title mb_12">
                          Quantity:
                        </div>

                        <QuantitySelect
                          quantity={quantity}
                          setQuantity={setQuantity}
                        />
                      </div>

                      {/* BUTTONS */}
                      <div>
                        <div className="tf-product-info-by-btn mb_10">

                          {/* CART */}
                          <a
                            onClick={() =>
                              isCartAdded
                                ? removeFromCart(data.id)
                                : addProductToCart(data.id, quantity)
                            }
                            className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
                            style={{ cursor: "pointer" }}
                          >
                            <span>
                              {isCartAdded
                                ? "Added to Cart -"
                                : "Add to cart -"}
                            </span>

                            <span className="tf-qty-price total-price">
                              Rs
                              {(Number(data.discount_price || data.price) * quantity).toFixed(2)}
                            </span>
                          </a>

                          {/* WISHLIST */}
                          <a
                            onClick={toggleWishlist}
                            className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                            style={{ cursor: "pointer" }}
                          >
                            <span
                              className="icon icon-heart"
                              style={{
                                color: isWishlisted ? "red" : "black",
                                transition: "0.3s",
                              }}
                            />
                          </a>

                        </div>

                        {/* BUY NOW */}
                        <a
                          onClick={buyNow}
                          className="btn-style-3 text-btn-uppercase"
                          style={{ cursor: "pointer" }}
                        >
                          Buy it now
                        </a>
                      </div>

                      {/* PAYMENT */}
                      <div className="tf-product-info-guranteed">
                        <div className="text-title">
                          Guaranteed safe checkout:
                        </div>

                        <div className="tf-payment">
                          <Image
                            alt=""
                            src="/images/payment/img-1.png"
                            width={100}
                            height={64}
                          />
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <ProductStikyBottom product={data} />
      </section>

      {/* LOGIN POPUP */}
      {showPopup && (
        <div className="modal fade show d-block">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4 text-center">

              <h4>Login Required</h4>

              <p>Please login or register to continue.</p>

              <div className="d-flex gap-3 justify-content-center mt-3">
                <Link href="/login" className="tf-btn btn-fill">
                  Login
                </Link>

                <Link href="/register" className="tf-btn btn-fill">
                  Register
                </Link>
              </div>

              <button
                className="btn btn-light mt-3"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}