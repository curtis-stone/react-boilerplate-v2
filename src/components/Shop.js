import React from "react";
import PaypalButton from "./PaypalButton";

class Shop extends React.Component {
  state = {
    showPaypal: false,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PaypalButton />;
    } else {
      return (
        <div>
        <div className="grid-container">
          <div className="program-container">
            <div>
              <img className="program-cover" src="./images/strength.PNG" />{" "}
            </div>

            <div className="program-description">
              <h1 className="program-title">Strength Program</h1>
              <div className="program-details">
                <summary>Details:</summary>
                <p>
                  Epcot is a theme park at Walt Disney World Resort featuring
                  exciting attractions, international pavilions, award-winning
                  fireworks and seasonal special events.
                </p>
                <div className="pay-button">
                  <h2>
                    <span><h5><strike>$49.99</strike></h5></span> <b>$39.99</b>
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

export default Shop;
