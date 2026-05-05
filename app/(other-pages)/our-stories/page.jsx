import Brands from "@/components/common/Brands";
import Features2 from "@/components/common/Features2";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import Topbar6 from "@/components/headers/Topbar6";
import OurStories from "@/components/otherPages/OurStories";
import Team from "@/components/otherPages/Team";
import Testimonials from "@/components/otherPages/Testimonials";
import React from "react";

export const metadata = {
  title: "Our Stories || Hand and Host - Multipurpose React Nextjs eCommerce Template",
  description: "Modave - Multipurpose React Nextjs eCommerce Template",
};

export default function OurStoriesPage() {
  return (
    <>
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Our Stories – Hand & Host</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href={`/`}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>
                  <a className="link" href="#">
                    Pages
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Our Stories – Hand & Host</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <OurStories />
      {/* <Features2 parentClass="flat-spacing line-bottom-container" /> */}
      <Team />
      {/* <Brands parentClass="flat-spacing-5 bg-surface" /> */}
      <Testimonials />
      <Footer1 />
    </>
  );
}
