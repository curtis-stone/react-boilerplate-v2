import React from "react";
import SubHeader from "../SubHeader";
import LegsBodyWeightPaypalButton from "./LegsBodyWeightPaypalButton";

class LegsBodyWeight extends React.Component {
  state = {
    showPaypal: false,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <LegsBodyWeightPaypalButton />;
    } else {
      return (
        <div>
          <SubHeader />
          <div className="info-grid-container">
            <div className="info-container">
              <div>
                <img className="info-cover" src="./images/bw-legs.PNG" />{" "}
              </div>

              <div className="info-description">
                <h1 className="info-title">
                  Leg Day Workout Package (Body Weight)
                </h1>
                <div className="info-details">
                  <h3>
                    {" "}
                    6 Workout Circuit E-Book focused on training the musculature
                    of the lower body. Complete with Ab-Generator Web App.{" "}
                    <br/>
                    <i style={{ color: "grey" }}>
                      {" "}
                      **E-Book Downloads directly to your device after purchase.
                    </i>
                    <img className="icon" src="./images/download-icon.PNG" />
                  </h3>

                  <ul>
                    <li>
                      Workouts consist of unique lower body press exercises that
                      incorporate dynamic, tempo, and static movements. <br />{" "}
                      <i>Ex. Examples: Lunges, Tempo Squats, Static Thrusts</i>
                    </li>
                    <li>
                      Every circuit can be accomplished anywhere, with no gym
                      equipment required.{" "}
                    </li>
                    <li>
                      {" "}
                      Perfect for home or travel, without the hassle of finding
                      a gym or managing a gym membership.
                    </li>
                  </ul>
                  <div>
                    <i>
                      Circuit training is a form of training where participants
                      rotate through a number of stations, performing different
                      exercises for a certain amount of time or repetitions,
                      back to back, with minimum rest until the circuit is
                      completed. The benefits of circuit training include
                      improvements in muscular strength, cardiovascular fitness,
                      muscular endurance, exercise adherence, and social
                      interaction amongst workout partners. <br />
                    </i>
                  </div>
                  <div className="pay-button">
                    <h2>
                      <span>
                        <h5>
                          <strike>$24.99</strike>
                        </h5>
                      </span>{" "}
                      <b>$19.99</b>
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

export default LegsBodyWeight;
