import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-wrapper d-flex align-items-center justify-content-center vh-100">
      <div className="main-container row g-0 shadow-lg">
        
        {/* Left Side: Brand & Image Section */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-between p-5 text-white left-side">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-bold">OSA HR</h4>
            <button className="btn btn-sm btn-outline-light rounded-pill px-3">Back to website</button>
          </div>
          <div className="mb-5">
            <h1 className="display-5 fw-bold mb-3">Capturing Moments,<br/>Creating Memories</h1>
            <div className="d-flex gap-2 mt-4">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Content Section */}
        <div className="col-md-6 bg-dark-purple p-5 d-flex flex-column justify-content-center text-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;