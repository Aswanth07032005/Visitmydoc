import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import HomeNavbar from "./components/HomeNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import ForClinics from "./pages/Forclinics";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <BrowserRouter>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/forclinics" element={<ForClinics />} />
         <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/book" element={<BookAppointment />} />
        {/* Step 2: Location selection */}
        <Route
          path="/book/specialty/:specialty"
          element={<BookAppointment />}
        />
        {/* Step 3: Doctor list */}
        <Route
          path="/book/specialty/:specialty/location/:location"
          element={<BookAppointment />}
        />
        {/* Step 4: Booking confirmation */}
        <Route
          path="/book/specialty/:specialty/location/:location/doctor/:doctorId/confirm"
          element={<BookAppointment />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
