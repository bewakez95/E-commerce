// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/firestore";
import { getFirestore } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: "912545647228",
  appId: "1:912545647228:web:c1e9bd47468610d9efd7f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // used for database
export const auth = getAuth(app);
