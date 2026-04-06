 "use client";

import { useContextElement } from "@/context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";

export default function Hero() {
  const { homebanner } = useContextElement();


  if (!homebanner.length) {
    return <p>Loading...</p>;
  }

  return (
        <div className="tf-slideshow slider-style2 slider-effect-fade">
      <Swiper
        dir="ltr"
        centeredSlides={false}
        spaceBetween={0}
        loop={true}
        autoplay={false}
        // breakpoints={{
        //   1024: {
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     slidesPerView: 1,
        //   },
        //   640: {
        //     slidesPerView: 1,
        //   },
        //   0: {
        //     slidesPerView: 1,
        //   },
        // }}
        className="swiper tf-sw-slideshow"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".spd18",
        }}
      >
        {homebanner.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                alt={slide.V_ImageAlt}
                src={slide.V_DigitalFile}
                width={1920}
                height={796}
              />
              <div className="box-content">
                <div className="container">
                  <div className="content-slider">
                    <div className="box-title-slider">
                      <div
                        className="fade-item fade-item-1 heading title-display text-white"
                        dangerouslySetInnerHTML={{ __html: slide.V_Title}}
                      />
                      <p className="fade-item fade-item-2 body-text-1 text-white">
                        {slide.V_Description}
                      </p>
                    </div>
                    <div className="fade-item fade-item-3 box-btn-slider">
                      <Link
                        href={`/shop-default-grid`}
                        className="tf-btn btn-fill btn-square btn-white"
                      >
                        {/* <span className="text">Shop Now</span> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots sw-pagination-slider type-circle white-circle-line justify-content-center spd18" />
        </div>
      </div>
    </div>
    
  );
}