import React from "react";
import "./ServiceGrid.css";

import {
  FaStethoscope,
  FaTooth,
  FaRunning,
  FaBrain,
  FaHeart,
  FaBaby,
} from "react-icons/fa";

const services = [
  {
    title: "General Practice",
    desc: "Comprehensive primary healthcare services",
    icon: <FaStethoscope />,
    img: "https://albertroadgp.com.au/wp-content/uploads/2023/10/ARGP-Blog-Post-Images-1.jpg",
  },
  {
    title: "Dental Checkup",
    desc: "Routine dental examination and cleaning",
    icon: <FaTooth />,
    img: "https://images.stockcake.com/public/7/8/6/786d7d57-c1ca-43d2-ba37-c5df53fb2b2e_large/dental-checkup-session-stockcake.jpg",
  },
  {
    title: "Physiotherapy Session",
    desc: "Physical therapy and rehabilitation",
    icon: <FaRunning />,
    img: "https://img.freepik.com/free-photo/woman-having-physiotherapy-session-clinic_23-2149115632.jpg",
  },
  {
    title: "Psychology Consultation",
    desc: "Mental health assessment and therapy",
    icon: <FaBrain />,
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  },
  {
    title: "Cardiology",
    desc: "Heart health assessment and cardiac care",
    icon: <FaHeart />,
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561",
  },
  {
    title: "Pediatrics",
    desc: "Comprehensive healthcare for children",
    icon: <FaBaby />,
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
  },
];

const ServiceGrid = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* HEADER */}
        <div className="services-header" data-aos="fade-up">
          <h2>Popular Healthcare Services</h2>
          <p>Quick access to the most commonly booked healthcare services</p>
        </div>

        {/* GRID */}
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {/* IMAGE */}
              <div className="service-img">
                <img src={item.img} alt={item.title} />
              </div>

              {/* ICON */}
              <div className="service-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
