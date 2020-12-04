import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCk07DOjQvU3A_uZPIw-Pzn8VOq1EWOUYE",
  authDomain: "amz-mjghr.firebaseapp.com",
  databaseURL: "https://amz-mjghr.firebaseio.com",
  projectId: "amz-mjghr",
  storageBucket: "amz-mjghr.appspot.com",
  messagingSenderId: "646974756057",
  appId: "1:646974756057:web:54e79a7a8ba9d00662dac8",
  measurementId: "G-609GD9FB0E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
