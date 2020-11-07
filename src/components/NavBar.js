import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => (
  <div>
  <div className="nav-container">
    <img className="home-logo" src="./images/black-logo.PNG" />

    <div>
      <Link className="nav-content" to="/exercise-vault">
        EXERCISES
      </Link>
      <Link className="nav-content" to="nutrition">
        NUTRITION
      </Link>
      <Link className="nav-content" to="/programs">
        PROGRAMS
      </Link>
      <Link className="nav-content" to="/about">
        ABOUT
      </Link>
      <Link className="nav-content" to="/help">
        HELP
      </Link>
    </div>
    <p> "The personal guide to your fitness journey" </p>
    </div>
  </div>
);

export default NavBar;
