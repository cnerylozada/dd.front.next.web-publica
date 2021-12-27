import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { coverPage } from "../services";

const ServiceCoverPage = ({ lng }: { lng: string }) => {
  return (
    <div
      className="relative px-7 h-screen flex flex-col justify-center items-center 
      bg-bg2 text-text text-center"
    >
      <DDText size="headline" weight="bold" caps className="mb-14">
        {coverPage[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" caps className="">
        {coverPage[`subTitle_${lng}`]}
      </DDText>
    </div>
  );
};

export default ServiceCoverPage;
