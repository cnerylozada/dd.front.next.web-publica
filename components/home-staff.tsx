import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeStaff = ({}: {}) => {
  return (
    <div className="px-7 pt-12 bg-bg2 text-text">
      <DDText size="headline" className="mb-6 text-primary">
        Somos DynamicDevs
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-12">
        Nos dedicamos al desarrollo de software centrado en habilitar procesos
        de innovación apoyados en la tecnología. Nos mueve crear soluciones de
        impacto real.
      </DDText>
      <div>.</div>
    </div>
  );
};

export default HomeStaff;
