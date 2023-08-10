import React from 'react'
import { useState } from 'react';
import IssueCertificate from '../components/issuingAuthorityDashboard/IssueCertificate';
import TrackAlumni from '../components/issuingAuthorityDashboard/TrackAlumni';
import IAUserRequest from '../components/issuingAuthorityDashboard/IAUserRequest';
import VerifyUser from '../components/issuingAuthorityDashboard/VerifyUser';
import '../styles/issuingAuthorityDashboard/IssuingAuthorityDashboard.css'
import logo from '../assets/dummy-user.png'

function IssuingAuthorityDashboard(props) {
      const [displaySection, setDisplaySection] = useState('certificates');
  
      const handleSectionToggle = (section) => {
        setDisplaySection(section);
      };
  
      const renderContent = () => {
        if (displaySection === 'certificates') {
            return <IssueCertificate />;
          } else if (displaySection === 'requests') {
            return <IAUserRequest/>;
          } else if (displaySection === 'trackalumni') {
            return <TrackAlumni />;
          } else if (displaySection === 'verifyuser') {
            return <VerifyUser />;
          }
      };
  return (
    <>
       <div className="container-fluid mt-2 IA-details-container">
        <div className="row IA-details">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center user-details-image">
            <div className="rounded-circle overflow-hidden mb-2 border border-secondary" style={{ width: '140px', height: '140px' }}>
              <img src={ props.userData.profileImg
                  ? props.userData.profileImg
                  : logo
              } alt="User Profile" className="w-100 h-100 object-fit-cover" />
            </div>
           
            <div>
            <button className="IA-edit-profile-button">Edit Profile</button></div>
          </div>

          <div className="col-12 col-md-6">
            <h1>{props.userData.name ? (
              props.userData.name
            ) : props.userData.address.eoa ? (
              <>
                {props.userData.address.eoa.slice(0, 5) +
                  "..." +
                  props.userData.address.eoa.slice(
                    props.userData.address.eoa.length - 4,
                    props.userData.address.eoa.length
                  )}
              </>
            ) : (
              "Issuing Authority Name"
            )}</h1>
            <h5>{props.userData.email
              ? props.userData.email
              : "login to get email address"}</h5>
            {/* <h6>{user.id}</h6> */}
            <p>{props.userData.address.eoa
              ? props.userData.address.eoa
              : "login to get wallet address"}</p>
          </div>
        </div>

      </div>

      <div className="container" style={{ marginLeft: '-320px', marginTop:'0px' }}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${displaySection === 'certificates' ? 'active' : ''}`}
              onClick={() => handleSectionToggle('certificates')}
            >
              Issue Certificates
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${displaySection === 'requests' ? 'active' : ''}`}
              onClick={() => handleSectionToggle('requests')}
            >
              User Requests
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${displaySection === 'trackalumni' ? 'active' : ''}`}
              onClick={() => handleSectionToggle('trackalumni')}
            >
              Track Alumni
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${displaySection === 'verifyuser' ? 'active' : ''}`}
              onClick={() => handleSectionToggle('verifyuser')}
            >
              Verify User
            </button>
          </li>
        </ul>
      </div>

      {renderContent()}
      </>
  )
}

export default IssuingAuthorityDashboard