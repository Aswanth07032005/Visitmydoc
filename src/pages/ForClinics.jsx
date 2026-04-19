import React, { useState } from "react";
import "./ForClinics.css";
import {
  FaHospitalUser,
  FaChartLine,
  FaCalendarCheck,
  FaShieldAlt,
  FaUsers,
  FaMoneyBillWave,
  FaCheckCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaBuilding,
} from "react-icons/fa";

const ForClinics = () => {
  const [formData, setFormData] = useState({
    clinicName: "",
    contactPerson: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Clinic interest submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      clinicName: "",
      contactPerson: "",
      email: "",
      phone: "",
      city: "",
      message: "",
    });
  };

  const benefits = [
    {
      icon: FaUsers,
      title: "Reach More Patients",
      desc: "Connect with thousands of patients actively seeking healthcare services in your area.",
    },
    {
      icon: FaCalendarCheck,
      title: "Streamlined Bookings",
      desc: "Digital appointment management reduces no-shows and administrative overhead.",
    },
    {
      icon: FaChartLine,
      title: "Grow Your Practice",
      desc: "Analytics and insights help you understand patient demographics and optimize schedules.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost Effective",
      desc: "Pay only for successful bookings – no hidden fees or long-term contracts.",
    },
    {
      icon: FaShieldAlt,
      title: "Verified Trust",
      desc: "We verify all clinics to ensure patient safety and build lasting trust.",
    },
    {
      icon: FaHospitalUser,
      title: "Dedicated Support",
      desc: "24/7 assistance for technical issues, patient queries, and operational guidance.",
    },
  ];

  return (
    <section className="for-clinics" id="for-clinics">
      <div className="clinics-container">
        {/* Header */}
        <div className="clinics-header">
          <div className="header-icon">
            <FaHospitalUser />
          </div>
          <h2>Partner with VisitMyDoc</h2>
          <p>Empower your clinic with digital reach and seamless appointment management</p>
        </div>

        {/* Hero / CTA Banner */}
        <div className="clinics-hero">
          <div className="hero-text">
            <h3>Grow Your Practice Online</h3>
            <p>
              Join India's fastest growing healthcare network. List your clinic, attract new patients,
              and manage appointments effortlessly – all from one dashboard.
            </p>
            <div className="hero-stats">
              <div><span>500+</span> Clinics Trust Us</div>
              <div><span>50k+</span> Monthly Patients</div>
              <div><span>98%</span> Satisfaction Rate</div>
            </div>
          </div>
          <div className="hero-cta">
            <button className="primary-cta" onClick={() => document.getElementById("clinic-form").scrollIntoView({ behavior: "smooth" })}>
              Get Started → 
            </button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits">
          <h3>Why Partner With Us?</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div className="benefit-card" key={idx}>
                <benefit.icon className="benefit-icon" />
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h3>How It Works</h3>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <h4>Register Your Clinic</h4>
              <p>Fill out the form below with your clinic details.</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <h4>Verification</h4>
              <p>Our team verifies credentials and sets up your profile.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <h4>Go Live</h4>
              <p>Start receiving appointments and managing your calendar.</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="clinic-form" id="clinic-form">
          <h3>Interested? Register Your Clinic</h3>
          <p>Fill out the form and our partnership team will reach out within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <FaBuilding className="input-icon" />
                <input
                  type="text"
                  name="clinicName"
                  placeholder="Clinic / Hospital Name"
                  value={formData.clinicName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <FaUsers className="input-icon" />
                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Contact Person Name"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <FaEnvelope className="input-icon" />
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
                <FaPhoneAlt className="input-icon" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Additional Message (optional)"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Register Interest
            </button>
            {submitted && (
              <p className="success-message">
                <FaCheckCircle /> Thank you! We'll contact you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForClinics;