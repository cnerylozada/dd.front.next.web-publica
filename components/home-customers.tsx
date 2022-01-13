import React from "react";
import { DDSvg, DDText } from "@cnerylozada/dd.front.react.wp.library";
import Template from "./template";

const customers = [
  { id: 1, name: "vida" },
  { id: 2, name: "bet" },
  { id: 3, name: "cardio" },
  { id: 4, name: "med" },
  { id: 5, name: "sodimac" },
  { id: 6, name: "uno" },
  { id: 7, name: "global" },
  { id: 8, name: "digi" },
];

const HomeCustomers = ({ client, lng }: { client: any; lng: string }) => {
  return (
    <Template className="bg-bg1 text-text">
      <DDText size="headline" weight="bold" className="mb-12 text-primary">
        {client[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-12">
        {client[`description_${lng}`]}
      </DDText>
      <div className="flex flex-wrap justify-between text-gray3">
        {customers.map((_) => (
          <DDSvg key={_.id} name={_.name} />
        ))}
      </div>
    </Template>
  );
};

export default HomeCustomers;
