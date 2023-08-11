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
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start ">
              <div className={` h2  ${showContent ? "fade-in" : ""}`}>
                <br />
                <h2 className=" fs-3 ">
                  Empowering trust: Decentralized background verification app
                  with blockchain security.
                </h2>
                <br></br>
                <h1 className={`  h1 fw-bold ${showContent ? "fade-in" : ""}`}>
                  TRACECHECK
                </h1>
                <button
                  className="btn btn-dark btng"
                  onClick={handleGetStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
