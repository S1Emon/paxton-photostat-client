// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCp_DkxUedAGz1afdghYJ7hnShFKFiX_CM",
    authDomain: "paxton-photostat.firebaseapp.com",
    projectId: "paxton-photostat",
    storageBucket: "paxton-photostat.appspot.com",
    messagingSenderId: "171527554748",
    appId: "1:171527554748:web:1f4c5b991400707cfef2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;