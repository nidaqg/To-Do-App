import React, {useState, useEffect, createContext} from 'react';
import { auth } from '../utils/FirebaseUtils';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    //create states for all the values needed
const [user, setUser] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [isAuthenticated, setIsAuthenticated] = useState(false);

//check if a user is logged in when app loads
useEffect(()=> {
const unsubscribeFromAuth=auth.onAuthStateChanged((u)=> {
    if(u) {
        setUser(u);
        setIsAuthenticated(true);
        setIsLoading(false);
    } else {
        setIsLoading(false);
    }
});
return () => {
    unsubscribeFromAuth();
      }
},[]);

//login function with auth
const onLogin = async (email,password) => {
    try{
        if(email !== "" || password !=="") {
           setIsLoading(true)
           setError("")
           
           const currentUser = await auth.signInWithEmailAndPassword(email,password)
            .then((currentUser)=> {
            setIsAuthenticated(true)
            setUser(currentUser.user)
                setIsLoading(false)
            })
            
            
        } else {
            setError("Please enter login information");
            return;
        }
    }
    catch(e) {
        console.log(e.message)
        setIsLoading(false)
    }
    }
    
    //registration function with auth
    const onSignUp = async (email, password, reenterpassword) => {
    try{
        if(password === reenterpassword) {
            setError("")
            setIsLoading(true)
        const currentUser = await auth.createUserWithEmailAndPassword(email, password)
        .then((currentUser) => {
            setUser(currentUser.user)
            setIsLoading(false)
            setIsAuthenticated(true)
        })
    } else {
        setError("Error: Passwords do not match");
        return; 
    }}
    catch(e) {
        setIsLoading(false);
        setError(e.message)
    }
    
    }
    
    //logout function
    const onLogout = () => {
        auth.signOut();
        setUser(null);
        setIsAuthenticated(false)
    }
    




    return (
        <AuthContext.Provider
        value={{
            user,
            isLoading,
            isAuthenticated,
            error,
            onLogin,
            onSignUp,
            onLogout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}