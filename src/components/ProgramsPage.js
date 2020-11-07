import React from "react";

import { Link } from "react-router-dom";

import SubHeader from "./SubHeader";


class ProgramsPage extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="nav-container">
          <img className="home-logo" src="./images/black-logo.PNG" />{" "}
          <div>
            <Link className="nav-content" to="/gym-guides">
              OPEN GYM
            </Link>
            <Link className="nav-content" to="/limited-guides">
              LIMITED GYM
            </Link>
            <Link className="nav-content" to="/bodyweight-guides">
              AT HOME
            </Link>
          </div>
          <p> "Select an ideal setting" </p>
        </div>
       
      </div>
    );
  }
}

export default ProgramsPage;
