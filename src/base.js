import firebase from 'firebase/app'
import"firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyByD295W0KZ2eFAIxsQAJwAoZUGQNeiD8U",
    authDomain: "ait715firstfirebase.firebaseapp.com",
    projectId: "ait715firstfirebase",
    storageBucket: "ait715firstfirebase.appspot.com",
    messagingSenderId: "441226575806",
    appId: "1:441226575806:web:4853218ae02940b7a403ef",
    measurementId: "G-2V750XV68R"
  });

export default app;

// process.env.REACT_APP_APIKEY
// process.env.REACT_APP_DOMAIN
// process.env.REACT_APP_DATABASE
// process.env.REACT_APP_PROJECTID
// process.env.REACT_APP_STORAGE
// process.env.REACT_APP_SENDER
// process.env.REACT_APP_MEASUREMENT