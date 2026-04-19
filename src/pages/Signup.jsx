import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("Signup values:", values);
      // Redirect to login after successful signup
      navigate("/login");
    },
  });

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left">
          <div className="signup-brand">
            <h2>Create Account</h2>
            <p>Join us to get started</p>
          </div>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <div className="input-group">
                <FaUser className="input-icon" />
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.name && !!formik.errors.name}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.email && !!formik.errors.email}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="input-group">
                <FaLock className="input-icon" />
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.password && !!formik.errors.password}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <div className="input-group">
                <FaLock className="input-icon" />
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" className="signup-btn w-100">
              Sign Up
            </Button>
          </Form>

          <div className="social-login">
            <p>Or sign up with</p>
            <div className="social-icons">
              <button className="social-icon google"><AiOutlineGoogle /></button>
              <button className="social-icon facebook"><AiOutlineFacebook /></button>
              <button className="social-icon twitter"><AiOutlineTwitter /></button>
            </div>
          </div>

          <div className="login-link">
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </div>

        <div className="signup-right">
          <div className="info-box">
            <h3>Join Our Community</h3>
            <p>Get access to trusted doctors and healthcare services.</p>
            <ul>
              <li>✔ Book appointments instantly</li>
              <li>✔ Chat with doctors</li>
              <li>✔ Get health reminders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;