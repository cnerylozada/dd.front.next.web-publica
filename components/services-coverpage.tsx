import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { coverPage, serviceCategories } from "../services";
import { getBgColor, getTextColor } from "../utils";

const ServiceCoverPage = ({ lng }: { lng: string }) => {
  return (
    <div
      className="relative px-7 lg:p-0 h-screen  
      flex flex-col justify-center lg:justify-start bg-bg2 text-text text-center"
    >
      <div className="lg:mt-12 lg:flex-grow flex flex-col justify-center">
        <DDText size="headline" weight="bold" caps className="mb-14">
          {coverPage[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" caps className="mb-14 text-gray3">
          {coverPage[`subTitle_${lng}`]}
        </DDText>
      </div>
      <div
        className="mx-auto lg:h-87 grid grid-cols-2 gap-x-3 gap-y-7 
        lg:flex lg:justify-between lg:w-3/4 cursor-pointer"
      >
        {serviceCategories.map((_, index) => (
          <div
            key={index}
            className={`relative container lg:w-50 flex flex-col items-center
            ${getTextColor[_.color]} hover:text-text`}
            onClick={() => {
              document.getElementById(_.title)?.scrollIntoView();
            }}
          >
            <div className="z-10 w-24 lg:w-48">ICONO</div>
            <DDText className="z-10">{_.title}</DDText>
            <div className={`overlay ${getBgColor[_.color]}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCoverPage;
