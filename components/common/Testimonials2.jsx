// "use client";

// import { testimonialsWithProduct } from "@/data/products";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Image from "next/image";
// import { useContextElement } from "@/context/Context";
// import { Pagination } from "swiper/modules";
// export default function Testimonials2() {
//   const { setQuickViewItem, productreview } = useContextElement();
//   return (
//     <section className="flat-spacing-6">
//       <div className="container">
//         <div className="heading-section text-center">
//           <h3 className="heading wow fadeInUp">Customer Say!</h3>
//           <p className="subheading wow fadeInUp">
//             Our supplements are crafted to be truly cherished—our customers love them, and we are committed to inspiring better health with every product.
//           </p>
//         </div>
//         <Swiper
//           dir="ltr"
//           className="swiper tf-sw-testimonial wow fadeInUp"
//           data-wow-delay="0.1s"
//           spaceBetween={15}
//           breakpoints={{
//             1024: { slidesPerView: 2 }, // data-preview for larger screens
//             768: { slidesPerView: 1.3 }, // data-tablet
//             0: { slidesPerView: 1 }, // data-mobile
//           }}
//           modules={[Pagination]}
//           pagination={{
//             clickable: true,
//             clickable: true,
//             el: ".spd32",
//           }}
//         >
//           {productreview.map((item, index) => (
//             <SwiperSlide className="swiper-slide" key={index}>
//               <div className="testimonial-item hover-img">
//                 <div className="img-style">
//                   <Image
//                     data-src={item.imgSrc}
//                     alt={item.alt}
//                     src={item.imgSrc || "/images/avatar-placeholder.png"}
//                     width={351}
//                     height={468}
//                   />
//                   <a
//                     href="#quickView"
//                     onClick={() => setQuickViewItem(item)}
//                     data-bs-toggle="modal"
//                     className="box-icon hover-tooltip center"
//                   >
//                     <span className="icon icon-eye" />
//                     <span className="tooltip">Quick View</span>
//                   </a>
//                 </div>
//                 <div className="content">
//                   <div className="content-top">
//                     <div className="list-star-default">
//                      {[...Array(5)].map((_, i) => (
//                         <i
//                           key={i}
//                           className={`icon ${i < item.rating ? "icon-star" : "icon-star-empty"}`}
//                         />
//                       ))}
//                     </div>
//                     <p className="text-secondary">{item.quote}</p>
//                     <div className="box-author">
//                       <div className="text-title author">{item.author}</div>
//                       <svg
//                         className="icon"
//                         width={20}
//                         height={21}
//                         viewBox="0 0 20 21"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         {/* SVG content */}
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="box-avt">
//                     <div className="avatar avt-60 round">
//                       <Image
//                         alt="avt"
//                         src={item.mainimage}
//                         width={351}
//                         height={468}
//                       />
//                     </div>
//                     <div className="box-price">
//                       <p className="text-title text-line-clamp-1">
//                         {item.title}
//                       </p>
//                       <div className="text-button price">
//                         Rs{item.price}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd32" />
//         </Swiper>
//       </div>
//     </section>
//   );
// }



"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState } from "react";
import { useContextElement } from "@/context/Context";
import { Pagination } from "swiper/modules";

export default function Testimonials2() {
  const { setQuickViewItem, productreview } = useContextElement();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const avatarFallback = "/images/user-silhouette.png";

  return (
    <section className="flat-spacing-6">
      <div className="container">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Customer Say!</h3>
          <p className="subheading wow fadeInUp">
            Our supplements are crafted to be truly cherished—our customers love them, and we are committed to inspiring better health with every product.
          </p>
        </div>

        <Swiper
          dir="ltr"
          className="swiper tf-sw-testimonial wow fadeInUp"
          spaceBetween={15}
          breakpoints={{
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 1.3 },
            0: { slidesPerView: 1 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd32",
          }}
        >
          {productreview?.map((item, index) => (
            <SwiperSlide key={index}>
              
              {/* CARD */}
              <div
                className="testimonial-item hover-img"
                style={{
                  height: "430px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "15px",
                  overflow: "hidden",
                }}
              >

                {/* ===== IMAGE (CENTER + ROUND) ===== */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "2px solid #eee",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Image
                      alt="user"
                      src= "https://handandhost2026.s3.ap-south-2.amazonaws.com/download+(2).png"
                      width={90}
                      height={90}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* QUICK VIEW */}
                  <a
                    href="#quickView"
                    onClick={() => setQuickViewItem(item)}
                    data-bs-toggle="modal"
                    className="box-icon hover-tooltip center"
                    style={{ position: "absolute", right: "5px", top: "0px" }}
                  >
                    <span className="icon icon-eye" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>

                {/* ===== CONTENT ===== */}
                <div className="content" style={{ flex: 1, overflow: "hidden" }}>

                  {/* STARS */}
                  <div className="list-star-default">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`icon ${
                          i < item.rating ? "icon-star" : "icon-star-empty"
                        }`}
                      />
                    ))}
                  </div>

                  {/* REVIEW TEXT (READ MORE) */}
                  <div
                    style={{
                      maxHeight: expandedIndex === index ? "120px" : "60px",
                      overflowY: "auto",
                      transition: "0.3s ease",
                      marginTop: "8px",
                    }}
                  >
                    <p className="text-secondary">
                      {expandedIndex === index
                        ? item.quote
                        : item.quote?.length > 120
                        ? item.quote.slice(0, 120) + "..."
                        : item.quote}
                    </p>
                  </div>

                  {item.quote?.length > 120 && (
                    <button
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      style={{
                        background: "none",
                        border: "none",
                        color: "#007bff",
                        cursor: "pointer",
                        fontSize: "13px",
                        padding: 0,
                        marginTop: "5px",
                      }}
                    >
                      {expandedIndex === index
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}

                  {/* AUTHOR */}
                  <div className="box-author" style={{ marginTop: "10px" }}>
                    <div className="text-title author">
                      {item.author}
                    </div>
                  </div>

                  {/* PRODUCT INFO */}
                  <div
                    className="box-avt"
                    style={{
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        alt="product"
                        src={item.mainimage || avatarFallback}
                        width={55}
                        height={55}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="box-price">
                      <p className="text-title text-line-clamp-1">
                        {item.title}
                      </p>
                      <div className="text-button price">
                        ₹ {item.price}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          ))}

          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd32" />
        </Swiper>
      </div>
    </section>
  );
}