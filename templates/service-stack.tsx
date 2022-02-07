import { DDText, DDSvg } from "@cnerylozada/dd.front.react.wp.library";

export const ServiceStack = ({
  data,
  lng,
  className,
}: {
  data: any;
  lng: string;
  className: string;
}) => {
  const { Service, SubService } = data;
  return (
    <div
      className={`pt-12 lg:pt-38 pb-9 lg:pb-32 
      min-h-screen flex flex-col justify-center ${className}`}
    >
      <div className="mb-2 lg:mb-10 px-7 lg:px-45">
        <DDText size="headline" weight="bold" className={`mb-5`}>
          {Service[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" weight="light" className="text-text">
          {Service[`description_${lng}`]}
        </DDText>
      </div>
      <div className="mx-auto lg:w-7/12 flex flex-wrap justify-center text-gray3">
        {SubService.map((_: any, index: number) => (
          <DDSvg
            key={index}
            name={_.icon}
            className="mx-1 lg:mx-7 my-3 lg:my-5"
          />
        ))}
      </div>
    </div>
  );
};
