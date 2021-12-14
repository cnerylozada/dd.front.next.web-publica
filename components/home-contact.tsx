import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import Template from "./template";

const HomeContact = ({}: {}) => {
  return (
    <Template id="contactSection" className="bg-primary text-text">
      <DDText size="headline" weight="bold" className="mb-12 text-text">
        Facilitamos decisiones en proyectos tecnológicos
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-12">
        ¿Cómo podemos ayudarte? Envíanos un mensaje para empezar a trabajar en
        tu proyecto.
      </DDText>
      <div>.</div>
    </Template>
  );
};

export default HomeContact;
