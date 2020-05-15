import React from "react";
import "./Navbar.css";
import { Link, withRouter } from "react-router-dom";
import { ROUTE_PATHS } from "../../common/appConstants";

const Navbar = ({location}) => {
  return (
    <nav className="Navbar">
      {location.pathname !== ROUTE_PATHS.HOME && (
        <Link to="/" className="Navbar-link">
          Home
        </Link>
      )}
      <Link to="/" className="Navbar-link fake-link">
        Home
      </Link>
    </nav>
  );
};

export default withRouter(Navbar);
