import React from 'react'
import '../../styles/issuingAuthorityDashboard/IAUserRequest.css'
import userImage from '../../assets/dummy-user.png'

function IAUserRequest() {
  const userRequests = [
    {
      id: 'request001',
      certificateTitle: 'SSC Certificate',
      userName: 'John Doe',
      userId: 'john001',
      requestDate: '2023-08-20',
      requestType: 'Issue',
    },
    {
      id: 'request002',
      certificateTitle: 'HSC Certificate',
      userName: 'Jane Smith',
      userId: 'jane002',
      requestDate: '2023-08-19',
      requestType: 'Verify',
    },
  ];
  return (
    <div className="ia-user-requests-container">
      <div className="ia-user-requests">
      <div className="ia-user-request ia-user-request-heading">
          <div className="ia-request-details">
            <div className="ia-field ia-serial-number">Serial No.</div>
            <div className="ia-field ia-user-profile-photo">User Photo</div>
            <div className="ia-field ia-certificate-title">Certificate Title</div>
            <div className="ia-field ia-user-info-name">User Name</div>
            <div className="ia-field ia-user-info-id">User ID</div>
            <div className="ia-field ia-request-date">Request Date</div>
            <div className="ia-field ia-request-type">Request Type</div>
          </div>
          <div >Actions</div>
        </div>
        {userRequests.map((request, index) => (
           <div key={request.id} className="ia-user-request">
           <div className="ia-request-details">
             <div className="ia-field ia-serial-number">{index + 1}</div>
             <div className="ia-field ia-user-profile-photo">
               <img src={userImage} alt="User Profile" />
             </div>
             <div className="ia-field ia-certificate-title">{request.certificateTitle}</div>
             <div className="ia-field ia-user-info-name">{request.userName}</div>
             <div className="ia-field ia-user-info-id">{request.userId}</div>
             <div className="ia-field ia-request-date">{request.requestDate}</div>
             <div className="ia-field ia-request-type">{request.requestType}</div>
           </div>
           <div className="ia-view-button">View</div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default IAUserRequest