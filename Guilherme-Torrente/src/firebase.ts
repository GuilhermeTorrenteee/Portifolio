import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbYP8SJnoCo08R4h0F6_-nihgvxwnGPkc",
  authDomain: "guilherme-torrente.firebaseapp.com",
  projectId: "guilherme-torrente",
  storageBucket: "guilherme-torrente.firebasestorage.app",
  messagingSenderId: "24386686145",
  appId: "1:24386686145:web:e628234c9dacd9a4ae5840",
  measurementId: "G-VX4DCT9P2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
