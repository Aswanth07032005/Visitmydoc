import React from "react";
import "./PatientFeatures.css";

import {
  FaComments,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaUserFriends,
  FaBell,
  FaLock,
  FaRegClock,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

const features = [
  {
    title: "Secure Doctor Chat",
    desc: "Follow up with your doctor via private encrypted chat.",
    icon: <FaComments />,
  },
  {
    title: "Find Care Nearby",
    desc: "Discover top-rated doctors in your local area.",
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Live Availability",
    desc: "See real-time open slots and book instantly.",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Book for Family",
    desc: "Manage appointments for family members easily.",
    icon: <FaUserFriends />,
  },
  {
    title: "Smart Reminders",
    desc: "Get alerts for upcoming visits and follow-ups.",
    icon: <FaBell />,
  },
  {
    title: "Secure OTP Login",
    desc: "Bank-grade OTP security for your health data.",
    icon: <FaLock />,
  },
  {
    title: "Skip Waiting Room",
    desc: "Avoid long queues and waiting time.",
    icon: <FaRegClock />,
  },
  {
    title: "Mobile Friendly",
    desc: "Works smoothly on all mobile devices.",
    icon: <FaMobileAlt />,
  },
];

const PatientFeatures = () => {
  return (
    <section className="patients">
      <div className="patients-container">
        {/* HEADER */}
        <div className="patients-header" data-aos="fade-up">
          <h2>Why Patients Choose VisitMyDoc</h2>
          <p>Your healthcare, simplified and accessible</p>
        </div>

        {/* GRID */}
        <div className="patients-grid">
          {features.map((item, index) => (
            <div className="patient-card" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="patient-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="patients-cta" data-aos="zoom-in">
          <h3>Ready to experience better healthcare?</h3>
          <button className="cta-btn">
            <FaRocket /> Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientFeatures;
