"use client";
import React from "react";

export default function AboutUs() {
  const gold = "#C8A24A";

  const Line = () => (
    <div
      style={{
        width: 70,
        height: 2,
        background: `linear-gradient(90deg, ${gold}, transparent)`,
        margin: "18px 0 30px",
      }}
    />
  );

  const Block = ({ title, children, align = "left" }) => (
    <div
      style={{
        marginBottom: 90,
        textAlign: align,
        maxWidth: 900,
        marginLeft: align === "center" ? "auto" : 0,
        marginRight: align === "center" ? "auto" : 0,
      }}
    >
      <h2
        style={{
          fontSize: 30,
          fontWeight: 600,
          letterSpacing: 0.3,
          color: "#111",
        }}
      >
        <span style={{ color: gold, marginRight: 8 }}>✦</span>
        {title}
      </h2>

      <Line />

      <div
        style={{
          fontSize: 16,
          lineHeight: 2,
          color: "#555",
        }}
      >
        {children}
      </div>
    </div>
  );

  return (
    <section style={{ background: "#fff", padding: "120px 0" }}>
      <div className="container" style={{ maxWidth: 1000 }}>

        {/* ================= HERO ================= */}
        <div style={{ textAlign: "center", marginBottom: 120 }}>
          {/* <h1
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: -1,
              color: "#111",
            }}
          >
            Hand & Host
          </h1>

          <div
            style={{
              width: 140,
              height: 2,
              margin: "20px auto",
              background: `linear-gradient(90deg, transparent, ${gold}, transparent)`,
            }}
          /> */}

          <p style={{ color: "#777", fontSize: 16 }}>
            Hand & Host began with a simple idea between two partners—why should taking care of your health feel like a task instead of something you enjoy?
          </p>
        </div>

        {/* ================= STORY (LEFT ALIGN) ================= */}
        <Block title="Our Story">
          Like many others, we struggled with traditional supplements. Pills were easy to forget, powders were inconvenient, and consistency felt like a challenge. We realized that even the best products don’t work if people don’t enjoy using them. That’s when the idea struck us—to create something that people would actually look forward to every day.
          <br /><br />
          This thought led to the birth of <b>Kreenz Gummies</b>.
          <br></br>
          We wanted to reimagine wellness by combining effectiveness with enjoyment. After extensive research and careful development, we created gummies that are not just tasty, but also meaningful—designed to support real needs like hair health, metabolism, better sleep, and overall vitality.
          <br /><br />
          But for us, it wasn’t just about making gummies. It was about building <b>trust</b>.
            <br /><br />
            From selecting high-quality ingredients to ensuring strict quality checks, every step we took was guided by one question: Would we confidently use this ourselves? If the answer wasn’t yes, we went back and improved it.
            <br /><br />
            As we built Kreenz, we also envisioned something bigger—Hand & Host as a platform where people can discover unique, thoughtfully curated products that stand out in quality and purpose.
            <br /><br />
            Today, our journey starts with Kreenz Gummies, but our story is just beginning. With every product we create and every customer we serve, we aim to make wellness simpler, better, and more enjoyable.
                <br /><br />
Because at the end of the day, we didn’t just want to build a business—we wanted to create something people can trust, every single day.

        </Block>

        

      </div>
    </section>
  );
}