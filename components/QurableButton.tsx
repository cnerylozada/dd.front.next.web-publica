import React from "react";

type QuButtonType = "gradient" | "outline";
type QuButtonSize = "normal" | "small";

const btnStyles = {
  "btn-qu-gradient-normal": "btn-qu-gradient-normal",
  "btn-qu-gradient-normal-disabled": "btn-qu-gradient-normal-disabled ",
};

export const QurableButton = ({
  type = "gradient",
  size = "normal",
  onClick,
  disabled = false,
  className,
  children,
}: {
  type?: QuButtonType;
  size?: QuButtonSize;
  onClick: any;
  disabled?: boolean;
  className?: string;
  children: any;
}) => {
  const btnClass = `${
    !disabled
      ? btnStyles[`btn-qu-${type}-${size}`]
      : btnStyles[`btn-qu-${type}-${size}-disabled`]
  } ${className}`;
  return (
    <button onClick={onClick} disabled={disabled} className={`${btnClass}`}>
      {children}
    </button>
  );
};
