import React, { Children, createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const emailRegister = (email, password, name, photo) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const emailLogin = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logout = () => {
        return signOut(auth);
    }

    const updateinfo = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: "Rion khela hobe", photoURL: photo })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        updateinfo,
        emailRegister,
        emailLogin,
        googleLogin,
        githubLogin,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;