import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import build1 from '../assets/images/build1.jpg';
import build2 from '../assets/images/build2.jpg';
import build3 from '../assets/images/build3.jpg';
import '../styles/Login.css'; // Import custom CSS for styling

/**
 * Login component for handling user authentication.
 * It includes a login form and an image carousel for aesthetics.
 * 
 * Props:
 * - onLogin (function): Callback to handle login logic and validate user credentials.
 */
const Login = ({ onLogin }) => {
  // State hooks for capturing email and password input values.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * handleLogin - Function to process the login attempt when form is submitted.
   * If login is successful, navigate to the account page; otherwise, alert the user.
   * 
   * @param {Object} e - Event object from the form submission.
   */
  const handleLogin = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      navigate('/account'); // Redirect to the account page on successful login
    } else {
      alert('Account not found. Please register.'); // Show alert if login fails
    }
  };

  return (
    <div className="login-container">
      {/* Left Side: Image Carousel */}
      <div className="carousel-container">
        <Carousel controls={false}> {/* Carousel without controls for a seamless appearance */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={build1}
              alt="Slide 1"
              style={{ objectFit: 'cover', height: '100vh' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={build2}
              alt="Slide 2"
              style={{ objectFit: 'cover', height: '100vh' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={build3}
              alt="Slide 3"
              style={{ objectFit: 'cover', height: '100vh' }}
            />
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Right Side: Login Form */}
      <div className="form-container">
        <div className="form-box">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>

          {/* Register Link */}
          <p className="text-center mt-3">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
