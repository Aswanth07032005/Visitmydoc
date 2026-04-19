import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHeartbeat,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Doctors", href: "/#providers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Doctor Booking", href: "/#providers" },
    { name: "Online Consultation", href: "/#online-consultation" },
    { name: "Health Records", href: "/#health-records" },
    { name: "Prescription Support", href: "/#prescription-support" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col brand">
          <div className="logo-wrapper">
            <FaHeartbeat className="logo-icon" />
            <h2 className="logo">VisitMyDoc</h2>
          </div>
          <p>
            Book trusted doctors easily and manage your healthcare online.
            Fast, secure, and reliable platform for patients and clinics.
          </p>
          <div className="socials">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-icon"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                {link.href.startsWith('/') ? (
                  <Link to={link.href}>{link.name}</Link>
                ) : (
                  <a href={link.href}>{link.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((service, idx) => (
              <li key={idx}>
                {service.href.startsWith('/') ? (
                  <Link to={service.href}>{service.name}</Link>
                ) : (
                  <a href={service.href}>{service.name}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col contact-info">
          <h4>Contact Us</h4>
          <div className="contact-detail">
            <FaMapMarkerAlt />
            <span>Kerala, India</span>
          </div>
          <div className="contact-detail">
            <FaPhoneAlt />
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
          <div className="contact-detail">
            <FaEnvelope />
            <a href="mailto:support@visitmydoc.com">support@visitmydoc.com</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VisitMyDoc. All rights reserved.</p>
        <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;