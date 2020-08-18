import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_Hls1UtzOq-ZUHn1-QlsjIuE8MjkE_MU",
    authDomain: "vue-learn-df308.firebaseapp.com",
    databaseURL: "https://vue-learn-df308.firebaseio.com",
    projectId: "vue-learn-df308",
    storageBucket: "vue-learn-df308.appspot.com",
    messagingSenderId: "491208496778",
    appId: "1:491208496778:web:a6a5ad15d4b0a1d77fff73",
    measurementId: "G-GS8XP1DB2Z"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();
  firebase.analytics();
