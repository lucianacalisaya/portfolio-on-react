import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrfrjzXrpdHBTCMMBOkv_jj3psoa3aKww",
  authDomain: "portfoliobackend-aae35.firebaseapp.com",
  projectId: "portfoliobackend-aae35",
  storageBucket: "portfoliobackend-aae35.appspot.com",
  messagingSenderId: "1090156577272",
  appId: "1:1090156577272:web:16d3d38f7c061b2f7a160d"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)