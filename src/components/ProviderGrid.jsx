import React from "react";
import "./ProviderGrid.css";

import {
  FaUserMd,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaStar,
  FaStethoscope,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Arun Varghese",
    specialization: "General Physician",
    experience: "10 Years Exp.",
    location: "Chalakudy Clinic",
    availability: "Available Today",
    fee: "₹250",
    rating: "4.8",
    reviews: "124",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eTLGFc9O499Uhj1nLbuK5cCxtPkHaRpa1A&s",
  },
  {
    name: "Dr. Priya Sharma",
    specialization: "Cardiologist",
    experience: "15 Years Exp.",
    location: "Koratty Care Center",
    availability: "Available Today",
    fee: "₹450",
    rating: "4.9",
    reviews: "320",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Dr. Rahul Menon",
    specialization: "Pediatrician",
    experience: "8 Years Exp.",
    location: "Adat MedCity",
    availability: "Available Tomorrow",
    fee: "₹300",
    rating: "4.7",
    reviews: "89",
    img: "https://t3.ftcdn.net/jpg/15/75/74/62/360_F_1575746216_ZS5ovZG1rHulQUatTq0WVno9BGInMCwW.jpg",
  },
];

const ProviderGrid = () => {
  return (
    <section className="providers-premium" id="providers">
      <div className="providers-container">
        {/* HEADER */}
        <div className="providers-header" data-aos="fade-up">
          <div className="header-badge">Top Specialists</div>
          <h2>Trusted Healthcare Providers</h2>
          <p>Connect with top-rated medical experts in your city and book instant, hassle-free appointments.</p>
        </div>

        {/* GRID */}
        <div className="providers-grid">
          {doctors.map((doc, index) => (
            <div className="provider-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Top Banner & Image */}
              <div className="card-banner">
                <div className="rating-badge">
                  <FaStar className="star-icon" /> {doc.rating} <span>({doc.reviews})</span>
                </div>
              </div>
              
              <div className="card-body">
                <div className="doctor-profile">
                  <div className="avatar-wrapper">
                    <img src={doc.img} alt={doc.name} className="doctor-img" />
                    <div className="verified-badge"><FaCheckCircle /></div>
                  </div>
                  <div className="doctor-info">
                    <h3>{doc.name}</h3>
                    <div className="spec-badge">
                      <FaStethoscope className="spec-icon" />
                      {doc.specialization}
                    </div>
                  </div>
                </div>

                <div className="doctor-details">
                  <div className="detail-item">
                    <div className="detail-icon"><FaUserMd /></div>
                    <div className="detail-text">
                      <span className="label">Experience</span>
                      <span className="value">{doc.experience}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon"><FaMapMarkerAlt /></div>
                    <div className="detail-text">
                      <span className="label">Location</span>
                      <span className="value">{doc.location}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-icon"><FaRegCalendarAlt /></div>
                    <div className="detail-text">
                      <span className="label">Availability</span>
                      <span className="value available-text">{doc.availability}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer">
                <div className="fee-info">
                  <span className="fee-label">Consultation Fee</span>
                  <span className="fee-amount">{doc.fee}</span>
                </div>
                <button className="book-btn">
                  Book Visit <FaChevronRight className="btn-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL */}
        <div className="view-all" data-aos="fade-up">
          <button className="view-all-btn">
            Explore All Providers 
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProviderGrid;