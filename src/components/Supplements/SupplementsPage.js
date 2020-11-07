import React from "react";

import SubHeader from "../SubHeader";

const SupplementsPage = (props) => (
  <div>
    <SubHeader />

    <div className="grid-container">
      <h1>Supplements</h1>
      <h3>
        <img className="icon" src="./images/search-icon.PNG" />
        Check your Dietary Supplements with{" "}
        <a href="https://labdoor.com/" target="_blank">
          Labdoor
        </a>
        : <br />{" "}
      </h3>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/whey-protein.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">Whey Protein Powder</h1>
          <div className="program-details">
            <p>
              A quickly digested protein that provides a rapid rise in amino
              acids that helps increase muscle mass and strength. Also reduces
              appetite and promotes fat loss.
            </p>
            <ul>
              <li>Very high nutritional value</li>
              <li>Promotes Muscle Growth</li>
              <li>Promotes Fat Loss</li>
              <li>Most effective protein powder for muscle gain</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/casein-protein.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">Casein Protein Powder</h1>
          <div className="program-details">
            <p>
              A slow-digesting dairy protein that may reduce muscle protein
              breakdown and promote muscle mass growth and fat loss during
              calorie restriction.
            </p>
            <li>Promotes Muscle Gain</li>
            <li>Stays in your system longer</li>
            <li>Not as effective as Whey Protein</li>
          </div>
        </div>
      </div>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/mass-gainer.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">Mass Gainers</h1>
          <div className="program-details">
            <p>
              A supplement that provides protein, carbohydrates and possibly
              fats with the intention of helping to add muscle mass. It is a
              high-calorie protein powder aimed at increasing your daily calorie
              intake to promote weight gain.
            </p>
            <ul>
              <li>Has ridiculous amounts of calories</li>
              <li>Great for caloric surplus and weight gain</li>
              <li>Can make you feel bloated after consumption</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/creatine.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">Creatine</h1>
          <div className="program-details">
            <p>
              Creatine is an organic compound with the nominal formula of
              CNCH2CO2H. Creatine is found in vertebrates where it facilitates
              recycling of adenosine triphosphate (ATP), the energy source of
              all cells in the body, primarily in muscle and brain tissue.
            </p>
            <ul>
              <li>Cheap</li>
              <li>Safe with no adverse side effects</li>
              <li>Increases physical performance</li>
              <li>Can prevent premature fatigue</li>
              <li>Great Scientific Support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/pre-workout.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">Pre-Workout</h1>
          <div className="program-details">
            <p>
              Used to increase endurance, energy, and focus during a workout.
              Contains a variety of ingredients such as caffeine and creatine.
              Seems to boost energy production in muscle cells and draws fluids
              from the blood plasma into the skeletal muscle, which can improve
              muscle performance.
            </p>
            <ul>
              <li>Increases physical performance</li>
              <li>Can prevent premature fatigue</li>
              <li>Can reduce protein breakdown</li>
              <li>Can be over stimulating</li>
              <li>
                Can cause a failed drug test{" "}
                <i>(if an athlete in particular sports)</i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/fat-burner.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">Fat Burners</h1>
          <div className="program-details">
            <p>
              Any dietary supplement or related substance that claims to burn
              excess fat from your body. Some of these fat burners are naturally
              occurring. These include caffeine and yohimbine. However, many are
              ineffective at best and dangerous at worst. Your body can
              naturally burn fat through diet and exercise.
            </p>
            <ul>
              <li>Not recomended</li>
              <li>No such thing as shortcuts in fat loss</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="program-container">
        <div className="program-content">
          <img className="program-cover" src="./images/bcaa.jpg" />{" "}
        </div>
        <div className="program-description">
          <h1 className="program-title">BCAAs</h1>
          <div className="program-details">
            <p>
              Branched-chain amino acids (BCAAs) are a group of three essential
              amino acids: leucine, isoleucine and valine. Commonly taken in
              order to boost muscle growth and enhance exercise performance.
              They may also help with weight loss and reduce fatigue after
              exercise.
            </p>
            <ul>
              <li>Can reduce muscle fatigue</li>
              <li>Can reduce muscle soreness</li>
              <li>Can increase muscle mass and enhance weight loss</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SupplementsPage;
