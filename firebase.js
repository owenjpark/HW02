import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjGTLJPrO5szM8awTEOrEO6LIZbkl06Kg",
  authDomain: "hw02-d2e10.firebaseapp.com",
  projectId: "hw02-d2e10",
  storageBucket: "hw02-d2e10.appspot.com",
  messagingSenderId: "657906877122",
  appId: "1:657906877122:web:e79af47ae33ed01b28f15b",
  measurementId: "G-WMB15W6VY0"
};

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps()[0];
}

const auth = getAuth(app);

export { auth }