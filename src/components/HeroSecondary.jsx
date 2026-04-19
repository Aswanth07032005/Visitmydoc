import React from "react";
import "./HeroSecondary.css";

import { FaCalendarCheck, FaUserMd, FaHospital } from "react-icons/fa";

const HeroSecondary = () => {
  return (
    <section className="hero0">
      <div className="hero0-container">
        {/* LEFT CONTENT */}
        <div className="hero0-left" data-aos="fade-right">
          <h1>
            Your Health <span>Our Priority</span>
          </h1>

          <p>
            Book appointments with trusted doctors instantly. No waiting queues,
            no hassle — just simple healthcare access.
          </p>

          {/* FEATURES */}
          <div className="hero0-features">
            <span>
              <FaUserMd /> Verified Doctors
            </span>
            <span>
              <FaCalendarCheck /> Instant Booking
            </span>
            <span>
              <FaHospital /> Top Clinics
            </span>
          </div>

          {/* BUTTONS */}
          <div className="hero0-buttons">
            <button className="primary">
              <FaCalendarCheck /> Book Appointment
            </button>

            <button className="secondary">
              <FaUserMd /> Find Doctors
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero0-right" data-aos="fade-left">
          <img
            src="https://png.pngtree.com/png-clipart/20240219/original/pngtree-portrait-of-attractive-male-doctor-png-image_14354532.png"
            alt="doctor"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSecondary;
