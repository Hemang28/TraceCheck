import React from 'react'
import '../../styles/issuingAuthorityDashboard/TrackAlumni.css'
import logo from '../../assets/dummy-user.png'

function TrackAlumni() {
  const initialAlumniData = [
    {
      id: 'alumni001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePhoto: logo,
    },
    {
      id: 'alumni002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      profilePhoto: logo,
    },
    {
      id: 'alumni001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePhoto: logo,
    },
    {
      id: 'alumni001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePhoto: logo,
    },
    {
      id: 'alumni001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePhoto: logo,
    },
  ];
  return (
    <div>
    <div className="alumni-list">
      {initialAlumniData.map((alumni) => (
        <div key={alumni.id} className="alumni-card">
          <div className="alumni-profile-photo">
            <img src={alumni.profilePhoto} alt="User Profile" />
          </div>
          <h3>{alumni.name}</h3>
          <p>{alumni.email}</p>
          <p>User ID: {alumni.id}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TrackAlumni