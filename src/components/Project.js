import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { TabTitle } from "./TabTitle";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
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
        <div className="container mx-auto mt-24 flex flex-col items-start max-w-[calc(1600px_-_300px)]">
          <Link to="/#projects" className="myLink font-body text-center text-grey-gx hover:text-orange-gx hover:font-bold"><ArrowUturnLeftIcon className="inline-block h-5 w-5" aria-hidden="true" /> Retour</Link>
        </div>
        <div className="container mx-auto px-2.5 flex flex-col items-center max-w-[calc(1600px_-_300px)]">
            <h1 className="font-body font-semibold pb-2.5 text-4xl text-grey-gx uppercase text-center">{activeProject.title}</h1>
            <p className="font-body text-xl text-center">{activeProject.info}</p>
            {activeProject.link ? <Link to={`${activeProject.link}`} target="_blank" className="myLink font-body text-xl text-center text-grey-gx hover:text-orange-gx hover:font-bold">Voir la page</Link> : null}
            <img src={images[`${activeProject.projectimg}`]} alt={activeProject.title} className="my-8 rounded-3xl shadow-2xl"/>
        </div>
      </section>
    );
}

export default Project;
