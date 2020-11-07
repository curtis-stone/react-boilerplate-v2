import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import scriptLoader from "react-async-script-loader";
import Spinner from "../Spinner";

const CLIENT = {
  sandbox:
    "AbrHc-nHhUMrZ3zYeuAs2XmePRrucgHrHNF1CodgS0lHnNyzLmUUnKkki0UCZfDu86KjPguebQthBajy",
  production: "your_production_key",
};

const CLIENT_ID =
  process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false,
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      this.setState({ loading: false, showButtons: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

    const scriptJustLoaded =
      !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM,
        });
        this.setState({ loading: false, showButtons: true });
      }
    }
  }
  createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"6Percent Legs Workout Package (Dumbbell)",
          amount: {
            currency_code: "USD",
            value: 19.99,
          },
        },
      ],
    });
  };

  onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID,
      };
      console.log("Payment Approved: ", paymentData);
      this.setState({ showButtons: false, paid: true });
      document.getElementById("download").click();
    });
  };

  render() {
    const { showButtons, loading, paid } = this.state;

    return (
      <div className="paypal-styles">
        {loading && <Spinner />}

        {showButtons && (
          <div>
            <div>
              <img className="paypal-image" src="./images/db-legs.PNG" />
              <h2>Items: 6Percent Legs Workout Package (Dumbbell)</h2>
              <h2>Total checkout Amount: $19.99</h2>
            </div>

            <PayPalButton
              createOrder={(data, actions) => this.createOrder(data, actions)}
              onApprove={(data, actions) => this.onApprove(data, actions)}
            />
          </div>
        )}

        {paid && (
          <div className="paypal-styles">
            <img
              alt="Cover of 6P Legs (Dumbbell) Guide"
              className="paypal-image"
              src="./images/db-legs.PNG"
            />
            <div>
              <p>
                <i>
                  Didn't automatically download? Click the link below to
                  download your E-Book
                </i>
              </p>
              <Link
                id="download"
                className="download-link"
                to="/images/6p-legs-db-package.pdf"
                target="_blank"
                download
              >
                Download Now
              </Link>
            </div>

            <div>
              <h4 className="messages">
                <strong>Now you're all set, let's get those gains!</strong>
                <span role="img" aria-label="emoji">
                  {" "}
                  😁💪
                </span>
              </h4>
            </div>

            <div className="messages">
              <i>
                Problem with your purchase? Visit the <strong>Help Page</strong>{" "}
                and contact us!
              </i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`
)(PaypalButton);
