import React from "react";
import Iframe from "react-iframe";

import SubHeader from "../SubHeader";

class DumbbellGymExercises extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>

        <div className="exercise-container">
          <h1> Lower Body Exercises (Dumbbell)</h1>

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
                src="https://www.youtube.com/embed/lPaOHFx54jc"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="RDL's"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">RDL's</h1>

                <div className="exercise-vid-details">
                  <p>
                    The primary muscles involved in the RDL are the erector
                    spinae, gluteus maximus, hamstrings (biceps femoris,
                    semitendonosus and semimemtranosus), adductor magus,
                    gastrocnemius, trapezius and forearm flexors.
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

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/hBBM-hHMgvo"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Standing Calf Raises"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Standing Calf Raises</h1>

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

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/aMGW2p4u0WI"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Dumbbell Swings"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Swings</h1>

                <div className="exercise-vid-details">
                  <p>
                    As a compound movement, the dumbbell swing activates several
                    major muscle groups including the quadriceps, hamstrings,
                    chest, trapezius, shoulders, and abdominals. By targeting
                    all of these muscles and varying the weight and tempo, this
                    makes it an effective way to boost strength, endurance,
                    power, and speed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
          <div>
            <iframe
              src="https://www.youtube.com/embed/xyu4BlVFLas"
              height="200px"
              className="exercise-vid"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Walking Lunges"
            />
            <div className="exercise-description">
              <h1 className="exercise-vid-title">
                Walking Lunges
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


        </div>
      </div>
    );
  }
}
export default DumbbellGymExercises;
