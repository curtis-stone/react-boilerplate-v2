import React from "react";
import SubHeader from "../SubHeader";
import ArmsGymPaypalButton from "./ArmsGymPaypalButton";

class ArmsGymPackage extends React.Component {
  state = {
    showPaypal: false,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <ArmsGymPaypalButton />;
    } else {
      return (
        <div>
          <SubHeader />
          <div className="info-grid-container">
            <div className="info-container">
              <div>
                <img className="info-cover" src="./images/g-arms.PNG" />{" "}
              </div>

              <div className="info-description">
                <h1 className="info-title">Arm Day Workout Package (Gym)</h1>
                <div className="info-details">
                  <h3>
                    {" "}
                    6 Workout E-Book dedicated to training the muscular
                    components of the upper body. Complete with Ab-Generator Web
                    App.{" "}
                    <br/>
                    <i style={{ color: "grey" }}>
                      {" "}
                      **E-Book Downloads directly to your device after purchase.
                    </i>
                    <img className="icon" src="./images/download-icon.PNG" />
                  </h3>

                  <ul>
                    <li>
                      Workouts consist of traditional and unique upper body push
                      and pull exercises with an emphasis on progressive
                      overload. <br />{" "}
                      <i>
                        Ex. Examples: Press Variants, Cable Variants, and Curl
                        Variants
                      </i>
                    </li>
                    <li>
                      Every workout structured from compound movements down to
                      isolation.
                    </li>
                    <li>
                      {" "}
                      Perfect for gym users, as every workout requires equipment
                      found in gyms nationwide!
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

export default ArmsGymPackage;
