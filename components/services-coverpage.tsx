import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { coverPage, serviceCategories } from "../services";
import Lottie from "react-lottie";
import { getTextColor } from "../utils";

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
      lg:flex lg:justify-between lg:w-3/4"
      >
        {serviceCategories.map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onClick={() => {
              document.getElementById(_.title)?.scrollIntoView();
            }}
          >
            <div className="w-24 lg:w-48">
              <Lottie options={_.animation} />
            </div>
            <DDText className={`${getTextColor[_.color]}`}>{_.title}</DDText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCoverPage;
