"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { usePathname, useRouter } from "next/navigation";
import CartDrawer from "@/components/cart/CartDrawer"; 
import { useAuth } from "@/context/AuthContext";



export default function MobileMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const [cartOpen, setCartOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();


const handleLogout = () => {
        logout(); // from context
        closeMenu();
        router.push("/login");
    };

const goIfLoggedIn = (callback) => {
  if (!isLoggedIn) {
    router.push("/login");
    return;
  }

  callback?.();
};


  const closeMenu = () => {
  const offcanvasEl = document.getElementById("mobileMenu");
  if (offcanvasEl) {
    const bsOffcanvas =
      window.bootstrap?.Offcanvas.getInstance(offcanvasEl) ||
      new window.bootstrap.Offcanvas(offcanvasEl);

    bsOffcanvas.hide();
  }
};

  return (
    <>
      <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span
          className="icon-close icon-close-popup"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />

        <div className="mb-canvas-content">
          <div className="mb-body">
            <div className="mb-content-top">

              {/*  MENU */}
              <ul className="nav-ul-mb">

                <li className="nav-mb-item">
                  <Link href="/" className="mb-menu-link" onClick={closeMenu}>Home</Link>
                </li>

                <li className="nav-mb-item">
                  <Link href="/about-us" className="mb-menu-link" onClick={closeMenu}>About Us</Link>
                </li>

                <li className="nav-mb-item">
                  <Link href="/our-stories" className="mb-menu-link" onClick={closeMenu}>Our Stories</Link>
                </li>

                {isLoggedIn && (
                  <li className="nav-mb-item">
                    <Link href="/orders" className="mb-menu-link" onClick={closeMenu}>Orders</Link>
                  </li>
                )}

               {/* <li className="nav-mb-item">
                    <button
                        onClick={() => {
                            goIfLoggedIn(() => {
                                // closeMenu();
                                router.push("/wish-list");
                            });
                            }}
                        className="mb-menu-link"
                        style={{ background: "none", border: "none", width: "100%", textAlign: "left" }}
                    >
                        Wishlist
                    </button>
                </li> */}

               
                {/* AUTH */}
                {!isLoggedIn ? (
                  <>
                    <li className="nav-mb-item">
                      <Link href="/login" className="mb-menu-link">Login</Link>
                    </li>
                    <li className="nav-mb-item">
                      <Link href="/register" className="mb-menu-link">
                        Create Account
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-mb-item">
                    <button
                      onClick={handleLogout}
                      className="mb-menu-link"
                      style={{ background: "none", border: "none", width: "100%", textAlign: "left" }}
                    >
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/*  UNCHANGED */}
            {/* <div className="mb-other-content"> */}
              {/* <div className="group-icon">
                <Link href={`/wish-list`} className="site-nav-icon">
                  Wishlist
                </Link>
                <Link href={`/login`} className="site-nav-icon">
                  Login
                </Link>
              </div> */}
{/* 
              <div className="mb-notice">
                <Link href={`/contact`} className="text-need">
                  Need Help?
                </Link>
              </div> */}

              {/* <div className="mb-contact">
                <p>
                  Hand & Host LLP<br />
                  Basement floor, 5/257A8, <br />
                  Pallath Square, FACT kalamassery Rd,<br />
                  Ernakulam, Kerala, India - 683104
                </p>
                <Link
                  href={`/contact`}
                  className="tf-btn-default text-btn-uppercase"
                >
                  GET DIRECTION
                </Link>
              </div> */}

              {/* <ul className="mb-info">
                <li><p>support@handandhost.com</p></li>
                <li><p>+91 8921254349</p></li>
              </ul> */}
            {/* </div> */}
          </div>

          {/* <div className="mb-bottom">
            <div className="bottom-bar-language">
              <div className="tf-currencies">
                <CurrencySelect />
              </div>
              <div className="tf-languages">
                <LanguageSelect parentClassName="image-select center style-default type-languages" />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/*  SAME CART DRAWER AS HEADER */}
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />
    </>
  );
}