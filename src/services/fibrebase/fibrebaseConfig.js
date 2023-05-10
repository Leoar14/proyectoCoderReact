import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBf5-EmRd8WqA8IOkjWji9JRH6s5fikY04",
    authDomain: "backend-app-react-coder0.firebaseapp.com",
    projectId: "backend-app-react-coder0",
    storageBucket: "backend-app-react-coder0.appspot.com",
    messagingSenderId: "1013177226309",
    appId: "1:1013177226309:web:f8f66365c902662002ff2c"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)