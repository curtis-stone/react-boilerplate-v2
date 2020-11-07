import React from "react";

import SubHeader from "./SubHeader";

const AboutPage = (props) => (
  <div>
    <SubHeader />
    <div className="page-content">
      <div>
        <h1 className="page-title">About Us</h1>
      </div>
      <h3>Our Purpose:</h3>
      <p>
        Here at 6Percent, we are dedicated to giving our users research based
        training regimens that will aid in their fitness goals. We also provide
        detailed health information from Dieting/Weight Management, Supplement
        Ingredient Checks, and a wide database of Instructional Videos for every
        setting (Commercial Gyms, Limited Gyms, and Home Workouts)
      </p>
      <p>
        All information provided on our site stems from multiple scholarly
        research experiments; and or studies that consist of at least 20
        participants.
      </p>
      <p>
        Every Program distributed by 6Percent Fitness emphasizes progressive
        overload and follows ACSM Recomendations and Guidelines to ensure user
        safety, prevent over-training, and in structuring guides to maximize every
        benefit of fitness training.
      </p>
      <a
        className="button button-link"
        href="https://www.acsm.org/"
        target="_blank"
      >
        ACSM.org
      </a>
      <p>
        <strong>6Percent fitness observes a NO BS policy:</strong>
      </p>
      <ul>
        <li className="background">No BS Workouts</li>
        <li className="background">No BS Exercise Movements</li>
        <li className="background">
          No BS Guides that are not structured to optimize results
        </li>
      </ul>
      <p></p>
      <h3> Questions:</h3>
      <p>
        If you have any questions, or would like to know more... Please contact
        us!{" "}
        <span role="img" aria-label="emoji">
          {" "}
          😁
        </span>
      </p>
      <p>
        <a
          className="button button-link2"
          href="mailto: 6percentFitness@gmail.com"
        >
          Send us an Email
        </a>
      </p>
    </div>
  </div>
);

export default AboutPage;
