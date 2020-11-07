import React from "react";
import SubHeader from "./SubHeader";

const HelpPage = (props) => (
  <div>
    <SubHeader />
    <div className="page-content">
      <div>
        <h1 className="page-title">How can we help?</h1>
      </div>
      <h3>Content not loading?</h3>
      <p>
        Something may be wrong with your device's browser settings. <br /> Try
        viewing the site on a different browser!{" "}
        <span role="img" aria-label="emoji">
          {" "}
          😁💪
        </span>
      </p>
      <h3> Questions or Problems with your Order?</h3>
      <p>
        <a
          className="button button-link"
          href="mailto: 6percentFitness@gmail.com"
        >
          Send us an Email
        </a>
      </p>
    </div>
    <div></div>
  </div>
);

export default HelpPage;
