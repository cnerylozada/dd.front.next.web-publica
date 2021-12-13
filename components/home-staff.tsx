import React from "react";
import {
  DDButton,
  DDCardProfile,
  DDText,
} from "@cnerylozada/dd.front.react.wp.library";
import { staff } from "../services";

const HomeStaff = ({ people, lng }: { people: any; lng: string }) => {
  return (
    <div className="px-7 py-12 bg-bg2 text-text">
      <DDText size="headline" className="mb-6 text-primary">
        {people[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-12">
        {lng === "es"
          ? "Nos dedicamos al desarrollo de software centrado en habilitar procesos de innovación apoyados en la tecnología. Nos mueve crear soluciones de impacto real."
          : "We are dedicated to software development focused on enabling technology-supported innovation processes. We are moved to create solutions with real impact."}
      </DDText>
      <div>
        {staff.map((_, index) => (
          <DDCardProfile
            key={index}
            name={_.name}
            imgUrl={_.imageUrl}
            linkedinUrl={_.link}
            position={_.jobPosition}
            className="mb-12"
          />
        ))}
      </div>
      <div>
        <DDText
          size="sectionHeadline"
          weight="bold"
          className="mb-6 text-primary uppercase"
        >
          {lng === "es"
            ? "¿quieres ser parte del equipo?"
            : "Want to be part of our team?"}
        </DDText>
        <DDText size="subHeadline" weight="light" className="mb-12">
          {people[`description_${lng}`]}
        </DDText>
        <DDButton
          onClick={() =>
            window.open(
              "https://www.getonbrd.com/companies/dynamic-devs",
              "blank"
            )
          }
          className="block mx-auto"
        >
          {people[`bottom_title_${lng}`]}
        </DDButton>
      </div>
    </div>
  );
};

export default HomeStaff;
