import * as React from "react";

const Template = ({
  children,
  className,
}: {
  children: any;
  className: string;
}) => {
  return (
    <div className={`px-7 lg:px-45 py-12 lg:py-38 ${className}`}>
      {children}
    </div>
  );
};

export default Template;
