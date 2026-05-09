
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