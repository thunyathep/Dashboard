// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAru_xbZeaaxlg3XogTI8YJcUt0nmZDRGo",
  authDomain: "jitdadmin.firebaseapp.com",
  projectId: "jitdadmin",
  storageBucket: "jitdadmin.appspot.com",
  messagingSenderId: "647863380324",
  appId: "1:647863380324:web:bc26166af1ade9cf937271",
  measurementId: "G-YLXFMNCBQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app, analytics};