import React from "react";

import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";


class NutrtitionPage extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="nav-container">
          <img className="home-logo" src="./images/black-logo.PNG" />{" "}
          <div>
            <Link className="nav-content" to="/weight-loss">
              WEIGHT LOSS
            </Link>
            <Link className="nav-content" to="/weight-gain">
              WEIGHT GAIN
            </Link>
            <Link className="nav-content" to="/weight-maintenance">
              MAINTENANCE
            </Link>
            <Link className="nav-content" to="/supplements">
              SUPPLEMENTS
            </Link>
            <Link className="nav-content" to="/vitamins">
              VITAMINS
            </Link>
          </div>
          <p> "Select a focus" </p>
        </div>
        
      </div>
    );
  }
}

export default NutrtitionPage;
