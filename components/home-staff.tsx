import React from "react";
import { DDText } from "@cnerylozada/dd.front.react.wp.library";

const HomeStaff = ({ people, lng }: { people: any; lng: string }) => {
  return (
    <div className="px-7 pt-12 bg-bg2 text-text">
      <DDText size="headline" className="mb-6 text-primary">
        {people[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light" className="mb-12">
        {people[`description_${lng}`]}
      </DDText>
      <div>.</div>
    </div>
  );
};

export default HomeStaff;
