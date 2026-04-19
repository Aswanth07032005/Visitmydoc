import React from "react";
import "./ClinicFeatures.css";

import {
  FaClinicMedical,
  FaComments,
  FaUsers,
  FaFilePrescription,
  FaBell,
  FaCalendarAlt,
  FaRobot,
  FaShieldAlt,
  FaRocket,
  FaUserMd,
} from "react-icons/fa";

const features = [
  {
    title: "Centralised Management",
    desc: "Manage all bookings from one dashboard.",
    icon: <FaClinicMedical />,
  },
  {
    title: "Secure Patient Chat",
    desc: "Follow up with patients safely after appointments.",
    icon: <FaComments />,
  },
  {
    title: "Reduced Front-Desk Load",
    desc: "Cut down calls and manual follow-up work.",
    icon: <FaUsers />,
  },
  {
    title: "Digital Prescriptions",
    desc: "Email prescriptions directly to pharmacies.",
    icon: <FaFilePrescription />,
  },
  {
    title: "Delay Notifications",
    desc: "Notify patients when you're running late.",
    icon: <FaBell />,
  },
  {
    title: "Smart Scheduling",
    desc: "Prevent double bookings and conflicts.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Automated Follow-ups",
    desc: "Send automatic post-visit notifications.",
    icon: <FaRobot />,
  },
  {
    title: "Role-Based Security",
    desc: "Controlled access for your clinic staff.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Quick Setup",
    desc: "Simple onboarding, no training required.",
    icon: <FaRocket />,
  },
];

const ClinicFeatures = () => {
  return (
    <section className="why" id="about">
      <div className="why-container">
        {/* HEADER */}
        <div className="why-header" data-aos="fade-up">
          <h2>Why Clinics Choose VisitMyDoc</h2>
          <p>Powerful tools designed for modern healthcare management</p>
        </div>

        {/* GRID */}
        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="why-cta" data-aos="zoom-in">
          <h3>Be one of the first to join VisitMyDoc</h3>

          <div className="why-buttons">
            <button className="btn primary">
              <FaUserMd /> List your practice
            </button>

            <button className="btn secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicFeatures;
