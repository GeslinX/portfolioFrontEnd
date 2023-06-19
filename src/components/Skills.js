import React from 'react';
import Tabs from './Tabs';
import './Skills.css';


export default function Skills() {
    return(
        <section id='skills'>
            <div className="container mx-auto flex p-10 sm:p-20 flex-col items-left rounded-3xl" id="box">
                <h1 className='font-body text-white font-black text-5xl sm:text-7xl uppercase'>Services.</h1>
                <Tabs>
                    <div id="ui" role="tabpanel" aria-labelledby="UI-tab" label="UI/UX Design" count="01">
                        <div className='2xl:flex-1'>
                            &nbsp;
                        </div>
                        <div className='flex-[2_2_100%] 2xl:flex-1'>
                            <h1 className='font-body text-3xl uppercase font-bold text-white'>UI/UX Design</h1>
                            <h2 className='font-title text-4xl text-orange-gx'>Viser juste</h2>
                            <p className="font-body text-xl font-regular text-white">Analyser, comprendre sa cible. C’est permettre à l’utilisateur d’accéder aux informations dont il a besoin et au bon moment, sublimer son interface n’en rendra sa navigation que meilleure. Je propose mes services en matière UI/UX Design afin de répondre au mieux aux besoins de mes clients.</p>
                        </div>
                    </div>
                    <div id="branding" role="tabpanel" aria-labelledby="Branding-tab" label="Branding" count="02">
                        <div className='2xl:flex-1'>
                            &nbsp;
                        </div>
                        <div className='flex-[2_2_100%] 2xl:flex-1'>
                            <h1 className='font-body text-3xl uppercase font-bold text-white'>Branding</h1>
                            <h2 className='font-title text-4xl text-orange-gx'>Le contenu adapté</h2>
                            <p className="font-body text-xl font-regular text-white">Dans un contexte Marketing où se distinguer de ses concurrents devient de plus en plus complexe. Il est important de travailler son image de marque. Instaurer une relation de confiance et fédérer une communauté soudée autour de sa marque. J'interviens en matière de création du contenu et construis une identité propre à votre marque dans laquelle l'utilisateur s'identifie.</p>
                        </div>
                    </div>
                    <div id="front" role="tabpanel" aria-labelledby="front-tab" label="Front Integrator" count="03">
                        <div className='2xl:flex-1'>
                            &nbsp;
                        </div>
                        <div className='flex-[2_2_100%] 2xl:flex-1'>
                            <h1 className='font-body text-3xl uppercase font-bold text-white'>Front Integrator</h1>
                            <h2 className='font-title text-4xl text-orange-gx'>Code the web</h2>
                            <p className="font-body text-xl font-regular text-white">L'intégration Web orientée Front-end permet de mettre en valeur votre identité de marque, en collaboration avec le développeur, il fournit un projet visuel et interactif visible aux yeux de tous vos utilisateurs. En fonction de l'environnement existant de mes clients, je travaille avec différents CMS comme WordPress, Shopify, Salesforce, etc. Et utilise les langages HTML, CSS et JavaScript afin de fournir des solutions full responsive et optimiser pour à la WebPerformance.</p>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}
