import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import build1 from '../assets/images/build1.jpg';
import build2 from '../assets/images/build2.jpg';
import build3 from '../assets/images/build3.jpg';
import '../styles/Register.css'; // Import custom CSS for styling

/**
 * Register component to handle user registration.
 * This component includes a registration form and an image carousel for a welcoming visual experience.
 * 
 * Props:
 * - onRegister (function): Callback function to handle the registration process.
 */
const Register = ({ onRegister }) => {
  // State hooks for capturing name, email, and password input values.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /**
   * handleRegister - Function to process the registration form submission.
   * Checks if all fields are filled, calls onRegister, and provides user feedback.
   * 
   * @param {Object} e - Event object from the form submission.
   */
  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      onRegister({ name, email, password }); // Call onRegister with user details
      alert('Registration successful! Please log in.');
      navigate('/'); // Redirect to login page after successful registration
    } else {
      alert('Please fill out all fields.'); // Show alert if any field is empty
    }
  };

  return (
    <div className="register-container">
      {/* Left Side: Image Carousel */}
      <div className="carousel-container">
        <Carousel controls={false}> {/* Carousel without controls for a cleaner look */}
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

      {/* Right Side: Registration Form */}
      <div className="form-container">
        <div className="form-box">
          <h2 className="text-center">Register</h2>
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-3">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
