import React from "react";
import Image from "next/image";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

export const ServiceCoverpage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className="relative h-screen px-7 flex flex-col justify-center items-center 
        text-center text-white bg-black"
    >
      <Image
        alt="home-banner"
        src="https://dynamicdevscommon.blob.core.windows.net/web/banner-last-frame.png"
        layout="fill"
        objectFit="cover"
        quality={100}
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
