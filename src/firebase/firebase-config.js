import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA5cBEk3PyY1axRONDqRzSoWVnA4RUpyrA",
    authDomain: "react-curso-fernando.firebaseapp.com",
    databaseURL: "https://react-curso-fernando.firebaseio.com",
    projectId: "react-curso-fernando",
    storageBucket: "react-curso-fernando.appspot.com",
    messagingSenderId: "731051658134",
    appId: "1:731051658134:web:0426da6313fefd091c6bb7"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}