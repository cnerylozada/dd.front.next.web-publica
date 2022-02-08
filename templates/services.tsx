/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import router from "next/router";
import React from "react";
import {
  DDText,
  DDServiceDetail,
} from "@cnerylozada/dd.front.react.wp.library";
import { getTextColor, languages } from "@/utils";

export const ServicesTemplate = ({
  name,
  slug,
  description,
  services,
  color,
  lng,
}: {
  name: string;
  slug: string;
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
        {/* <Image
          alt="service-banner"
          src={`https://dynamicdevscommon.blob.core.windows.net/web/bg-${color}.png`}
          layout="fill"
          loader={() => 'https://dynamicdevscommon.blob.core.windows.net/web/banner-last-frame.png'}
          objectFit="cover"
          quality={100}
        /> */}
        <img
          src={`https://assets.dynamicdevs.io/web/bg-${color}.png`}
          alt="service-banner"
          className="absolute top-0 left-0 w-full h-100 lg:h-112 object-cover"
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
      <div className="bg-bg2">
        <div
          className="py-21 lg:py-32 px-7 lg:px-0 mx-auto
          max-w-[1440px] lg:w-3/5 space-y-20 text-text"
        >
          {services.map((_: any, index: number) => (
            <DDServiceDetail
              key={index}
              title={_.name}
              description={_[`description_${lng}`]}
              buttonLabel={
                lng === languages.spanish
                  ? "Quiero saber más"
                  : "I want to know more"
              }
              color={color}
              align={(index + 1) % 2 ? "left" : "right"}
              className={(index + 1) % 2 ? "" : "ml-auto"}
              onClick={() => router.push(`services/${slug}/${_.slug}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
