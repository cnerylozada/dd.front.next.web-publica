import { DDText, DDIcon } from "@cnerylozada/dd.front.react.wp.library";
import { getBorderByService } from "@/utils";

export const ServiceRoute = ({
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
    <div className={`py-12 lg:py-38 ${className}`}>
      <div className="mb-14 lg:mb-16 px-7 lg:px-45">
        <DDText size="headline" weight="bold" className={`mb-5`}>
          {Service[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" weight="light" className="text-text">
          {Service[`description_${lng}`]}
        </DDText>
      </div>

      <div className="mx-auto px-7 lg:px-0 w-route lg:w-222 flex flex-col">
        {SubService.map((_: any, index: number) => (
          <div
            key={index}
            className={`relative mb-25 last:mb-0 lg:mb-0 lg:pt-5 ${
              !!((index + 1) % 2) ? "" : "self-end"
            } flex flex-col items-center w-62 lg:w-80 h-62 lg:h-80
              rounded-full border border-dashed text-center`}
          >
            {!!((index + 1) % 2) && index !== 0 && (
              <div
                className={`absolute top-0 left-1/2 w-28
                origin-top-left -rotate-60 border-t border-dashed`}
              ></div>
            )}
            <DDIcon name={_.icon} size="xl" />
            <DDText
              size="subHeadline"
              weight="bold"
              className="my-2 lg:my-5 text-text"
            >
              {_.Service[`title_${lng}`]}
            </DDText>
            <DDText weight="light" className="w-4/5 text-text">
              {_.Service[`description_${lng}`]}
            </DDText>
            {!!((index + 1) % 2) && index !== SubService.length - 1 && (
              <div
                className={`absolute top-full left-1/2 w-28 
                  origin-top-left rotate-60 border-t border-dashed`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
