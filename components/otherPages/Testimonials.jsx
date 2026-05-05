// "use client";


// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useContextElement } from "@/context/Context";

// export default function Testimonials() {
//   const { customerReview } = useContextElement();

//   if (!customerReview || customerReview.length === 0) {
//     return null;
//   }
//   return (
//     <section className="flat-spacing">
//       <div className="container">
//         <div className="heading-section text-center wow fadeInUp">
//           <h3 className="heading">Customer Review</h3>
//         </div>
//         <Swiper
//           className="tf-sw-testimonial wow fadeInUp"
//           data-wow-delay="0.1s"
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             768: { slidesPerView: 3 },
//             576: { slidesPerView: 2 },
//             0: { slidesPerView: 1 },
//           }}
//           modules={[Pagination]}
//           pagination={{
//             clickable: true,
//             el: ".spd81",
//           }}
//           dir="ltr"
//         >
//           {customerReview.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="testimonial-item style-4"
//                 style={{ animationDelay: "0s" }}
//               >
//                 <div className="content-top">
//                   <div className="box-icon">
//                     <i className="icon icon-quote" />
//                   </div>
//                   <div className="text-title">{item.title}</div>
//                   <p className="text-secondary">{item.text}</p>
//                   <div className="box-rate-author">
//                     <div className="box-author">
//                       <div className="text-title author">{item.author}</div>
//                     </div>
//                     <div className="list-star-default color-primary">
//                       {Array(item.stars)
//                         .fill(0)
//                         .map((_, starIndex) => (
//                           <i key={starIndex} className="icon icon-star" />
//                         ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//           <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd81" />
//         </Swiper>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useContextElement } from "@/context/Context";

// export default function Testimonials() {
//   const { customerReview } = useContextElement();

//   if (!customerReview || customerReview.length === 0) {
//     return null;
//   }

//   return (
//     <section className="flat-spacing">
//       <div className="container">

//         <div className="heading-section text-center wow fadeInUp">
//           <h3 className="heading">Customer Review</h3>
//         </div>

//         <Swiper
//           className="tf-sw-testimonial wow fadeInUp"
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             768: { slidesPerView: 3 },
//             576: { slidesPerView: 2 },
//             0: { slidesPerView: 1 },
//           }}

//           modules={[Pagination, Navigation, Autoplay]}

//           /* ✅ AUTO SCROLL */
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}

//           /* ✅ LEFT / RIGHT ARROWS */
//           navigation={{
//             nextEl: ".testimonial-next",
//             prevEl: ".testimonial-prev",
//           }}

//           pagination={{
//             clickable: true,
//             el: ".spd81",
//           }}

//           loop={true}
//           dir="ltr"
//         >
//           {customerReview.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="testimonial-item style-4">

//                 <div className="content-top">
//                   <div className="box-icon">
//                     <i className="icon icon-quote" />
//                   </div>

//                   <div className="text-title">{item.title}</div>

//                   <p className="text-secondary">{item.text}</p>

//                   <div className="box-rate-author">
//                     <div className="box-author">
//                       <div className="text-title author">
//                         {item.author}
//                       </div>
//                     </div>

//                     <div className="list-star-default color-primary">
//                       {Array(item.stars)
//                         .fill(0)
//                         .map((_, starIndex) => (
//                           <i
//                             key={starIndex}
//                             className="icon icon-star"
//                           />
//                         ))}
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}

//           {/* PAGINATION */}
//           <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd81" />

//         </Swiper>

//         {/*  NAVIGATION BUTTONS */}
//         <div className="testimonial-nav">
//           <button className="testimonial-prev">‹</button>
//           <button className="testimonial-next">›</button>
//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContextElement } from "@/context/Context";

export default function Testimonials() {
  const { customerReview } = useContextElement();

  if (!customerReview || customerReview.length === 0) {
    return null;
  }

  return (
    <section className="flat-spacing">
      <div className="container">

        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Review</h3>
        </div>

        {/* WRAPPER FOR SIDE BUTTONS */}
        <div className="testimonial-wrapper">

          {/* LEFT BUTTON (desktop only) */}
          <button className="testimonial-prev desktop-nav">
            ‹
          </button>

          <Swiper
            className="tf-sw-testimonial wow fadeInUp"
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              768: { slidesPerView: 3 },
              576: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}

            modules={[Pagination, Navigation, Autoplay]}

            /* ✅ AUTO PLAY */
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // ✅ pause on hover
            }}

            /* ✅ SIDE NAVIGATION */
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}

            pagination={{
              clickable: true,
              el: ".spd81",
            }}

            loop={true}
            dir="ltr"
          >
            {customerReview.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item style-4">

                  <div className="content-top">
                    <div className="box-icon">
                      <i className="icon icon-quote" />
                    </div>

                    <div className="text-title">{item.title}</div>

                    <p className="text-secondary">{item.text}</p>

                    <div className="box-rate-author">
                      <div className="box-author">
                        <div className="text-title author">
                          {item.author}
                        </div>
                      </div>

                      <div className="list-star-default color-primary">
                        {Array(item.stars)
                          .fill(0)
                          .map((_, i) => (
                            <i key={i} className="icon icon-star" />
                          ))}
                      </div>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd81" />

          </Swiper>

          {/* RIGHT BUTTON (desktop only) */}
          <button className="testimonial-next desktop-nav">
            ›
          </button>

        </div>

      </div>
    </section>
  );
}