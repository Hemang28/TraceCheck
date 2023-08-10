import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/Getimg.jpg";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleIAGetStated = () => {
    navigate("/IA-Dashboard");
  };

  const handleUserGetStarted = () => {
    navigate("/User-Dashboard");
  };
  return (
    <div>
      <div className="container mt-5 vh-100">
        <div className="row h-100">
          {" "}
          {/* Changed h-200 to h-100 */}
          <div className="col-md-6">
            <div className="mx-auto" style={{ maxWidth: "800px" }}>
              <img
                src={image} // Corrected the image source
                alt="Image"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className=" h1 fs-3"> Issuing authority</h1>
            <p className="fs-5  h1">Issuing authority details</p>
            <br></br>
            <br></br>
            <button className="btn btn-dark btng" style={{ maxWidth: "200px" }} onClick={handleIAGetStated}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5 vh-100  ">
        <div className="row h-100">
          {" "}
          <div className="col-md-6 ">
            <div className="mx-auto" style={{ maxWidth: "800px" }}>
              <img
                src={image} // Corrected the image source
                alt="Image"
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center  ">
            <h1 className=" h1 fs-3"> Individual User</h1>
            <p className="fs-5  h1"> Individual User details</p>
            <br></br>
            <br></br>
            <button className="btn btn-dark btng" style={{ maxWidth: "200px" }} onClick={handleUserGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-center text-white py-8">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
