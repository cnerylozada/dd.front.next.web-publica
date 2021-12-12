import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeCustomers = ({ client, lng }: { client: any; lng: string }) => {
  return (
    <div className="px-7 pt-12 bg-bg1 text-text">
      <DDText size="headline" className="mb-12 text-primary">
        {client[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="">
        {client[`description_${lng}`]}
      </DDText>
    </div>
  );
};

export default HomeCustomers;
