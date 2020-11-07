import React from "react";

import SubHeader from "../SubHeader";

const WeightGain = (props) => (
  <div>
    <SubHeader />
    <div className="page-content">
      <div>
        <h1 className="page-title">
          Weight Gain
          <img className="header-icon" src="./images/gain-icon.PNG" />
        </h1>
      </div>
      <div className="nutrition-container">
        <div>
          <div>
            <h3>Concepts:</h3>
            <p>
              Surprisingly, gaining weight is an extremely popular goal in
              today's society. This can be explained by the need of
              weight/muscle gain in athletics and competitions, as well as
              people wanting to simply have an assertive physical appearance.
              Whatever the case, gaining weight and building muscle provides
              numerous health benefits as well as a sense of confidence when
              done correctly. It can be difficult finding the best route to
              achieve success with the many factors that play a role in
              individual weight gain. These factors include genetics, sleep,
              age, and metabolic rate. However, there are many trends and
              methods that can assist you on your journey. It is worthy to note
              that permanent healthy weight gain can be an arduous task, and is
              solely achieved through lifestyle changes and conscientious
              healthy eating and exercise habits.
            </p>
          </div>
          <div>
            <h3>
              <img className="icon" src="./images/scale-icon.PNG" />
              The Caloric Surplus:{" "}
            </h3>
            <p>
              The safest and most sustainable way to gain weight through a
              calorie surplus that is supplemented with exercise, preferably
              strength training. A consistent calorie surplus supplemented with
              exercise has shown to rapidly increase weight gain over time,
              without significantly piling on fat. When strength training is
              used as the primary method of exercise, rapid muscle growth is
              also evident <i>(Alan et al)</i>.
            </p>
            <p>
              <img className="icon" src="./images/search-icon.PNG" />
              <strong>What is it? </strong>
            </p>
            <p>
              A caloric surplus is a state in which you consume more calories
              than you burn, leading to weight gain in the form of muscle or
              body fat. For instance, let's say you eat 3,000 calories per day
              and only burn 2,500, you’ve created a surplus of 500 calories per
              day. When you create a caloric surplus, your body either uses the
              extra energy to either build muscle or store fat. While a caloric
              surplus is required to gain weight, eating more without exercising
              only leads to body fat. As is why exercise is essential! To gain
              muscle, you must combine a caloric surplus with a solid strength
              training routine or program.
              <br />
              <i>* Check out our guides in the Programs section!</i>
            </p>
            <p>
              <strong>How your body uses Calories:</strong>
            </p>
            <p>
              Calories are the units of energy you get from foods and beverages.
              When you consume more calories than you burn, you achieve a
              calorie surplus. The calories you burn or expend each day, also
              known as calorie expenditure, include the following three
              components <i>(Healthline)</i>:
            </p>
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
            <p>
              When you provide your body with more calories than it needs to
              support these three components of calorie expenditure, you put
              your body into a calorie surplus. Doing so consistently for long
              periods results in weight gain!{" "}
              <i>
                (North American Association for the Study of Obesity (NAASO),
                Healthline)
              </i>
              . Conversely, you will lose weight if you regularly provide your
              body with less calories than it needs to support these functions.
            </p>

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

                    <th colSpan="1">Weight Gain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Women</td>
                    <td>2,000 calories/day</td>

                    <td>2,500 calories/day</td>
                  </tr>
                  <tr>
                    <td>Men</td>
                    <td>2,500 calories/day</td>

                    <td>3,000 calories/day</td>
                  </tr>
                </tbody>
              </table>
              <p>
                * Based on the average U.S. Adult <i>(NHS)</i>
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
         
          <h3>
            <img className="icon" src="./images/pro-icon.PNG" />
            Weight Gaining Guidelines:
          </h3>
          <div>
            <p>
              - <strong>EAT BREAKFAST TO HELP BUILD MUSCLE MASS: </strong> This
              gives you an immediate burst of energy and helps you to stay full
              until your next meal or snack. It also sets the trend: you’ll tend
              to eat healthier if your day starts with a strong and healthy
              breakfast. Your best bets if your trying to build muscle mass are
              omelettes, smoothies and cottage cheese.
            </p>
            <br />
            <p>
              - <strong>EAT EVERY THREE HOURS: </strong>Eating the right thing
              at the right time is crucial for helping you boost your muscle
              mass. The easiest way is to eat your breakfast, lunch and dinner
              as usual, interspersed with meals post workout, pre-bed and with
              two snacks in between. By keeping your food intake up, it will
              mean you won’t be as hungry, because eating smaller meals more
              often versus a few big meals will decrease your stomach size.
              You’ll feel full more quickly and your waist will trim, while
              you’ll also have fewer cravings. Not eating for long periods can
              cause you to over-eat at the next meal or topping yourself up with
              unhealthy snacks from the vending machine. So to stop any
              cravings, eat at fixed times every day and your body will get
              hungry at those fixed times.
            </p>
            <br />
            <p>
              -{" "}
              <strong>
                EAT PROTEIN WITH EACH MEAL TO BOOST YOUR MUSCLE MASS:{" "}
              </strong>
              You need protein to build and maintain muscle. To achieve this,
              you should be looking to eat at least 1g per 454g of body-weight.
              That’s 200g/day if you weigh 200lbs. The easiest way to get this
              amount is to eat a whole protein source with each meal
              <i> (Heath)</i>.
            </p>
            <p>
              <i>These include:</i>
            </p>

            <ul>
              <li>Red meat. Beef, pork, lamb, etc.</li>
              <li>Poultry. Chicken, turkey, duck, etc.</li>
              <li>Fish. Tuna, salmon, sardines, mackerel, etc.</li>
              <li>Eggs. Don’t believe the cholesterol myths. Eat the yolk.</li>
              <li>Dairy. Milk, cheese, cottage cheese, quark, yogurt, etc.</li>
              <li>
                Whey. Not necessary but great for easy post workout shakes.
              </li>
              <li>
                Try vegan options too, such as lentils, tofu, seeds and nuts.
              </li>
            </ul>

            <br />
            <p>
              <strong>EAT FRUIT AND VEGETABLES WITH EACH MEAL: </strong>Most of
              them (not all) are low calorie: you can eat your stomach full
              without gaining fat or weight. Fruit and vegetables are also full
              of vitamins, minerals, antioxidants and fibre which helps
              digestion, but just be careful to check the sugar content of some
              fruits.
            </p>
            <br />
            <p>
              <strong>EAT CARBS ONLY AFTER YOUR WORKOUT: </strong>While you need
              carbs for energy, most people eat more than they need. Limit your
              carbohydrate intake to after your workout only. Eat fruit and
              vegetables with all meals. These contain few carbohydrates
              compared to whole grains with the exception of corn, carrots and
              raisins. Great carbs for post-workouts are rice, pasta, bread,
              potatoes, quinoa, oats, etc. Avoid white carbs and stick to whole
              grain!
            </p>
            <br />
            <p>
              <strong>EAT HEALTHY FATS: </strong>Healthy fats improve fat loss
              and health as they digest slowly. To make sure you balance your
              fat intake, eat healthy fats with every meal and avoid artificial
              trans-fats and margarine.
            </p>
            <br />
            <p>
              <strong> DRINK WATER TO HELP YOU BUILD MUSCLE MASS: </strong>
              Strength training causes water loss through sweating and can
              impair muscle recovery, meaning the training won’t effectively
              help you increase your muscle mass as it should. Drinking water
              prevents dehydration but also hunger since an empty stomach can
              make you think you’re hungry.
            </p>
            <br />
            <p>
              <strong>EAT WHOLE FOODS 90% OF THE TIME: </strong>To really get
              the results you want and to boost your muscle mass significantly,
              90% of your food intake should consist of whole foods.
            </p>
            <ul>
              <li>
                <strong>Whole foods</strong> are unprocessed and unrefined (or
                little refined) foods that come as close as possible to their
                natural state. Examples: fresh meat, fish, poultry, eggs,
                vegetables, pulses, fruits, rice, oats, quinoa, etc.
              </li>

              <li>
                <strong>Processed foods</strong> usually contain added sugars,
                trans-fats, nitrates, corn syrup, sodium and other chemicals.
                Examples: bagels, fruit bars, cereals, pizza, cookies, sausages,
                frozen meals, etc.
              </li>
            </ul>
          </div>
          <h3>
            <img className="icon" src="./images/pro-icon.PNG" />
            Alternative methods to gaining weight:
          </h3>
          <div>
            <p>
              <strong>Mass Gainers/Protein Supplements</strong>
              <img className="icon" src="./images/pacman-icon.PNG" />
            </p>
            <summary>
              It is healthier and more satisfying to gain most of your weight as
              muscle rather than fat. While food and exercise are most important
              for gaining muscle, supplements may also help by either providing
              you with extra calories and protein or by allowing you to exercise
              harder. Some supplements that specialize in this are protein
              powders, weight gainers, and creatine. However, there are also
              supplemental products that are promoted but have little to no
              evidence that suggests they can increase weight or muscle gain on
              their own. These supplements include BCAAs, Testosterone Boosters,
              and CLA <i>(Conjugated Linoleic Acid)</i>
            </summary>
            <dl>
              <dt>
                <strong>Pros</strong>
                <img className="icon" src="./images/pro-icon.PNG" />
              </dt>
              <dd>- Convenience</dd>
              <dd>- Cost effective</dd>
              <dd>- High Quality Calories and Proteins</dd>
              <dt>
                <strong>Cons</strong>
                <img className="icon" src="./images/con-icon.PNG" />
              </dt>
              <dd>- Lack of Micronutrients</dd>
              <dd>- Potentially Expensive</dd>
              <dd>- Can Get Same Results With Eating More Food</dd>
            </dl>
            <a
              className="nutrition-button-link"
              href="https://top10supps.com/rankings/"
              target="_blank"
            >
              Supplement Rankings
            </a>
          </div>
          <div>
            <p>
              <strong>GOMAD Method</strong>
              <img className="icon" src="./images/pacman-icon.PNG" />
            </p>
            <summary>
              GOMAD stands for a Gallon Of Milk A Day. It’s a simple weight gain
              diet for those who struggle to eat a lot. Just drink a gallon of
              whole milk a day on top of eating three meals day and lifting
              heavy. That extra milk adds about 2400 additional calories and
              120g of protein. Therefore, GOMAD makes it easier to reach a
              caloric surplus to gain weight. It is a viable option for even the
              most stubborn hardgainers. If you’re skinny, under-weight and
              can’t gain weight no matter what, you may want to try GOMAD.
              Having experience with this method, we suggest you first start
              with half a gallon per day to get your body acclimated.
            </summary>
            <dl>
              <dt>
                <strong>Pros</strong>
                <img className="icon" src="./images/pro-icon.PNG" />
              </dt>
              <dd>- Excels at Aiding in Weight Gain</dd>
              <dd>- Relatively Cheap</dd>
              <dd>- Can be Done Throughout The Day</dd>
              <dt>
                <strong>Cons</strong>
                <img className="icon" src="./images/con-icon.PNG" />
              </dt>
              <dd>- Tends to Pack on Body Fat</dd>
              <dd>- May cause you to feel Bloated</dd>
              <dd>
                - No Bueno if You're Lactose Intolerant{" "}
                <i>
                  (Must use lactose intolerant milk, which can be more
                  expensive)
                </i>
              </dd>
            </dl>
            <a
              className="nutrition-button-link"
              href="https://stronglifts.com/gomad/#:~:text=GOMAD%20stands%20for%20a%20gallon%20of%20milk%20a%20day.&text=Just%20drink%20a%20gallon%20of,caloric%20surplus%20to%20gain%20weight."
              target="_blank"
            >
              GOMAD Explained
            </a>
          </div>
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
            href="https://journals.lww.com/nsca-scj/Abstract/2020/10000/Magnitude_and_Composition_of_the_Energy_Surplus.9.aspx"
            target="_blank"
          >
            Energy Surplus for Maximizing Hypertrophy
          </a>
          <a
            className="sources-button"
            href="https://idealnutrition.com.au/pros-and-cons-of-protein-powder/"
            target="_blank"
          >
            Payout of Protein Powders
          </a>
          <a
            className="sources-button"
            href="https://www.everyoneactive.com/content-hub/gym/eight-tips-help-build-muscle-mass/"
            target="_blank"
          >
            Tips for Weight Gain
          </a>
          <a
            className="sources-button"
            href="https://completehumanperformance.com/2015/09/11/body-recomposition-podcast/"
            target="_blank"
          >
            Gain Muscle & Lose Fat at the Same Time
          </a>
          <a
            className="sources-button"
            href="https://www.mindtostrive.com/gain-weight-look-good/"
            target="_blank"
          >
            Gain Without the Gut
          </a>
          <a
            className="sources-button"
            href="https://peerj.com/articles/2825/"
            target="_blank"
          >
            Pre- vs Post-Exercise Protein Intake
          </a>
          <a
            className="sources-button"
            href=" https://onlinelibrary.wiley.com/doi/full/10.1038/oby.2001.133"
            target="_blank"
          >
            NAASO
          </a>
          <a
            className="sources-button"
            href="https://www.healthline.com/nutrition/calorie-deficit#definition-and-importance"
            target="_blank"
          >
            Healthline
          </a>{" "}
          <a
            className="sources-button"
            href="https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/"
            target="_blank"
          >
            NHS
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default WeightGain;

// <div>
// <h3>
//   <img className="icon" src="./images/pacman-icon.PNG" />
//   6Percent Weight Gain Meal Outline:
// </h3>
// <table>
//   <thead>
//     <tr>
//       <th colSpan="1">Gender</th>
//       <th colSpan="1">Breakfast</th>
//       <th colSpan="1">Workout</th>
//       <th colSpan="1">Post-Workout Snack</th>
//       <th colSpan="1">Lunch</th>
//       <th colSpan="1">Aftenoon Snack</th>
//       <th colSpan="1">Dinner</th>
//       <th colSpan="1">Night Snack</th>
//       <th colSpan="1">Calorie Total</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Women</td>
//       <td>700 cal</td>
//       <td>X</td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td></td>
//       <td>3,000 calories/day</td>
//       <td>3,000 calories/day</td>
//     </tr>
//     <tr>
//       <td>Men</td>
//       <td>700 cal (oatmeal, eggs)</td>
//       <td>X</td>
//       <td>400 calories (protein shake mixed w/ milk)</td>
//       <td>650 (pasta, vegetables, fruits)</td>
//       <td>300 calories (appx. 2 granola bars)</td>
//       <td>750 cal (chicken breast, vegtables, rice)</td>
//       <td>300 calories (desert, protein bars, cereal, etc)</td>
//       <td>3,100 calories/day</td>
//     </tr>
//   </tbody>
// </table>
// <p>
//   * Based on the average U.S. Adult <i>(NHS)</i>
// </p>
// </div>