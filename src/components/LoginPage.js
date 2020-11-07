import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { startLoginFB } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
    
      <h1 className="box-layout__title">
        <img className="login-logo" src="../images/header-logo.PNG" />
      </h1>
      <p className="box-layout__description">
        <i className="box-layout__description">"Your personal fitness guide."</i>
      </p>
      <button onClick={startLogin} className="button">
        {" "}
        Login with Google
      </button>
      <p className="box-layout__signature">
        Developed by CJ Stone
        <br/>
        Powered by React
      </p>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => {
    dispatch(startLogin());
  },
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

// 6PERCENT <sup className="box-layout__title">&trade;</sup>