  import React from 'react'
  import { useState } from 'react';
  import UserCertificates from '../components/userDashboard/UserCertificates';
  import UserRequests from '../components/userDashboard/UserRequests';
  import '../styles/userDashboard/UserDashboard.css'
  import logo from '../assets/dummy-user.png'

  function UserDashboard() {
    const user = {
      id: 'abhishek000097',
      name: 'Abhishek Rajput',
      email: 'abhishek@gmail.com',
      walletaddress: '0x4655B0c408Ee7481597Afc26B6730e30593c368E',
      profilePhoto: logo,
    };

    const [displaySection, setDisplaySection] = useState('certificates');

    const handleSectionToggle = (section) => {
      setDisplaySection(section);
    };

    const renderContent = () => {
      if (displaySection === 'certificates') {
        return <UserCertificates />; 
      } else if (displaySection === 'requests') {
        return <UserRequests />; 
      }
    };

    return (
      <>
      <div className="container-fluid mt-5 user-details-container">
      <div className="row user-details">
      <div className="col-12 col-md-6">
            <h1>{user.name}</h1>
            <h5>{user.email}</h5>
            <p>{user.walletaddress}</p>
      </div>

      <div className="col-12 col-md-6 d-flex flex-column align-items-center user-details-image">
            <div className="rounded-circle overflow-hidden mb-2 border border-secondary" style={{ width: '140px', height: '140px' }}>
              <img src={user.profilePhoto} alt="User Profile" className="w-100 h-100 object-fit-cover" />
            </div>
            <p>{user.id}</p>
      </div>
      </div>
      </div>

      <div className="container" style={{marginLeft:'0px'}}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${displaySection === 'certificates' ? 'active' : ''}`}
              onClick={() => handleSectionToggle('certificates')}
            >
              My Certificates
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${displaySection === 'requests' ? 'active' : ''}`}
              onClick={() => handleSectionToggle('requests')}
            >
              Requests
            </button>
          </li>
        </ul>
      </div>

      {renderContent()}
      </>
    )
  }

  export default UserDashboard