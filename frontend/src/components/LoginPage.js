import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import toast from 'react-hot-toast';
import API from '../api/Api';
import AuthLayout from './AuthLayout';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", formData);
      
      if (res.data.success) {
        toast.success("Login Successful!");
        
        // 1. Store the token for future API calls
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // 2. Redirect to the dashboard
        navigate("/dashboard"); 
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <AuthLayout>
      <h2 className="fw-bold mb-1">Welcome Back</h2>
      <p className="text-secondary mb-4 small">OSA solution</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          className="custom-input w-100 mb-3" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="custom-input w-100 mb-2" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          required 
        />
        
        <div className="d-flex justify-content-between align-items-center mb-4 small text-secondary">
          <label style={{cursor: 'pointer'}}>
            <input type="checkbox" className="me-2" /> Remember me
          </label>
          <span style={{cursor: 'pointer'}}>Forgot Password?</span>
        </div>

        <button type="submit" className="btn-primary-custom">
          Sign In
        </button>
      </form>

      <div className="text-center mt-4">
        <p className="text-secondary small separator text-uppercase mb-4">Or Sign In with</p>
        <div className="d-flex gap-2 mb-4">
          <button type="button" className="custom-social-btn w-50">
            <i className="bi bi-google me-2"></i>Google
          </button>
          <button type="button" className="custom-social-btn w-50">
            <i className="bi bi-apple me-2"></i>Apple
          </button>
        </div>
        
        <p className="text-secondary small">
          Don't have an account? <Link to="/register" className="text-primary-custom">Register here</Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;