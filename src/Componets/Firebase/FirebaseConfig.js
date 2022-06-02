import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDrqilKZmW1G930qlO4MBti47s2XA8V9HM",
    authDomain: "practicepro-dcb22.firebaseapp.com",
    projectId: "practicepro-dcb22",
    storageBucket: "practicepro-dcb22.appspot.com",
    messagingSenderId: "619038669449",
    appId: "1:619038669449:web:0ac6bdfbab42343bf7a458"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;