import React, { useState, useEffect } from "react";
import Link from "../Link/Link";
import "./Navbar.css";

const Navbar = () => {
  const [navClass, setNavClass] = useState("");
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let navClass = "";
      if (window.scrollY >= 200) {
        navClass = "scrolled";
      }
      setNavClass(navClass);
    });
  }, []);

  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/curtilage1.jpg"
            alt="Curtilage Shelter Limited Logo"
            className="navbar-logo"
          />
          <span className="ml-2">Curtilage Shelter Limited</span>
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return "open";
            return "";
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return "show";
            return "";
          })()}`}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link target="home" offset={-120} classes="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link target="about" classes="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link target="projects" classes="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link target="services" classes="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link target="blog" classes="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link target="contact" classes="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
