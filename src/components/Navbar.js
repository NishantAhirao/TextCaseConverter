import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <div className="logo" >
      <img src="https://cdn.pixabay.com/photo/2016/03/21/23/25/link-1271843_960_720.png" alt=""/>
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
