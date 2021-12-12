import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeServices = ({}: {}) => {
  return (
    <div className="px-7 pt-12 bg-bg1 text-text">
      <DDText size="headline" className="mb-6 text-primary">
        ¿Cómo te podemos ayudar?
      </DDText>
      <div className="">
        <DDText size="subHeadline" weight="light" className="">
          Tenemos la misión de acompañar y apoyar a organizaciones, líderes y
          equipos.
        </DDText>
      </div>
    </div>
  );
};

export default HomeServices;
