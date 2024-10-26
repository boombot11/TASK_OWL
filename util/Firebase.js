// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACYCV69yHCMEgfQB2ry72GS-R3YatyCXk",
  authDomain: "workowl-d8f32.firebaseapp.com",
  projectId: "workowl-d8f32",
  storageBucket: "workowl-d8f32.appspot.com",
  messagingSenderId: "810217166724",
  appId: "1:810217166724:web:ca154ffd591be4723d2fd1",
  measurementId: "G-BR1S0PNP91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;