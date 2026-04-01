import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbuc8hgLd4diUMJbDdITx-oQZn-mswLIA",
  authDomain: "lechiaviditalia.firebaseapp.com",
  projectId: "lechiaviditalia",
  storageBucket: "lechiaviditalia.firebasestorage.app",
  messagingSenderId: "97709098921",
  appId: "1:97709098921:web:b17a87dd3d28fb7a1ae6b8",
  measurementId: "G-SM77N1DH8B"
};

const app = initializeApp(firebaseConfig);

export { app };
