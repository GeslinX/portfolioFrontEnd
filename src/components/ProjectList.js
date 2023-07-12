import React from "react";
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ProjectList.css';

    const ProjectsList = () => {
      const { loading, error, project } = useFetch('http://localhost:1337/api/projects?populate=*');
      if (loading) {
        return (        
          <section id="projects">
            <div className="container mx-auto mb-12 flex px-2.5 pt-20 flex-col items-left">
                <h1 className="flex flex-col items-start sm:flex-row sm:items-center"><span className='font-body text-grey-gx font-black text-5xl sm:text-7xl uppercase'>Projets.</span><span className='font-title text-lightGrey-gx font-regular text-2xl sm:text-4xl'>Designed with passion</span></h1>
            </div>
            <div id="scollerContent">
                <div className="w-full whitespace-nowrap inline-flex overflow-x-scroll snap-mandatory snap-x align-top overscroll-x-contain" id="scrollerPlatter">
                {Array(4)
                  .fill()
                  .map((project,index) => {
                    return (
                      <div className="inline-block snap-start" key={index}>
                        <div className="translate-x-[calc(max(1600px,100vw)/_2_-_790px)]">
                            <div className="cardsScroller mr-5 w-[350px] sm:w-[460px] flex overflow-hidden relative rounded-2xl shadow-[0_2px_10px_-1px_rgba(0,0,0,0.1)] whitespace-normal">
                              <Skeleton />
                            </div>
                        </div>
                    </div>
                    )
                  })}
                  </div>
              </div>
          </section>
        )
      }
      if (error) return <p> Error... </p>;
      return(
          <section id="projects">
              <div className="container mx-auto mb-12 flex px-2.5 pt-20 flex-col items-left">
                  <h1 className="flex flex-col items-start sm:flex-row sm:items-center"><span className='font-body text-grey-gx font-black text-5xl sm:text-7xl uppercase'>Projets.</span><span className='font-title text-lightGrey-gx font-regular text-2xl sm:text-4xl'>Designed with passion</span></h1>
              </div>
              <div id="scollerContent">
                  <div className="w-full whitespace-nowrap inline-flex overflow-x-scroll snap-mandatory snap-x align-top overscroll-x-contain" id="scrollerPlatter">
                      {project.slice(0,4).map((item) => (
                        <Link to={`projects/${item.id}`} key={item.id}>
                          <div className="inline-block snap-start">
                            <div className="translate-x-[calc(max(1600px,100vw)/_2_-_790px)]">
                              <div className="cardsScroller mr-5 w-[350px] sm:w-[460px] flex overflow-hidden relative rounded-2xl shadow-[0_2px_10px_-1px_rgba(0,0,0,0.1)] whitespace-normal">
                                <img src={`http://localhost:1337${item.attributes.tuile.data.attributes.url}`} alt={item.attributes.name} loading="lazy" width="480" height="610"/>
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
          </section>
      );
    }
    export default ProjectsList;