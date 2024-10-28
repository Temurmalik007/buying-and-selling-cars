import firebase from "firebase";
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRf9j4q5IHkVvQJjNNmdQ9mZ7CQ-ZZeXs",
    authDomain: "car-dealership-9c672.firebaseapp.com",
    projectId: "car-dealership-9c672",
    storageBucket: "car-dealership-9c672.appspot.com",
    messagingSenderId: "898235282048",
    appId: "1:898235282048:web:956eddd20c7220fe71ac65",
    measurementId: "G-PEEYZ06PL6"
  };

firebase.initializeApp(firebaseConfig)

const carMenu = firebase.firestore()

export{carMenu}
