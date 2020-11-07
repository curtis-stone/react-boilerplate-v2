import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css"; // this css reset browser css base and allows styles to work in cross-browser settings!
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import AppRouter, { history } from "./routers/AppRouter";
import { firebase } from './firebase/firebase';
//Redux imports
import configureStore from "./store/configure-store";
import LoadingPage from './components/LoadingPage'
import { login, logout } from "./actions/auth";

const store = configureStore();

const jsx = (
  <Provider store={store}> 
  <AppRouter />
  </Provider>
);

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) { // if we have not rendered already, do this...
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true
  }
}
// Provider component must have a prop that points to your redux store
ReactDOM.render(<LoadingPage />, document.getElementById("app"));


firebase.auth().onAuthStateChanged((user) => { // takes callback function and runs it when auth state is changed
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') { // ONLY if user is on login page ('/'), then redirect to dashboard
      history.push('/dashboard')
    }
       // the page will render
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
}) // runs every time auth state changes