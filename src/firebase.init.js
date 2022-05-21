// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcuzuhaHhENQn3tluRl8HMk3vB4sz14Oc",
    authDomain: "venom-computer-world.firebaseapp.com",
    projectId: "venom-computer-world",
    storageBucket: "venom-computer-world.appspot.com",
    messagingSenderId: "106348438918",
    appId: "1:106348438918:web:5820abd141ea04e0c47807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;