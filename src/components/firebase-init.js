// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkvHi_6UehSumEXd5gl_eb1Thr-9Kt3L4",
  authDomain: "warehouse-25088.firebaseapp.com",
  projectId: "warehouse-25088",
  storageBucket: "warehouse-25088.appspot.com",
  messagingSenderId: "995806131624",
  appId: "1:995806131624:web:f29644bf9aeea76d20199d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;