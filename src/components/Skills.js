import React from 'react';
import Tabs from './Tabs';


export default function Skills() {
    return(
        <section id='skills'>
            <div className="container mx-auto flex p-10 sm:p-20 flex-col items-left bg-grey-gx rounded-3xl">
                <h1 className='font-body text-white font-black text-5xl sm:text-7xl uppercase'>Services.</h1>
                <Tabs>
                    <div id="ui" role="tabpanel" aria-labelledby="UI-tab" label="UI/UX Design" count="01">
                    <div className='flex-1'>
                            &nbsp;
                        </div>
                        <div className='flex-1'>
                            <h1 className='font-body text-3xl uppercase font-bold text-white'>UI/UX Design</h1>
                            <h2 className='font-title text-4xl text-orange-gx'>Viser juste</h2>
                            <p className="font-body text-xl font-regular text-white">Analyser, comprendre sa cible. C’est permettre à l’utilisateur d’accéder aux informations dont il a besoin et au bon moment, sublimer son interface n’en rendra sa navigation que meilleure. Je propose mes services en matière UI/UX Design afin de répondre au mieux aux besoins de mes clients.</p>
                        </div>
                    </div>
                    <div id="branding" role="tabpanel" aria-labelledby="Branding-tab" label="Branding" count="02">
                        <div className='flex-1'>
                            &nbsp;
                        </div>
                        <div className='flex-1'>
                            <h1 className='font-body text-3xl uppercase font-bold text-white'>Branding</h1>
                            <h2 className='font-title text-4xl text-orange-gx'>Le contenu adapté</h2>
                            <p className="font-body text-xl font-regular text-white">Analyser, comprendre sa cible. C’est permettre à l’utilisateur d’accéder aux informations dont il a besoin et au bon moment, sublimer son interface n’en rendra sa navigation que meilleure. Je propose mes services en matière UI/UX Design afin de répondre au mieux aux besoins de mes clients.</p>
                        </div>
                    </div>
                    <div id="front" role="tabpanel" aria-labelledby="front-tab" label="Front Integrator" count="03">
                        <div className='flex-1'>
                            &nbsp;
                        </div>
                        <div className='flex-1'>
                            <h1 className='font-body text-3xl uppercase font-bold text-white'>Front Integrator</h1>
                            <h2 className='font-title text-4xl text-orange-gx'>Code the web</h2>
                            <p className="font-body text-xl font-regular text-white">Analyser, comprendre sa cible. C’est permettre à l’utilisateur d’accéder aux informations dont il a besoin et au bon moment, sublimer son interface n’en rendra sa navigation que meilleure. Je propose mes services en matière UI/UX Design afin de répondre au mieux aux besoins de mes clients.</p>
                        </div>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}