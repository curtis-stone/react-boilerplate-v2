import React from "react";

import { NavLink } from "react-router-dom";

class SubHeader extends React.Component {
  render() {
    return (
      <div className="sub-nav-link-container">
        <NavLink
          className="sub-nav-link"
          activeStyle={{ color: "red" }}
          to="/exercise-vault"
        >
          Exercises
        </NavLink>
        <NavLink
          className="sub-nav-link"
          activeStyle={{ color: "red" }}
          to="/nutrition"
        >
          Nutrition
        </NavLink>
        <NavLink
          className="sub-nav-link"
          activeStyle={{ color: "red" }}
          to="/programs"
        >
          Programs
        </NavLink>
        <NavLink
          className="sub-nav-link"
          activeStyle={{ color: "red" }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="sub-nav-link"
          activeStyle={{ color: "red" }}
          to="/help"
        >
          Help
        </NavLink>
      </div>
    );
  }
}

export default SubHeader;
