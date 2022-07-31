import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <div className="logo" >
      <h1 className="theicon">&#128507;</h1>
      <div className="company">theCON</div>
        </div>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-2 active">
              <a className="nav-link " href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mx-2 active">
              <a className="nav-link " href="#preview">
                Preview <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item mx-2 active">
              <a className="nav-link " href="#aboutus">
                About
              </a>
            </li>
          </ul>
 
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "yourWebName",
};
