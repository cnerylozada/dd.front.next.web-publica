import React from "react";
import Markup from "react-html-markup";

const Markdown = ({
  htmlString,
  htmlTag,
}: {
  htmlString: string;
  htmlTag?: string;
}) => {
  return (
    <Markup
      htmlString={htmlString} // html string that is coming from database or static html string.
      htmlTag={htmlTag} // You can add any html tag
    />
  );
};

export default Markdown;
