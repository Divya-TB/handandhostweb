"use client";
import { useContextElement } from "/context/Context";
import ProductCard1 from "@/components/productCards/ProductCard1";
// import { products8 } from "@/data/products";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products5() {
  const { product } = useContextElement();
  const productsList = Array.isArray(product) ? product : [];

  if (productsList.length === 0) return null;
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Product</h3>
          <p className="subheading text-secondary">
           From beauty to immunity—one gummy does it all.
          </p>
        </div>
        <Swiper
          className="swiper tf-sw-latest"
          dir="ltr"
          spaceBetween={15}
          breakpoints={{
            // 0: { slidesPerView: , spaceBetween: 15 },

            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd6",
          }}
        >
          {productsList.map((product, i) => (
            <SwiperSlide key={i} className="swiper-slide" >
              <ProductCard1 product={product} />
            </SwiperSlide>
          ))}

          <div className="sw-pagination-latest spd6 sw-dots type-circle justify-content-center" />
        </Swiper>
      </div>
    </section>
  );
}
