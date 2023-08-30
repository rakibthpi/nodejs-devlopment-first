/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import React from 'react';
export const UserContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    const newUserCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userifo = { user, newUserCreate }

    return (
        <UserContext.Provider value={userifo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;