import React from "react";
import SubHeader from "../SubHeader";

class GymExercises extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>

        <div className="exercise-container">
          <h1>Full Body Exercises (Gym)</h1>
          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/rT7DgCr-3pg"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="bench press video"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Bench Press</h1>

                <div className="exercise-vid-details">
                  <p>
                    Epcot is a theme park at Walt Disney World Resort featuring
                    exciting attractions, international pavilions, award-winning
                    fireworks and seasonal special events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GymExercises;