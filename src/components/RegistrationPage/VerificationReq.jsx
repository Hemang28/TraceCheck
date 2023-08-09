// VerificationReq.jsx
import React, { useState } from "react";
import '../../styles/Forms/Verification.css'

function VerificationReq() {
  const [userId, setUserId] = useState("");
  const [certificateType, setCertificateType] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");
  const [iaName, setIAName] = useState("");
  const [certificationTenureFrom, setCertificationTenureFrom] = useState("");
  const [certificationTenureTo, setCertificationTenureTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", {
      userId,
      certificateType,
      certificateTitle,
      iaName,
      certificationTenureFrom,
      certificationTenureTo,
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar pt-1">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-primary me-2">
                  Wallet Address
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="App d-flex align-items-center justify-content-center">
        <div className="container mt-5">
          <div className="form-container p-4">
            <h2 className="mb-4 text-center">Verification Request Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">User ID:</label>
                <input
                  type="text"
                  className="form-control"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Certificate Type:</label>
                <input
                  type="text"
                  className="form-control"
                  value={certificateType}
                  onChange={(e) => setCertificateType(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Certificate Title:</label>
                <input
                  type="text"
                  className="form-control"
                  value={certificateTitle}
                  onChange={(e) => setCertificateTitle(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">IA Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={iaName}
                  onChange={(e) => setIAName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Certification Tenure (From - To):
                </label>
                <div className="scroll-input">
                  <input
                    type="date"
                    className="form-control"
                    value={certificationTenureFrom}
                    onChange={(e) => setCertificationTenureFrom(e.target.value)}
                  />
                  <input
                    type="date"
                    className="form-control"
                    value={certificationTenureTo}
                    onChange={(e) => setCertificationTenureTo(e.target.value)}
                  />
                </div>
              </div>

              <div className="button-container text-center mt-4">
                <button type="submit" className="btn btnapprove me-4">
                  Approve
                </button>
                <button type="button" className="btn btnrej">
                  Reject
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationReq;
