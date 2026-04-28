"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

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

  // 🚨 DO NOT SHOW SECTION IF EMPTY
  if (!certificates.length) {
    return null;
  }

  return (
    <section className="flat-spacing">
      <div className="container">

        <div className="text-center mb-4">
          <h2>Our Certificates</h2>
          <p>We are certified and trusted</p>
        </div>

        <div className="row mb-4">
          {certificates.map((item) => (
            <div
              className="col-lg-3 col-md-4 col-6 mb-4"
              key={item.N_T_M_Certificate_ID}
            >
              <div className="certificate-card text-center">
                <img
                  src={item.V_Certificate}
                  alt={item.V_Type}
                  className="img-fluid"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}