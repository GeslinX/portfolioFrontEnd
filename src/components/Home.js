
import React from "react";
import Banner from "./Banner";
import About from "./About";
import ProjectList from "./ProjectList";
import Skills from "./Skills";

export default function Home() {
  return (
    <div id="home">
      <Banner />
      <About />
      <Skills />
      <ProjectList />
    </div>
  );
}
