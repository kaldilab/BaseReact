import React from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/list">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apply">Apply</Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </React.Fragment>
  );
};

export default Navi;
