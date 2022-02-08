import React from "react";
import {
  DDButton,
  DDCardProfile,
  DDText,
} from "@cnerylozada/dd.front.react.wp.library";
import { staff } from "@/services";
import Template from "./template";
import { languages } from "@/utils";

const HomeStaff = ({ people, lng }: { people: any; lng: string }) => {
  return (
    <div className="bg-bg2">
      <Template className="text-text">
        <DDText
          size="headline"
          weight="bold"
          className="mb-6 lg:mb-10 text-primary"
        >
          {people[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" weight="light" className="mb-12 lg:mb-20">
          {lng === languages.spanish
            ? "Nos dedicamos al desarrollo de software centrado en habilitar procesos de innovación apoyados en la tecnología. Nos mueve crear soluciones de impacto real."
            : "We are dedicated to software development focused on enabling technology-supported innovation processes. We are moved to create solutions with real impact."}
        </DDText>
        <section className="flex justify-center">
          <div className="mb-20 flex justify-start flex-wrap">
            {staff.map((_, index) => (
              <DDCardProfile
                key={index}
                name={_.name}
                imgUrl={_.imageUrl}
                linkedinUrl={_.link}
                position={_.jobPosition}
                className="mb-12 mx-4 lg:mx-12"
              />
            ))}
          </div>
        </section>

        <div>
          <DDText
            size="sectionHeadline"
            weight="bold"
            className="mb-6 lg:mb-10 text-primary"
            caps
          >
            {lng === languages.spanish
              ? "¿quieres ser parte del equipo?"
              : "Want to be part of our team?"}
          </DDText>
          <div className="lg:flex lg:items-center">
            <DDText
              size="subHeadline"
              weight="light"
              className="mb-12 lg:mb-0 lg:mr-8"
            >
              {people[`description_${lng}`]}
            </DDText>
            <DDButton
              onClick={() =>
                window.open(
                  "https://www.getonbrd.com/companies/dynamic-devs",
                  "blank"
                )
              }
              className="block mx-auto lg:m-0"
            >
              {people[`bottom_title_${lng}`]}
            </DDButton>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default HomeStaff;
