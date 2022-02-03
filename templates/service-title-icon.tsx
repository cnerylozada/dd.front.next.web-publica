import { DDText, DDIcon } from "@cnerylozada/dd.front.react.wp.library";

export const ServiceTitleIcon = ({
  data,
  lng,
  className,
}: {
  data: any;
  lng: string;
  className: string;
}) => {
  return (
    <div
      className={`px-7 lg:px-45 h-screen flex flex-col justify-center
      ${className}`}
    >
      {!!data.Service && (
        <DDText size="headline" weight="bold" className={`mb-6 lg:mb-14`}>
          {data.Service[`title_${lng}`]}
        </DDText>
      )}
      {!data.Service && (
        <DDText size="headline" weight="bold" className={`mb-6 lg:mb-10`}>
          {data[`title_${lng}`]}
        </DDText>
      )}

      <div className="flex flex-col lg:flex-row items-center">
        {!!data.icon && (
          <DDIcon
            name={data.icon}
            size="graphic"
            className={`block mb-10 lg:mb-0 lg:mr-24`}
          />
        )}

        {!!data.Service && (
          <DDText size="subHeadline" weight="light" className="text-text">
            {data.Service[`description_${lng}`]}
          </DDText>
        )}
        {!data.Service && (
          <DDText size="subHeadline" weight="light" className="text-text">
            {data[`description_${lng}`]}
          </DDText>
        )}
      </div>
    </div>
  );
};
