import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './telas/Home'
import Login from './telas/Login';

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  

