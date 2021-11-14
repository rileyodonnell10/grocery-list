import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/functions"

const firebaseConfig = {
    apiKey: "AIzaSyBV6a_MpRF2rnR2g0cF597hp3EhQirjQVI",
    authDomain: "grocery-list-b2f07.firebaseapp.com",
    projectId: "grocery-list-b2f07",
    storageBucket: "grocery-list-b2f07.appspot.com",
    messagingSenderId: "540914953739",
    appId: "1:540914953739:web:429b0d21e30fcc4fce610e"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;