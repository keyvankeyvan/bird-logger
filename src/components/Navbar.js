import React from "react";
import { Link, usehistory } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/">Home </Link>
      <Link to="/About">About </Link>
      <Link to="/Add">Add a spotting! </Link>
    </nav>
  );
}

export default Navbar;
