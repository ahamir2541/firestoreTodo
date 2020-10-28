import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCfnmPmgZAkjyQFYDND5OkJ9lhpmHE90Cw",
    authDomain: "contextfireprac.firebaseapp.com",
    databaseURL: "https://contextfireprac.firebaseio.com",
    projectId: "contextfireprac",
    storageBucket: "contextfireprac.appspot.com",
    messagingSenderId: "788671151295",
    appId: "1:788671151295:web:b2a5ddb85ecc1bd7edda0a",
    measurementId: "G-F2PJETDHJQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase
