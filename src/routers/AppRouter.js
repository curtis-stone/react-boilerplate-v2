import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import uuid from 'uuid'
import createHistory from 'history/createBrowserHistory'; // create my own history
import LoginPage from "../components/LoginPage";
import DashboardPage from "./../components/DashboardPage";
import NotFoundPage from "./../components/NotFoundPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ProgramsPage from "../components/ProgramsPage";
import ExercisesPage from "../components/ExercisesPage";
import AboutPage from "../components/AboutPage";
import NutritionPage from "../components/NutritionPage";
import GymGuides from "../components/GymGuides";
import LimitedGymGuides from "../components/LimitedGymGuides";
import BodyWeightGuides from "../components/BodyWeightGuides";

import LowerExercises from "../components/LowerExercises";
import AbExercises from "../components/AbExercises/AbExercises";
import StrengthProgram from "../components/StrengthProgram/StrengthProgram";
import ArmsGym from "../components/ArmGymPackage/ArmsGym"
import WeightLoss from "../components/Weight/Loss"
import WeightGain from "../components/Weight/Gain"
import WeightMaintenance from "../components/Weight/Maintenance"
import Shop from "../components/Shop";
export const history = createHistory();

import PDF from '../playground/pdflink'
import HypertrophyProgram from "../components/HypertrophyProgram.js/HyperTrophyProgram";
import LegsGym from "../components/LegGymPackage/LegsGym";
import FullBodyGym from "../components/FullGymPackage/FullbodyGym";
import ArmsDumbbell from "../components/DBArms/ArmsDumbbell";
import LegsDumbbell from "../components/DBLegs/LegsDumbbell";
import FullBodyDumbbell from "../components/DBFullbody/FullBodyDumbbell";
import ArmsBodyWeight from "../components/BWArms/ArmsBodyWeight";
import LegsBodyWeight from "../components/BWLegs/LegsBodyWeight";
import FullBodyBodyWeight from "../components/BWFullBody/FullBodyBodyWeight";
import HelpPage from "../components/Help";

import UpperExerciseDirectory from "../components/UpperBodyExercises/UpperExercise"
import UpperBodyGym from '../components/UpperBodyExercises/Gym'
import UpperBodyDumbbell from '../components/UpperBodyExercises/Dumbbell';
import UpperBodyBodyWeight from '../components/UpperBodyExercises/BodyWeight';

import LowerExerciseDirectory from "../components/LowerBodyExercises/LowerBodyExercises"
import LowerBodyGym from "../components/LowerBodyExercises/Gym";
import LowerBodyDumbbell from "../components/LowerBodyExercises/Dumbbell";
import LowerBodyBodyWeight from "../components/LowerBodyExercises/BodyWeight";

import FullBodyExerciseDirectory from "../components/FullBodyExercises/FullBodyExercises";
import FullBodyGymExercises from "../components/FullBodyExercises/Gym";
import FullBodyDumbbellExercises from "../components/FullBodyExercises/Dumbbell";
import FullBodyBodyWeightExercises from "../components/FullBodyExercises/BodyWeight";
import SupplementsPage from "../components/Supplements/SupplementsPage";
import VitaminsPage from "../components/Supplements/Vitamins";

 // npm-hisotry: react router usage that is manipulated to outsorce history call
 // use regular "<Router />" instead of the BrowserROuter that has its own history already built in

 const id = uuid()
 const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} activeClassName='is-active' />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/exercise-vault" component={ExercisesPage} />
        <PrivateRoute path="/programs" component={ProgramsPage} />
        <PrivateRoute path="/nutrition" component={NutritionPage} />
        <PrivateRoute path="/about" component={AboutPage} />
        <PrivateRoute path="/gym-guides" component={GymGuides} activeClassName='is-active' />
        <PrivateRoute path="/limited-guides" component={LimitedGymGuides} />
        <PrivateRoute path="/bodyweight-guides" component={BodyWeightGuides} />
        
        <PrivateRoute path="/lowerbody-exercises" component={LowerExercises} />
        <PrivateRoute path="/ab-core-exercises" component={AbExercises} />

        <PrivateRoute path="/strength-program" component={StrengthProgram} />
        <PrivateRoute path="/hypertrophy-program" component={HypertrophyProgram} />


        <PrivateRoute path="/arms-workout-package-gym" component={ArmsGym} />
        <PrivateRoute path="/legs-workout-package-gym" component={LegsGym} />
        <PrivateRoute path="/fullbody-workout-package-gym" component={FullBodyGym} />


        <PrivateRoute path="/arms-workout-package-dumbbell" component={ArmsDumbbell} />
        <PrivateRoute path="/legs-workout-package-dumbbell" component={LegsDumbbell} />
        <PrivateRoute path="/fullbody-workout-package-dumbbell" component={FullBodyDumbbell} />


        <PrivateRoute path="/arms-workout-package-bodyweight" component={ArmsBodyWeight} />
        <PrivateRoute path="/legs-workout-package-bodyweight" component={LegsBodyWeight} />
        <PrivateRoute path="/fullbody-workout-package-bodyweight" component={FullBodyBodyWeight} />
        
        <PrivateRoute path="/upperbody-exercises-directory" component={UpperExerciseDirectory} />
        <PrivateRoute path="/upperbody-exercises-gym" component={UpperBodyGym} />
        <PrivateRoute path="/upperbody-exercises-dumbbell" component={UpperBodyDumbbell} />
        <PrivateRoute path="/upperbody-exercises-body-weight" component={UpperBodyBodyWeight} />
       
        <PrivateRoute path="/lowerbody-exercises-directory" component={LowerExerciseDirectory} />
        <PrivateRoute path="/lowerbody-exercises-gym" component={LowerBodyGym} />
        <PrivateRoute path="/lowerbody-exercises-dumbbell" component={LowerBodyDumbbell} />
        <PrivateRoute path="/lowerbody-exercises-body-weight" component={LowerBodyBodyWeight} />
       
        <PrivateRoute path="/fullbody-exercises-directory" component={FullBodyExerciseDirectory} />
        <PrivateRoute path="/fullbody-exercises-gym" component={FullBodyGymExercises} />
        <PrivateRoute path="/fullbody-exercises-dumbbell" component={FullBodyDumbbellExercises} />
        <PrivateRoute path="/fullbody-exercises-body-weight" component={FullBodyBodyWeightExercises} />

        <PrivateRoute path="/weight-loss" component={WeightLoss} />
        <PrivateRoute path="/weight-gain" component={WeightGain} />
        <PrivateRoute path="/weight-maintenance" component={WeightMaintenance} />
        <PrivateRoute path="/supplements" component={SupplementsPage} />
        <PrivateRoute path="/vitamins" component={VitaminsPage} />
       
        <PrivateRoute path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

// exact={true} sets paths to be absolute matches
// switch moves through routes and stops when it finds a match. never checks the rest
// switch gives the 404 page when no path matches are found

//dynamic routing => adding /:id dynamically matches whatever comes after the / and gives us access to that value

export default AppRouter;
