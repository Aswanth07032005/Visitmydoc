import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineGoogle, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string().min(6, "Min 6 characters").required("Password required"),
    }),
    onSubmit: (values) => {
      console.log("Login values:", values);
      navigate("/dashboard");
    },
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="login-brand">
            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>
          </div>

          <Form onSubmit={formik.handleSubmit}>
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

            <div className="login-options">
              <Form.Check
                type="checkbox"
                name="rememberMe"
                label="Remember me"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
                className="checkbox-custom"
              />
              <Link to="/forgot-password" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="login-btn w-100">
              Sign In
            </Button>
          </Form>

          <div className="social-login">
            <p>Or continue with</p>
            <div className="social-icons">
              <button className="social-icon google"><AiOutlineGoogle /></button>
              <button className="social-icon facebook"><AiOutlineFacebook /></button>
              <button className="social-icon twitter"><AiOutlineTwitter /></button>
            </div>
          </div>

          <div className="signup-link">
            <p>Don't have an account? <Link to="/signup">Sign up now</Link></p>
          </div>
        </div>

        <div className="login-right">
          <div className="info-box">
            <h3>Secure Login</h3>
            <p>Your data is protected with SSL encryption.</p>
            <ul>
              <li>✔ 256‑bit SSL</li>
              <li>✔ 2FA ready</li>
              <li>✔ GDPR compliant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;