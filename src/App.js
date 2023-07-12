import React, { Suspense }  from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./App.css";

const Projects = React.lazy(() => import('./components/Projects'));
const Project = React.lazy(() => import('./components/Project'));


const App = () => {
  return (
      <main className="body-font">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
						<Suspense fallback={<p>Loading...</p>}>
              <Home />
						</Suspense>} />
          <Route path="projects" element={
						<Suspense fallback={<p>Loading...</p>}>
              <Projects />
						</Suspense>
            } 
          />
          <Route path="projects/:id" element={
						<Suspense fallback={<p>Loading...</p>}>
              <Project />
						</Suspense>
            } 
          />
        </Routes>
        <Footer />
      </main>
  );
};

export default App;