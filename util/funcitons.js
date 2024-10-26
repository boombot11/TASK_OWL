// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from 'axios'

import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore"; 
const firebaseConfig = {
    apiKey: "AIzaSyACYCV69yHCMEgfQB2ry72GS-R3YatyCXk",
    authDomain: "workowl-d8f32.firebaseapp.com",
    projectId: "workowl-d8f32",
    storageBucket: "workowl-d8f32.appspot.com",
    messagingSenderId: "810217166724",
    appId: "1:810217166724:web:ca154ffd591be4723d2fd1",
    measurementId: "G-BR1S0PNP91"
  };
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function addTask(task) {
    try {
        const docRef = await addDoc(collection(db, "task"), task);
        return docRef.id; // Return the ID of the newly created task
    } catch (e) {
        throw new Error("Error adding task: " + e.message);
    }
}

export  async function getAllTasks() {
    const querySnapshot = await getDocs(collection(db, "task"));
    const tasks = [];
    querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks;
}

export async function getTaskById(taskId) {
    const docRef = doc(db, "task", taskId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        throw new Error("No such task!");
    }
}

export async function getTasksByPriorityAndStatus(priority, status) {
    const q = query(collection(db, "task"), where("priority", "==", priority), where("status", "==", status));
    const querySnapshot = await getDocs(q);
    
    const tasks = [];
    querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
    });
    
    return tasks;
}

// Customer Collection Functions

export async function getCustomerById(customerName) {
    const customersRef = collection(db, "customer");
    const q = query(customersRef, where("name", "==", customerName)); // Assuming the field is named "name"
    
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    if (querySnapshot.empty) {
        throw new Error("No customer found with that name!");
    }

    const customers = [];
    querySnapshot.forEach((doc) => {
        customers.push({ id: doc.id, ...doc.data() });
    });

    return customers; // Return an array of customers
}

// This function sends the message data to the n8n webhook URL
const sendMessageToN8n = async (messageData) => {
  try {
    const n8nWebhookUrl = 'https://prod-teachafy-n8n.9ahjpy.easypanel.host/webhook/d97b9073-49f3-4abc-a8a2-906a7eede06d'; // Your n8n Webhook URL

    const webhookPayload = {
      headers: {
        "content-type": "application/json"
      },
      body: {
        "MessageSid": messageData.messageSid,
        "Body": messageData.body,  // Message text from the user
        "From": messageData.from,  // The user ID or number
        "To": messageData.to,      // The platform bot ID
        "SmsStatus": "received",   // Or any other status you want to set
        "ApiVersion": "v1"         // Your platform API version
      }
    };

    const response = await axios.post(n8nWebhookUrl, webhookPayload);
    console.log('Successfully sent the webhook:', response.data);
  } catch (error) {
    console.error('Error sending the webhook:', error.message);
  }
};

// Example usage:
const messageData = {
  messageSid: "12345abcde",
  body: "add a task 'pixel paranoia' and due as tomorrow 8 pm",
  from: "user-123",
  to: "bot-xyz"
};

sendMessageToN8n(messageData);
