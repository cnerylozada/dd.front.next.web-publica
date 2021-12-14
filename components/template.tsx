import * as React from "react";

const Template = ({
  children,
  id,
  className,
}: {
  children: any;
  id?: string;
  className: string;
}) => {
  return (
    <div id={id} className={`px-7 lg:px-45 py-12 lg:py-38 ${className}`}>
      {children}
    </div>
  );
};

export default Template;
