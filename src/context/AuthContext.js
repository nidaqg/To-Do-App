import React, { useState, useEffect, createContext } from "react";
import { auth, createUserProfile } from "../utils/FirebaseUtils";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //create states for all the values needed
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //check if a user is logged in when app loads
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (u) => {
      if (u) {
          const userRef = await createUserProfile(u)
          setIsLoading(true)
          //set current user with the data from the firestore db
        userRef.onSnapshot((snapShot) => {
            setUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          });
        setIsAuthenticated(true);
          setIsLoading(false);
        } else {
          //if userAuth doesn't exist, set current user to null
          setUser(user);
        setIsLoading(false);
        }
      
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  //login function with auth
  const onLogin = async (email, password) => {
    try {
      if (email !== "" || password !== "") {
        setIsLoading(true);
        setError("");

        const currentUser = await auth
          .signInWithEmailAndPassword(email, password)
          .then((currentUser) => {
              const userRef = createUserProfile(currentUser)
              //set current user with the data from the firestore db
            userRef.onSnapshot((snapShot) => {
                setUser({
                  id: snapShot.id,
                  ...snapShot.data(),
                });
              });
            setIsAuthenticated(true);
              setIsLoading(false);
        
          });
      } else {
        setError("Please enter login information");
        return;
      }
    } catch (e) {
      console.log(e.message);
      setIsLoading(false);
    }
  };

  //registration function with auth
  const onSignUp = async (email, password, reenterpassword, displayName) => {
    try {
      if (password === reenterpassword) {
        setError("");
        setIsLoading(true);
        const currentUser = await auth
          .createUserWithEmailAndPassword(email, password)
          .then((currentUser) => {
              const user = currentUser.user
            
            createUserProfile(user, {displayName});
            // setUser(user, {displayName});
            setIsLoading(false);
            setIsAuthenticated(true);
          });
      } else {
        setError("Error: Passwords do not match");
        return;
      }
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  //logout function
  const onLogout = () => {
    auth.signOut();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        error,
        onLogin,
        onSignUp,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
