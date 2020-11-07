import React from "react";

import SubHeader from "../SubHeader";

const VitaminsPage = (props) => (
  <div>
    <SubHeader />
    <div className="page-content">
      <div>
        <h1 className="page-title">
          Vitamin Chart{" "}
          <img className="header-icon" src="./images/vitamins-icon.PNG" />
        </h1>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th colSpan="1">Vitamin</th>
              <th colSpan="1">Benefit</th>
              <th colSpan="1">Sources</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>
                Important in growth and cell development. It also promotes
                healthy skin, hair, nails, gums, glands, bones and teeth;
                prevents night blindness and may help prevent lung cancer.
              </td>
              <td>
                Salmon, other cold-water fish, egg yolks, fortified dairy
                products.
              </td>
            </tr>
            <tr>
              <td>D</td>
              <td>
                Aids in calcium absorption, and builds and maintains strong
                bones and teeth.
              </td>
              <td>
                Fortified milk, fortified soy/rice beverages, butter, egg yolks,
                fatty fish, fish-liver oil; made by the body when exposed to the
                sun.
              </td>
            </tr>
            <tr>
              <td>E</td>
              <td>
                Protects fatty acids; maintains muscles and red blood cells; and
                serves as an important antioxidant.
              </td>
              <td>
                Eggs, vegetable oils, margarine, mayonnaise; nuts, seeds,
                fortified cereals.
              </td>
            </tr>
            <tr>
              <td>K</td>
              <td>Essential for proper blood clotting.</td>
              <td>spinach, broccoli, green leafy vegetables, liver.</td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                Strengthens blood vessel walls; promotes wound healing and iron
                absorption; helps prevent atherosclerosis; supports immunity;
                serves as a key antioxidant.
              </td>
              <td>
                Citrus fruits, juices, melons, berries, peppers, broccoli,
                potatoes.
              </td>
            </tr>
            <tr>
              <td>B1</td>
              <td>
                Important for maintaining a healthy metabolism. It also helps
                maintain normal digestion, appetite and proper nerve function.
              </td>
              <td>Pork, legumes, nuts, seeds, fortified cereals, grains.</td>
            </tr>
            <tr>
              <td>B2</td>
              <td>
                Essential for energy metabolism. It also aids adrenal function,
                supports normal vision and helps maintain healthy skin.
              </td>
              <td>
                Fortified cereals, grains, lean meat, poultry, dairy products,
                fortified soy/rice beverages, raw mushrooms.
              </td>
            </tr>
            <tr>
              <td>B3</td>
              <td>
                Used to metabolize energy and promote normal growth. In large
                doses, Vitamin B3 can also lower cholesterol.
              </td>
              <td>
                Lean meats, poultry, seafood, milk; eggs, legumes, fortified
                breads, cereals.
              </td>
            </tr>
            <tr>
              <td>B5</td>
              <td>Aids energy metabolism and normalizes blood sugar levels.</td>
              <td>Almost all foods contain Vitamin B5.</td>
            </tr>
            <tr>
              <td>B6</td>
              <td>
                Promotes protein metabolism, metabolism of carbohydrates and the
                release of energy. It also plays a role in proper nerve function
                and the synthesis of red blood cells.
              </td>
              <td>
                Meat, fish, poultry, grains, cereals, bananas, green leafy
                vegetables, potatoes, soybeans.
              </td>
            </tr>
            <tr>
              <td>B7</td>
              <td>
                (also known as biotin) Is an essential vitamin that plays an
                important role in maintaining a healthy metabolism.
              </td>
              <td>Egg yolks, soybeans, whole grains, nuts, yeast.</td>
            </tr>
            <tr>
              <td>B9</td>
              <td>
                To make DNA, RNA, red blood cells, and synthesize certain amino
                acids. Vitamin B9 is also important for pregnant women, as it
                helps prevent birth defects.
              </td>
              <td>
                Liver, yeast, leafy green vegetables, asparagus, orange juice,
                fortified flour, avocados; legumes.
              </td>
            </tr>
            <tr>
              <td>B12</td>
              <td>
                {" "}
                Used to make red blood cells, DNA, RNA, and myelin for nerve
                fibers.
              </td>
              <td>All animal products.</td>
            </tr>
            <tr>
              <td>Iron</td>
              <td>
                Iron forms part of haemoglobin, the pigment that transports
                oxygen from the lungs to the muscles. It's also essential for
                maintaining high energy levels, and it helps keep your immune
                system strong.
              </td>
              <td>
                red meat, beans, nuts, dried fruit, fortified breakfast cereals,
                soy bean flour
              </td>
            </tr>
            <tr>
              <td>Selenium</td>
              <td>
                essential trace mineral that has been shown to boost the immune
                system, fight cancer and prevent heart disease. It can also
                maintain your mood, prevent depression and impede free radical
                damage from weight training.
              </td>
              <td>Fresh tuna, sunflower seeds, wholemeal bread, brazil nuts</td>
            </tr>
            <tr>
              <td>Omega 3</td>
              <td>
                Essential to get omega 3 fatty acids from our diet, because the
                body can't make them. Eating these fats improve blood flow and
                makes hearts healthier. The fats also suppress hunger, helping
                you to lose weight.
              </td>
              <td>Brazil nuts, flaxseed oil, salmon, mackerel, walnuts</td>
            </tr>
            <tr>
              <td>Copper</td>
              <td>
                As the third most abundant trace mineral in the body, copper
                helps protect the cardiovascular, nervous and skeletal system.
                It also strengthens the tendons needed to lift weights.
              </td>
              <td>Peanuts, sardines in tomato sauce, crab, sunflower seeds</td>
            </tr>
            <tr>
              <td>Magnesium</td>
              <td>
                Found in the muscles, soft tissues and body fluids, magnesium
                plays a vital part in muscle contraction and helps to boost your
                energy levels. It can also reduce fatigue and muscle cramps.
              </td>
              <td>Green leafy veg, garlic, seeds, nuts, bran</td>
            </tr>
            <tr>
              <td>Zinc</td>
              <td>
                Enables your body to produce muscle-building testosterone. It
                also promotes recovery from exercise, boosts fertility and
                increases your number of infection-fighting T-cells.
              </td>
              <td>Red meat, eggs, pulses, pumpkin seeds, cheese</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default VitaminsPage;
