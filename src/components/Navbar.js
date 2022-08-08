import React from "react";
import { Link, usehistory } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div>
        <Link className="home" to="/">
          Bird Lister Home
        </Link>
      </div>
      <div>
        <Link to="/About">About</Link>
        <Link to="/Add">Add a spotting!</Link>
      </div>
    </nav>
  );
}

export default Navbar;
