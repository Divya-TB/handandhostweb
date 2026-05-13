"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "General",
  "Products & Information",
  "Orders & Acceptance",
  "Pricing & Payments",
  "Shipping",
  "Returns & Refunds",
  "User Responsibilities",
  "Intellectual Property",
  "Limitation of Liability",
  "Indemnification",
  "Governing Law",
  "Contact Us"
];
const sections = [
  // { id: 1, text: "Terms & Conditions", scroll: "Terms & Conditions" },
  { id: 1, text: "General", scroll: "General" },
  {
    id: 2,
    text: "Products & Information",
    scroll: "Products & Information",
  },
  {
    id: 3,
    text: "Orders & Acceptance",
    scroll: "Orders & Acceptance",
  },
  { id: 4, text: "Pricing & Payments", scroll: "Pricing & Payments" },
   {id: 5, text: "Shipping", scroll: "Shipping" },
   {id: 6, text: "Returns & Refunds", scroll: "Returns & Refunds" },
   {id: 7, text: "User Responsibilities", scroll: "User Responsibilities" },
   {id: 8, text: "Intellectual Property", scroll: "Intellectual Property" },
   {id: 9, text: "Limitation of Liability", scroll: "Limitation of Liability" },
   {id: 10, text: "Indemnification", scroll: "Indemnification" },
   {id: 11, text: "Governing Law", scroll: "Governing Law" },
   {id: 12, text: "Contact Us", scroll: "Contact Us" },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="terms-of-use-wrap">
          <div className="left sticky-top">
            {sections.map(({ id, text, scroll, isActive }) => (
              <h6
                key={id}
                onClick={() => handleClick(scroll)}
                className={`btn-scroll-target ${
                  activeSection == scroll ? "active" : ""
                }`}
              >
                {id}. {text}
              </h6>
            ))}
          </div>
          <div className="right">
            {/* <h4 className="heading">Terms & Conditions</h4> */}
            <div className="terms-of-use-item item-scroll-target" id="Terms & Conditions">
              {/* <h5 className="terms-of-use-title">1. Terms & Conditions</h5> */}
              <div className="terms-of-use-content" >
                <p style={{ textAlign: "center" }}>
  Welcome to Hand &amp; Host. By accessing or using our website,
  you agree to be bound by the following Terms &amp; Conditions.
  Please read them carefully before using our services.
</p>
                {/* <p>
                  By using our website, you agree to the practices described in this policy.
                </p> */}
              </div>
            </div>
            <div
                className="terms-of-use-item item-scroll-target"
                id="General"
              >
                <h5 className="terms-of-use-title">1. General</h5>

                <div className="terms-of-use-content">
                  <p>
                    These Terms & Conditions govern your use of our website and services. By placing an order, you confirm that you are at least 18 years of age or are using the website under the supervision of a parent or legal guardian.
                  </p>

                  <p>We reserve the right to update or modify these terms at any time without prior notice.</p>

                  {/* <ul className="policy-ul">
                    <li>
                      <strong>Personal Information:</strong> Name, phone number, email address, shipping and billing address
                    </li>

                    <li>
                      <strong>Order Details:</strong> Products purchased, payment method (processed securely via third-party providers)
                    </li>

                    <li>
                      <strong>Technical Information:</strong> IP address, browser type, device information, and website usage data
                    </li>
                  </ul> */}
                </div>
              </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="Products & Information"
            >
              <h5 className="terms-of-use-title">2. Products & Information</h5>
              <div className="terms-of-use-content">
                <p>
                  We strive to ensure that all product descriptions, images, and information are accurate. However:
                </p>

                <ul className="policy-ul">
                  <li>Minor variations in color, taste, or appearance may occur.</li>
                  <li>Product results may vary from person to person.</li>
                  <li>Information provided is for general purposes and should not be considered medical advice.</li>
                </ul>
              </div>
            </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="Orders & Acceptance"
            >
              <h5 className="terms-of-use-title">
                3. Orders & Acceptance
              </h5>
              <div className="terms-of-use-content">
                <ul className="policy-ul">
                     <li>	All orders are subject to availability and acceptance.</li>
                  <li>We reserve the right to cancel or refuse any order at our discretion.</li>
                  <li>In case of cancellation, you will be notified and refunded (if applicable).</li>
                </ul>
               
                {/* <p>
                  In malesuada neque quis libero laoreet posuere. In consequat
                  vitae ligula quis rutrum. Morbi dolor orci, maximus a pulvinar
                  sed, bibendum ac lacus. Suspendisse in consectetur lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam elementum, est sed
                  interdum cursus, felis ex pharetra nisi, ut elementum tortor
                  urna eu nulla. Donec rhoncus in purus quis blandit.
                </p>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p> */}
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Pricing & Payments">
              <h5 className="terms-of-use-title">4. Pricing & Payments</h5>
              <div className="terms-of-use-content">
                <ul className="policy-ul">
                  <li>All prices listed on the website are in INR and inclusive/exclusive of applicable taxes as mentioned.</li>
                  <li>We reserve the right to change pricing at any time without prior notice.</li>
                  <li>Payments are processed securely through third-party payment gateways.</li>
                </ul>
                 
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Shipping">
              <h5 className="terms-of-use-title">5. Shipping</h5>
              <div className="terms-of-use-content">

                <ul className="policy-ul">
                  <li>Orders are processed and shipped as per our Shipping Policy.</li>
                  <li>Delivery timelines are estimates and may vary due to external factors.</li>
                  <li>We are not liable for delays caused by courier partners or unforeseen circumstances.</li>
                </ul>

                {/* <p>
                  We take appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure.
                  However, no online system is completely secure, and we cannot guarantee absolute security.
                </p> */}
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Returns & Refunds">
              <h5 className="terms-of-use-title">6. Returns & Refunds</h5>
              <div className="terms-of-use-content">
                <ul className="policy-ul">
                  <li>Returns and refunds are governed by our Return & Refund Policy.</li>
                  <li>Due to the consumable nature of our products, returns are limited to specific conditions.</li>
                  {/* <li>We are not liable for delays caused by courier partners or unforeseen circumstances.</li> */}
                </ul>

              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="User Responsibilities">
              <h5 className="terms-of-use-title">7. User Responsibilities</h5>
              <div className="terms-of-use-content">
                <p>By using our website, you agree:</p>
                <ul className="policy-ul">
                  <li>Not to misuse or interfere with the website functionality.</li>
                  <li>
                    Not to provide false or misleading information.
                  </li>
                  <li>
                    Not to use the website for any unlawful activities.
                  </li>
                </ul>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Intellectual Property">
              <h5 className="terms-of-use-title">8. Intellectual Property</h5>
              <div className="terms-of-use-content">
                <p>All content on this website, including text, images, logos, and branding, is the property of Hand & Host and is protected by applicable laws. 
                  You may not use, reproduce, or distribute any content without prior written permission.</p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Limitation of Liability">
              <h5 className="terms-of-use-title">9. Limitation of Liability</h5>
              <div className="terms-of-use-content">
                <p>Hand & Host shall not be held liable for:</p>
                <ul className="policy-ul">
                  <li>Any indirect, incidental, or consequential damages.</li>
                  <li>
                    	Any adverse reactions or outcomes resulting from product use (customers are advised to check ingredients and consult professionals if needed).
                  </li>
                  <li>
                    Delays, interruptions, or technical issues beyond our control.
                  </li>
                </ul>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Indemnification">
              <h5 className="terms-of-use-title">10. Indemnification</h5>
              <div className="terms-of-use-content">
                <p>You agree to indemnify and hold Hand & Host harmless from any claims, damages, or expenses arising from your use of the website or violation of these terms.</p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Governing Law">
              <h5 className="terms-of-use-title">11. Governing Law</h5>
              <div className="terms-of-use-content">
                <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the appropriate courts in Kerala.</p>
                
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Contact Us">
              <h5 className="terms-of-use-title">12. Contact Us</h5>
              <div className="terms-of-use-content">
               <div className="terms-of-use-content">
                  <p>
                    If you have any questions or concerns regarding this Terms & Conditions, feel free to contact us:
                  </p>

                  <ul className="policy-ul">
                    <li>
                      <b>Email:</b>{" "}
                      <a href="mailto:support@handandhost.com" className="contact-link">
                        support@handandhost.com
                      </a>
                    </li>

                    <li>
                      <b>Contact Number:</b>{" "}
                      <a href="tel:+918921254349" className="contact-link">
                        +91 8921254349
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
