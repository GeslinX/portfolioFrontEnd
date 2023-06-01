
import React from "react";
const Banner = React.lazy(() => import("./Banner"));
const About = React.lazy(() => import("./About"));
const ProjectList = React.lazy(() => import("./ProjectList"));
const Skills = React.lazy(() => import("./Skills"));

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
