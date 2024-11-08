import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Account component for managing user profile and password updates.
 * Allows users to update their account details, including name and password, and log out.
 * 
 * Props:
 * - user (object): The current user's data (name, email, password).
 * - onLogout (function): Function to handle user logout.
 */
const Account = ({ user, onLogout }) => {
  // State hooks for managing editable data and password update fields
  const [editData, setEditData] = useState({
    name: user.name,
    email: user.email,
  });
  const [passwordData, setPasswordData] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  /**
   * handleChange - Updates state with changes to name or email fields.
   * 
   * @param {Object} e - Event object from input field.
   */
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  /**
   * handlePasswordChange - Updates state with changes to new password or confirm password fields.
   * 
   * @param {Object} e - Event object from password input fields.
   */
  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  /**
   * handleSave - Handles the saving of user information and password update.
   * Validates password match and updates the user state if successful.
   * 
   * @param {Object} e - Event object from form submission.
   */
  const handleSave = (e) => {
    e.preventDefault();
    
    // Update user data in the state
    Object.assign(user, editData);

    // Check for password update and validate if passwords match
    if (passwordData.newPassword && passwordData.newPassword === passwordData.confirmPassword) {
      user.password = passwordData.newPassword; // Update the user's password
      alert('Account information and password updated successfully!');
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords don't match!"); // Alert if passwords don't match
      return;
    } else {
      alert('Account information updated successfully!');
    }

    // Reset password fields after submission
    setPasswordData({ newPassword: '', confirmPassword: '' });
  };

  /**
   * handleLogout - Handles user logout and redirects to the home page.
   */
  const handleLogout = () => {
    onLogout(); // Call onLogout function to log out the user
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="centered-container">
      <div className="card card-centered">
        <h2 className="text-center">Account Management</h2>
        <form onSubmit={handleSave}>
          {/* Name Input */}
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={editData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input (disabled as it's not editable) */}
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={editData.email}
              onChange={handleChange}
              required
              disabled // Email cannot be edited
            />
          </div>

          {/* New Password Input */}
          <div className="mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
            />
          </div>

          {/* Save Changes Button */}
          <button type="submit" className="btn btn-primary w-100">Save Changes</button>
        </form>

        {/* Logout Button */}
        <button onClick={handleLogout} className="btn btn-secondary w-100 mt-3">Logout</button>
      </div>
    </div>
  );
};

export default Account;
