import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationLinks, companyInfo } from "../data/content";
import logo from "../assets/img/logo_branca.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark footer-madeira sticky-top shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center z-index-high"
          to="/"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt={`Logo ${companyInfo.name}`}
            width="40"
            className="me-2"
          />
          <span className="font-display tracking-wide">{companyInfo.name}</span>
        </Link>

        <button
          className={`navbar-toggler border-0 ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show mobile-menu-overlay" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center">
            {navigationLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link
                  className={`nav-link px-3 py-2 ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  to={link.path}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a
                href={`https://wa.me/${companyInfo.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm rounded-pill px-4"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
