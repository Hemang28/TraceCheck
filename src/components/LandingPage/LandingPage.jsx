import React from "react";
import imageL from "/Users/saurabhjha1402/Desktop/TraceCheck/src/assets/Landing.jpeg";
import "/Users/saurabhjha1402/Desktop/TraceCheck/src/styles/Forms/Landing.css";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-light navbar">
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
            <div className="mx-auto" style={{ maxWidth: "800px" }}>
              <img src={imageL} alt="Image" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1 className="fs-8 h1">TraceCheck</h1>

            <div className="col-md-6">
              <br />
              <h2 className="fs-3">Platform flow or information</h2>
              <br />
              <h3> additional details</h3>
              <button className="btn btn-dark btng ">Get Started</button>
            </div>
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

export default App;
