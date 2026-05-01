// // "use client";

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // const API_URL = process.env.NEXT_PUBLIC_API_URL;

// // export default function Certificates() {
// //   const [certificates, setCertificates] = useState([]);

// //   useEffect(() => {
// //     fetchCertificates();
// //   }, []);

// //   const fetchCertificates = async () => {
// //     try {
// //       const res = await axios.get(`${API_URL}/api/certificates`);

// //       if (res.data.success_code === 200) {
// //         setCertificates(res.data.data);
// //       }
// //     } catch (error) {
// //       console.log("Error fetching certificates:", error);
// //     }
// //   };

// //   // 🚨 DO NOT SHOW SECTION IF EMPTY
// //   if (!certificates.length) {
// //     return null;
// //   }

// //   return (
// //     <section className="flat-spacing">
// //       <div className="container">

// //         <div className="text-center mb-4">
// //           <h2>Our Certificates</h2>
// //           <p>We are certified and trusted</p>
// //         </div>

// //         <div className="row mb-4">
// //           {certificates.map((item) => (
// //             <div
// //               className="col-lg-3 col-md-4 col-6 mb-4"
// //               key={item.N_T_M_Certificate_ID}
// //             >
// //               <div className="certificate-card text-center">
// //                 <img
// //                   src={item.V_Certificate}
// //                   alt={item.V_Type}
// //                   className="img-fluid"
// //                   style={{
// //                     borderRadius: "10px",
// //                     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
// //                   }}
// //                 />
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }




// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // ✅ Swiper imports
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

// // ✅ Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export default function Certificates() {
//   const [certificates, setCertificates] = useState([]);

//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   const fetchCertificates = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/certificates`);

//       if (res.data.success_code === 200) {
//         setCertificates(res.data.data);
//       }
//     } catch (error) {
//       console.log("Error fetching certificates:", error);
//     }
//   };

//   // 🚫 Hide section if no data
//   if (!certificates.length) return null;

//   return (
//     <section className="flat-spacing">
//       <div className="container">

//         <div className="text-center mb-4">
//           <h2>Our Certificates</h2>
//           <p>We are certified and trusted</p>
//         </div>

//         {/* 🔥 Swiper Slider */}
//         <Swiper
//           modules={[Autoplay, Navigation]}
//           spaceBetween={20}
//           slidesPerView={2}
//           loop={true}

//           // ✅ Smooth continuous scroll
//           speed={3000}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}

//           // ✅ Arrows
//           navigation={true}

//           // ✅ Responsive
//           breakpoints={{
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {certificates.map((item) => (
//             <SwiperSlide key={item.N_T_M_Certificate_ID}>
//               <div className="certificate-card text-center">
//                 <img
//                   src={item.V_Certificate}
//                   alt={item.V_Type}
//                   className="img-fluid"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>

//     </section>
//   );
// }


// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// export default function Certificates() {
//   const [certificates, setCertificates] = useState([]);

//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   const fetchCertificates = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/certificates`);
//       if (res.data.success_code === 200) {
//         setCertificates(res.data.data);
//       }
//     } catch (error) {
//       console.log("Error fetching certificates:", error);
//     }
//   };

//   if (!certificates.length) return null;

//   return (
//     <section className="flat-spacing">
//       <div className="container">

//         <div className="text-center mb-4">
//           <h2>Our Certificates</h2>
//           <p>We are certified and trusted</p>
//         </div>

//         <Swiper
//           modules={[Autoplay, Navigation]}
//           spaceBetween={20}
//           slidesPerView={1.5}
//           centeredSlides={true}   // 🔥 center mode
//           loop={true}

//           speed={2000}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}

//           navigation={true}

//           breakpoints={{
//             576: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//         >
//           {certificates.map((item) => (
//             <SwiperSlide key={item.N_T_M_Certificate_ID}>
//               <div className="certificate-card">
//                 <img
//                   src={item.V_Certificate}
//                   alt={item.V_Type}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//       </div>

//     </section>
//   );
// }



"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // 

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/certificates`);
      if (res.data.success_code === 200) {
        setCertificates(res.data.data);
      }
    } catch (error) {
      console.log("Error fetching certificates:", error);
    }
  };

  if (!certificates.length) return null;

  return (
    <section className="flat-spacing">
      <div className="container">

        <div className="text-center mb-4">
          <h2>Our Certificates</h2>
          <p className="certificate-text">We are certified and trusted</p>
        </div>

        <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView={2}
  loop={true}

  speed={4000}

  autoplay={{
    delay: 1, // continuous
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}


  navigation={true}

  breakpoints={{
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  }}
>
          {certificates.map((item) => (
            <SwiperSlide key={item.N_T_M_Certificate_ID}>
              <div className="certificate-card">
                <img
                  src={item.V_Certificate}
                  alt={item.V_Type}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}