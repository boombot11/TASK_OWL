// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore"; 
import express from "express";
import cors from 'cors';
import router from "./routes/router.js";

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

const expressApp = express();
expressApp.use(express.json()); // Middleware to parse JSON bodies
expressApp.use(cors());

expressApp.use(router)
// Task Collection Functions

// Start the server
const PORT = process.env.PORT || 3000;
expressApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
