import React from "react";
import { useParams, Link } from "react-router-dom";
import { TabTitle } from "./TabTitle";
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import useFetch from '../hooks/useFetch';

const Project = () => {
  const { id } = useParams();
  const { loading, error, project } = useFetch('https://portfolio-strapi-tzlm.onrender.com/api/projects/' + id + '?populate=*');
  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error... </p>;
  
  TabTitle(`Xavier Geslin - Portfolio | ${project.attributes.name}`);
    return (
      <div>
        <section className="pt-5">
          <div className="container mx-auto mt-24 flex flex-col items-start max-w-[calc(1600px_-_300px)]">
            <Link to="/#projects" className="myLink font-body text-center text-grey-gx hover:text-orange-gx hover:font-bold"><ArrowUturnLeftIcon className="inline-block h-5 w-5" aria-hidden="true" /> Retour</Link>
          </div>
          <div className="container mx-auto px-2.5 flex flex-col items-center max-w-[calc(1600px_-_300px)]">
              <h1 className="font-body font-semibold pb-2.5 text-4xl text-grey-gx uppercase text-center">{project.attributes.name}</h1>
              <p className="font-body text-xl text-center">{project.attributes.info}</p>
              {project.attributes.link ? <Link to={`${project.attributes.link}`} target="_blank" className="myLink font-body text-xl text-center text-grey-gx hover:text-orange-gx hover:font-bold">Voir la page</Link> : null}
              <img src={`${project.attributes.projectimg.data.attributes.url}`} alt={project.attributes.name} className="my-8 rounded-3xl shadow-2xl"/>
          </div>
        </section>
      </div>
    );
}

export default Project;
