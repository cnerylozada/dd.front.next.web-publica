import React from "react";
import { DDButton, DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeCoverPage = ({}: {}) => {
  return (
    <div
      className="px-5 h-screen flex flex-col justify-center items-center 
      text-center text-text"
    >
      <DDText size="headline" className="mb-11 lg:w-10/12">
        Desarrollo de software: Auténtico entendimiento y gestión de la
        innovación tecnológica
      </DDText>
      <div className="lg:flex lg:items-center">
        <DDText
          size="subHeadline"
          weight="light"
          className="mb-2 lg:mb-0 lg:mr-6"
        >
          ¿Quieres saber más?
        </DDText>
        <DDButton onClick={() => console.log("xxx")}>Contáctanos</DDButton>
      </div>
      <div className="absolute bottom-10">
        <DDText size="subHeadline" weight="light">
          ver más
        </DDText>
      </div>
    </div>
  );
};

export default HomeCoverPage;
