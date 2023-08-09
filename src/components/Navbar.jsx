import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-1 ">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img
              src="logo"
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
                <button className="btn btn-dark btng ">LogOut</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
}

export default Navbar;
