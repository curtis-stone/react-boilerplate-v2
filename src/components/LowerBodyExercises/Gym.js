import React from "react";
import SubHeader from "../SubHeader";

class GymExercises extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>

        <div className="exercise-container">
          <h1> Lower Body Exercises (Gym)</h1>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/mcVqkdzcipM"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="1 1/4 Squats"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">1 1/4 Squats</h1>

                <div className="exercise-vid-details">
                  <p>
                    The 1 and 1/4 squat works the same muscles as the back
                    squat, but increases muscular tension and hypertrophy by
                    increasing the time spent under tension during the ¼
                    movement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/TFBog-UEBhA"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Back Squats"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Back Squats</h1>

                <div className="exercise-vid-details">
                  <p>
                    The primary muscles used during the back squat are the
                    quadriceps femoris, the adductor magnus, and the gluteus
                    maximus. The squat also isometrically uses the erector
                    spinae and the abdominal muscles, among others.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
          <div>
            <iframe
              src="https://www.youtube.com/embed/SwjoOEzRTBg"
              height="200px"
              className="exercise-vid"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Back Squats"
            />

            <div className="exercise-description">
              <h1 className="exercise-vid-title">Barbell RDL's</h1>

              <div className="exercise-vid-details">
                <p>
                  The primary muscles used during the back squat are the
                  quadriceps femoris, the adductor magnus, and the gluteus
                  maximus. The squat also isometrically uses the erector
                  spinae and the abdominal muscles, among others.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/IfmhjvzNnK8"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Heel Elevated Goblet Squats"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">
                  Heel Elevated Goblet Squats
                </h1>

                <div className="exercise-vid-details">
                  <p>
                    A variation of the goblet squats. Elevating the heels allows
                    for the knees to pass the toes to a greater extent. This
                    increases vastus medialis recruitment. The strength of the
                    Vastus Medialis is crucial for knee stability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/V_R9y5KaHOU"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Split Squats"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Split Squats</h1>

                <div className="exercise-vid-details">
                  <p>
                    Bulgarian split squats primarily work the quads and glutes.
                    In addition, they work the hamstrings, calves, adductors,
                    and require some core work depending on the variation being
                    performed.
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
