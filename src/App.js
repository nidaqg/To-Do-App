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

import {ToDoContextProvider} from "./context/ToDoContext"


function App() {
  return (
    <ToDoContextProvider>
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/todo" element={<ToDoPage/>}/>
      <Route path="home" element={<UserHomePage/>}/>
    </Routes>
    </BrowserRouter>
    </ToDoContextProvider>
  );
}

export default App;
