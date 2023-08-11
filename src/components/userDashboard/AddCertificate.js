import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faBuilding, faUpload, faCalendar, faList } from '@fortawesome/free-solid-svg-icons';
import { Web3Storage } from 'web3.storage';
import { useNavigate } from 'react-router-dom';
import '../../styles/userDashboard/AddCertificate.css'; // Import your stylesheet

const AddCertificate = () => {
  const navigate = useNavigate();
  const [certificateData, setCertificateData] = useState({
    title: '',
    issuingAuthority: '',
    type: '',
    fromDate: '',
    toDate: '',
    privacy: false,
    walletAddress: '',
    certificateFile: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCertificateData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCertificateData((prevData) => ({ ...prevData, certificateFile: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(certificateData);
  };

  const certiUpload = async () => {
    console.log('uploading...');
    const rootCid = await client.put([certificateData.certificateFile], {
      name: 'certificate',
      maxRetries: 3,
    });

    const res = await client.get(rootCid);
    const files = await res.files();
    for (const file of files) {
      console.log(`${file.cid}`);
    }
  };

  const handleIssueCertificate = async (e) => {
    e.preventDefault();
    await certiUpload();
    navigate('/Add-Certificate');
  };

  const client = new Web3Storage({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRDOGI5MDZiNUIyMjJFM2Y4MTUzRTI1OEE3OEFGNzZCQkU2NDdGYzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzg4NjMwMDQ2MzcsIm5hbWUiOiJkZW1vYWJjIn0.2L8rKiCD-eVUwuxz1AFXy6fy5Foh71QZQLZXe5QedcU',
  });

  return (
    <div className="center-form">
      <div className="add-certificate-form">
        <h3>Add Certificate</h3>
        <form onSubmit={handleIssueCertificate}>
          <div className="form-group">
            <label htmlFor="title">
              <FontAwesomeIcon icon={faCertificate} /> Certificate Title
            </label>
            <input type="text" id="title" name="title" value={certificateData.title} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="issuingAuthority">
              <FontAwesomeIcon icon={faBuilding} /> Issuing Authority Name
            </label>
            <input type="text" id="issuingAuthority" name="issuingAuthority" value={certificateData.issuingAuthority} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="type">
              <FontAwesomeIcon icon={faList} /> Certificate Type
            </label>
            <select id="type" name="type" value={certificateData.type} onChange={handleInputChange} required>
              <option value="">Select Type</option>
              <option value="academic">Academic</option>
              <option value="work_experience">Work Experience</option>
            </select>
          </div>
          <div className="form-group">
              <label>Certificate Title</label>
              <input
                type="text"
                className="form-control"
                name="certificateTitle"
                value={certificateData.certificateTitle}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Certification Time (From)</label>
              <input
              type="number"
              id="certificateTimeTo"
              name="certificateTimeTo"
              onChange={handleInputChange}
              min="1900"
              max="2099"
              placeholder="To Year"
              required
            />
            </div>
            <div className="form-group">
              <label>Certification Time (To)</label>
              <input
              type="number"
              id="certificateTimeTo"
              name="certificateTimeTo"
              onChange={handleInputChange}
              min="1900"
              max="2099"
              placeholder="To Year"
              required
            />
            </div>
          <div className="form-group">
            <label htmlFor="certificateFile">
              <FontAwesomeIcon icon={faUpload} /> Upload Certificate
            </label>
            <input type="file" id="certificateFile" name="certificateFile" onChange={handleFileChange} required />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCertificate;
