import React from 'react'
import '../../styles/issuingAuthorityDashboard/IACertificateModal.css'
import { EAS } from "@ethereum-attestation-service/eas-sdk";
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";


function IACertificateModal({ certificate, onClose }) {
   const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

// Initialize the sdk with the address of the EAS Schema contract address
const eas = new EAS(EASContractAddress);

// Gets a default provider (in production use something else like infura/alchemy)
const provider = ethers.providers.getDefaultProvider(
  "sepolia"
);

// Connects an ethers style provider/signingProvider to perform read/write functions.
// MUST be a signer to do write operations!
eas.connect(provider);




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