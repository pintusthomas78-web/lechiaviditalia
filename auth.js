import { app } from "./firebase-config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth(app);

const messaggio = document.getElementById("messaggio");

// ===== ACCESSO =====
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

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

// ===== REGISTRAZIONE =====
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {

    const nickname = document.getElementById("nickname").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirm = document.getElementById("confirmPassword").value.trim();

    if (!nickname || !email || !password || !confirm) {
      messaggio.innerText = "Compila tutti i campi";
      return;
    }

    if (password.length < 6) {
      messaggio.innerText = "Password minimo 6 caratteri";
      return;
    }

    if (password !== confirm) {
      messaggio.innerText = "Le password non coincidono";
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      // salvo nickname (temporaneo)
      localStorage.setItem("nickname", nickname);

      messaggio.innerText = "Registrazione completata";
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        messaggio.innerText = "Email già registrata. Usa ACCEDI.";
      } else {
        messaggio.innerText = "Errore: " + error.message;
      }
    }
  });
}
