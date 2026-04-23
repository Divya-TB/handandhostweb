"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flat-spacing about-us-main pb_0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-features wow fadeInLeft">
              <Image
                className="lazyload"
                data-src="/images/banner/about-us.jpg"
                alt="image-team"
                src="/images/banner/about-us.jpg"
                width={930}
                height={618}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <h3 className="title wow fadeInUp">
                Modave – Offering rare and beautiful items worldwide
              </h3>
              <div className="widget-tabs style-3">
                <ul className="widget-menu-tab wow fadeInUp">
                  <li
                    className={`item-title ${activeTab == 1 ? "active" : ""} `}
                    onClick={() => setActiveTab(1)}
                  >
                    <span className="inner text-button">Introduction</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 2 ? "active" : ""} `}
                    onClick={() => setActiveTab(2)}
                  >
                    <span className="inner text-button">Our Commitment to Quality & Trust</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 3 ? "active" : ""} `}
                    onClick={() => setActiveTab(3)}
                  >
                    <span className="inner text-button">
                      What Makes Kreenz Different
                    </span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 4 ? "active" : ""} `}
                    onClick={() => setActiveTab(4)}
                  >
                    <span className="inner text-button">Our Promise</span>
                  </li>
                </ul>
                <div className="widget-content-tab wow fadeInUp">
                  <div
                    className={`widget-content-inner ${
                      activeTab == 1 ? "active" : ""
                    } `}
                  >
                    <p>
                      At Hand & Host, we believe that wellness should be simple, enjoyable, and trustworthy. What started as a shared vision between two partners has grown into a purpose-driven brand focused on bringing unique, high-quality products to people who value both health and experience.
                      We are building more than just an eCommerce platform—we are creating a marketplace where carefully curated, innovative products meet everyday needs. Our journey begins with a category we are deeply passionate about: nutraceutical and Ayurvedic gummies under our brand, Kreenz.

                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 2 ? "active" : ""
                    } `}
                  >
                    <p>
                      Trust is the foundation of everything we do. At Hand & Host, and through our brand Kreenz, we prioritize:
                      
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                        <li>
                            Premium Ingredients – Carefully sourced, safe, and effective ingredients that blend modern nutraceutical science with trusted traditional knowledge.
                        </li>
                         <li>
                            Strict Quality Control – Every batch undergoes rigorous testing to ensure safety, consistency, and high performance.
                        </li>
                        <li>
                            Transparency – Clear labeling and honest formulations, so you always know what you're consuming.
                        </li>
                     </ul>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 3 ? "active" : ""
                    } `}
                  >
                    <p>
                     We focus on creating products that stand out—not just for their benefits, but for the experience they deliver.
                     
                    </p>
                    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                        <li>
                            Enjoyable Wellness – No more swallowing pills—Kreenz Gummies make daily health easy and delicious.
                        </li>
                         <li>
                            Innovative Formulations – Unique combinations designed to address real lifestyle needs.
                        </li>
                        <li>
                            Customer-First Approach – Every product is built with your comfort, convenience, and results in mind.
                        </li>
                     </ul>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 4 ? "active" : ""
                    } `}
                  >
                    <p>
                      We are here to simplify wellness, build trust through quality, and bring you products that feel as good as they are effective.
Hand & Host — Proud creators of Kreenz Gummies, where wellness meets taste, and quality meets trust.

                    </p>
                    

                  </div>
                </div>
              </div>
              <a href="#" className="tf-btn btn-fill wow fadeInUp">
                <span className="text text-button">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
