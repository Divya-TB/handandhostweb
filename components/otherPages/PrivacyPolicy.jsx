"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "Privacy Policy",
  "Information We Collect",
  "How We Use Your Information",
  "Payment Security",
  "Sharing Your Information",
  "Data Protection",
  "Cookies",
  "Your Rights",
  "Third-Party Links",
  "Changes to This Policy",
  "Contact Us"
];
const sections = [
  { id: 1, text: "Privacy Policy", scroll: "Privacy Policy" },
  { id: 2, text: "Information We Collect", scroll: "Information We Collect" },
  {
    id: 3,
    text: "How We Use Your Information",
    scroll: "How We Use Your Information",
  },
  {
    id: 4,
    text: "Payment Security",
    scroll: "Payment Security",
  },
  { id: 5, text: "Sharing Your Information", scroll: "Sharing Your Information" },
   {id: 6, text: "Data Protection", scroll: "Data Protection" },
   {id: 7, text: "Cookies", scroll: "Cookies" },
   {id: 8, text: "Your Rights", scroll: "Your Rights" },
   {id: 9, text: "Third-Party Links", scroll: "Third-Party Links" },
   {id: 10, text: "Changes to This Policy", scroll: "Changes to This Policy" },
   {id: 11, text: "Contact Us", scroll: "Contact Us" },
];

export default function PrivacyPolicy() {
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
            <h4 className="heading">Privacy Policy</h4>
            <div className="terms-of-use-item item-scroll-target" id="Privacy Policy">
              <h5 className="terms-of-use-title">1. Policy</h5>
              <div className="terms-of-use-content">
                <p>
                  At Hand & Host, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, 
                  and protect your personal information when you visit or make a purchase from our website.
                </p>
                <p>
                  By using our website, you agree to the practices described in this policy.
                </p>
              </div>
            </div>
            <div
                className="terms-of-use-item item-scroll-target"
                id="Information We Collect"
              >
                <h5 className="terms-of-use-title">2. Information We Collect</h5>

                <div className="terms-of-use-content">
                  <p>
                    When you interact with our website, we may collect the following types of information:
                  </p>

                  <ul className="policy-ul">
                    <li>
                      <strong>Personal Information:</strong> Name, phone number, email address, shipping and billing address
                    </li>

                    <li>
                      <strong>Order Details:</strong> Products purchased, payment method (processed securely via third-party providers)
                    </li>

                    <li>
                      <strong>Technical Information:</strong> IP address, browser type, device information, and website usage data
                    </li>
                  </ul>
                </div>
              </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="How We Use Your Information"
            >
              <h5 className="terms-of-use-title">3. How We Use Your Information</h5>
              <div className="terms-of-use-content">
                <p>
                  We use your information to:
                </p>

                <ul className="policy-ul">
                  <li>Process and deliver your orders</li>
                  <li>Communicate with you regarding orders, updates, or support</li>
                  <li>Improve our products, services, and user experience</li>
                  <li>
                    Send promotional offers or updates (only if you opt-in)
                  </li>
                  <li>
                    Prevent fraudulent transactions and ensure website security
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="terms-of-use-item item-scroll-target"
              id="Payment Security"
            >
              <h5 className="terms-of-use-title">
                4. Payment Security
              </h5>
              <div className="terms-of-use-content">
                <p>
                  We do not store your payment details such as card numbers or CVV.
                  All payments are processed securely through trusted third-party payment gateways that follow industry-standard security protocols.
                </p>
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
            <div className="terms-of-use-item item-scroll-target" id="Sharing Your Information">
              <h5 className="terms-of-use-title">5. Sharing Your Information</h5>
              <div className="terms-of-use-content">
                <p>
                  We do not sell or rent your personal information. We may share your data only with:
                </p>

                <ul className="policy-ul">
                  <li>Shipping partners (such as Blue Dart and DTDC) for order delivery</li>
                  <li>Payment gateways for secure transaction processing</li>
                  <li>
                    Service providers who help operate our website and services
                  </li>
                </ul>

                <p>
                  All such parties are required to handle your data securely and only for the intended purpose.
                </p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Data Protection">
              <h5 className="terms-of-use-title">6. Data Protection</h5>
              <div className="terms-of-use-content">
                <p>
                  We take appropriate security measures to protect your personal information from unauthorized access, misuse, or disclosure.
                  However, no online system is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Cookies">
              <h5 className="terms-of-use-title">7. Cookies</h5>
              <div className="terms-of-use-content">
                <p>
                  Our website may use cookies and similar technologies to enhance your browsing experience, analyze traffic, and understand user behavior.
                  You can choose to disable cookies through your browser settings.
                </p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Your Rights">
              <h5 className="terms-of-use-title">8. Your Rights</h5>
              <div className="terms-of-use-content">
                <p>You have the right to:</p>
                <ul className="policy-ul">
                  <li>Access or update your personal information</li>
                  <li>
                    Request deletion of your data (subject to legal or operational requirements)
                  </li>
                  <li>
                    Opt out of marketing communications at any time
                  </li>
                </ul>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Third-Party Links">
              <h5 className="terms-of-use-title">9. Third-Party Links</h5>
              <div className="terms-of-use-content">
                <p>Our website may contain links to third-party websites.
                  We are not responsible for the privacy practices or content of those websites.</p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Changes to This Policy">
              <h5 className="terms-of-use-title">10. Changes to This Policy</h5>
              <div className="terms-of-use-content">
                <p>We may update this Privacy Policy from time to time. 
                  Any changes will be posted on this page with updated information.</p>
              </div>
            </div>
            <div className="terms-of-use-item item-scroll-target" id="Contact Us">
              <h5 className="terms-of-use-title">11. Contact Us</h5>
              <div className="terms-of-use-content">
               <div className="terms-of-use-content">
                  <p>
                    If you have any questions or concerns regarding this Privacy Policy, feel free to contact us:
                  </p>

                  <ul className="policy-ul">
                    <li>
                      Email:{" "}
                      <a href="mailto:support@handandhost.com" className="contact-link">
                        support@handandhost.com
                      </a>
                    </li>

                    <li>
                      Contact Number:{" "}
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
