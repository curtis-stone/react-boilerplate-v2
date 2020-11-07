import React from "react";
import SubHeader from "../SubHeader";
import StrengthProgramPaypal from "./StrengthProgramPaypal";

class StrengthProgram extends React.Component {
  state = {
    showPaypal: false,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <StrengthProgramPaypal />;
    } else {
      return (
        <div>
          <SubHeader />
          <div className="info-grid-container">
            <div className="info-container">
              <div>
                <img className="info-cover" src="./images/strength.PNG" />{" "}
              </div>

              <div className="info-description">
                <div className="info-details">
                  <h1 className="info-title">6Percent Strength Program</h1>
                  <h3>
                    {" "}
                    The Signature 12 Week E-Book dedicated to maximizing gains
                    in both Muscle Mass and Strength. Complete with Ab-Generator
                    Web App, Nutrition Guide, Tips, Meal Planner, and Food List.
                    <br/>
                    <i style={{ color: "grey" }}>
                      {" "}
                      **E-Book Downloads directly to your device after purchase.
                    </i>
                    <img className="icon" src="./images/download-icon.PNG" />
                  </h3>

                  <ul>
                    <li>
                      <strong>Week 1-4:</strong> The first month of this program
                      is structured towards learning your fitness level and
                      becoming acclimated to the program's training protocol.
                      Key points in this 4 week mesocycle include: Max Testing
                      in Bench Press and Squat, Learning how to lift based on
                      testing precentages, and applying foundational strength
                      workouts to build for a succesful program.
                    </li>
                    <li>
                      <strong>Week 5-8:</strong> The second month of this
                      program incorporates Bench and Squat variants to further
                      develope synergist components that are inadequately
                      challenged during the traditional methods. This second 4
                      week mesocycle is also increased in intensity with the
                      introduction of Super Sets.
                    </li>
                    <li>
                      <strong>Week 9-12:</strong> The last 4 week mesocycle
                      continues with heavy compound movements; while maxing
                      workout intensity with back to back compound lifts, Super
                      Sets of same muscle groups, and main lift variants that
                      test anaerobic capacities.
                    </li>
                    <li>
                      Workouts consist of both traditional and unique push and
                      pull exercises that emphasize progressive overload. <br />{" "}
                      <i>
                        Ex. Examples: Bench Press, Squats, Deadlifts, and
                        Variants
                      </i>
                    </li>

                    <li>
                      {" "}
                      Perfect for gym users, as it offers proven, guaranteed
                      results.
                    </li>
                  </ul>
                  <div>
                    <i>
                      Resistance training is an exercise method where workouts
                      are set to resist movement. This causes one to push, or
                      pull, with more force than if they were moving freely. The
                      health and fitness benefits of resistance training include
                      reducing body fat, increase in lean muscle mass,
                      development of stronger bones, weight management, enhanced
                      quality of life, managment of chronic conditions, sharper
                      brain activity, and the ability to burn calories more
                      efficiently.{" "}
                    </i>
                  </div>
                  <div className="pay-button">
                    <h2>
                      <span>
                        <h5>
                          <strike>$49.99</strike>
                        </h5>
                      </span>{" "}
                      <b>$39.99</b>
                    </h2>
                    <button className="button" onClick={this.showPaypalButtons}>
                      {" "}
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StrengthProgram;
