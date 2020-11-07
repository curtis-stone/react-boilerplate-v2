import React from "react";

import SubHeader from "../SubHeader";

const WeightLoss = (props) => (
  <div>
    <SubHeader />
    <div className="page-content">
      <div>
        <h1 className="page-title">Weight Loss<img className="header-icon" src="./images/loss-icon.PNG" /></h1>
      </div>
      <div className="nutrition-container">
        <div>
          <h3>Concepts:</h3>
          <p>
            Weight loss is a goal desired by many at some point in life. It can
            be difficult finding the best route to achieve success with
            thousands of diets and trends claiming to be the quickest and most
            efficient method. However, permanent weight loss is impossible to
            obtain from fads and dieting trends. Weight loss is a journey and is
            solely achieved through lifestyle changes and conscientious healthy
            eating/exercise habits.
          </p>
        </div>
        <div>
          <h3><img className="icon" src="./images/scale-icon.PNG" />The Caloric Deficit: </h3>
          <summary>
            The safest and most sustainable way to lose weight is with a calorie
            deficit and exercise. A consistent calorie deficit supplemented with
            exercise has shown to rapidly decrease weight loss over time without
            significantly affecting your hunger or energy levels.
            <br />
            <p>
            <img className="icon" src="./images/search-icon.PNG" /><strong>What is it? </strong>
            </p>
            A caloric deficit is any shortage in the amount of calories consumed
            relative to the amount of calories required for maintenance of
            current body weight. A deficit can be created by reducing the
            calories you consume. It can also be created by increasing the
            calories you burn, while not increasing the calories you consume.
            When your caloric intake is less than the calories you exert, this
            leads to your body freeing fat cells and converting them to energy
            for the missing calories. Therefore, resulting in fat/weight loss.
            <br />
            <p>
              <strong>How your body uses Calories:</strong>
            </p>
            Calories are the units of energy you get from foods and beverages.
            When you consume fewer calories than you burn, you achieve a calorie
            deficit. The calories you burn or expend each day, also known as
            calorie expenditure, include the following three components{" "}
            <i>(Healthline)</i>:
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
            When you provide your body fewer calories than it needs to support
            these three components of calorie expenditure, you put your body
            into a calorie deficit. Doing so consistently for long periods
            results in weight loss{" "}
            <i>
              (Karger et al, North American Association for the Study of Obesity
              (NAASO), Healthline)
            </i>
            . Conversely, you will gain weight if you regularly provide your
            body more calories than it needs to support these functions.
            <br />
          </summary>
          <h3><img className="icon" src="./images/pacman-icon.PNG" />Daily Caloric Chart:</h3>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colSpan="1">Gender</th>
                  <th colSpan="1">Weight Maintenance</th>
                  <th colSpan="1">Weight Loss</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Women</td>
                  <td>2,000 calories/day</td>
                  <td>1,500 calories/day</td>
                </tr>
                <tr>
                  <td>Men</td>
                  <td>2,500 calories/day</td>
                  <td>2,000 calories/day</td>
                </tr>
              </tbody>
            </table>
            <p>* Based on the average U.S. Adult <i>(NHS)</i></p>
          </div>
          <a
            className="nutrition-button-link"
            href="https://www.webmd.com/diet/healthtool-food-calorie-counter"
            target="_blank"
          >
            Calorie Calculator
          </a>
        </div>

        <h3>Alternative methods to losing weight:</h3>
        <div>
          <p>
            <strong>Vegan Diet</strong><img className="icon" src="./images/diet-icon.PNG" />
          </p>
          <summary>
            The Vegan diet eliminates all animal products including meat, fish,
            dairy, eggs and honey. This diet continues to be popular for ethical
            reasons as well as the fact that it is incredibly effective! Studies
            show that vegans have a lower average BMI <i>(Body Mass Index)</i>{" "}
            than those who are not. However, it's easy to go overboard on
            unhealthy foods because they are still considered vegan. Therefore,
            it's important to stay vigilant about eating whole foods with
            adequate amounts of calcium, B12, zinc and iron. In 2020, it’s
            easier than ever to maintain a vegan diet because of the rising
            popularity of plant-based meats such as <i>Beyond</i> and
            <i> Incredible</i>. As every other diet, it's important to monitor
            how much you're eating. Take time to read nutrition labels because
            these types of products are often highly processed. Meal prep and
            planning in advance is the easiest way to stay on track!
          </summary>
          <dl>
            <dt>
              <strong>Pros</strong><img className="icon" src="./images/pro-icon.PNG" />
            </dt>
            <dd>- Evidence Based Health Benefits</dd>
            <dd>- Encourages Mindful Eating</dd>
            <dd>- Wider Variety of Foods</dd>
            <dd>- Reduced Food Costs</dd>
            <dd>- No Animal Impact</dd>
            <dd>- And much more!</dd>

            <dt>
              <strong>Cons</strong><img className="icon" src="./images/con-icon.PNG" />
            </dt>
            <dd>- Limited food choices</dd>
            <dd>- Possible nutrient deficiencies</dd>
            <dd>- Difficulty dining out</dd>
          </dl>
          <a
            className="nutrition-button-link"
            href="https://www.webmd.com/diet/healthtool-food-calorie-counter"
            target="_blank"
          >
            Go Vegan!
          </a>
        </div>

        <div>
          <p>
            <strong>Intermittent Fasting</strong><img className="icon" src="./images/diet-icon.PNG" />
          </p>
          <summary>
            If you’re new to this whole fasting trend then you may be totally
            confused and thinking why in the world would I purposely fast? Isn't
            that something we would want to avoid? Fasting is extremely
            beneficial for weight loss, focus, energy and the promotion of less
            insulin resistance in the individual. Fasting actually helps
            regulate insulin which is the hormone correlated with weight gain
            and fat storage. Fasting has been widely used among many cultures
            for spiritual reasons as well. Intermittent fasting is great for any
            lifestyle. It's easy and simple to follow. Start with a 12 hour fast
            (overnight) and increase it over time to 14, 16 and even 20 hours.
            Everyone is different so finding a healthy balance is always the
            best option for you! If you are hungry, make sure you eat. A little
            trick to new fasters: drink a glass of water right when you wake up
            in the morning. Whoever told you breakfast was the most important
            meal of the day may have been lying. Intermittent Fasting proves to
            be a beneficial reason to skip breakfast or at least to push it off
            for a few hours. <br />
          </summary>
          <p>
            <strong>Common Fasting Routines:</strong>
          </p>
          <ul>
            <li>
              {" "}
              <strong>Alternate-day fasting: </strong>Eat a normal diet one day
              and either completely fast or have one small meal (less than 500
              calories) the next day.
            </li>
            <li>
              <strong> 5:2 fasting: </strong>Eat a normal diet five days a week
              and fast two days a week.
            </li>
            <li>
              {" "}
              <strong> Daily time-restricted fasting: </strong>Eat normally but
              only within an eight-hour window each day. For example, skip
              breakfast but eat lunch around noon and dinner by 8 p.m.
            </li>
          </ul>

          <dl>
            <dt>
              <strong>Pros</strong><img className="icon" src="./images/pro-icon.PNG" />
            </dt>
            <dd>- Easy to Follow</dd>
            <dd>- No Calorie Counting</dd>
            <dd>- Unrestricted Eating is Allowed</dd>
            <dt>
              <strong>Cons</strong><img className="icon" src="./images/con-icon.PNG" />
            </dt>
            <dd>- May Reduce Physical Activity</dd>
            <dd>- Does Not Promote Nutritious Eating</dd>
            <dd>- May Cause Severe Hunger</dd>
          </dl>
          <a
            className="nutrition-button-link"
            href="https://www.healthline.com/nutrition/intermittent-fasting-guide#methods"
            target="_blank"
          >
            How to Fast!
          </a>
        </div>

        <div>
          <p>
            <strong>Keto Diet</strong><img className="icon" src="./images/diet-icon.PNG" />
          </p>
          <summary>
            In recent years, more buzz has found its way to the ketogenic diet
            than any other diet out there. This incredibly effective plan isn’t
            likely to go away any time soon. The keto or ketogenic diet works
            because it’s high in fat, which makes it very satiating, but very
            low in carbohydrates. Reducing carbs allows your body to go into
            ketosis. During ketosis, the body becomes better at turning fat into
            energy. It also turns fat into ketones in the liver, which
            ultimately improves brain function. However, It’s only great for
            people who have epilepsy and monitored by a ketogenic registered
            dietitian <i>(Bough et al)</i>. This diet is effective, but not
            truly suited for the average person to lose weight. The big problem
            with keto is that it’s very rigid and most people on this diet
            aren't truly in ketosis. It’s also low in fiber, due to healthy
            veggies and fruits like sweet potatoes, berries, and oranges being
            excluded. <i>(NM.org, EveryDayHealth)</i>
          </summary>
          <dl>
            <dt>
              <strong>Pros</strong><img className="icon" src="./images/pro-icon.PNG" />
            </dt>
            <dd>- Promotes Weight Loss</dd>
            <dd>- Can Eat High Fat Foods</dd>
            <dd>- Helps Reduce Seizures in Pediatric Patients with Epilepsy</dd>
            <dt>
              <strong>Cons</strong><img className="icon" src="./images/con-icon.PNG" />
            </dt>
            <dd>- Toughest to Stick To</dd>
            <dd>- May Develop the "Keto Flu"</dd>
            <dd>
              - Can lead to Renal Risks and Vitamin/Mineral Deficiencies with
              Prolonged Use
            </dd>
            <dd>- Can Lead to Dehydration</dd>
          </dl>
          <a
            className="nutrition-button-link"
            href="https://www.healthline.com/nutrition/keto-diet-meal-plan-and-menu#the-basics"
            target="_blank"
          >
            How to Keto!
          </a>
        </div>

        <div>
          <p>
            <strong>Volumetrics Diet</strong><img className="icon" src="./images/diet-icon.PNG" />
          </p>
          <summary>
            Created by Barbara Rolls, Ph.D., who is a professor of nutrition at
            Penn State University, the strategy is to eat foods that provide the
            most amount of nutrition for the least amount of calories{" "}
            <i>(EveryDayHealth)</i>. On this diet, food is categorized into four
            different groups from least energy-dense (examples include broth,
            non-starchy vegetables and fruits) to most energy-dense (those
            treats we have trouble resisting like cookies, chocolate, and
            butter). The goal is for the majority of your diet to consist of
            lower-density foods. According to Erin Morse, RD who is the Chief
            Clinical Dietitian at UCLA Hospital, “The Volumetrics diet is great
            for people who like large volumes of food. However, it can be
            restrictive.” If diets generally make you feel as if you’re starving
            yourself, you may want to consider looking into this plan because it
            keeps you full and satiated.
          </summary>
          <dl>
            <dt>
              <strong>Pros</strong><img className="icon" src="./images/pro-icon.PNG" />
            </dt>
            <dd>- Teaches You How to Eat Right with Healthy Foods</dd>
            <dd>- Not a Crash Diet and Is Sustainable</dd>
            <dd>- No Rigid Rules</dd>
            <dt>
              <strong>Cons</strong><img className="icon" src="./images/con-icon.PNG" />
            </dt>
            <dd>- Can Be Time Consuming</dd>
            <dd>- Limited Online Research and Support</dd>
          </dl>
          <a
            className="nutrition-button-link"
            href="https://www.verywellfit.com/the-volumetrics-diet-what-you-need-to-know-3496210"
            target="_blank"
          >
            How to Volume!
          </a>
          <h3><img className="icon" src="./images/search-icon.PNG" />Check your Dietary Supplements with Labdoor:</h3>
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
            href="https://www.karger.com/Article/Abstract/111162"
            target="_blank"
          >
            Karger
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
            href=" https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2007.00915.x"
            target="_blank"
          >
            Keto & Epilepsy
          </a>
          <a
            className="sources-button"
            href="https://www.rush.edu/news/health-benefits-vegan-diet"
            target="_blank"
          >
            Vegan Benefits
          </a>
          <a
            className="sources-button"
            href="https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303"
            target="_blank"
          >
            Intermittent Fasting
          </a>
          <a
            className="sources-button"
            href="https://www.nm.org/healthbeat/healthy-tips/nutrition/pros-and-cons-of-ketogenic-diet"
            target="_blank"
          >
            NM: Keto
          </a>
          <a
            className="sources-button"
            href=" https://www.forbes.com/sites/jennifercohen/2020/01/23/hottest-diets-of-2020/?sh=373107725b35"
            target="_blank"
          >
            Diets 2020
          </a>
          <a
            className="sources-button"
            href="https://www.healthline.com/nutrition/vegan-diet-benefits#TOC_TITLE_HDR_8"
            target="_blank"
          >
            Healthline: Vegan
          </a>
          <a
            className="sources-button"
            href=" https://www.everydayhealth.com/diet-nutrition/the-volumetrics-diet.aspx"
            target="_blank"
          >
            EveryDayHealth: Fasting
          </a>
          <a
            className="sources-button"
            href="https://www.everydayhealth.com/diet-nutrition/ketogenic-diet/what-are-benefits-risks-keto-diet/"
            target="_blank"
          >
            EveryDayHealth: Keto
          </a>
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

export default WeightLoss;
