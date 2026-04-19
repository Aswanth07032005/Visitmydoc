import React from "react";
import "./About.css";
import {
  FaHeartbeat,
  FaUserMd,
  FaClock,
  FaShieldAlt,
  FaSmile,
  FaHandHoldingHeart,
  FaAward,
  FaUsers,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const statsData = [
  { number: "500+", label: "Verified Doctors", icon: FaUserMd },
  { number: "50k+", label: "Happy Patients", icon: FaUsers },
  { number: "24/7", label: "Expert Support", icon: FaHeadset },
];

const valuesData = [
  {
    icon: FaShieldAlt,
    title: "Trust & Transparency",
    desc: "Every doctor is verified – no hidden fees, honest profiles.",
  },
  {
    icon: FaClock,
    title: "Instant Access",
    desc: "Book appointments in seconds, consult from anywhere.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Patient First",
    desc: "Your health and comfort are our top priorities.",
  },
  {
    icon: FaSmile,
    title: "Compassionate Care",
    desc: "Empathy in every interaction, from booking to follow-up.",
  },
  {
    icon: FaAward,
    title: "Quality Assured",
    desc: "We partner only with top-rated healthcare providers.",
  },
];

const About = () => {
  const handleFindDoctor = () => {
    window.location.href = "/#providers";
  };

  return (
    <section className="about-premium" id="about">
      {/* Decorative background blurs */}
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>

      <div className="about-container">
        
        {/* Top Content Row */}
        <div className="about-hero">
          <div className="about-text-content" data-aos="fade-right">
            <div className="badge-pill">
              <FaHeartbeat className="badge-icon" /> About VisitMyDoc
            </div>
            <h2 className="about-title">
              Connecting You with the <span>Best Doctors</span>
            </h2>
            <p className="about-description">
              VisitMyDoc is a revolutionary digital health platform that bridges the gap
              between patients and trusted healthcare providers. We believe that quality
              medical care should be just a click away – accessible, transparent, and
              compassionate.
            </p>
            
            <ul className="about-bullet-points">
              <li><FaCheckCircle className="bullet-icon"/> Empowering patients with choice and convenience</li>
              <li><FaCheckCircle className="bullet-icon"/> Handpicked verified doctors you can trust</li>
              <li><FaCheckCircle className="bullet-icon"/> Prioritizing your well-being above all else</li>
            </ul>

            <button className="premium-btn" onClick={handleFindDoctor}>
              Find Your Doctor <span>→</span>
            </button>
          </div>

          <div className="about-visuals" data-aos="fade-left">
            <div className="image-wrapper">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/047/883/550/small/young-indian-female-doctor-isolated-photo.jpg"
                alt="Medical Professionals"
                className="main-image"
              />
              {/* Floating Exp Badge */}
              <div className="floating-badge top-right">
                <div className="badge-content">
                  <FaAward className="fb-icon" />
                  <div className="fb-text">
                    <span className="fb-num">10+</span>
                    <span className="fb-desc">Years of Trust</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="about-stats-wrapper" data-aos="fade-up">
          <div className="stats-grid premium-stats">
            {statsData.map((stat, idx) => (
              <div className="stat-card" key={idx}>
                <div className="stat-icon-wrapper">
                  <stat.icon />
                </div>
                <div className="stat-info">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="about-values">
          <div className="values-header" data-aos="fade-up">
            <h3>Why Choose VisitMyDoc?</h3>
            <p>We are committed to delivering a superior healthcare experience</p>
          </div>
          <div className="values-grid">
            {valuesData.map((value, idx) => (
              <div className="value-premium-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="v-icon-box">
                  <value.icon />
                </div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;