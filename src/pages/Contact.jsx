import React, { useState } from "react";
import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (replace with actual backend integration)
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Phone",
      details: ["+91 12345 67890", "+91 98765 43210"],
      link: "tel:+911234567890",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["support@visitmydoc.com", "care@visitmydoc.com"],
      link: "mailto:support@visitmydoc.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["3rd Floor, Health Tower", "MG Road, Kochi - 682011", "Kerala, India"],
      link: "https://maps.google.com",
    },
    {
      icon: FaClock,
      title: "Support Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
      link: null,
    },
  ];

  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header" data-aos="fade-up">
          <div className="header-icon">
            <FaPaperPlane />
          </div>
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you. Reach out with any questions or feedback.</p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Info Cards */}
          <div className="contact-info" data-aos="fade-right">
            {contactInfo.map((item, idx) => (
              <div className="info-card" key={idx}>
                <div className="info-icon">
                  <item.icon />
                </div>
                <div className="info-content">
                  <h3>{item.title}</h3>
                  {item.details.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  {item.link && (
                    <a href={item.link} className="info-link">
                      {item.title === "Phone" ? "Call Now →" : item.title === "Email" ? "Send Email →" : "Get Directions →"}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-container" data-aos="fade-left">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane />
              </button>
              {submitStatus === "success" && (
                <p className="success-message">✓ Message sent successfully! We'll get back to you soon.</p>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section" data-aos="zoom-in">
          <h3>Connect With Us</h3>
          <div className="social-links">
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
      </div>
    </section>
  );
};

export default Contact;