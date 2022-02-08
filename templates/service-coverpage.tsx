/* eslint-disable @next/next/no-img-element */
import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

export const ServiceCoverpage = ({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div
      className="relative h-screen px-7 flex flex-col justify-center items-center 
        text-center text-white bg-black"
    >
      {/* <Image
        alt="home-banner"
        src={`https://dynamicdevscommon.blob.core.windows.net/web/bg-${color}.png`}
        layout="fill"
        objectFit="cover"
        quality={100}
      /> */}
      <img
        src={`https://assets.dynamicdevs.io/web/bg-${color}.png`}
        alt="service-banner"
        className="absolute top-0 left-0 w-full h-screen object-cover"
      />

      <DDText size="headline" weight="bold" caps className="z-10 mb-5 lg:mb-9">
        {title}
      </DDText>
      <DDText size="subHeadline" caps className="z-10 text-gray3">
        {description}
      </DDText>
    </div>
  );
};
