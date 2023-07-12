import React from "react";
import { ReactFitty } from "react-fitty";
import styled from "styled-components";
import './Banner.css';

const TextStyled = styled(ReactFitty)``;


export default function Banner() {
  return (
    <section id="banner">
      <div className="container mx-auto flex px-2.5 pt-20 flex-col items-left">
          <h1 className="font-title mt-5 sm:mt-24 pb-2.5 text-3xl text-grey-gx">
            Créatif
          </h1>
          <div className="expContainer">
            <TextStyled className="font-body font-regular text-grey-gx uppercase">Expérience</TextStyled>
          </div>
          <ReactFitty className="font-body font-black text-grey-gx uppercase myProfile"><span>UI/UX</span> Designer</ReactFitty>
      </div>
      <div className="container border-lightGrey-gx border-t-2 mx-auto flex px-2.5 pt-8 mt-5 mb-5 sm:mt-20 sm:mb-24 flex-col items-left">
        <div className="flex flex-col sm:flex-row">
          <h2 className="flex-1 font-body text-xl uppercase font-bold">Imaginer, entreprendre, créer le web de demain</h2>
          <p className="flex-1 font-body text-xl">Fort de plusieurs années passées en agence et chez l’annonceur. Spécialisé dans l’univers du <strong>graphisme Web</strong>. J’apporte mon expertise à mes clients afin de leur fournir des <strong>solutions de communication</strong> uniques et personnalisées.</p>
        </div>
      </div>
    </section>
  );
}