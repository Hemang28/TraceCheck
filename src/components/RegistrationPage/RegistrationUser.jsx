import React, { useState } from "react";
import '../../styles/Forms/RegistrationUser.css'

function RegistrationUser() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignInClick = () => {
    setIsLoginActive(true);
    setIsSignUpActive(true);
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(false);
    setIsLoginActive(false);
  };

  return (
    <div classname="bgmain">
      <section>
        <div className={`page ${isLoginActive ? "active" : ""}`}>
          <div className={`welcome ${isLoginActive ? "active" : ""}`}>
            <h2>Welcome Back!</h2>
            <p>Hello</p>
            {isLoginActive ? null : (
              <button className="sign_in" onClick={handleSignInClick}>
                Sign In
              </button>
            )}
            <button
              className={`btn ${isSignUpActive ? "active" : ""}`}
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
          <div className={`sign_up ${isSignUpActive ? "active" : ""}`}>
            <form method="POST" action="signup_user.php">
              <h2>Sign Up your Account</h2>
              <input type="text" name="name" placeholder="Full Name" required />
              <br />
              <input type="email" name="email" placeholder="Email" required />
              <br />
              <input
                type="file" /* Add the input for profile photo */
                name="profilePhoto"
                accept="image/*"
                placeholder="Profile Photo"
                required
              />
              <br />
              <input
                type="submit"
                name="sign_up"
                value="Sign Up"
                className="up"
              />
            </form>
          </div>
          <div className={`login ${isLoginActive ? "active" : ""}`}>
            <form method="POST" action="login_user.php">
              <h2>Login your Account</h2>
              <input type="email" name="email" placeholder="Email" required />
              <br />
              <input
                type="submit"
                name="sign_in"
                value="Sign In"
                className="in"
              />
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-secondary text-center text-white py-8">
        <div className="container">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default RegistrationUser;
