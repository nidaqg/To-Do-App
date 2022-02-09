import React from 'react';
import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Header } from './components/Header/Header';
import { ToDoPage } from './pages/ToDoList.js/ToDoPage';
import { HomePage } from './pages/HomePage/HomePage';
import {UserHomePage} from './pages/UserHomePage/UserHomePage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

import {ToDoContextProvider} from "./context/ToDoContext";
import {AuthContextProvider} from "./context/AuthContext";


function App() {
  return (
    <AuthContextProvider>
    <ToDoContextProvider>
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/todo" element={<ToDoPage/>}/>
      <Route path="home" element={<UserHomePage/>}/>
      <Route path="signup" element={<SignUpPage/>}/>
      <Route path="login" element={<LoginPage/>}/>

    </Routes>
    </BrowserRouter>
    </ToDoContextProvider>
    </AuthContextProvider>
  );
}

export default App;
