"use client";

import { slides } from "@/data/singleProductSliders";
import Drift from "drift-zoom";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useRef, useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Slider1({
  activeColor = "gray",
  setActiveColor = () => {},
  firstItem,
  productImages = [],   // ✅ ADD THIS
  slideItems = slides,
  thumbSlidePerView = 6,
  thumbSlidePerViewOnMobile = 6,
}) {

  /* ===============================
     BUILD ITEMS FROM API
  =============================== */
  const items =
    productImages && productImages.length > 0
      ? productImages.map((img, index) => ({
          id: index + 1,
          src: img.image,
          width: 800,
          height: 800,
          alt: "product image",
          color: "gray",
        }))
      : [...slideItems];

  // fallback main image override
  if (items.length > 0) {
    items[0].src = firstItem || items[0].src;
  }

  const lightboxRef = useRef(null);
  const swiperRef = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===============================
     DRIFT ZOOM
  =============================== */
  useEffect(() => {
    let driftInstances = [];

    const initZoom = () => {
      const pane = document.querySelector(".tf-zoom-main");
      const images = document.querySelectorAll(".tf-image-zoom");

      if (!pane || images.length === 0) return;

      images.forEach((img) => {
        const drift = new Drift(img, {
          zoomFactor: 2,
          paneContainer: pane,
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });

        driftInstances.push(drift);
      });

      const handleMouseOver = (event) => {
        const parent = event.target.closest(".section-image-zoom");
        if (parent) parent.classList.add("zoom-active");
      };

      const handleMouseLeave = (event) => {
        const parent = event.target.closest(".section-image-zoom");
        if (parent) parent.classList.remove("zoom-active");
      };

      images.forEach((element) => {
        element.addEventListener("mouseover", handleMouseOver);
        element.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        images.forEach((element) => {
          element.removeEventListener("mouseover", handleMouseOver);
          element.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    };

    const timer = setTimeout(() => {
      initZoom();
    }, 300);

    return () => {
      clearTimeout(timer);
      driftInstances.forEach((d) => d?.disable?.());
    };
  }, []);

  /* ===============================
     PHOTO SWIPE
  =============================== */
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: ".item",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
    };
  }, []);

  /* ===============================
     COLOR SYNC (SAFE)
  =============================== */
  useEffect(() => {
    if (!items[activeIndex]) return;

    if (items[activeIndex]?.color !== activeColor) {
      const slideIndex = items.findIndex(
        (elm) => elm.color === activeColor
      );

      if (swiperRef.current && slideIndex >= 0) {
        swiperRef.current.slideTo(slideIndex);
      }
    }
  }, [activeColor]);

  useEffect(() => {
    setTimeout(() => {
      if (swiperRef.current) {
        const slideIndex = items.findIndex(
          (elm) => elm.color === activeColor
        );

        swiperRef.current.slideTo(slideIndex >= 0 ? slideIndex : 0);
      }
    }, 300);
  }, []);

  return (
    <div className="thumbs-slider">

      {/* THUMBNAILS */}
      <Swiper
        className="swiper tf-product-media-thumbs other-image-zoom"
        dir="ltr"
        direction="vertical"
        spaceBetween={10}
        slidesPerView={thumbSlidePerView}
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        breakpoints={{
          0: {
            direction: "horizontal",
            slidesPerView: thumbSlidePerViewOnMobile,
          },
          1200: {
            direction: "vertical",
            slidesPerView: thumbSlidePerView,
          },
        }}
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <Image
                src={slide.src}
                alt={slide.alt || "product"}
                width={100}
                height={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* MAIN SLIDER */}
      <Swiper
        dir="ltr"
        className="swiper tf-product-media-main"
        id="gallery-swiper-started"
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        modules={[Thumbs]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          if (items[swiper.activeIndex]) {
            setActiveIndex(swiper.activeIndex);
            setActiveColor(items[swiper.activeIndex]?.color?.toLowerCase());
          }
        }}
      >
        {items.map((slide, index) => (
          <SwiperSlide key={index}>
            <a
              href={slide.src}
              target="_blank"
              className="item"
              data-pswp-width={slide.width}
              data-pswp-height={slide.height}
            >
              <Image
                className="tf-image-zoom"
                data-zoom={slide.src}
                src={slide.src}
                alt="product"
                width={slide.width}
                height={slide.height}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}



