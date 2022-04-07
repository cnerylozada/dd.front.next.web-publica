import React from "react";
import { useRouter } from "next/router";
import {
  DDButton,
  DDText,
  DDArticlePreview,
} from "@cnerylozada/dd.front.react.wp.library";
import { Template } from "./template";

export const HomeBlog = ({ blogs, lng }: { blogs: any; lng: string }) => {
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
        <div className="space-y-12 lg:space-y-0 lg:grid grid-cols-3 gap-5">
          {blogs.map((_: any, index: number) => (
            <DDArticlePreview
              key={index}
              title={_.title}
              type={_.Type}
              author={`${_.author.firstname} ${_.author.lastname}`}
              imgSrc={_.image.url}
              onClick={() => router.push(`/blog/${_.slug}`)}
            />
          ))}
        </div>
      </Template>
    </div>
  );
};
