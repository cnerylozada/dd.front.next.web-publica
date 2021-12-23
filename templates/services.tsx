import Image from "next/image";
import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const ServicesTemplate = ({
  name,
  description,
  services,
  lng,
}: {
  name: string;
  description: string;
  services: any;
  lng: string;
}) => {
  return (
    <>
      <div className="relative py-16 px-7 flex flex-col text-white text-center ">
        <Image
          alt="service-banner"
          src="https://dynamicdevscommon.blob.core.windows.net/web/banner-last-frame.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <DDText size="headline" weight="bold" className="z-10 mb-6">
          {name}
        </DDText>
        <DDText size="subHeadline" weight="light" className="z-10">
          {description}
        </DDText>
      </div>
      <div className="bg-bg2 text-text">
        {services.map((_: any, index: number) => (
          <div key={index}>
            <DDText size="sectionHeadline" weight="bold">
              {_.name}
            </DDText>
            <DDText size="subHeadline" weight="light">
              {_[`description_${lng}`]}
            </DDText>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesTemplate;
