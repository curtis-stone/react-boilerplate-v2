import React from "react";
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";

class LimitedGymGuides extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>
        <div className="grid-container">
          <h1>Limited Gym Guides</h1>
          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/db-arms.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">Arms (Dumbbell) Workout Package</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    6 Workout E-Book focused on training the muscular components
                    of the upper body, while only using dummbbells.
                  </li>
                  <li>Complete with Ab-Generator Web App.</li>
                </ul>
              </div>
            </div>
            <div className="price">
              <h2>
                <span>
                  <h5>
                    <strike>$24.99</strike>
                  </h5>
                </span>{" "}
                <b>$19.99</b>
              </h2>
              <Link to="/arms-workout-package-dumbbell">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/db-legs.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">Legs (Dumbbell) Workout Package</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {" "}
                    6 Workout E-Book focused on training the lower body
                    musculature, while only using dummbbells.
                  </li>
                  <li>Complete with Ab-Generator Web App.</li>
                </ul>
              </div>
            </div>
            <div className="price">
              <h2>
                <span>
                  <h5>
                    <strike>$24.99</strike>
                  </h5>
                </span>{" "}
                <b>$19.99</b>
              </h2>
              <Link to="/legs-workout-package-dumbbell">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/db-fullbody.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">
                Full Body (Dumbbell) Workout Package
              </h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {" "}
                    6 Workout E-Book focused on training the entire body, while
                    only using dummbbells.
                  </li>
                  <li>Complete with Ab-Generator Web App.</li>
                </ul>
              </div>
            </div>
            <div className="price">
              <h2>
                <span>
                  <h5>
                    <strike>$24.99</strike>
                  </h5>
                </span>{" "}
                <b>$19.99</b>
              </h2>
              <Link to="/fullbody-workout-package-dumbbell">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LimitedGymGuides;
