// import logo from './logo.svg';
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./component/Navbarui";
import Landing from "./component/Landing";
import Createnft from "./component/Createnft";
import Dashboard from "./component/Dashboard";
import Marketplace from "./component/Marketplace";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createnft" element={<Createnft />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
