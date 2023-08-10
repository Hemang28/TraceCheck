import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/Getimg.jpg";
import image2 from "../../assets/Getimage2.png";
import "../../styles/Forms/Getstarted.css";

const GetStarted = () => {
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
                <p className="fs-5 h1">Issuing authority details</p>
                <button
                  className="btn btn-dark btng"
                  style={{ maxWidth: "200px" }}
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
                style={{ maxWidth: "100%" }} // Adjust the image width
              />
              <div className="card-body">
                <h1 className="h1 fs-3">Individual User</h1>
                <p className="fs-5 h1">Individual User details</p>
                <button
                  className="btn btn-dark btng"
                  style={{ maxWidth: "200px" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-secondary text-center text-white">
        <div className="container">
          <p className="mb-5">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
