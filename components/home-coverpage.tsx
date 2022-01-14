import React from "react";
import Image from "next/image";
import {
  DDButton,
  DDText,
  DDIcon,
} from "@cnerylozada/dd.front.react.wp.library";
import { languages } from "@/utils";

const HomeCoverPage = ({ cover, lng }: { cover: any; lng: string }) => {
  return (
    <div
      className="relative px-5 h-screen flex flex-col justify-center items-center 
      text-white text-center bg-black"
    >
      <Image
        alt="home-banner"
        src="https://dynamicdevscommon.blob.core.windows.net/web/banner-last-frame.png"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <video
        autoPlay
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover animate-video-opacity"
        style={{ filter: "brightness(.4)" }}
      >
        <source
          src={
            "https://dynamicdevscommon.blob.core.windows.net/web/home/banner.mp4"
          }
          type="video/mp4"
        />
      </video>

      <DDText
        size="headline"
        className="mb-11 lg:w-10/12 animate-title-opacity z-10"
      >
        {cover[`title_${lng}`]}
      </DDText>
      <div className="lg:flex lg:items-center z-10 animate-subtitle-opacity">
        <DDText
          size="subHeadline"
          weight="light"
          className="mb-4 lg:mb-0 lg:mr-6 "
        >
          {lng == languages.spanish
            ? "¿Quieres saber más?"
            : "How can we help you?"}
        </DDText>
        <DDButton
          onClick={() => {
            document.getElementById("contactSection")?.scrollIntoView();
          }}
        >
          {lng == languages.spanish ? "Contáctanos" : `Let's Talk`}
        </DDButton>
      </div>
      <div className="absolute bottom-0 z-10 animate-subtitle-opacity">
        <DDText
          size="subHeadline"
          weight="light"
          className="absolute top-0 w-full text-center"
        >
          {lng == languages.spanish ? "ver más" : "view more"}
        </DDText>
        <DDIcon name="arrowmore" size="xl" className="text-primary" />
      </div>
    </div>
  );
};

export default HomeCoverPage;
