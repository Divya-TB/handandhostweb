


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
            Where wellness meets taste. Where quality meets trust.
          </p>
        </div>

        {/* ================= STORY (LEFT ALIGN) ================= */}
        <Block title="Our Story">
          At Hand & Host, we believe wellness should feel effortless, enjoyable, and deeply trustworthy.
          What began as a shared vision has evolved into a purpose-led brand focused on curating meaningful,
          high-quality wellness experiences.
          <br /><br />
          We are not just building an eCommerce platform — we are shaping a curated world of products where
          innovation meets everyday life. Our journey begins with Kreenz, our nutraceutical and Ayurvedic gummies range.
        </Block>

        {/* ================= CENTER HIGHLIGHT ================= */}
        <Block title="Wellness Reinvented" align="center">
          Traditional supplements often feel like a chore—hard to consume, easy to forget.
          We saw an opportunity to change that.
          <br /><br />
          Kreenz Gummies transform daily nutrition into something enjoyable, combining Ayurveda’s wisdom with
          modern nutraceutical science.
        </Block>

        {/* ================= QUALITY ================= */}
        <Block title="Commitment to Quality & Trust">
          Trust is not a feature — it is our foundation.
          <br /><br />

          <div style={{ marginTop: 10 }}>
            • <b>Premium Ingredients</b> — safe, effective, and carefully curated<br />
            • <b>Strict Quality Control</b> — every batch tested with precision<br />
            • <b>Transparency</b> — honest labeling and clear formulations
          </div>
        </Block>

        {/* ================= DIFFERENCE (CENTER + AIRY) ================= */}
        <Block title="What Makes Kreenz Different" align="center">
          We design wellness that fits into real life — not the other way around.
          <br /><br />

          • Enjoyable wellness — gummies instead of pills<br />
          • Smart formulations built for modern lifestyles<br />
          • Customer-first design philosophy
        </Block>

        {/* ================= LOOKING AHEAD ================= */}
        <Block title="Looking Ahead">
          Kreenz is only the beginning.
          <br /><br />
          Hand & Host is evolving into a curated lifestyle destination — spanning wellness, cosmetics, jewellery,
          toys, and more. Every category will reflect our commitment to quality and intention.
        </Block>

        {/* ================= YOUR PROMISE (UNCHANGED EXACT UI) ================= */}
        <div
          style={{
            padding: "70px 50px",
            borderRadius: 20,
            textAlign: "center",
            background: "linear-gradient(135deg, #fffaf0, #ffffff)",
            border: `1px solid rgba(200,162,74,0.35)`,
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: 4,
              color: gold,
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            OUR PROMISE
          </div>

          <p
            style={{
              fontSize: 17,
              lineHeight: 2,
              color: "#444",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            We exist to simplify wellness, elevate trust, and deliver products that feel as refined as they are effective.
            <br /><br />
            Hand & Host — Proud creators of Kreenz Gummies, where wellness meets taste, and quality meets trust.
          </p>
        </div>

      </div>
    </section>
  );
}