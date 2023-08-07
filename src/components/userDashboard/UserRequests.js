import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/userDashboard/UserRequests.css'

function UserRequests() {
  const navigate = useNavigate();
  const [filterType, setFilterType] = useState('');
  const requestsData = [
    {
      id: 1,
      title: 'Request 1',
      issuingAuthority: 'Authority 1',
      issuingAuthorityEmail: 'authority1@gmail.com',
      requestDate: '2023-08-01',
      requestType: 'Type 1',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Request 2',
      issuingAuthority: 'Authority 2',
      issuingAuthorityEmail: 'authority2@gmail.com',
      requestDate: '2023-08-02',
      requestType: 'Type 2',
      status: 'Accepted',
    },
  ];

  const handleRequestCertificateClick = () => {
    navigate("/Request-Certificate");
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  const filteredRequests = filterType
    ? requestsData.filter((request) => request.requestType === filterType)
    : requestsData;
  
  return (
    <div className="user-requests">
    <div className="requests-main-header">
        <div className="request-type-filter">
          <select id="filterType" value={filterType} onChange={handleFilterChange}>
            <option value="">Request Type</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          
          </select>
          <button className="bg-primary request-certificate-button" onClick={handleRequestCertificateClick}>+ Request Certificate</button>
        </div>
      </div>

    <div className="requests-table">
      <div className="requests-header">
        <div className="header-item">Sr. Number</div>
        <div className="header-item">Certificate Title</div>
        <div className="header-item">Issuing Authority Name</div>
        <div className="header-item">Issuing Authority Email</div>
        <div className="header-item">Request Date</div>
        <div className="header-item">Request Type</div>
        <div className="header-item">Status</div>
      </div>
      {filteredRequests.map((request, index) => (
          <div key={request.id} className="request-row">
            <div className="row-item">{index + 1}</div>
            <div className="row-item">{request.title}</div>
            <div className="row-item">{request.issuingAuthority}</div>
            <div className="row-item">{request.issuingAuthorityEmail}</div>
            <div className="row-item">{request.requestDate}</div>
            <div className="row-item">{request.requestType}</div>
            <div className="row-item">{request.status}</div>
          </div>
        ))}
    </div>
  </div>
  )
}

export default UserRequests