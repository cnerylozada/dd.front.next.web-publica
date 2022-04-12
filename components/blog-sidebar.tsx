import React, { useState } from "react";
import {
  DDText,
  DDShareArticle,
  DDAuthor,
} from "@cnerylozada/dd.front.react.wp.library";
import { useStore } from "../store";
import { languages } from "@/utils";

export const BlogSidebar = ({
  author,
  title,
  summaryLinks,
}: {
  author: any;
  title: string;
  summaryLinks: string[];
}) => {
  const [store] = useStore();
  const [currentIndex, setCurrentIndex] = useState<any>();

  return (
    <div
      className="hidden flex-shrink-0 sticky md:h-fit 
      md:top-[88px] lg:top-[108px] md:block 
      md:w-40 lg:w-74 md:space-y-5 lg:space-y-7 "
    >
      <div className="md:pb-5 lg:pb-7 border-b-2 border-gray2">
        <DDAuthor
          author={author.name}
          imgSrc={author.image.url}
          role={author.role}
        />
      </div>

      <DDText size="small" caps>
        {store.ddLanguage === languages.spanish ? "índice" : "summary"}
      </DDText>
      <DDText>
        <div className="md:space-y-5 lg:space-y-7">
          {summaryLinks.map((_: string, index: number) => (
            <div
              key={index}
              className={`cursor-pointer hover:text-primary ${
                typeof currentIndex === "number" && currentIndex === index
                  ? "text-primary"
                  : "text-text"
              }`}
              onClick={() => {
                setCurrentIndex(index);
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

      <DDShareArticle
        label={
          store.ddLanguage === languages.spanish
            ? "compartir artículo"
            : "share article"
        }
        sourceTitle={title}
      />
    </div>
  );
};
