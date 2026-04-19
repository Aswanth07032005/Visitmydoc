import React from "react";
import "./PreFooter.css";
import { FaUserMd, FaClinicMedical, FaStar } from "react-icons/fa";

const PreFooter = () => {
  return (
    <section className="prefooter">

      <div className="prefooter-container">

        <h2 data-aos="fade-up">Trusted by Patients & Clinics Across India</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Delivering seamless healthcare experiences with modern technology
          and trusted professionals.
        </p>

        <div className="prefooter-stats">

          <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
            <FaUserMd className="icon" />
            <h3>500+</h3>
            <span>Verified Doctors</span>
          </div>

          <div className="stat-card" data-aos="fade-up" data-aos-delay="300">
            <FaClinicMedical className="icon" />
            <h3>120+</h3>
            <span>Clinics Onboarded</span>
          </div>

          <div className="stat-card" data-aos="fade-up" data-aos-delay="400">
            <FaStar className="icon" />
            <h3>4.8/5</h3>
            <span>Patient Satisfaction</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default PreFooter;