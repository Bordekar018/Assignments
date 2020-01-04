import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCJqD1uuJEJpbNAjiLi4jBJwDLsNglxn48",
  authDomain: "product-df526.firebaseapp.com",
  databaseURL: "https://product-df526.firebaseio.com",
  projectId: "product-df526",
  storageBucket: "product-df526.appspot.com",
  messagingSenderId: "673111510408",
  appId: "1:673111510408:web:959e84c2d75a8c6ccbfe3d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref("/product");
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
