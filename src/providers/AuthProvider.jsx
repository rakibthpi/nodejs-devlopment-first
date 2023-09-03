/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import React from 'react';
export const UserContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true);
    const auth = getAuth(app);

    const newUserCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)

            }
            setLoding(false);
        })
        return () => {
            unSuscribe()
        };

    }, []);

    const userifo = { user, newUserCreate, userLogin, logOut, loding }

    return (
        <UserContext.Provider value={userifo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProvider;