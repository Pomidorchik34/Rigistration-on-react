import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Signin from "./pages/signin.jsx";
import Login from "./pages/login.jsx";
import Error from "./pages/err.jsx";
function App() {
  return (
    <BrowserRouter>
      <Signin></Signin>
      <Login></Login>
    </BrowserRouter>
  );
}

export default App;
