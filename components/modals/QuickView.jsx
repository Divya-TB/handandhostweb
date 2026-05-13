"use client";
import React, { useState } from "react";
import Image from "next/image";
import SizeSelect from "../productDetails/SizeSelect";
import ColorSelect from "../productDetails/ColorSelect";
import Grid5 from "../productDetails/grids/Grid5";
import { useContextElement } from "@/context/Context";
import QuantitySelect from "../productDetails/QuantitySelect";
import DOMPurify from "dompurify";
import { useRouter } from "next/navigation";
import { useCheckout } from "@/context/CheckoutContext";
import { useAuth } from "@/context/AuthContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export default function QuickView() {
  const { user } = useAuth();
  const userId = user?.id;
  const [activeColor, setActiveColor] = useState("gray");
  const [quantity, setQuantity] = useState(1); // Initial quantity is 1
  const {
    quickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    cartProducts,
    updateQuantity,
  } = useContextElement();

  const router = useRouter();
  const { setBuyNow } = useCheckout();

  const discountPercentage =
  quickViewItem?.price && quickViewItem?.discount_price
    ? Math.round(
        ((quickViewItem.price - quickViewItem.discount_price) /
          quickViewItem.price) *
          100
      )
    : 0;

  //  console.log("quickViewItem in QuickView.jsx:", quickViewItem.productImages[0].images);
  const imageSrc =
  quickViewItem?.productImages ||
  quickViewItem?.mainimage ||
  null;


  const formattedImages =
  quickViewItem?.productImages?.map((img, index) => ({
    src: img.image,
    href: img.image,
    width: 1000,
    height: 1200,
    scroll: `img-${index}`,
    alt: quickViewItem?.title,
    zoom: img.image,
  })) || [];

  const handleBuyNow = () => {
    if (!quickViewItem?.id) return;

    if (!userId) {
      router.push("/login?from=/checkout");
      return;
    }

    setBuyNow({
      product_ID: quickViewItem.id,
      title: quickViewItem.title,
      price: quickViewItem.price,
      discount_price: quickViewItem.discount_price,
      quantity: quantity,
      mainimage: quickViewItem.mainimage,
    });

    router.push("/checkout");
  };

  const openModalSizeChoice = () => {
    const bootstrap = require("bootstrap"); // dynamically import bootstrap
    var myModal = new bootstrap.Modal(document.getElementById("size-guide"), {
      keyboard: false,
    });

    myModal.show();
    document
      .getElementById("size-guide")
      .addEventListener("hidden.bs.modal", () => {
        myModal.hide();
      });
    const backdrops = document.querySelectorAll(".modal-backdrop");
    if (backdrops.length > 1) {
      // Apply z-index to the last backdrop
      const lastBackdrop = backdrops[backdrops.length - 1];
      lastBackdrop.style.zIndex = "1057";
    }
  };
  return (
    <div className="modal fullRight fade modal-quick-view" id="quickView">
      <div className="modal-dialog">
        <div className="modal-content">
          
          {/* console.log("quickViewItem.............", quickViewItem); */}
          {/* <Grid5
            images={imageSrc}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          /> */}

          <Grid5
            firstItem={formattedImages[0]?.src}
            images={formattedImages}
            activeColor={activeColor}
            setActiveColor={setActiveColor}
          />

          <div className="wrap mw-100p-hidden">
            <div className="header">
              <h5 className="title">Quick View</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
              />
            </div>
          
            <div className="tf-product-info-list tf-product-info-list-style">
              <div className="tf-product-info-heading">
                <div className="tf-product-info-name">
                  <div className="text text-btn-uppercase">{quickViewItem?.category_name}</div>
                  <h3 className="name">{quickViewItem?.title}</h3>
                  <div className="sub">
                    <div className="tf-product-info-rate">
                      <div className="list-star">
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                      </div>
                      <div className="text text-caption-1">(134 reviews)</div>
                    </div>
                    <div className="tf-product-info-sold">
                      <i className="icon icon-lightning" />
                      <div className="text text-caption-1">
                        18&nbsp;sold in last&nbsp;32&nbsp;hours
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tf-product-info-desc">
                  <div className="tf-product-info-price">
                    <h5 className="price-on-sale font-2">
                      ₹{quickViewItem?.discount_price}
                    </h5>
                    {quickViewItem?.price ? (
                      <>
                        <div className="compare-at-price font-2">
                          {" "}
                          ₹{quickViewItem?.price}
                        </div>
                        <div className="badges-on-sale text-btn-uppercase">
                          -{discountPercentage}%
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                 <div
                    className="description"
                    dangerouslySetInnerHTML={{
                      __html: quickViewItem?.description,
                    }}
                  />
                  <div className="tf-product-info-liveview">
                    <i className="icon icon-eye" />
                    <p className="text-caption-1">
                      <span className="liveview-count">28</span> people are
                      viewing this right now
                    </p>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-choose-option">
                {/* <ColorSelect
                  activeColor={activeColor}
                  setActiveColor={setActiveColor}
                /> */}
                {/* <SizeSelect /> */}
                <div className="tf-product-info-quantity">
                  <div className="title mb_12">Quantity:</div>
                  <QuantitySelect
                    quantity={
                      isAddedToCartProducts(quickViewItem?.id)
                        ? cartProducts.filter(
                            (elm) => elm.id == quickViewItem?.id
                          )[0].quantity
                        : quantity
                    }
                    setQuantity={(qty) => {
                      if (isAddedToCartProducts(quickViewItem?.id)) {
                        updateQuantity(quickViewItem?.id, qty);
                      } else {
                        setQuantity(qty);
                      }
                    }}
                  />
                </div>
                <div>
                  <div className="tf-product-info-by-btn mb_10">
                    <a
                      className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 show-shopping-cart"
                      onClick={() =>
                        addProductToCart(quickViewItem?.id, quantity)
                      }
                    >
                      <span>
                        {isAddedToCartProducts(quickViewItem?.id)
                          ? "Already Added - "
                          : "Add to cart - "}
                      </span>
                      <span className="tf-qty-price total-price ms-1">
                        ₹
                        {isAddedToCartProducts(quickViewItem?.id)
                          ? (
                              (quickViewItem?.discount_price ?? quickViewItem?.price ?? 0) *
                              (cartProducts.find((elm) => elm.id == quickViewItem?.id)?.quantity ?? 1)
                            )
                          : (
                              (quickViewItem?.discount_price ?? 0) * (quantity ?? 1)
                            )}
                      </span>
                    </a>
                    {/* <a
                      href="#compare"
                      onClick={() => addToCompareItem(quickViewItem?.id)}
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon hover-tooltip compare btn-icon-action show-compare"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip text-caption-2">
                        {" "}
                        {isAddedtoCompareItem(quickViewItem?.id)
                          ? "Already compared"
                          : "Compare"}
                      </span>
                    </a> */}
                    {/* <a
                      onClick={() => addToWishlist(quickViewItem?.id)}
                      className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip text-caption-2">
                        {isAddedtoWishlist(quickViewItem?.id)
                          ? "Already Wishlished"
                          : "Wishlist"}
                      </span>
                    </a> */}
                  </div>
                 <a
                    onClick={handleBuyNow}
                    className="btn-style-3 text-btn-uppercase"
                    style={{ cursor: "pointer" }}
                  >
                    Buy it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
