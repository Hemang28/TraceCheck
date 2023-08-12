import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imageL from "../../assets/Landingimg.jpeg";
import "../../styles/Forms/Landing.css";

const App = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const handleGetStarted = () => {
    navigate("/getstarted");
  };

  // Sponsors data
  const sponsors = [
    {
      title: "Base",
      description: "Base is a secure, low-cost, builder-friendly Ethereum L2 built to bring the next billion users onchain.Base is incubated within Coinbase and plans to progressively decentralize in the years ahead. We believe that decentralization is critical to creating an open, global cryptoeconomy that is accessible to everyone.",
    },
    {
      title: "Safe",
      description: "Safe brings digital ownership of accounts to everyone by building universal and open contract standards for the custody of digital assets, data, and identity.Safe is at the forefront of modular Smart Account infrastructure, paving the way for developers to create a diverse range of applications and wallets.",
    },
    {
      title: "EAS",
      description: "EAS is a public good, available for anyone to use and build upon. It aims to create a common layer for attestations that can be used and integrated by a variety of different applications and protocols. This will enable the creation of a universal layer for attestations used to verify the authenticity and integrity.",
    },
  ];

  return (
    <div>
      <div
        className={`d-flex flex-column vh-100 ${
          showContent ? "show-content" : ""
        }`}
      >
        <div className="container mt-5 flex-grow-1">
          <div className="row h-100">
            <div className="col-md-6 d-flex align-items-center">
              <div
                className={`mx-auto image-container ${
                  showContent ? "slide-in-left" : ""
                }`}
              >
                <img src={imageL} alt="Image" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
              <div className={`h2 ${showContent ? "fade-in" : ""}`}>
                <br />
                <h1>TraceCheck</h1>
                <h5 style={{ textAlign: "justify" }}>
                  Elevating Trust, One Verified Credential at a Time
                  Blockchain Security for Transparent, Reliable Background Checks
                  Empower Your Verification Process with TRACECHECK's Decentralized Solutions
                </h5>
                <br />
                <button className="btn btn-dark btng" onClick={handleGetStarted}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
        {/* Title for sponsors */}
        <div className="container mt-5 text-center">
          <h2 className="sponsor-title" style={{ color: "#ff592c" }}>Sponsors Used</h2>
        </div>
        {/* Sponsors */}
        <div className="container mt-3">
          <div className="row">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="sponsor" style={{ backgroundColor: "#f5f5f5" }}>
                  <h3 className="sponsor-title" style={{ color: "#ff592c" }}>{sponsor.title}</h3>
                  <p className="sponsor-description" style={{ color: "#666" }}>{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


