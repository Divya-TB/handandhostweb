"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";


import SizeSelect from "../productDetails/SizeSelect";

export default function ProductCard1({
  product,
  gridClass = "",
  parentClass = "card-product wow fadeInUp",
  isNotImageRatio = false,
  radiusClass = "",
}) {

  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const requireLogin = (callback) => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    callback();
  };
  const noImage = "/images/no-image.png";

  const getImage = (img) => {
    if (!img) return noImage;
    if (typeof img !== "string") return noImage;
    if (img.trim() === "") return noImage;
    return img;
  };

  const [currentImage, setCurrentImage] = useState(
    getImage(product.mainimage)
  );

  const {
    setQuickAddItem,
    addToWishlist,
    removeFromWishlist,
    isAddedtoWishlist,
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
    cartProducts,
    removeFromCart,
  } = useContextElement();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------- STATES ---------- */
  const isWishlisted = mounted
    ? isAddedtoWishlist(product.id)
    : false;

  const [localCartAdded, setLocalCartAdded] = useState(false);

  const isCartAdded = mounted
    ? localCartAdded || isAddedToCartProducts(product.id)
    : false;

  //  Quantity State
  const [quantity, setQuantity] = useState(0);

  /* ---------- IMAGE ---------- */
  useEffect(() => {
    setCurrentImage(getImage(product.mainimage));
  }, [product]);




useEffect(() => {
  if (!mounted) return;

  const safeCart = Array.isArray(cartProducts) ? cartProducts : [];

  const cartItem = safeCart.find(
    (item) =>
      Number(item.product_ID || item.id) === Number(product.id)
  );

  const qty = Number(cartItem?.quantity || 0);

  setQuantity(qty);
  setLocalCartAdded(qty > 0);

}, [mounted, cartProducts, product.id]);



  /* ---------- WISHLIST ---------- */
  const handleWishlist = async () => {
    if (isWishlisted) {
      await removeFromWishlist(product.productaddtocart_ID);
    } else {
      await addToWishlist(product.id);
    }
  };

  /* ---------- CART ---------- */
  const handleCart = async () => {
    if (isCartAdded) return;

    setLocalCartAdded(true);
    setQuantity(1);

    await addProductToCart(product.id, 1);
  };


 const increaseQty = async () => {
  const newQty = quantity + 1;

  setQuantity(newQty);
  setLocalCartAdded(true);

  await addProductToCart(product.id, newQty);
};

const decreaseQty = async () => {
  const newQty = quantity - 1;

  if (newQty <= 0) {
    setQuantity(0);
    setLocalCartAdded(false);
    await removeFromCart(product.id);
    return;
  }

  setQuantity(newQty);

  await addProductToCart(product.id, newQty);
};

  return (
    <div
      className={`${parentClass} ${gridClass} ${
        product.isOnSale ? "on-sale" : ""
      } ${product.sizes ? "card-product-size" : ""}`}
    >
      <div
        className={`card-product-wrapper ${
          isNotImageRatio ? "aspect-ratio-0" : ""
        } ${radiusClass}`}
      >
        {/* IMAGE */}
        <Link
          href={`/product-detail/${product.id}`}
          className="product-img"
        >
          <Image
            className="lazyload img-product"
            src={currentImage}
            alt={product.title || "Product"}
            width={600}
            height={800}
          />

          <Image
            className="lazyload img-hover"
            src={getImage(product.mainimage)}
            alt={product.title || "Product"}
            width={600}
            height={800}
          />
        </Link>

        {/* DISCOUNT */}
        {product.discount_price ? (
          <div className="on-sale-wrap">
            <span className="on-sale-item">
              -
              {Math.round(
                ((product.price - product.discount_price) /
                  product.price) *
                  100
              )}
              %
            </span>
          </div>
        ) : null}

        {/* SIDE BUTTONS */}
        <div className="list-product-btn">
          {/* WISHLIST */}
          {/* <a
            onClick={() =>
              requireLogin(() => handleWishlist())
            }
            className="box-icon wishlist btn-icon-action"
            style={{ cursor: "pointer" }}
          >
            <span
              className="icon icon-heart"
              style={{
                color: isWishlisted ? "red" : "black",
                transition: "0.3s",
              }}
            />
            <span className="tooltip">
              {isWishlisted
                ? "Already Wishlisted"
                : "Wishlist"}
            </span>
          </a> */}

          {/* QUICK VIEW */}
          <a
            href="#quickView"
            onClick={async () => {
              await setQuickViewItem(product.id);
            }}
            data-bs-toggle="modal"
            className="box-icon quickview tf-btn-loading"
          >
            <span className="icon icon-eye" />
            <span className="tooltip">Quick View</span>
          </a>
        </div>

        {/* CART BUTTON */}
        <div className="list-btn-main">
          {product.addToCart === "Quick Add" ? (
            <a
              className="btn-main-product"
              href="#quickAdd"
              onClick={() => setQuickAddItem(product.id)}
              data-bs-toggle="modal"
            >
              Quick Add
            </a>
          ) : !isCartAdded ? (
            <a
              className="btn-main-product"
              onClick={() =>
                requireLogin(() => handleCart())
              }
              style={{ cursor: "pointer" }}
            >
              Add to Cart
            </a>
          ) : (
            <div className="btn-main-product productcard1-quantity">
              <span className="qty-btn" onClick={decreaseQty}>
                −
              </span>

              <span className="qty-text">
                {quantity}
              </span>

              <span className="qty-btn" onClick={increaseQty}>
                +
              </span>
            </div>     
          )}
        </div>
      </div>

      <div className="card-product-info">
        <Link
          href={`/product-detail/${product.id}`}
          className="title link"
        >
          {product.title}
        </Link>

        <span className="price">
          {product.discount_price && (
            <span className="old-price">
              ₹ {product.price}
            </span>
          )}{" "}
          ₹ {product.discount_price || product.price}
        </span>
      </div>
    </div>
  );
}