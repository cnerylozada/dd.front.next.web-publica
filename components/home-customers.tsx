import React from "react";
import { DDSvg, DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeCustomers = ({
  description,
  listClients,
  lng,
}: {
  description: any;
  listClients: any;
  lng: string;
}) => {
  return (
    <div className="pt-12 lg:py-38 pb-9 lg:pb-32 bg-bg1 text-text">
      <div className="mb-2 lg:mb-10  px-7 lg:px-45">
        <DDText size="headline" weight="bold" className="mb-12 text-primary">
          {description[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" weight="light">
          {description[`description_${lng}`]}
        </DDText>
      </div>
      <div className="mx-auto lg:w-7/12 flex flex-wrap justify-center text-gray3">
        {listClients.map((_: any) => (
          <DDSvg
            key={_.id}
            name={_.slug}
            onClick={() => {
              !!_.website ? window.open(_.website, "_blank") : null;
            }}
            className="mx-1 lg:m-5 my-3 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCustomers;
