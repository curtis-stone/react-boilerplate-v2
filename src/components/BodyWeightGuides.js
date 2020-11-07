import React from "react";
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";

class BodyWeightGuides extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>
        <div className="grid-container">
          <h1>Body Weight Guides</h1>
          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/bw-arms.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">
                Arms (Body Weight) Workout Package
              </h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    6 Workout Circuit E-Book focused on training the major and
                    minor muscular components of the upper body.
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
              <Link to="/arms-workout-package-bodyweight">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/bw-legs.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">
                Legs (Body Weight) Workout Package
              </h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    6 Workout Circuit E-Book focused on training the musculature
                    of the lower body.
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
              <Link to="/legs-workout-package-bodyweight">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/bw-fullbody.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">
                Full Body (Body Weight) Workout Package
              </h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {" "}
                    6 Workout Circuit E-Book dedicated to training the Full
                    Body.
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
              <Link to="/fullbody-workout-package-bodyweight">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyWeightGuides;
