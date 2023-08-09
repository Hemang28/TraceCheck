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
