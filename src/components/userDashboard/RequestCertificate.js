import React, { useState, useEffect } from "react";
import "../../styles/userDashboard/RequestCertificate.css";
// import { ethers } from "ethers";
import { EAS, SchemaEncoder } from "@ethereum-attestation-service/eas-sdk";
export const EASContractAddress = " 0xAcfE09Fd03f7812F022FBf636700AdEA18Fd2A7A"; // Base-Goerli v0.26
const gitcoinVCSchema =
  "0x748bbe8e3f1485c48d76f98a2424f4c95537c2247873ea0bd44faa5a9cd47833";
function RequestCertificate() {
  const [provider, setProvider] = useState(null);

  const issuingAuthoritiesData = [
    { id: 1, name: "Tech Academy", email: "techacademy181@gmail.com" },
    { id: 2, name: "Edu Tech", email: "edutech045@gmail.com" },
  ];

  const [selectedAuthority, setSelectedAuthority] = useState(
    issuingAuthoritiesData[0]
  );
  const [certificateData, setCertificateData] = useState({
    issuingAuthorityName: "",
    issuingAuthorityEmail: "",
    userId: "johndoe0097",
    userEmail: "doe726785@gmail.com",
    certificateType: "",
    certificateTitle: "",
    requestMessage: "",
  });

  useEffect(() => {
    const { name, email } = selectedAuthority;
    setCertificateData((prevData) => ({ ...prevData, issuingAuthorityName: name, issuingAuthorityEmail: email }));
    // ``console.log("ethers.providers.Web3Provider", ethers.providers);
    // const p = new ethers.providers.Web3Provider(window.ethereum);
    // console.log("P", p);
    // setProvider(p);
    // console.log("Provider", provider);
  },[selectedAuthority]);
  // });

  const handleAuthorityChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const selected = issuingAuthoritiesData.find(
      (authority) => authority.id === selectedId
    );
    setSelectedAuthority(selected);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCertificateData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(certificateData);
  };

  const handleRequestCertificate = async () => {
    console.log("Hello");
    try {
      const eas = new EAS(EASContractAddress);
      eas.connect(provider.getSigner());

      // Initialize SchemaEncoder with the schema string
      const schemaEncoder = new SchemaEncoder("bool isCertified");
      const encodedData = schemaEncoder.encodeData([
        { name: "isCertified", type: "bool", value: true },
      ]);

      const newAttestationUID = await eas.attest({
        data: {
          recipient: "0x5c3f37321f51A315906e2cdCc70DBDe5F4a7b27D",
          // Unix timestamp of when attestation expires. (0 for no expiration)
          expirationTime: 0,
          revocable: true,
          data: encodedData,
        },
        schema: gitcoinVCSchema,
      });

      console.log("New attestation UID:", newAttestationUID);
    } catch (error) {
      console.error("Error while handling certificate request:", error);
    }
  };

  return (
    <div className="request-certificate-form">
      <h3>Request Certificate</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="issuingAuthority">Select Issuing Authority</label>
          <select
            id="issuingAuthority"
            name="issuingAuthority"
            value={selectedAuthority.id}
            onChange={handleAuthorityChange}
          >
            {issuingAuthoritiesData.map((authority) => (
              <option key={authority.id} value={authority.id}>
                {authority.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="issuingAuthorityName">Issuing Authority Name</label>
          <input
            type="text"
            id="issuingAuthorityName"
            name="issuingAuthorityName"
            value={certificateData.issuingAuthorityName}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="issuingAuthorityEmail">Issuing Authority Email</label>
          <input
            type="text"
            id="issuingAuthorityEmail"
            name="issuingAuthorityEmail"
            value={certificateData.issuingAuthorityEmail}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={certificateData.userId}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="userEmail">User Email</label>
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            value={certificateData.userEmail}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="certificateType">Certificate Type</label>
          <select
            id="certificateType"
            name="certificateType"
            value={certificateData.certificateType}
            onChange={handleInputChange}
          >
            <option value="">Select Type</option>
            <option value="academic">Academic</option>
            <option value="work_experience">Work Experience</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="certificateTitle">Certificate Title</label>
          <input
            type="text"
            id="certificateTitle"
            name="certificateTitle"
            value={certificateData.certificateTitle}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="requestMessage">Request Message</label>
          <textarea
            id="requestMessage"
            name="requestMessage"
            value={certificateData.requestMessage}
            onChange={handleInputChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleRequestCertificate}
        >
          Request Certificate
        </button>
      </form>
    </div>
  );
}

export default RequestCertificate;
