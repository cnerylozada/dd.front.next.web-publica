import Image from "next/image";
import React from "react";
import {
  DDText,
  DDServiceDetail,
} from "@cnerylozada/dd.front.react.wp.library";
import { getTextColor } from "../utils";

const ServicesTemplate = ({
  name,
  description,
  services,
  color,
  lng,
}: {
  name: string;
  description: string;
  services: any;
  color: string;
  lng: string;
}) => {
  return (
    <>
      <div
        id={name}
        className="relative px-7 lg:px-45 h-100 lg:h-112 
      flex flex-col justify-center text-white text-center"
      >
        <Image
          alt="service-banner"
          src="https://dynamicdevscommon.blob.core.windows.net/web/banner-last-frame.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <DDText
          size="headline"
          weight="bold"
          className={`z-10 mb-6 lg:mb-10 ${getTextColor[color]}`}
        >
          {name}
        </DDText>
        <DDText size="subHeadline" weight="light" className="z-10">
          {description}
        </DDText>
      </div>
      <div className="px-7 flex justify-center bg-bg2">
        <div className="mt-22 lg:mt-32 mb-24 lg:mb-40 space-y-20 text-text lg:w-8/12">
          {services.map((_: any, index: number) => (
            <DDServiceDetail
              key={index}
              title={_.name}
              description={_[`description_${lng}`]}
              color={color}
              align={(index + 1) % 2 ? "left" : "right"}
              className={(index + 1) % 2 ? "" : "ml-auto"}
              onClick={() => console.log("xxx")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesTemplate;
