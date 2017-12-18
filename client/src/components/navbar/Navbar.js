import {Link} from "react-router-dom";

import "./navbar.css";
//
import React from "react";

// import "./Header.css";

export default function Navbar(props) {
    return (
      <div>
      <img className="header-img" src={require("../images/header-img.jpg")} alt={"header mountain image in washington, twin lakes"}/>

        <nav className="navbar">

            <Link to="/">Home</Link>
            <Link to="/Edit">Save Photos</Link>
        </nav>
      </div>
    )
}
