
"use client";

import { useContextElement } from "@/context/Context";
// import { collections6 } from "@/data/collections";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Collections() {
  const { categorybanner } = useContextElement();

  if (!categorybanner.length) {
    return <p>Loading...</p>;
  }
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Shop by Type</h3>
          <p className="subheading text-secondary">
            Fresh styles just in! Elevate your look.
          </p>
        </div>
        <div className="tf-grid-layout tf-col-2 md-col-3">
          {categorybanner.map((collection, index) => (
            <div
              className="collection-position-2 style-6 hover-img wow fadeInUp"
              data-wow-delay={collection.delay}
              key={index}
            >
              <a className="img-style">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src={collection.image}
                  alt={collection.imagealt}
                  src={collection.image}
                  width={615}
                  height={615}
                />
              </a>
              <div className="content">
                <Link href={`/shop-categories-top`} className="cls-btn">
                  <h6 className="text">{collection.name}</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
