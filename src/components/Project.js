import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { TabTitle } from "./TabTitle";
import images from '../index';

const Project = () => {


  const [activeProject, setActiveProject] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`https://portfolio-xavier-backend.onrender.com/project/${params.id.toString()}`);
 
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
 
      const project = await response.json();
      if (!project) {
        window.alert(`project with id ${id} not found`);
        navigate("/");
        return;
      }
 
      setActiveProject(project);
    }
 
    fetchData();
 
    return;
  }, [params.id, navigate]);
  TabTitle(`Xavier Geslin - Portfolio | ${activeProject.title}`);
    return (
      <section className="pt-5">
        <div className="container mx-auto mt-24 px-2.5 flex flex-col items-center max-w-[calc(1600px_-_300px)] relative">
            <Link to="/#projects" className="absolute left-0">Back</Link>
            <h1 className="font-body pb-2.5 text-4xl text-grey-gx uppercase text-center">{activeProject.title}</h1>
            <p className="font-body text-xl text-center">{activeProject.info}</p>
            <img src={images[`${activeProject.projectimg}`]} alt={activeProject.title} className="my-8 rounded-3xl shadow-2xl"/>
        </div>
      </section>
    );
}

export default Project;
