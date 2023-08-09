import React, { useState } from "react";
import UserCertificates from "../userDashboard/UserCertificates";
import UserRequests from "../userDashboard/UserRequests";
import '../../styles/userDashboard/UserDashboard.css'

function CopyofAlumni() {
  const alumni = {
    profilePic: "alumni.jpg",
    name: "Jane Smith",
    email: "jane@example.com",
    userId: "654321",
  };

  const certificates = [];

  const [displaySection, setDisplaySection] = useState("certificates");

  const handleSectionToggle = (section) => {
    setDisplaySection(section);
  };

  const renderContent = () => {
    if (displaySection === "certificates") {
      return <UserCertificates />;
    } else if (displaySection === "requests") {
      return <UserRequests />;
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 user-details-container">
        <div className="row user-details">
          <h1> Profile</h1>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center user-details-image">
            <div
              className="rounded-circle overflow-hidden mb-4 border border-secondary "
              style={{ width: "140px", height: "140px" }}
            >
              {" "}
              <img
                src={alumni.profilePic}
                alt="User Profile"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div>
              <button className="edit-profile-button">Edit Profile</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h1>{alumni.name}</h1>
            <h5>{alumni.email}</h5>
            <h6>{alumni.userId}</h6>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="certificate-section">
              <h1>Certificates</h1>
              <div className="row">
                {certificates.map((certificate, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="certificate-card">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="certificate-img img-fluid"
                      />
                      <p className="certificate-title">{certificate.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container"
        style={{ marginLeft: "0px", marginTop: "0px" }}
      >
        <ul className="nav nav-tabs">
          <li className="nav-item"></li>
          <li className="nav-item"></li>
        </ul>
      </div>
      {renderContent()}
    </>
  );
}

export default CopyofAlumni;
