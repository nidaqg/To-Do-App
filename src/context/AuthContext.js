import React, { useState, createContext } from "react";
import { auth } from "../utils/FirebaseUtils";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //create states for all the values needed
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(user ? true : false);

  //login function with auth
  const onLogin = async (email, password) => {
    try {
      if (email !== "" || password !== "") {
        setIsLoading(true);
        setError("");

        const currentUser = await auth
          .signInWithEmailAndPassword(email, password)
          .then((currentUser) => {
            setUser({
              email: currentUser.user.email,
              id: currentUser.user.uid,
            });
            localStorage.setItem("user", JSON.stringify(user));
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
            const user = currentUser.user;

            setUser({
              email: user.email,
              id: user.uid,
              displayName: displayName,
            });
            localStorage.setItem("user", JSON.stringify(user));
            setIsAuthenticated(true);
            setIsLoading(false);
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
    localStorage.removeItem("user");
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
