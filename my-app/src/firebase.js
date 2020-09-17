import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCzSBtl6PgOaRGCks3QqQ5VuyEr-Br_P7w",
  authDomain: "task-876ca.firebaseapp.com",
  databaseURL: "https://task-876ca.firebaseio.com",
  projectId: "task-876ca",
  storageBucket: "task-876ca.appspot.com",
  messagingSenderId: "441880355540",
  appId: "1:441880355540:web:921562ddf8da2d1cd45141",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
