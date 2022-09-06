import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCeft5T3dHXWtHt3aTTCGy_En8TTawJf9w",
  authDomain: "test1-da8bc.firebaseapp.com",
  projectId: "test1-da8bc",
  storageBucket: "test1-da8bc.appspot.com",
  messagingSenderId: "52247311466",
  appId: "1:52247311466:web:223eed4bc5d071da598613",
  measurementId: "G-0S3E3JQP86"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;