import React from "react";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100">
      <nav className="navbar navbar-expand-lg navbar-light navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="data:image/jpeg;base64,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"
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
            <div className="mx-auto" style={{ maxWidth: "200px" }}>
              <img
                src="data:image/jpeg;base64,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"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
            <h1 className="fs-8">TraceCheck</h1>
            <p className="fs-3">Welcome to Our Landing Page</p>
            <button className="btn btn-primary ">Get Started</button>
            <div className="col-md-6">
              <br />
              <h2 className="fs-3">Platform flow or information</h2>
              <br />
              <h3>any additional details</h3>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-secondary text-center text-white py-1">
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
