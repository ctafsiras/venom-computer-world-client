import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcuzuhaHhENQn3tluRl8HMk3vB4sz14Oc",
    authDomain: "venom-computer-world.firebaseapp.com",
    projectId: "venom-computer-world",
    storageBucket: "venom-computer-world.appspot.com",
    messagingSenderId: "106348438918",
    appId: "1:106348438918:web:5820abd141ea04e0c47807"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;