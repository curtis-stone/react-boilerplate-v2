import React from "react";

import { Link } from "react-router-dom";
import SubHeader from "../SubHeader";

const ExercisesPage = (props) => (
  <div>
    <div>
      <SubHeader />
    </div>

    <div>
      <div className="nav-container">
        <img className="home-logo" src="./images/black-logo.PNG" />{" "}
        <div>
          <h1 className="nav-title"> LOWER BODY DIRECTORY:</h1>
          <Link className="nav-content" to="/lowerbody-exercises-gym">
            GYM EQUIPMENT
          </Link>
          <Link className="nav-content" to="lowerbody-exercises-dumbbell">
            DUMBBELLS
          </Link>
          <Link className="nav-content" to="/lowerbody-exercises-body-weight">
            BODY WEIGHT
          </Link>
        </div>
        <p> "Select a setting" </p>
      </div>
    </div>
  </div>
);

export default ExercisesPage;
