"use client";

import { useContextElement } from "@/context/Context";
import { useEffect, useMemo, useState } from "react";
import ProductCard1 from "../productCards/ProductCard1";
import Pagination from "../common/Pagination";
import Link from "next/link";

export default function Wishlist() {
  const { wishList, product } =
    useContextElement();

  const [items, setItems] =
    useState([]);

  const [currentPage, setCurrentPage] =
    useState(1);

  const limit = 4; // products per page

  useEffect(() => {
    if (
      Array.isArray(product) &&
      Array.isArray(wishList)
    ) {
      const wishlistIds =
        wishList.map((item) =>
          Number(item.product_ID)
        );

      const filtered =
        product.filter((elm) =>
          wishlistIds.includes(
            Number(elm.id)
          )
        );

      setItems(filtered);
      setCurrentPage(1);
    }
  }, [wishList, product]);

  const totalPages = Math.ceil(
    items.length / limit
  );

  const paginatedItems = useMemo(() => {
    const start =
      (currentPage - 1) * limit;
    const end = start + limit;

    return items.slice(start, end);
  }, [items, currentPage]);

  return (
    <section className="flat-spacing">
      <div className="container">
        {items.length ? (
          <>
            <div className="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
              {paginatedItems.map(
                (item) => (
                  <ProductCard1
                    key={item.id}
                    product={item}
                  />
                )
              )}
            </div>

            {totalPages > 1 && (
              <ul className="wg-pagination justify-content-center mt-4">
                <Pagination
                  totalPages={
                    totalPages
                  }
                  currentPage={
                    currentPage
                  }
                  setCurrentPage={
                    setCurrentPage
                  }
                />
              </ul>
            )}
          </>
        ) : (
          <div className="p-5">
            Your wishlist is empty.

            <Link
              className="btn-line"
              href="/shop-default-grid"
            >
              Explore Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}