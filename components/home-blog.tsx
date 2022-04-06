import React from "react";
import { useRouter } from "next/router";
import { DDButton, DDText } from "@cnerylozada/dd.front.react.wp.library";
import { Template } from "./template";

export const HomeBlog = ({}) => {
  const router = useRouter();
  return (
    <div className="bg-bg2">
      <Template className="text-text">
        <DDText
          size="headline"
          weight="bold"
          className="mb-12 lg:mb-10 text-primary"
        >
          Únete a la conversación
        </DDText>
        <DDText size="subHeadline" weight="light" className="mb-12 lg:mb-10">
          Desarrollo de software, historias de liderazgo y tendencias
          tecnológicas. Descubre más con nosotros escuchando nuestros podcasts y
          leyendo los artículos.
        </DDText>
        <div className="mb-12 lg:mb-20 lg:flex items-center lg:space-x-4">
          <DDText size="subHeadline" weight="light" className="mb-12 lg:mb-0">
            Revisa la lista completa de artículos en nuestro Blog
          </DDText>
          <DDButton
            onClick={() => router.push("/blog")}
            className="block mx-auto lg:m-0"
          >
            Ir al Blog
          </DDButton>
        </div>
        <div
          className="mx-auto mb-12 lg:mb-20 xl:w-[875px] 
          grid gap-12 lg:gap-24 md:grid-cols-2 xl:grid-cols-3"
        >
          qweqwe
        </div>
      </Template>
    </div>
  );
};
