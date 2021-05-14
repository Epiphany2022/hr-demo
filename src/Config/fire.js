import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCvJogfBroX8JJWZjJcK3ApBlPY0pHbSx0",
    authDomain: "easy-erp-d7a87.firebaseapp.com",
    projectId: "easy-erp-d7a87",
    storageBucket: "easy-erp-d7a87.appspot.com",
    messagingSenderId: "263216348904",
    appId: "1:263216348904:web:eb88be33d00ea792ced35d"
  };
  // Initialize Firebase
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;