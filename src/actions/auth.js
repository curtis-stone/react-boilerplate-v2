import {
  firebase,
  googleAuthProvider,
  FacebookAuthProvider,
  AuthProvider,
  // FacebookAuthProvider,
} from "../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
    // return firebase.auth().signInWithPopup(FacebookAuthProvider);
    // return in chain so others can attatch to it
    // signInWIthPopop takes provider as only arg
  };
};
// export const startLoginFB = () => {
//   return (dispatch) => {
//     return firebase.auth().signInWithPopup(FacebookAuthProvider);
//     // return in chain so others can attatch to it
//     // signInWIthPopop takes provider as only arg
//   };
// };

// Sign in using a popup.
// export const startLoginFB = () => {
//   var provider = new firebase.auth.FacebookAuthProvider();
//   provider.addScope("user_birthday");

//   return firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function (result) {
//       // This gives you a Facebook Access Token.
//       var token = result.credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//     });
// };

export const logout = (uid) => ({
  type: "LOGOUT",
});

// export const confirmMessage = confirm('Are you sure?')

export const startLogout = () => {
  if (confirm("Are you sure want to log out?")) {
    return (dispatch) => {
      return firebase.auth().signOut();
      // return in chain so others can attatch to it
      // signOut() takes no arg's
    };
  }
};
