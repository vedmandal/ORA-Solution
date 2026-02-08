import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center">
      <div className="main-container bg-dark-purple p-5 text-center text-white" style={{width: '600px', height: 'auto'}}>
        <h1 className="fw-bold">Welcome, {user?.name || 'User'}</h1>
        <p className="text-secondary">You have successfully logged into the OSA HR Portal.</p>
        <hr className="border-secondary my-4" />
        <button onClick={handleLogout} className="btn-primary-custom" style={{width: '200px', margin: '0 auto'}}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;