import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import PropTypes from 'prop-types';
import app from "../firebase.config"


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword (auth, email, password)
    }
    
    const signInWithGoogle =(value) =>{
        setLoading(true)
        return signInWithPopup (auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, createUser => {
            setUser(createUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])


    const AuthInfo = {
        user, createUser, logOut, signIn, loading, signInWithGoogle, setUser, signOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}