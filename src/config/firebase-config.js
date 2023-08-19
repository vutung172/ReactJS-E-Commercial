// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx0dXTh_WFVKIAJdJ2kFkD3W8Cu2kstgw",
  authDomain: "e-website-4efbb.firebaseapp.com",
  projectId: "e-website-4efbb",
  storageBucket: "e-website-4efbb.appspot.com",
  messagingSenderId: "28309436023",
  appId: "1:28309436023:web:afec99117d0ce6a5873872",
  measurementId: "G-TWP84ED62X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Init Storage
export const storage = getStorage(app);
