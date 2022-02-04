import React from 'react';
import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import {ReactComponent as HomeLogo} from './assets/homepage.svg'
import { Header } from './components/Header/Header';
import { ToDoPage } from './pages/ToDoList.js/ToDoPage';
import { HomePage } from './pages/HomePage/HomePage';


function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/todo" element={<ToDoPage/>
}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
