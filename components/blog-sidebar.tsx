import React from "react";
import {
  DDText,
  DDShareArticle,
  DDAuthor,
} from "@cnerylozada/dd.front.react.wp.library";

export const BlogSidebar = ({
  author,
  title,
  summaryLinks,
}: {
  author: any;
  title: string;
  summaryLinks: string[];
}) => {
  return (
    <div
      className="hidden flex-shrink-0 sticky md:h-fit 
      md:top-[88px] lg:top-[108px] md:block 
      md:w-40 lg:w-74 md:space-y-5 lg:space-y-7 "
    >
      <div className="md:pb-5 lg:pb-7 border-b-2 border-gray2">
        <DDAuthor
          author={author.name}
          imgSrc={
            "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
          }
          role={author.slug}
        />
      </div>

      <DDText size="small" caps>
        summary
      </DDText>
      <DDText>
        <div className="md:space-y-5 lg:space-y-7">
          {summaryLinks.map((_: string, index: number) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => {
                document
                  .getElementById(_.split(" ").join("-"))
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <DDText>{_}</DDText>
            </div>
          ))}
        </div>
      </DDText>

      <DDShareArticle label="Compartir articulo" sourceTitle={title} />
    </div>
  );
};
