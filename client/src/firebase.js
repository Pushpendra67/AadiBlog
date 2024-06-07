// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aadi-blog-193d2.firebaseapp.com",
  projectId: "aadi-blog-193d2",
  storageBucket: "aadi-blog-193d2.appspot.com",
  messagingSenderId: "250435018489",
  appId: "1:250435018489:web:39828fb340330d38c40c28"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);