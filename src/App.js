
import React from "react";
import Navbar from "./components/Navbar";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Project from "./components/Project";

import "./App.css"

const App = () => {
  return (
    <main className="body-font">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </main>
  );
};

export default App;