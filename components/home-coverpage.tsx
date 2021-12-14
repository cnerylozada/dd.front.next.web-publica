import React from "react";
import Image from "next/image";
import { DDButton, DDText } from "@cnerylozada/dd.front.react.wp.library";

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
      <div className="lg:flex lg:items-center z-10">
        <DDText
          size="subHeadline"
          weight="light"
          className="mb-2 lg:mb-0 lg:mr-6 animate-subtitle-opacity"
        >
          ¿Quieres saber más?
        </DDText>
        <DDButton onClick={() => console.log("xxx")}>
          {lng == "es" ? "Contáctanos" : `Let's Talk`}
        </DDButton>
      </div>
      <div className="absolute bottom-10 z-10">
        <DDText size="subHeadline" weight="light">
          ver más
        </DDText>
      </div>
    </div>
  );
};

export default HomeCoverPage;
