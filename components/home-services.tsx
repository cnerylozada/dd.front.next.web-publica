import React from "react";
import Lottie from "react-lottie";
import { DDCardService, DDText } from "@cnerylozada/dd.front.react.wp.library";
import { serviceCategories } from "../services";
import Template from "./template";
import { getTextColor } from "../utils";

const HomeServices = ({ services, lng }: { services: any; lng: string }) => {
  return (
    <Template className="bg-bg1 text-text">
      <DDText size="headline" weight="bold" className="mb-6 text-primary">
        {services[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-24">
        {services[`description_${lng}`]}
      </DDText>

      {serviceCategories.map((_, index) => (
        <div key={_.id} className="mb-28 lg:mb-20 last:mb-0">
          <DDText
            size="sectionHeadline"
            weight="bold"
            className={`mb-12 lg:mb-10 text-text text-center uppercase ${
              getTextColor[_.color]
            }`}
          >
            {_.title}
          </DDText>
          <div
            className={`lg:flex ${
              !!((index + 1) % 2) ? "flex-row" : "flex-row-reverse"
            } lg:justify-center lg:items-center`}
          >
            <div
              className={`mx-auto mb-5 lg:m-0 ${
                !!((index + 1) % 2) ? "lg:mr-16" : "lg:ml-16"
              } w-36 lg:w-animation h-36 lg:h-animation`}
            >
              {/* <Lottie options={_.animation} /> */}
            </div>
            <div>
              {_.services.map((service, index) => (
                <DDCardService
                  key={index}
                  title={service[`name_${lng}`]}
                  description={service[`description_${lng}`]}
                  color={_.color}
                  className="mb-7 lg:mb-5 last:mb-0 lg:w-122.5"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Template>
  );
};

export default HomeServices;
