import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/react-router-example/" className="brand-logo center">
          ReactRouterExample
        </Link>
        <ul className="right">
          <li>
            <Link to="/react-router-example/">Home</Link>
          </li>
          <li>
            <Link to="/react-router-example/about">About</Link>
          </li>
          <li>
            <Link to="/react-router-example/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
