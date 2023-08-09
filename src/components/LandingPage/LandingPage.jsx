import React, { useEffect, useState } from "react";
import imageL from "../../assets/Landingimg.jpeg";
import '../../styles/Forms/Landing.css'
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  const handleGetStarted = () => {
    navigate("/getstarted"); // Replace '/upload-research' with the actual route/path of the UploadResearch page
  };

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div>
      <div
        className={`d-flex flex-column vh-100 ${
          showContent ? "show-content" : ""
        }`}
      >
        <nav
          className="navbar navbar-expand-lg navbar-light navbar"
          style={{ maxHeight: "80px" }}
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src=""
                alt="Logo"
                width="50"
                height="50"
                className="d-inline-block align-text-top"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto"></ul>
            </div>
          </div>
        </nav>
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
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start ">
              <div className={` h2  ${showContent ? "fade-in" : ""}`}>
                <br />
                <h2 className=" fs-3">
                  Empowering trust: Decentralized background verification app
                  with blockchain security.
                </h2>
                <br></br>
                <h1 className={`  h1 fw-bold ${showContent ? "fade-in" : ""}`}>
                  TRACECHECK
                </h1>
                <button className="btn btn-dark btng" onClick={handleGetStarted}>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-center text-white pt-6">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
