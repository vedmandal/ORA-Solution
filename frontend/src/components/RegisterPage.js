import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import API from '../api/Api';
import AuthLayout from './AuthLayout';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/register", formData);
      if (res.data.success) {
        toast.success("Account Created! Please Login.");
        navigate("/login");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <AuthLayout>
      <h2 className="fw-bold mb-1">Create Account</h2>
      <p className="text-secondary mb-4 small">Join OSA HR Solutions</p>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" className="custom-input w-100 mb-3" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} required />
        <input type="email" placeholder="Email Address" className="custom-input w-100 mb-3" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} required />
        <input type="password" placeholder="Password" className="custom-input w-100 mb-4" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} required />
        
        <button type="submit" className="btn btn-primary-custom w-100 py-3 mb-4">Register Now</button>
      </form>
      
      <p className="text-center text-secondary small">
        Already have an account? <Link to="/login" className="text-primary-custom text-decoration-none fw-bold">Login here</Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;