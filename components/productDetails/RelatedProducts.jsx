"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard1 from "../productCards/ProductCard1";

export default function RelatedProducts({ relatedProducts = {} }) {
  const products = relatedProducts?.entities || [];
  const recentlyViewed = relatedProducts?.entities || []; // optional reuse OR replace later

  return (
    <section className="flat-spacing">
      <div className="container flat-animate-tab">

        <ul className="tab-product justify-content-sm-center">
          <li className="nav-tab-item">
            <a href="#relatedProducts" className="active">
              Related Products
            </a>
          </li>
          {/* <li className="nav-tab-item">
            <a href="#recentlyViewed">
              Recently Viewed
            </a>
          </li> */}
        </ul>

        <div className="tab-content">

          {/* ================= RELATED ================= */}
          <div className="tab-pane active show" id="relatedProducts">
            <Swiper
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard1 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ================= RECENT ================= */}
          <div className="tab-pane" id="recentlyViewed">
            <Swiper
              spaceBetween={15}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {recentlyViewed.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard1 product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}