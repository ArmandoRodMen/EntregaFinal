/*
    Armando Rodriguez
    Entrega Final
*/

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Obtén las credenciales de Firebase desde las variables de entorno
const firebaseConfig = {
    apiKey: "AIzaSyCjs84uPckEVItrBMnwBihqeMR8jqteIvU",
    authDomain: "entregafinalrodriguez-17e6d.firebaseapp.com",
    projectId: "entregafinalrodriguez-17e6d",
    storageBucket: "entregafinalrodriguez-17e6d.appspot.com",
    messagingSenderId: "460125155215",
    appId: "1:460125155215:web:777ae5a7b9547db92825fa",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app;
/*
N.B: de momento .env manda demasiados errores en su deploy 
(V.G: 
<noscript>
    You need to enable JavaScript to run this app.
</noscript>)

Por ende omito la variable de entrno pero, su respectiva declaración es:

REACT_APP_FIREBASE_apiKey=AIzaSyCjs84uPckEVItrBMnwBihqeMR8jqteIvU
REACT_APP_FIREBASE_authDomain=entregafinalrodriguez-17e6d.firebaseapp.com
REACT_APP_FIREBASE_projectId=entregafinalrodriguez-17e6d
REACT_APP_FIREBASE_storageBucket=entregafinalrodriguez-17e6d.appspot.com
REACT_APP_FIREBASE_messagingSenderId=460125155215
REACT_APP_FIREBASE_appId=1:460125155215:web:777ae5a7b9547db92825fa

*/


/*
    Fin de código
*/