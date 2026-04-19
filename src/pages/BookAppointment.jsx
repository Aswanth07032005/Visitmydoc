import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookAppointment.css";
import {
  FaStethoscope,
  FaMapMarkerAlt,
  FaUserMd,
  FaChevronRight,
  FaChevronLeft,
  FaSearch,
  FaCheckCircle,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

// ========== DATA ARRAYS ==========
const specialties = [
  "General Practice", "Paediatrics", "ENT", "Gynaecology",
  "Orthopaedics", "Cardiology", "Neurology", "Gastroenterology",
  "Ophthalmology", "Urology", "General Surgery", "Diabetology",
  "Psychiatry", "Dermatology", "Dental", "Physiotherapy",
  "Ayurveda", "Homeopathy",
];

const locations = [
  "Kochi", "Thrissur", "Kozhikode", "Chalakudy",
  "Koratty", "Adat", "Trivandrum", "Kottayam",
];

const doctors = [
  { id: 1, name: "Dr. Meera Nair", specialty: "General Practice", location: "Kochi", fee: "₹400", rating: 4.9, experience: "12 years" },
  { id: 2, name: "Dr. Rajesh Menon", specialty: "General Practice", location: "Thrissur", fee: "₹350", rating: 4.7, experience: "10 years" },
  { id: 3, name: "Dr. Priya Sharma", specialty: "Paediatrics", location: "Kochi", fee: "₹500", rating: 4.8, experience: "8 years" },
  { id: 4, name: "Dr. Arun Kumar", specialty: "ENT", location: "Kozhikode", fee: "₹450", rating: 4.6, experience: "9 years" },
  { id: 5, name: "Dr. Neetha George", specialty: "Gynaecology", location: "Kochi", fee: "₹600", rating: 4.9, experience: "15 years" },
  { id: 6, name: "Dr. Suresh Babu", specialty: "Orthopaedics", location: "Thrissur", fee: "₹550", rating: 4.8, experience: "14 years" },
  { id: 7, name: "Dr. Anjali Nair", specialty: "Cardiology", location: "Kochi", fee: "₹700", rating: 4.9, experience: "18 years" },
];

// ========== COMPONENT ==========
const BookAppointment = () => {
  const { specialty, location: urlLocation, doctorId, action } = useParams();
  const navigate = useNavigate();

  // UI state only for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Determine current step from URL params
  const step = !specialty ? 1 : !urlLocation ? 2 : !doctorId ? 3 : action === "confirm" ? 4 : 3;

  // Selected values
  const selectedSpecialty = specialty || "";
  const selectedLocation = urlLocation || "";
  const selectedDoctor = doctorId ? doctors.find(d => d.id === parseInt(doctorId)) : null;

  // Filtered data
  const filteredSpecialties = specialties.filter(s =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const availableDoctors = doctors.filter(
    doc => doc.specialty === selectedSpecialty && doc.location === selectedLocation
  );

  // Navigation handlers
  const handleSpecialtySelect = (spec) => {
    navigate(`/book/specialty/${encodeURIComponent(spec)}`);
  };

  const handleLocationSelect = (loc) => {
    navigate(`/book/specialty/${encodeURIComponent(selectedSpecialty)}/location/${encodeURIComponent(loc)}`);
  };

  const handleDoctorSelect = (doctor) => {
    // Go to confirmation page for this doctor
    navigate(`/book/specialty/${encodeURIComponent(selectedSpecialty)}/location/${encodeURIComponent(selectedLocation)}/doctor/${doctor.id}/confirm`);
    console.log(doctor);  
       
  };

  const handleConfirmBooking = () => {
    // Final booking action – you can replace this with an API call
    alert(`✅ Appointment successfully booked with ${selectedDoctor.name} on ${new Date().toLocaleDateString()}`);
    // Optionally navigate to a "My Appointments" page
    navigate("/my-appointments");
  };

  const goBack = () => {
    if (step === 2) {
      navigate(`/book`);
    } else if (step === 3) {
      navigate(`/book/specialty/${encodeURIComponent(selectedSpecialty)}`);
    } else if (step === 4) {
      navigate(`/book/specialty/${encodeURIComponent(selectedSpecialty)}/location/${encodeURIComponent(selectedLocation)}`);
    }
  };

  const resetBooking = () => {
    navigate(`/book`);
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        {/* Header */}
        <div className="booking-header">
          <div className="header-icon">
            <FaStethoscope />
          </div>
          <h2>Book Appointment</h2>
          <p>Choose your medical specialty and find the best doctor near you</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`step ${step >= 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <span className="step-label">Specialty</span>
          </div>
          <div className={`step-line ${step >= 2 ? "active" : ""}`}></div>
          <div className={`step ${step >= 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            <span className="step-label">Location</span>
          </div>
          <div className={`step-line ${step >= 3 ? "active" : ""}`}></div>
          <div className={`step ${step >= 3 ? "active" : ""}`}>
            <span className="step-number">3</span>
            <span className="step-label">Doctors</span>
          </div>
          <div className={`step-line ${step >= 4 ? "active" : ""}`}></div>
          <div className={`step ${step >= 4 ? "active" : ""}`}>
            <span className="step-number">4</span>
            <span className="step-label">Confirm</span>
          </div>
        </div>

        {/* Step 1: Specialty */}
        {step === 1 && (
          <div className="step-content">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="specialties-grid">
              {filteredSpecialties.map((spec, idx) => (
                <div
                  key={idx}
                  className="specialty-card"
                  onClick={() => handleSpecialtySelect(spec)}
                >
                  <span>{spec}</span>
                  <FaChevronRight className="arrow" />
                </div>
              ))}
              {filteredSpecialties.length === 0 && (
                <p className="no-results">No matching specialties</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="step-content">
            <div className="selected-info">
              <p><strong>Selected Specialty:</strong> {selectedSpecialty}</p>
            </div>
            <div className="locations-grid">
              {locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="location-card"
                  onClick={() => handleLocationSelect(loc)}
                >
                  <FaMapMarkerAlt />
                  <span>{loc}</span>
                </div>
              ))}
            </div>
            <div className="step-actions">
              <button className="back-btn" onClick={goBack}>
                <FaChevronLeft /> Back
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Doctors */}
        {step === 3 && (
          <div className="step-content">
            <div className="selected-info">
              <p><strong>Specialty:</strong> {selectedSpecialty}</p>
              <p><strong>Location:</strong> {selectedLocation}</p>
            </div>
            {availableDoctors.length > 0 ? (
              <div className="doctors-grid">
                {availableDoctors.map((doc) => (
                  <div key={doc.id} className="doctor-card">
                    <div className="doctor-avatar">
                      <FaUserMd />
                    </div>
                    <div className="doctor-details">
                      <h3>{doc.name}</h3>
                      <p className="doc-specialty">{doc.specialty}</p>
                      <p className="doc-experience">{doc.experience}</p>
                      <div className="doc-meta">
                        <span className="rating">★ {doc.rating}</span>
                        <span className="fee">{doc.fee}</span>
                      </div>
                      <button
                        className="book-now-btn"
                        onClick={() => handleDoctorSelect(doc)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-doctors">
                <p>No doctors available for this specialty and location.</p>
                <button className="reset-btn" onClick={resetBooking}>
                  Start Over
                </button>
              </div>
            )}
            <div className="step-actions">
              <button className="back-btn" onClick={goBack}>
                <FaChevronLeft /> Back
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Booking Confirmation */}
        {step === 4 && selectedDoctor && (
          <div className="step-content confirmation-step">
            <div className="confirmation-icon">
              <FaCheckCircle />
            </div>
            <h3>Confirm Appointment</h3>
            <div className="confirmation-details">
              <div className="confirmation-card">
                <div className="confirmation-row">
                  <span className="label">Doctor:</span>
                  <span className="value">{selectedDoctor.name}</span>
                </div>
                <div className="confirmation-row">
                  <span className="label">Specialty:</span>
                  <span className="value">{selectedDoctor.specialty}</span>
                </div>
                <div className="confirmation-row">
                  <span className="label">Location:</span>
                  <span className="value">{selectedLocation}</span>
                </div>
                <div className="confirmation-row">
                  <span className="label">Fee:</span>
                  <span className="value">{selectedDoctor.fee}</span>
                </div>
                <div className="confirmation-row">
                  <span className="label">Experience:</span>
                  <span className="value">{selectedDoctor.experience}</span>
                </div>
                <div className="confirmation-row">
                  <span className="label">Rating:</span>
                  <span className="value">★ {selectedDoctor.rating}</span>
                </div>
              </div>
              <div className="date-time-picker">
                <div className="date-picker">
                  <FaCalendarAlt />
                  <input type="date" defaultValue="2025-01-15" />
                </div>
                <div className="time-picker">
                  <FaClock />
                  <select defaultValue="10:00">
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="step-actions confirmation-actions">
              <button className="back-btn" onClick={goBack}>
                <FaChevronLeft /> Back
              </button>
              <button className="confirm-btn" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookAppointment;