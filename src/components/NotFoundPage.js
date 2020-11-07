import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";
import Header from "./Header";

const NotFoundPage = () => (
  <div>
    <Header />
    <SubHeader />
    <div className="page-content">
    <div>
        <h1 className="page-title">404! The page you are looking for cannot be found!</h1>
      </div>
       <Link to="/"  className="button button-link"> Go Home </Link>
    </div>
  </div>
);

export default NotFoundPage;
