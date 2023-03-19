import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmkZNxHtbatrI6d3GzcWRQALebeuhd7Z0",
  authDomain: "jitd-application.firebaseapp.com",
  projectId: "jitd-application",
  storageBucket: "jitd-application.appspot.com",
  messagingSenderId: "846534377693",
  appId: "1:846534377693:web:e617510a73a69054681b34",
  measurementId: "G-52JZZG2SWQ"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }