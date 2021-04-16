// TODO: import the firebase core module
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: import the auth package from firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgi7AP-zFVaDH8f4QSFnxuByjBwCr1a5c",
  authDomain: "wineapp-689a9.firebaseapp.com",
  projectId: "wineapp-689a9",
  storageBucket: "wineapp-689a9.appspot.com",
  messagingSenderId: "210519300474",
  appId: "1:210519300474:web:1cda1f1db14c108e291ec3",
  measurementId: "G-1C2P8QDH2K"
};
// TODO: initialize the firebase app
firebase.initializeApp(firebaseConfig);

// TODO: set up a firebase provider
const provider = new firebase.auth.GoogleAuthProvider();
// TODO: configure the firebase provider
const auth = firebase.auth();
// TODO: set up auth actions i.e. login, logout etc
function login() {
  auth.signInWithPopup(provider);
}

function logout() {
  auth.signOut();
}
// TODO: export our actions

export {
  auth,
  login,
  logout,
}