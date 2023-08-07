import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/issuingAuthorityDashboard/IssueCertificate.css';
import certificateImage from '../../assets/certificate.jpg';
import certificateImage2 from '../../assets/certificate2.jpg';
import certificateImage3 from '../../assets/certificate3.jpg';

function IssueCertificate() {
  const navigate = useNavigate();
  const certificates = [
    {
      id: 1,
      title: 'SSC Certificate',
      image: certificateImage,
      issueDate: '2023-08-15',
      userId: 'abhishek000097',
    },
    {
      id: 2,
      title: 'HSC Certificate',
      image: certificateImage2,
      issueDate: '2023-08-15',
      userId: 'abhishek000097',
    },
    {
      id: 3,
      title: 'Graduation Certificate',
      image: certificateImage3,
      issueDate: '2023-08-15',
      userId: 'abhishek000097',
    },
  ];

  const handleIssueCertificateClick = () => {
    navigate('/Issue-Certificate-Form');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-end mb-4">
          <button className="btn btn-primary" onClick={handleIssueCertificateClick}>
            + Issue Certificate
          </button>
        </div>

        {certificates.map((certificate) => (
          <div key={certificate.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card ic-card-container">
              <img
                src={certificate.image}
                className="card-img-top ic-card-image"
                alt="Certificate"
              />
              <div className="card-body">
                <h5 className="card-title">{certificate.title}</h5>
                <p className="card-text">User: {certificate.userId}</p>
                <p className="card-text">Issuing Date: {certificate.issueDate}</p>
                <button className="btn btn-primary btn-block">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IssueCertificate;
