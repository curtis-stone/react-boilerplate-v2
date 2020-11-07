import React from "react";
import SubHeader from "../SubHeader";

class DumbbellGymExercises extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>

        <div className="exercise-container">
          <h1>Full Body Exercises (Dumbbell)</h1>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/0t0MFCINffg"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Farmer's Carry"
              />
              <div className="exercise-description">
                <h1 className="exercise-vid-title">Farmer's Carry</h1>
                <div className="exercise-vid-details">
                  <p>
                    The farmer's carry targets your entire upper and lower body,
                    and also your core. More specifically, they strengthen the
                    muscles in your biceps, triceps, forearms, shoulders, upper
                    back, trapezius, quadriceps, hamstrings, calves, lower back,
                    obliques, transverse abdominis, and rectus abdominis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/6OeDSqsIBVY"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Overhead Carry"
              />
              <div className="exercise-description">
                <h1 className="exercise-vid-title">Overhead Carry</h1>
                <div className="exercise-vid-details">
                  <p>
                    The muscles worked by Overhead Carries are the traps,
                    shoulder, triceps, wrist flexors, abdominals obliques,
                    erector spinal, and scapular stabilizers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/6OeDSqsIBVY"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Single Arm Overhead Carry"
              />
              <div className="exercise-description">
                <h1 className="exercise-vid-title">
                  Single Arm Overhead Carry
                </h1>
                <div className="exercise-vid-details">
                  <p>
                    The muscles worked by Overhead Carries are the traps,
                    shoulder, triceps, wrist flexors, abdominals obliques,
                    erector spinal, and scapular stabilizers.
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
export default DumbbellGymExercises;
