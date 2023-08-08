import React from 'react'
import '../../styles/issuingAuthorityDashboard/IACertificateModal.css'

function IACertificateModal({ certificate, onClose }) {
  return (
    <div className="modal-backdrop">
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="iacm-close-btn" onClick={onClose}>
          &times;
        </span>
        <img src={certificate.image} alt="Certificate" className="certificate-image" />
        <div className="iacm-certificate-details">
          <h3>{certificate.title}</h3>
          <p>
            <strong>User Name:</strong>{' '}
            <span className="iacm-field-value">{certificate.userName}</span>
          </p>
          <p>
            <strong>User ID:</strong>{' '}
            <span className="iacm-field-value">{certificate.userId}</span>
          </p>
          <p>
            <strong>Certificate Type:</strong>{' '}
            <span className="iacm-field-value">{certificate.type}</span>
          </p>
          <p>
            <strong>Certificate Time:</strong>{' '}
            <span className="iacm-field-value">{certificate.certificateTime}</span>
          </p>
          <p>
            <strong>Issue Date:</strong>{' '}
            <span className="iacm-field-value">{certificate.issueDate}</span>
          </p>
    
          {/* <div className="iacm-modal-buttons">
            <button className="iacm-btn iacm-btn-primary">Request Verification</button>
            <button className="iacm-btn iacm-btn-primary">Share</button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default IACertificateModal