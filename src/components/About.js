
import React from "react";
import Effect from "./Effect";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto sm:container">
        <Effect />
      </div>
      <div className="container mx-auto px-2.5 flex flex-col items-left">
          <h1 className="font-title mt-24 pb-2.5 text-3xl text-grey-gx">
            À propos...
          </h1>
          <p className="font-body text-3xl sm:text-about font-semibold text-grey-gx uppercase">
          Je suis <span className="text-orange-gx">UI/UX</span> Designer basé en île-de-France. Passionné par le numérique, j’aime créer des interfaces intuitives et attrayantes. Je m’inspire des tendances actuelles du design et je m’engage à offrir des solutions adaptées aux besoins des utilisateurs.
          </p>
      </div>
    </section>
  );
}