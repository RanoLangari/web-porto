import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs1J96xqwxrymTFUTPV5-OQp-gEDTOTK4",
  authDomain: "web-porto-aee01.firebaseapp.com",
  projectId: "web-porto-aee01",
  storageBucket: "web-porto-aee01.appspot.com",
  messagingSenderId: "607445072530",
  appId: "1:607445072530:web:2b635dcf997137bf612703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };  