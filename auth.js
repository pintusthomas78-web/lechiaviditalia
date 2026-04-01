import { app } from "./firebase-config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

// REGISTRAZIONE
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messaggio = document.getElementById("messaggio");

    if (!email || !password) {
      messaggio.innerText = "Inserisci email e password";
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      messaggio.innerText = "Registrazione completata";
    } catch (error) {
      messaggio.innerText = error.message;
    }
  });
}

// LOGIN
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const messaggio = document.getElementById("messaggio");

    if (!email || !password) {
      messaggio.innerText = "Inserisci email e password";
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // PASSAGGIO ALLA PORTA
      window.location.href = "intro-video.html";

    } catch (error) {
      messaggio.innerText = "Errore: " + error.message;
    }
  });
}
