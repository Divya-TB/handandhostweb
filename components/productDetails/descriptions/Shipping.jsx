import React from "react";

export default function Shipping() {

  const shippingData = [
    {
      title: "We've Got Your Back",
      icon: "icon-shield",
      description:
        "At Hand & Host, every order is packed with care and delivered with reliability. We focus on safe, fast, and hassle-free shipping across India.",
    },
    {
      title: "Order Processing",
      icon: "icon-box",
      description:
        "Orders are processed from our Kerala facility within 1–2 business days. We operate all 7 days to avoid unnecessary delays.We operate 7 days a week, so orders placed on weekends and holidays are also processed without unnecessary delays.",
    },
    {
      title: "Shipping Partners",
      icon: "icon-truck",
      description:
        "We partner with trusted courier services to ensure secure and timely deliveries across India.",
    },
    {
      title: "Delivery Timeline",
      icon: "icon-clock",
      description:
        "Delivery timelines may vary depending on your location, service availability, and external factors. Orders are typically delivered within 4–7 business days after dispatch; however, this is an estimated timeframe and not a guaranteed delivery window.Please note that delays can occasionally occur due to factors beyond our control such as weather conditions, courier network issues, or regional restrictions. We request you to allow a reasonable buffer time for delivery.",
    },
    {
      title: "Shipping Charges",
      icon: "icon-tag",
      description:
        "We offer free shipping on all orders across India. There are no hidden charges—what you see at checkout is exactly what you pay.",
    },
    {
      title: "Order Tracking",
      icon: "icon-location",
      description:
        "Once shipped, you will receive a tracking ID through SMS or email to monitor your order in real-time.",
    },
    {
      title: "Delivery Support",
      icon: "icon-phone",
      description:
        "Facing a delivery issue or delay? Our support team is always ready to assist you.",
    },
  ];

  return (

    <div className="shipping-page">

      {/* TOP BANNER */}

      <div
        className="mb_40"
        style={{
          background:
            "linear-gradient(135deg, rgb(233 186 117) 0%, #8e5d13 100%)",
          borderRadius: "20px",
          padding: "40px",
          color: "#fff",
        }}
      >

        <div className="text-btn-uppercase mb_12">
          HAND & HOST SHIPPING
        </div>

        <h3
          style={{
            color: "#fff",
            marginBottom: "15px",
          }}
        >
          Fast, Safe & Reliable Delivery
        </h3>

        <p
          style={{
            maxWidth: "700px",
            opacity: 0.9,
            marginBottom: 0,
          }}
        >
          We ensure every order reaches your doorstep
          securely and on time with trusted logistics
          partners across India.
        </p>

      </div>

      {/* SHIPPING GRID */}

      <div className="row">

        {shippingData.map((item, index) => (

          <div
            className="col-lg-6 mb_30"
            key={index}
          >

            <div
              style={{
                border: "1px solid #e9e9e9",
                borderRadius: "18px",
                padding: "28px",
                height: "100%",
                background: "#fff",
                transition: "0.3s",
              }}
              className="shipping-card"
            >

              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "14px",
                  background: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  fontSize: "22px",
                }}
              >

                <i className={item.icon} />

              </div>

              <h5
                style={{
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h5>

              <p
                style={{
                  color: "#666",
                  lineHeight: "1.8",
                  marginBottom: 0,
                }}
              >
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* HELP SECTION */}

      <div
        style={{
          background: "#f8f8f8",
          borderRadius: "20px",
          padding: "35px",
          marginTop: "10px",
        }}
      >

        <div className="row align-items-center">

          <div className="col-lg-8">

            <div className="text-btn-uppercase mb_12">
              NEED HELP?
            </div>

            <h4 className="mb_12">
              Our support team is here for you
            </h4>

            <p
              style={{
                color: "#666",
                marginBottom: 0,
              }}
            >
              Have questions regarding shipping,
              tracking, or delivery? Contact us anytime
              and we’ll help you quickly.
            </p>

          </div>

          <div className="col-lg-4 mt-lg-0 mt_20">

  <div
    style={{
      background: "#fff",
      padding: "20px",
      borderRadius: "16px",
      border: "1px solid #e9e9e9",
    }}
  >

    <p className="mb_12">
      <strong>Email:</strong><br />
      support@handandhost.com
    </p>

    <p className="mb_12">
      <strong>Contact Number:</strong><br />
      +91 8921254349
    </p>

    <p
      style={{
        color: "#666",
        marginBottom: 0,
        lineHeight: "1.7",
      }}
    >
      We strive to make your shopping experience
      smooth and dependable—from checkout to
      delivery.
    </p>

  </div>

</div>

        </div>

      </div>

    </div>

  );
}