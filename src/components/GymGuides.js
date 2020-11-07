import React from "react";
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";

class GymGuides extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>
        <div className="grid-container">
          <h1>Gym Programs and Guides</h1>
          <div className="program-container">
            <div>
              <img className="program-cover" src="./images/strength.PNG" />{" "}
            </div>

            <div className="program-description">
              <h1 className="program-title">Strength Program</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    The Signature 12 Week E-Book dedicated to maximizing gains
                    in both Muscle Mass and Strength.
                  </li>
                  <li>
                    Incorporates three 4-week Strength Mesocycles for optimized
                    performance improvements
                  </li>
                  <li>Uses equipment found in gyms nationwide</li>
                  <li>
                    Complete with Ab-Generator Web App, Nutrition Guide, Tips,
                    Meal Planner, and Food List
                  </li>
                </ul>
              </div>
            </div>
            <div className="price">
              <h2>
                <span>
                  <h5>
                    <strike>$49.99</strike>
                  </h5>
                </span>{" "}
                <b>$39.99</b>
              </h2>
              <Link to="/strength-program">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/hypertrophy.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">Toning Program</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    The Signature 12 Week E-Book dedicated to maximizing gains
                    in both Muscle Tone and Mass.
                  </li>
                  <li>
                    Incorporates three 4-week Hypertrophy Mesocycles for
                    optimized performance improvements
                  </li>
                  <li>Uses equipment found in gyms nationwide</li>
                  <li>
                    Complete with Ab-Generator Web App, Nutrition Guide, Tips,
                    Meal Planner, and Food List
                  </li>
                </ul>
              </div>
            </div>
            <div className="price">
              <h2>
                <span>
                  <h5>
                    <strike>$49.99</strike>
                  </h5>
                </span>{" "}
                <b>$39.99</b>
              </h2>
              <Link to="/hypertrophy-program">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/g-arms.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">Arms Workout Package</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {" "}
                    6 Workout E-Book dedicated to training the muscular
                    components of the upper body.
                  </li>
                  <li>Uses equipment found in gyms nationwide</li>
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
              <Link to="/arms-workout-package-gym">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/g-legs.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">Legs Workout Package</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {" "}
                    6 Workout E-Book dedicated to training the lower body
                    musculature.
                  </li>
                  <li>Uses equipment found in gyms nationwide</li>
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
              <Link to="/legs-workout-package-gym">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>

          <div className="program-container">
            <div className="program-content">
              <img className="program-cover" src="./images/g-fullbody.PNG" />{" "}
            </div>
            <div className="program-description">
              <h1 className="program-title">Full Body Workout Package</h1>
              <div className="program-details">
                <h3>Details:</h3>
                <ul>
                  <li>
                    {" "}
                    6 Workout E-Book dedicated to training the body as a whole.
                    Complete with Ab-Generator Web App.
                  </li>
                  <li>Uses equipment found in gyms nationwide</li>
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
              <Link to="/fullbody-workout-package-gym">
                <h4 className="info-button">More Info</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GymGuides;
