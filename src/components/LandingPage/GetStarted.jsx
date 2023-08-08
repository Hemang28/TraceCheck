import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import getstarted from "/Users/saurabhjha1402/Desktop/TraceCheck/src/assets/getstarted.png";

const GetStarted = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src=" image"
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
                <button className="btn btn-outline-primary me-2">Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5 vh-100">
        <div className="row h-200">
          <div className="col-md-6">
            <div className="mx-auto" style={{ maxWidth: "800px" }}>
              <img
                src="/Users/saurabhjha1402/Desktop/TraceCheck/src/assets/getstarted.png"
                alt="Image"
                className=" img-fluid w-100 "
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="fs-3">Name of the issuing authority </h1>
            <p className="fs-5">Issuing authority details</p>
            <button className="btn btn-primary" style={{ maxWidth: "200px" }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-center text-white py-3">
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
