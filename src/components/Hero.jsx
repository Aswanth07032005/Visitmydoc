import React from "react";
import "./Hero.css";

import {
  FaStethoscope,
  FaUserMd,
  FaComments,
  FaCalendarCheck,
  FaBell,
} from "react-icons/fa";

import { MdVerified } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCalendarCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="home" id="home">
      {/* HERO SECTION */}
      <div className="container">
        {/* LEFT */}
        <div className="home-left" data-aos="fade-right">
          <h1>
            Book Trusted <span>Doctors</span> Instantly
          </h1>

          <p className="text-muted">
            Find your doctor, check availability, and book easily. Avoid long
            queues and phone calls.
          </p>

          {/* STATS */}
          <div className="home-stats">
            <span>
              <MdVerified className="icon" /> 100% Verified Doctors
            </span>
            <span>⭐ 4.8/5 Patient Rating</span>
          </div>

          {/* BUTTONS */}
          <div className="home-buttons">
            <Link to={'/BookAppointment'}  className="btn btnprimary">
              <BsCalendarCheck /> Book Appointment
            </Link>

            <Link to={'/forclinics'} className="btn btnsecondary ">
              <FaStethoscope /> For Clinics & Doctors
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="home-right" data-aos="fade-left" data-aos-delay="200">
          <img
            src="https://inscol.com/canada/wp-content/uploads/2022/09/covid-19-healthcare-workers-pandemic-concept-professional-confident-smiling-asian-female-doctor-nurse-scrubs-with-stethoscope-examinations-cross-arms-look-camera-1.png.webp"
            alt="doctor"
          />
        </div>
      </div>

      {/* ===================== */}
      {/* STEPS SECTION */}
      {/* ===================== */}

      <div className="steps-section" data-aos="fade-up">
        <h2>Our Simple 5-Step Appointment Booking Process</h2>

        <div className="steps-container">
          <div className="step-card">
            <AiOutlineSearch className="step-icon" />
            <h4>Find the Right Doctor</h4>
          </div>

          <div className="step-card">
            <FaUserMd className="step-icon" />
            <h4>See Live Availability</h4>
          </div>

          <div className="step-card">
            <FaCalendarCheck className="step-icon" />
            <h4>Book Instantly</h4>
          </div>

          <div className="step-card">
            <FaBell className="step-icon" />
            <h4>Get Reminders & Updates</h4>
          </div>

          <div className="step-card">
            <FaComments className="step-icon" />
            <h4>Chat with Doctor</h4>
          </div>
        </div>
      </div>

      {/* ===================== */}
      {/* CTA SECTION */}
      {/* ===================== */}

      <div className="cta-section" data-aos="zoom-in">
        <p>See why top clinics choose VisitMyDoc</p>
        <a href="/BookAppointment" className="cta-link">
          Learn More →
        </a>
      </div>
    </section>
  );
};

export default Hero;
