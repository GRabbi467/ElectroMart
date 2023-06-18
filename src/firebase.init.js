// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: process.env.REACT_APP_auth_domain,
  projectId: process.env.REACT_APP_project_id,
  storageBucket: process.env.REACT_APP_storage_bucket,
  messagingSenderId: process.env.REACT_APP_message_sender_id,
  appId: process.env.REACT_APP_app_id
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;