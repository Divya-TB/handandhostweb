// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// export default function About() {
//   const [activeTab, setActiveTab] = useState(1);
//   return (
//     <section className="flat-spacing about-us-main pb_0">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="about-us-features wow fadeInLeft">
//               <Image
//                 className="lazyload"
//                 data-src="/images/banner/about-us.jpg"
//                 alt="image-team"
//                 src="/images/banner/about-us.jpg"
//                 width={930}
//                 height={618}
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="about-us-content">
//               <h3 className="title wow fadeInUp">
//                 Modave – Offering rare and beautiful items worldwide
//               </h3>
//               <div className="widget-tabs style-3">
//                 <ul className="widget-menu-tab wow fadeInUp">
//                   <li
//                     className={`item-title ${activeTab == 1 ? "active" : ""} `}
//                     onClick={() => setActiveTab(1)}
//                   >
//                     <span className="inner text-button">Introduction</span>
//                   </li>
//                   <li
//                     className={`item-title ${activeTab == 2 ? "active" : ""} `}
//                     onClick={() => setActiveTab(2)}
//                   >
//                     <span className="inner text-button">Our Commitment to Quality & Trust</span>
//                   </li>
//                   <li
//                     className={`item-title ${activeTab == 3 ? "active" : ""} `}
//                     onClick={() => setActiveTab(3)}
//                   >
//                     <span className="inner text-button">
//                       What Makes Kreenz Different
//                     </span>
//                   </li>
//                   <li
//                     className={`item-title ${activeTab == 4 ? "active" : ""} `}
//                     onClick={() => setActiveTab(4)}
//                   >
//                     <span className="inner text-button">Our Promise</span>
//                   </li>
//                 </ul>
//                 <div className="widget-content-tab wow fadeInUp">
//                   <div
//                     className={`widget-content-inner ${
//                       activeTab == 1 ? "active" : ""
//                     } `}
//                   >
//                     <p>
//                       At Hand & Host, we believe that wellness should be simple, enjoyable, and trustworthy. What started as a shared vision between two partners has grown into a purpose-driven brand focused on bringing unique, high-quality products to people who value both health and experience.
//                       We are building more than just an eCommerce platform—we are creating a marketplace where carefully curated, innovative products meet everyday needs. Our journey begins with a category we are deeply passionate about: nutraceutical and Ayurvedic gummies under our brand, Kreenz.

//                     </p>
//                   </div>
//                   <div
//                     className={`widget-content-inner ${
//                       activeTab == 2 ? "active" : ""
//                     } `}
//                   >
//                     <p>
//                       Trust is the foundation of everything we do. At Hand & Host, and through our brand Kreenz, we prioritize:
                      
//                     </p>
//                     <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
//                         <li>
//                             Premium Ingredients – Carefully sourced, safe, and effective ingredients that blend modern nutraceutical science with trusted traditional knowledge.
//                         </li>
//                          <li>
//                             Strict Quality Control – Every batch undergoes rigorous testing to ensure safety, consistency, and high performance.
//                         </li>
//                         <li>
//                             Transparency – Clear labeling and honest formulations, so you always know what you're consuming.
//                         </li>
//                      </ul>
//                   </div>
//                   <div
//                     className={`widget-content-inner ${
//                       activeTab == 3 ? "active" : ""
//                     } `}
//                   >
//                     <p>
//                      We focus on creating products that stand out—not just for their benefits, but for the experience they deliver.
                     
//                     </p>
//                     <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
//                         <li>
//                             Enjoyable Wellness – No more swallowing pills—Kreenz Gummies make daily health easy and delicious.
//                         </li>
//                          <li>
//                             Innovative Formulations – Unique combinations designed to address real lifestyle needs.
//                         </li>
//                         <li>
//                             Customer-First Approach – Every product is built with your comfort, convenience, and results in mind.
//                         </li>
//                      </ul>
//                   </div>
//                   <div
//                     className={`widget-content-inner ${
//                       activeTab == 4 ? "active" : ""
//                     } `}
//                   >
//                     <p>
//                       We are here to simplify wellness, build trust through quality, and bring you products that feel as good as they are effective.
// Hand & Host — Proud creators of Kreenz Gummies, where wellness meets taste, and quality meets trust.

//                     </p>
                    

//                   </div>
//                 </div>
//               </div>
//               <a href="#" className="tf-btn btn-fill wow fadeInUp">
//                 <span className="text text-button">Read More</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// export default function AboutUs() {
//   const [activeTab, setActiveTab] = useState(1);

//   const tabs = [
//     { id: 1, title: "Our Story" },
//     { id: 2, title: "Quality & Trust" },
//     { id: 3, title: "Kreenz Difference" },
//     { id: 4, title: "Our Vision" },
//   ];

//   return (
//     <section className="about-section py-5">
//       <div className="container">
//         <div className="row align-items-center g-5">

//           {/* Image Section */}
//           <div className="col-lg-6">
//             <div className="about-image rounded-4 overflow-hidden shadow">
//               <Image
//                 src="/images/banner/about-us.jpg"
//                 alt="Hand & Host About"
//                 width={900}
//                 height={600}
//                 className="img-fluid"
//               />
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="col-lg-6">
//             <h2 className="fw-bold mb-3">
//               About Hand & Host
//             </h2>

//             {/* Tabs */}
//             <ul className="nav nav-pills mb-4 gap-2 flex-wrap">
//               {tabs.map((tab) => (
//                 <li key={tab.id}>
//                   <button
//                     className={`btn btn-sm ${
//                       activeTab === tab.id ? "btn-dark" : "btn-outline-dark"
//                     }`}
//                     onClick={() => setActiveTab(tab.id)}
//                   >
//                     {tab.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             {/* Tab Content */}
//             <div className="tab-content">

//               {/* 1. Story */}
//               {activeTab === 1 && (
//                 <div className="p-3 bg-light rounded-3">
//                   <p>
//                     Hand & Host was born from a shared vision to make wellness simple,
//                     enjoyable, and trustworthy. We are building more than an eCommerce
//                     platform—we are creating a curated marketplace of high-quality,
//                     innovative wellness products.
//                   </p>
//                   <p>
//                     Our journey begins with Kreenz Gummies, a modern take on nutrition
//                     combining Ayurveda with nutraceutical science.
//                   </p>
//                 </div>
//               )}

//               {/* 2. Quality */}
//               {activeTab === 2 && (
//                 <div className="p-3 bg-light rounded-3">
//                   <ul className="mb-0">
//                     <li><strong>Premium Ingredients:</strong> Safe, effective, and carefully sourced.</li>
//                     <li><strong>Strict Quality Control:</strong> Every batch tested for consistency.</li>
//                     <li><strong>Transparency:</strong> Honest labeling and clear formulations.</li>
//                   </ul>
//                 </div>
//               )}

//               {/* 3. Kreenz Difference */}
//               {activeTab === 3 && (
//                 <div className="p-3 bg-light rounded-3">
//                   <ul className="mb-0">
//                     <li><strong>Enjoyable Wellness:</strong> Gummies instead of pills.</li>
//                     <li><strong>Innovative Formulations:</strong> Real lifestyle-focused solutions.</li>
//                     <li><strong>User First:</strong> Comfort + convenience + results.</li>
//                   </ul>
//                 </div>
//               )}

//               {/* 4. Vision */}
//               {activeTab === 4 && (
//                 <div className="p-3 bg-light rounded-3">
//                   <p>
//                     We aim to evolve Hand & Host into a global wellness marketplace
//                     offering supplements, cosmetics, jewellery, toys, and more—each
//                     selected with quality and trust.
//                   </p>
//                   <p className="fw-semibold">
//                     Hand & Host — Where wellness meets taste, and quality meets trust.
//                   </p>
//                 </div>
//               )}

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function AboutUs() {
  const [active, setActive] = useState(1);

  const sections = [
    { id: 1, title: "Our Story" },
    { id: 2, title: "Wellness Reinvented" },
    { id: 3, title: "Quality & Trust" },
    { id: 4, title: "Kreenz Difference" },
    { id: 5, title: "Our Vision" },
  ];

  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* IMAGE */}
          <div className="col-lg-6">
            <div className="rounded-4 overflow-hidden shadow">
              <Image
                src="/images/banner/about-us.jpg"
                alt="Hand & Host About"
                width={900}
                height={600}
                className="img-fluid"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">About Hand & Host</h2>

            {/* SIDE NAV (replaces tabs) */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setActive(sec.id)}
                  className={`btn btn-sm ${
                    active === sec.id ? "btn-dark" : "btn-outline-dark"
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>

            {/* CONTENT BLOCKS (UNCHANGED TEXT) */}

            {active === 1 && (
              <div className="p-3 bg-light rounded-3">
                <p>
                  At Hand & Host, we believe that wellness should be simple, enjoyable, and trustworthy. What started as a shared vision between two partners has grown into a purpose-driven brand focused on bringing unique, high-quality products to people who value both health and experience.
                </p>
                <p>
                  We are building more than just an eCommerce platform—we are creating a marketplace where carefully curated, innovative products meet everyday needs. Our journey begins with a category we are deeply passionate about: 
                  <br>nutraceutical and Ayurvedic gummies under our brand, Kreenz.</br>
                </p>
              </div>
            )}

            {active === 2 && (
              <div className="p-3 bg-light rounded-3">
                <p>
                  Traditional supplements often feel like a chore—hard to consume, easy to forget. We saw an opportunity to change that. With Kreenz Gummies, we are redefining how people experience daily nutrition.
                </p>
                <p>
                  Our journey begins with Kreenz Gummies, a modern take on nutrition
                  combining Ayurveda with nutraceutical science.
                </p>
              </div>
            )}

            {active === 3 && (
              <div className="p-3 bg-light rounded-3">
                <p>
                  Trust is the foundation of everything we do. At Hand & Host, and through our brand Kreenz, we prioritize:
                </p>
                <ul className="mb-0 about-us" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
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
            )}

            {active === 4 && (
              <div className="p-3 bg-light rounded-3">
                <p>
                  We focus on creating products that stand out—not just for their benefits, but for the experience they deliver.
                </p>
                <ul className="mb-0 about-us" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
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
            )}

            {active === 5 && (
              <div className="p-3 bg-light rounded-3">
                <p>
                  We are here to simplify wellness, build trust through quality, and bring you products that feel as good as they are effective.
                  Hand & Host — Proud creators of Kreenz Gummies, where wellness meets taste, and quality meets trust.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}