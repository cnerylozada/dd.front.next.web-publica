import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeServices = ({ services, lng }: { services: any; lng: string }) => {
  return (
    <div className="px-7 pt-12 bg-bg1 text-text">
      <DDText size="headline" className="mb-6 text-primary">
        {services[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-24">
        {services[`description_${lng}`]}
      </DDText>
      <div>.</div>
    </div>
  );
};

export default HomeServices;
