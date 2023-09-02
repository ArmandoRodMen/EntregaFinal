/*
    Armando Rodriguez
    Entrega Final
*/

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


console.log("apiKey", process.env.REACT_APP_FIREBASE_apiKey);
console.log("authDomain", process.env.REACT_APP_FIREBASE_authDomain);
console.log("projectID", process.env.REACT_APP_FIREBASE_projectId);
console.log("storageBucket", process.env.REACT_APP_FIREBASE_storageBucket);
console.log("messagingSenderId", process.env.REACT_APP_FIREBASE_messagingSenderId);
console.log("appId", process.env.REACT_APP_FIREBASE_appId)

// Obtén las credenciales de Firebase desde las variables de entorno
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_apiKey,
    authDomain: process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_appId,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
/*
N.B: 
*/


/*
    Fin de código
*/