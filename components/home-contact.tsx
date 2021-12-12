import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeContact = ({}: {}) => {
  return (
    <div className="px-7 pt-12 bg-primary text-text">
      <DDText size="headline" className="mb-12 text-text">
        Facilitamos decisiones en proyectos tecnológicos
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-12">
        ¿Cómo podemos ayudarte? Envíanos un mensaje para empezar a trabajar en
        tu proyecto.
      </DDText>
      <div>.</div>
    </div>
  );
};

export default HomeContact;
