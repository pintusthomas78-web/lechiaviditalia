import { app } from "./firebase-config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const messaggio = document.getElementById("messaggio");

// REGISTRAZIONE
if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      messaggio.innerText = "Inserisci email e password";
      return;
    }

    if (password.length < 6) {
      messaggio.innerText = "La password deve avere almeno 6 caratteri";
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      messaggio.innerText = "Registrazione completata";
    } catch (error) {
      messaggio.innerText = "Errore: " + error.message;
    }
  });
}

// ACCESSO
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      messaggio.innerText = "Inserisci email e password";
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "intro-video.html";
    } catch (error) {
      messaggio.innerText = "Errore: " + error.message;
    }
  });
}
