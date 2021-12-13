import React from "react";
import Lottie from "react-lottie";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { serviceCategories } from "../services";

const HomeServices = ({ services, lng }: { services: any; lng: string }) => {
  return (
    <div className="px-7 pt-12 bg-bg1 text-text">
      <DDText size="headline" className="mb-6 text-primary">
        {services[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-24">
        {services[`description_${lng}`]}
      </DDText>
      <div>
        {serviceCategories.map((_) => (
          <div key={_.id} className="w-36 h-36">
            <Lottie options={_.animation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
