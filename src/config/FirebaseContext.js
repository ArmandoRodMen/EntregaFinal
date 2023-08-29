import React, { createContext, useContext } from 'react';

// Crea el contexto
const FirebaseContext = createContext(null);

// Hook para usar el contexto
export const useFirebase = () => {
    return useContext(FirebaseContext);
};

// Proveedor del contexto
export const FirebaseProvider = ({ children, firebase }) => {
    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    );
};
