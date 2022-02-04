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
import {UserHomePage} from './pages/UserHomePage/UserHomePage'


function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/todo" element={<ToDoPage/>}/>
      <Route path="home" element={<UserHomePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
