import React from "react";
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

    const ProjectsList = () => {
      const { loading, error, project } = useFetch('https://portfolio-strapi-tzlm.onrender.com/api/projects?populate=*');
      if (loading) return <p> Loading... </p>;
      if (error) return <p> Error... </p>;
      return(
          <div>
              <div id="scollerContent">
                  <div className="mt-40 w-full whitespace-nowrap inline-flex overflow-x-scroll snap-mandatory snap-x align-top overscroll-x-contain" id="scrollerPlatter">
                      {project.map((item) => (
                        <Link to={`${item.id}`} key={item.id}>
                          <div className="inline-block snap-start">
                            <div className="translate-x-[calc(max(1600px,100vw)/_2_-_790px)]">
                              <div className="cardsScroller mr-5 w-[350px] sm:w-[460px] flex overflow-hidden relative rounded-2xl shadow-[0_2px_10px_-1px_rgba(0,0,0,0.1)] whitespace-normal">
                                <img src={`${item.attributes.tuile.data.attributes.url}`} alt={item.attributes.name} loading="lazy" width="480" height="610"/>
                                <div style={{color : item.attributes.color}}  className="absolute p-10 bottom-0">
                                {item.attributes.tags.data ? (
                                      item.attributes.tags.data.map((tag) => (
                                          <span key={tag.attributes.id} className="font-body px-3 py-1 bg-white font-black text-sm uppercase rounded-full mr-2">{tag.attributes.name}</span>
                                      ))
                                  ) : (
                                    <span className="font-body px-3 py-1 bg-white font-black text-sm uppercase rounded-full">{item.attributes.tags.data.name}</span>
                                  )}
                                  <h2 className="font-body text-white font-bold text-3xl max-w-[285px]">{item.attributes.name}</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
              </div>
          </div>
      );
    }
    export default ProjectsList;
