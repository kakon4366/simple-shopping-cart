// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAs9yxVRsuvPeu7Xi21ZMDjq7KJ_nfyBzc",
	authDomain: "ema-john-simple-c0bf8.firebaseapp.com",
	projectId: "ema-john-simple-c0bf8",
	storageBucket: "ema-john-simple-c0bf8.appspot.com",
	messagingSenderId: "267984531651",
	appId: "1:267984531651:web:19076e9731d70db7977276",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
