import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/Getimg.jpg";
import image2 from "../../assets/Getimage2.png";
import "../../styles/Forms/Getstarted.css";
import { useNavigate } from "react-router-dom";

const GetStarted = (props) => {
  console.log("Get Started Page--------",props.userData);
  const navigate = useNavigate();

  const handleUserGetStarted = () => {
    if (props.userData && props.userData.address) {
      navigate("/User-Dashboard");
    } else {
      alert("Kindly log in to access the platform")
    } 
  };

  const handleIAGetStarted = () => {
    if (props.userData && props.userData.address) {
      navigate("/IA-Dashboard"); 
    } else {
      alert("Kindly log in to access the platform")
    } 
  };
  return (
    <div>
      <div className="container ">
        <div className="row mb-5 py-4">
          <div className="col-md-6">
            <div className="card shadow p-3 mb-5 bg-white rounded ">
              <img
                src={image}
                alt="Image"
                className="card-img-top"
                style={{ maxWidth: "71%" }}
              />
              <div className="card-body">
                <h1 className="h1 fs-3">Issuing authority</h1>
                <p className="fs-5 h1" style={{textAlign:'justify'}}>Welcome to TraceCheck's Issuing Authority platform. Your role is pivotal in establishing a more transparent and secure educational and professional landscape.</p>
                <button
                  className="btn btn-dark btng"
                  style={{ maxWidth: "200px", marginTop:"10px" }}
                  onClick={handleIAGetStarted}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow p-3 mb-5 bg-white rounded ">
              <img
                src={image2}
                alt="Image"
                className="card-img-top"
                style={{ maxWidth: "100%" }} 
              />
              <div className="card-body">
                <h1 className="h1 fs-3">Individual User</h1>
                <p className="fs-5 h1">Welcome to TraceCheck, where your achievements are more than just pieces of paper – they're the stepping stones to your future</p>
                <button
                  className="btn btn-dark btng"
                  style={{ maxWidth: "200px", marginTop:"10px" }}
                  onClick={handleUserGetStarted}
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

export default GetStarted;
