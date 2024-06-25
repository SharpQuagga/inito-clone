import React from "react";
import './styles.css'

export default function Header() {
  return (
    <>
      <header className="fixed">
        <div className="header__con">
          <div className="ham-menu" id="mobile-ham-menu">
            <div className="line-con">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className="logo">
            <a href="/">
              <img
                alt="Inito Logo"
                src="https://dqxth8lmt6m4r.cloudfront.net/assets/v1/Logo-1b7ad53fafc81e97cf23af4f0ffae8d8961ee793cd3d982c132b3acfa8b75bdd.svg"
              />
            </a>{" "}
          </div>
          <nav>
            <a className="font-semi-bold text-dtheme" href="/about-us">
              About Us
            </a>
            <a
              className="font-semi-bold text-dtheme"
              href="https://blog.inito.com"
            >
              Blog
            </a>
            <a className="font-semi-bold text-dtheme" href="/faqs">
              FAQ
            </a>
            <a className="font-semi-bold text-dtheme" href="/contact-us">
              Contact Us
            </a>
            <a className="font-semi-bold text-dtheme" href="/careers">
              Careers
            </a>

            <a className="button" id="order-now-menu" href="/buy-now">
              Try Inito
            </a>
          </nav>
        </div>
      </header>
      <div className="sidebar" id="mobile-sidebar">
        <nav>
          <a className="font-semi-bold text-dtheme" href="/about-us">
            About Us
          </a>
          <a
            className="font-semi-bold text-dtheme"
            href="https://blog.inito.com"
          >
            Blog
          </a>
          <a className="font-semi-bold text-dtheme" href="/faqs">
            FAQ
          </a>
          <a className="font-semi-bold text-dtheme" href="/contact-us">
            Contact Us
          </a>
          <a className="font-semi-bold text-dtheme" href="/careers">
            Careers
          </a>
        </nav>
      </div>
    </>
  );
}
