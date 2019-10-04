import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {firebaseConfig} from "./config.js"

export default (context, inject) => {
  let fireApp;
    
  if (!firebase.apps.length) {
    fireApp = firebase.initializeApp(firebaseConfig);
  } else {
    fireApp = firebase.app();
  }

  inject("fireApp", fireApp);
};