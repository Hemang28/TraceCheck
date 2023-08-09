import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "/Users/saurabhjha1402/Desktop/TraceCheck/src/assets/Getimg.jpg";

const GetStarted = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-1 ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="logo" // Corrected the image source
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="btn btn-outline-dark me-2">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark btng ">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
            <h1 className=" h1 fs-3">Name of the issuing authority</h1>
            <p className="fs-5  h1">Issuing authority details</p>
            <br></br>
            <br></br>
            <button className="btn btn-dark btng" style={{ maxWidth: "200px" }}>
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
