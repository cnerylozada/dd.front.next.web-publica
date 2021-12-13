import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import Template from "./template";

const HomeCustomers = ({ client, lng }: { client: any; lng: string }) => {
  return (
    <Template className="bg-bg1 text-text">
      <DDText size="headline" className="mb-12 text-primary">
        {client[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="">
        {client[`description_${lng}`]}
      </DDText>
    </Template>
  );
};

export default HomeCustomers;
