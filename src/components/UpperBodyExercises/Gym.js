import React from "react";
import SubHeader from "../SubHeader";

class GymExercises extends React.Component {
  render() {
    return (
      <div>
        <SubHeader />
        <div className="page-title"></div>

        <div className="exercise-container">
          <h1>Upper Body Exercises (Gym)</h1>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/FhY8gY1E2zo"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="24's"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">24's</h1>

                <div className="exercise-vid-details">
                  <p>
                    Like bicep curl 21’s, the first 8 reps are from the bottom
                    to half way up. Second 8 reps are from the top to half way
                    from the bottom. The last 8 reps are the full range of
                    motion. (RIP Kobe)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/eUry91Loir0"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Dips"
              />
              <div className="exercise-description">
                <h1 className="exercise-vid-title">Dips</h1>
                <div className="exercise-vid-details">
                  <p>
                    Narrow, shoulder-width dips primarily train the triceps,
                    with major synergists being the anterior deltoid, the
                    pectoralis muscles (sternal, clavicular, and minor), and the
                    rhomboid muscles of the back (in that order).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
          <div>
            <iframe
              src="https://www.youtube.com/embed/7QjDGegVEsw"
              height="200px"
              className="exercise-vid"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Landmine Shoulder Press"
            />
            <div className="exercise-description">
              <h1 className="exercise-vid-title">Landmine Shoulder Press</h1>
              <div className="exercise-vid-details">
                <p>
                  Narrow, shoulder-width dips primarily train the triceps,
                  with major synergists being the anterior deltoid, the
                  pectoralis muscles (sternal, clavicular, and minor), and the
                  rhomboid muscles of the back (in that order).
                </p>
              </div>
            </div>
          </div>
        </div>

          <div className="exercise-content">
          <div>
            <iframe
              src="https://www.youtube.com/embed/nDAGocLAvsU"
              height="200px"
              className="exercise-vid"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Plate Raises"
            />
            <div className="exercise-description">
              <h1 className="exercise-vid-title">Plate Raises</h1>
              <div className="exercise-vid-details">
                <p>
                  Narrow, shoulder-width dips primarily train the triceps,
                  with major synergists being the anterior deltoid, the
                  pectoralis muscles (sternal, clavicular, and minor), and the
                  rhomboid muscles of the back (in that order).
                </p>
              </div>
            </div>
          </div>
        </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/3ir4vPXIKWk"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Pull Ups"
              />
              <div className="exercise-description">
                <h1 className="exercise-vid-title">Pull Ups</h1>
                <div className="exercise-vid-details">
                  <p>
                    Narrow, shoulder-width dips primarily train the triceps,
                    with major synergists being the anterior deltoid, the
                    pectoralis muscles (sternal, clavicular, and minor), and the
                    rhomboid muscles of the back (in that order).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/UT0ZRBWrf10"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Weighted Dips"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Weighted Dips</h1>

                <div className="exercise-vid-details">
                  <p>
                    An advanced variation of the chest dip exercise that works
                    your triceps, chest, shoulders, and arm muscles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="exercise-content">
            <div>
              <iframe
                src="https://www.youtube.com/embed/UT0ZRBWrf10"
                height="200px"
                className="exercise-vid"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Weighted Dips"
              />

              <div className="exercise-description">
                <h1 className="exercise-vid-title">Weighted Pull Ups</h1>

                <div className="exercise-vid-details">
                  <p>
                    A more advanced variation of the pull up. The main muscles
                    targeted during weighted pull-ups include the lattimus
                    dorsi, which is your back muscles stretching from your waist
                    to your armpit, along with your rhomboids and trapezius
                    which are muscles in the middle of your upper-back.
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
