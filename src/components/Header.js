import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = (
  { startLogout } // exported for testing purposes
) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
        <img className="header-logo" src="./images/header-logo.PNG" />
         
        </Link>
        
        <button className="header-logout" onClick={startLogout}> Logout </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => {
    dispatch(startLogout());
  },
});
export default connect(undefined, mapDispatchToProps)(Header);
//mapDispatch.. lets us get startLogout and use it in a way

// <button className="button button--link2">Account</button>