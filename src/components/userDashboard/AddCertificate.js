import React,{useState} from 'react'
import '../../styles/userDashboard/AddCertificate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faBuilding, faLock, faUpload, faCalendar, faList } from '@fortawesome/free-solid-svg-icons';

function AddCertificate() {
    const [certificateData, setCertificateData] = useState({
        // userId: userId,
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
    
      const handleRadioChange = (e) => {
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

  return (
    <div className="add-certificate-form">
      <h3>Add Certificate</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">
          <FontAwesomeIcon icon={faCertificate} />Certificate Title
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
          <FontAwesomeIcon icon={faList} />Certificate Type
          </label>
          <select id="type" name="type" value={certificateData.type} onChange={handleInputChange} required>
            <option value="">Select Type</option>
            <option value="academic">Academic</option>
            <option value="work_experience">Work Experience</option>
          </select>
        </div>
        <div className="form-group">
            <label htmlFor="certificateTimeFrom">
            <FontAwesomeIcon icon={faCalendar} />Certificate Time (From)</label>
            <input
              type="number"
              id="certificateTimeFrom"
              name="certificateTimeFrom"
              value={certificateData.certificateTimeFrom}
              onChange={handleInputChange}
              min="1900"
              max="2099"
              placeholder="From Year"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="certificateTimeTo">
            <FontAwesomeIcon icon={faCalendar} />Certificate Time (To)</label>
            <input
              type="number"
              id="certificateTimeTo"
              name="certificateTimeTo"
              value={certificateData.certificateTimeTo}
              onChange={handleInputChange}
              min="1900"
              max="2099"
              placeholder="To Year"
              required
            />
          </div>

        <div className="form-group">
          <label>
          <FontAwesomeIcon icon={faLock} />Certificate Privacy Setting:</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="publicPrivacy"
              name="privacy"
              value="public"
              checked={certificateData.privacy === 'public'}
              onChange={handleRadioChange}
            />
            <label htmlFor="publicPrivacy" className="privacy-label">
              Public
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="privatePrivacy"
              name="privacy"
              value="private"
              checked={certificateData.privacy === 'private'}
              onChange={handleRadioChange}
            />
            <label htmlFor="privatePrivacy" className="privacy-label">
              Private
            </label>
          </div>
        </div>

        {certificateData.privacy === 'private' && (
          <div className="form-group">
            <label htmlFor="walletAddress">Wallet Address (For Access)</label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              value={certificateData.walletAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="certificateFile">
          <FontAwesomeIcon icon={faUpload} />Upload Certificate</label>
          <input type="file" id="certificateFile" name="certificateFile" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Certificate</button>
      </form>
    </div>
   
  )
}

export default AddCertificate