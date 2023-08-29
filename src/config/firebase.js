import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjs84uPckEVItrBMnwBihqeMR8jqteIvU",
    authDomain: "entregafinalrodriguez-17e6d.firebaseapp.com",
    projectId: "entregafinalrodriguez-17e6d",
    storageBucket: "entregafinalrodriguez-17e6d.appspot.com",
    messagingSenderId: "460125155215",
    appId: "1:460125155215:web:777ae5a7b9547db92825fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Ahora puedes usar Firestore

export default app; // Exporta la instancia inicializada de Firebase
