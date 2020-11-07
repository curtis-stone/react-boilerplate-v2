import React from "react";

import SubHeader from "../SubHeader";

const WeightMaintenance = (props) => (
  <div>
    <SubHeader />
    <div className="page-content">
      <div>
        <h1 className="page-title">
          Weight Maintenance
          <img className="header-icon" src="./images/scale-icon.PNG" />
        </h1>
      </div>
      <div className="nutrition-container">
        <div>
          <h3>Concepts:</h3>
          <p>
            For some, weight maintenance is something you have been doing for
            your entire life, as your weight has been consistent for as long as
            you can remember. For others, being a certain weight was a goal. Now
            the next question is how do you keep from gaining or losing weight
            to stay in the range you want to be in? Weight maintenance is
            tricky, and can be a slippery slope if unhealthy habits and
            lifestyle choices are not kept in check. Like weight loss and weight
            gain, maintaining one's weight takes work. Fortunately, it is the
            least daunting of the three. Here, we'll take a dive into how
            maintaining your weight can be a breeze.
          </p>
        </div>
        <div>
          <summary>
            <p>
              <img className="icon" src="./images/search-icon.PNG" />
              <strong>What is it? </strong>
            </p>
            Weight maintenance is a phrase used to describe both the techniques
            and underlying physiological processes that contribute to a person's
            ability to maintain a certain weight. Long term weight maintenance
            is defined as a having weight changes of no more than 3% of one's
            body weight <i>(Stevens)</i>. Most weight management techniques
            encompass long-term lifestyle strategies that promote healthy eating
            and frequent physical activity.
            <br />
            <p>
              <strong>Calories and their importance:</strong>
            </p>
            Calories are the units of energy you get from foods and beverages.
            When you consume fewer calories than you burn, you achieve a calorie
            deficit. The calories you burn or expend each day, also known as
            calorie expenditure, include the following three components:
            <ul>
              <li>
                <strong>Resting energy expenditure (REE): </strong> Refers to
                the calories your body uses at rest for functions that keep you
                alive, such as breathing and blood circulation.
              </li>
              <li>
                <strong>Thermic effect of food: </strong>The calories your body
                expends digesting, absorbing, and metabolizing food.{" "}
              </li>
              <li>
                <strong>Activity energy expenditure: </strong>The calories you
                expend during sport like exercise, and non-exercise related
                activities such as fidgeting and performing household chores.
              </li>
            </ul>
            When you provide your body with just calories it needs to support
            these three components of calorie expenditure, you put your body
            into a steady state where no calorie surplus is available to gain
            weight, and no deficit is established to lose weight. Doing so
            consistently for long periods of time results in a steady state
            weight range with minor fluxuations
            <i>
              (Karger et al, North American Association for the Study of Obesity
              (NAASO)). Below we will discuss exactly how much
              calories you need to achieve this!
            </i>
            <br />
          </summary>
          <h3>
            <img className="icon" src="./images/pacman-icon.PNG" />
            Daily Caloric Chart:
          </h3>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="1">Gender</th>
                  <th colSpan="1">Weight Maintenance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Women</td>
                  <td>2,000 calories/day</td>
                </tr>
                <tr>
                  <td>Men</td>
                  <td>2,500 calories/day</td>
                </tr>
              </tbody>
            </table>
            <p>
              * Based on the average U.S. Adult <i>(NHS)</i>
            </p>
            <p>
              * To maintain their current weight, women need to consume atleast
              2,000 cal/day from food, while men need to consume atleast 2,500.
            </p>
          </div>
          <a
            className="nutrition-button-link"
            href="https://www.webmd.com/diet/healthtool-food-calorie-counter"
            target="_blank"
          >
            Calorie Calculator
          </a>
        </div>
        <div>
          <h3>Why People Regain Weight:</h3>
          <p>
            There are a few common reasons why people gain back the weight they
            lose. They are mostly related to unrealistic expectations and
            feelings of deprivation.
          </p>
          <ul>
            <li>
              <strong>Restrictive diets: </strong>Extreme calorie restriction
              actually slows your metabolism and shift your appetite-regulating
              hormones. This is because your body naturally protects itself from
              starvation and slows down its energy consumption and calorie
              stores. Both metabolism and hormones are factors that contribute
              to weight regain <i>(Allen et al)</i>.
            </li>
            <li>
              <strong>Wrong mindset: </strong>When you think of a diet as a
              quick fix, rather than a long-term solution to better health, you
              are more likely to give up and gain back the weight you lost.
            </li>
            <li>
              <strong>Lack of sustainable habits: </strong>Many diets are based
              on willpower rather than habits you can incorporate into your
              daily life. They focus on rules rather than lifestyle changes,
              which may discourage you and prevent weight maintenance.
            </li>
          </ul>
        </div>
        <h3>THE Best Methods and Practices to Maintain Weight:</h3>
        <div>
          <ol>
            <li>
              <strong>Exercise Often:</strong>
              <br /> Regular exercise plays an important role in weight
              maintenance. It may help you burn off some extra calories and
              increase your metabolism, which are two factors needed to achieve
              energy balance. When you are in energy balance, it means you burn
              the same number of calories that you consume. As a result, your
              weight is more likely to stay the same. Several studies have found
              that people who do at least 200 minutes of moderate physical
              activity a week (30 minutes a day) after losing weight are more
              likely to maintain their weight <i>(Swift et al)</i>. In some
              instances, even higher levels of physical activity may be
              necessary for successful weight maintenance. One review concluded
              that one hour of exercise a day is optimal for those attempting to
              maintain weight loss (Wing wet al). It’s important to note that
              exercise is the most helpful for weight maintenance when it’s
              combined with other lifestyle changes, including sticking to a
              healthy diet{" "}
            </li>
            <li>
              <strong>Try Eating Breakfast Every Day</strong>
              <br />
              Breakfast eaters tend to have healthier habits overall, such as
              exercising more and consuming more fiber and micronutrients.
              Furthermore, eating breakfast is one of the most common behaviors
              reported by individuals who are successful at maintaining weight
              loss. One study found that 78% of 2,959 people who maintained a
              30-pound (14 kg) weight loss for at least one year reported eating
              breakfast every day <i>(Wyatt et al)</i>.{" "}
            </li>
            <li>
              <strong>Eat Lots of Protein: </strong> <br />
              Protein may benefit weight maintenance by promoting fullness,
              increasing metabolism and reducing your total calorie intake.
            </li>
            <li>
              <strong>Weigh Yourself Regularly: </strong>
              Monitoring your weight by stepping on the scale on a regular basis
              may be a helpful tool for weight maintenance. This is because it
              can make you aware of your progress and encourage weight control
              behaviors (25Trusted Source). Those who weigh themselves may also
              eat fewer calories throughout the day, which is helpful for
              maintaining weight loss <i>(Steinberg et al)</i>.{" "}
            </li>
            <li>
              <strong> Be Mindful of Your Carb Intake: </strong>
              <br />
              Eating too many refined carbs, such as white bread, white pasta
              and fruit juices, can be detrimental to your weight maintenance
              goals. These foods have been stripped of their natural fiber,
              which is necessary to promote fullness. Limiting your intake of
              carbs, especially those that are refined, may help prevent weight
              regain.{" "}
            </li>
            <li>
              <strong>Lift Weights: </strong> <br />
              Reduced muscle mass is a common side effect of weight loss
              <i>(Chaston et al)</i>. It can limit your ability to keep weight
              off, as losing muscle reduces your metabolism, meaning you burn
              fewer calories throughout the day (34). Lifting weights at least
              twice a week may help with weight maintenance by preserving your
              muscle mass, which is important to sustain a healthy metabolism.{" "}
            </li>
            <li>
              <strong>Be Prepared for Setbacks: </strong>
              <br />
              Setbacks are inevitable on your weight maintenance journey. There
              may be times when you give in to an unhealthy craving or skip a
              workout. However, the occasional slip up doesn’t mean you should
              throw your goals out the window. It is likely that you will
              encounter a setback or two after losing weight. You can overcome
              setbacks by planning ahead and getting back on track right away!{" "}
            </li>
            <li>
              <strong>
                Stick to Your Plan All Week Long (Even on Weekends):{" "}
              </strong>
              <br />
              One habit that often leads to weight regain is eating healthy on
              weekdays and cheating on weekends. This mentality often leads
              people to binge on junk food, which can offset weight maintenance
              efforts. If it becomes a regular habit, you could gain back more
              weight than you lost in the first place!{" "}
            </li>
            <li>
              <strong>Stay Hydrated: </strong>
              <br />
              Drinking water is helpful for weight maintenance for a few
              reasons. For starters, it promotes fullness and may help you keep
              your calorie intake in check if you drink a glass or two before
              meals (41Trusted Source, 42Trusted Source, 43Trusted Source). In
              one study, those who drank water before eating a meal had a 13%
              reduction in calorie intake, compared to participants who didn’t
              drink water <i>(Davy et al)</i> (41Trusted Source).{" "}
            </li>
            <li>
              <strong>Get Enough Sleep: </strong>
              <br />
              Getting enough sleep significantly affects weight control. In
              fact, sleep deprivation appears to be a major risk factor for
              weight gain in adults and may interfere with weight maintenance
              (46Trusted Source, 47Trusted Source, 48Trusted Source). This is
              partly due to the fact that inadequate sleep leads to higher
              levels of ghrelin, which is known as the hunger hormone because it
              increases appetite (47Trusted Source). Moreover, poor sleepers
              tend to have lower levels of leptin, which is a hormone necessary
              for appetite control (47Trusted Source). Furthermore, those who
              sleep for short periods of time are simply tired and therefore
              less motivated to exercise and make healthy food choices. If
              you’re not sleeping enough, find a way to adjust your sleep
              habits. Sleeping for at least seven hours a night is optimal for
              weight control and overall health <i>(Beccuti et al)</i>.
            </li>
            <li>
              <strong>Control Stress Levels: </strong> <br />
              It is important to keep stress levels under control to maintain
              your weight, as excess stress may increase the risk of weight gain
              by stimulating your appetite.
            </li>
            <li>
              <strong>Find a Support System: </strong>
              <br />
              Involving a partner, friens, or a spouse in your healthy lifestyle
              can boost the likelihood that you will maintain your weight loss!{" "}
            </li>
            <li>
              <strong>Track Your Food Intake: </strong> <br />
              Logging your food intake from day to day may help you maintain
              your weight loss by making you aware of how many calories and
              nutrients you’re eating.
            </li>
            <li>
              <strong>Eat Plenty of Vegetables: </strong> <br /> Vegetables are
              high in fiber and low in calories. Both of these properties may be
              helpful for weight maintenance.
            </li>
            <li>
              <strong>Be Consistent: </strong>
              <br />
              Maintaining weight loss is simple when you are consistent with
              your new healthy habits, rather than going back to your old
              lifestyle.
            </li>
            <li>
              <strong>Practice Mindful Eating: </strong>Mindful eating is
              helpful for weight maintenance because it helps you recognize
              fullness and may prevent unhealthy behaviors that commonly lead to
              weight gain.
            </li>
            <li>
              <strong>Make Sustainable Changes to Your Lifestyle: </strong>
              <br />
              It is easier to maintain weight loss when you make sustainable
              lifestyle changes, rather than following the unrealistic rules
              that many weight loss diets focus on.
            </li>
          </ol>
          <h3>
            <img className="icon" src="./images/search-icon.PNG" />
            Check your Dietary Supplements with Labdoor:
          </h3>
          <a
            className="nutrition-button-link"
            href="https://labdoor.com/"
            target="_blank"
          >
            Go to Labdoor
          </a>
          <h3>Sources:</h3>
          <a
            className="sources-button"
            href="https://pubmed.ncbi.nlm.nih.gov/16302013/"
            target="_blank"
          >
            Stevens et al
          </a>
          <a
            className="sources-button"
            href="https://www.frontiersin.org/articles/10.3389/fphys.2015.00254/full#h6"
            target="_blank"
          >
            Allen et al
          </a>
          <a
            className="sources-button"
            href="https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/"
            target="_blank"
          >
            NHS
          </a>
          <a
            className="sources-button"
            href="https://www.nia.nih.gov/health/maintaining-healthy-weight"
            target="_blank"
          >
            NIH
          </a>
          <a
            className="sources-button"
            href="https://www.karger.com/Article/Abstract/111162"
            target="_blank"
          >
            Karger
          </a>
          <a
            className="sources-button"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3925973/"
            target="_blank"
          >
            Swift et al
          </a>
          <a
            className="sources-button"
            href="https://pubmed.ncbi.nlm.nih.gov/19127177/"
            target="_blank"
          >
            Donnelly et al
          </a>
          <a
            className="sources-button"
            href="https://pubmed.ncbi.nlm.nih.gov/16002825/"
            target="_blank"
          >
            Wing et al
          </a>

          <a
            className="sources-button"
            href="https://pubmed.ncbi.nlm.nih.gov/11836452/"
            target="_blank"
          >
            Wyatt
          </a>
          <a
            className="sources-button"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4380831/"
            target="_blank"
          >
            Steinberg et al
          </a>

          <a
            className="sources-button"
            href="https://pubmed.ncbi.nlm.nih.gov/17075583/"
            target="_blank"
          >
            Chaston et al
          </a>
          <a
            className="sources-button"
            href="https://pubmed.ncbi.nlm.nih.gov/18589036/"
            target="_blank"
          >
            Davy et al
          </a>
          <a
            className="sources-button"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3632337/"
            target="_blank"
          >
            Becutti et al
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default WeightMaintenance;
