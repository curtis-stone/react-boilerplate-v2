import React from "react";

import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";

const ExercisesPage = (props) => (
  <div>
    <div>
      <SubHeader />
    </div>

    <div>
      <div className="nav-container">
        <img className="home-logo" src="./images/black-logo.PNG" />{" "}
        <div>
          <Link className="nav-content" to="/upperbody-exercises-directory">
            UPPER BODY
          </Link>
          <Link className="nav-content" to="/lowerbody-exercises-directory">
            LOWER BODY
          </Link>
          <Link className="nav-content" to="/fullbody-exercises-directory">
            FULL BODY
          </Link>
          <Link className="nav-content" to="/ab-core-exercises">
            ABS | CORE
          </Link>
        </div>
        <p> "Select a region" </p>
      </div>
    </div>
  </div>
);

export default ExercisesPage;
