import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { socialNetworks } from "../utils";

const Footer = () => {
  return (
    <footer className="pt-6 pb-3 bg-bg2 text-primary text-center">
      <div
        className="lg:px-7 flex flex-col-reverse 
      lg:flex-row lg:justify-between lg:items-center"
      >
        <DDText size="subHeadline" weight="bold" className="mb-3">
          business@dynamicdevs.io
        </DDText>
        <div className="mb-4 mx-auto lg:m-0 flex space-x-7 lg:space-x-5">
          {socialNetworks.map((_, index) => (
            <div key={index} onClick={() => window.open(_.link, "_blank")}>
              social
            </div>
          ))}
        </div>
      </div>
      <DDText size="small">© {new Date().getFullYear()} DynamicDevs</DDText>
    </footer>
  );
};

export default Footer;
