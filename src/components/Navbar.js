import React from 'react'
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import logo from '../assets/logo.png'

function Navbar(props) {
  // const [isExpanded, setIsExpanded] = useState(false);

  console.log("Navbar Page Log------",props.userData);

  const handleLogout = async () => {
    await props.logout();
    window.location.replace('/getstarted');
  };
  // function handleClick() {
  //   setIsExpanded(!isExpanded);
  // }

  return (
    <>
      <header className="header" style={{marginBottom:"30px"}}>
        <nav className="navbar">
          <span className="logo animate__animated animate__fadeInDown animate__delay-2s">
          <Link to="/">
            <img src={logo} height="90px" width="220px" alt="logoImg" />
          </Link>
          </span>
          {props.userData.address ? (
            <>  
             {/* <Link
                style={{ textDecoration: "none" }}
                to="/User-Dashboard"
                className="animate__animated animate__fadeInDown"
              > */}
                <button className="logged-in">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <g>
                      <rect fill="none" height="24" width="24" />
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
                    </g>
                  </svg>
                  Account
                </button>
                {/* </Link> */}

              {/* <Link to="/"> */}
              <button
                className="login-button animate__animated animate__fadeInDown"
                id="logout"
                onClick={handleLogout}
              >
                Logout
              </button>
              {/* </Link> */}
            </>
          ) : (
            <>
            <button
              className="login-button animate__animated animate__fadeInDown animate__delay-2s"
              onClick={props.login}
            >
              Login
            </button>
            </>
          )
          }
        </nav>
      </header>
    </>
  );
}


export default Navbar