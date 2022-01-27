import { DDText, DDIcon } from "@cnerylozada/dd.front.react.wp.library";
import { useRouter } from "next/router";
import { getColorByService, getBorderByService } from "@/utils";

export const ServiceRoute = ({
  data,
  lng,
  className,
}: {
  data: any;
  lng: string;
  className: string;
}) => {
  const { query } = useRouter();
  const category: any = query.category;
  const { Service, SubService } = data;

  return (
    <div className={`px-7 lg:px-45 py-12 text-text ${className}`}>
      <DDText
        size="headline"
        weight="bold"
        className={`mb-5 ${getColorByService[category]}`}
      >
        {Service[`title_${lng}`]}
      </DDText>
      <DDText size="subHeadline" weight="light">
        {Service[`description_${lng}`]}
      </DDText>

      <div className="lg:mx-auto lg:w-4/5">
        {SubService.map((_: any, index: number) => (
          <div key={index}>
            {/* {(index + 1) % 2 !== 0 && index !== 0 && (
              <div
                className={`-z-10 sm:-my-24 mx-auto w-1/5 sm:w-4/12 h-24 sm:h-44`}
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent calc(50% - 1px), yellow , transparent calc(50% + 1px) )",
                }}
              ></div>
            )} */}
            <div
              className={`${
                !!((index + 1) % 2) ? "mr-auto" : "ml-auto"
              } sm:pt-5 flex flex-col items-center w-62 sm:w-80 h-62 sm:h-80
              rounded-full border ${getBorderByService[category]} text-center`}
            >
              <DDIcon
                name={_.icon}
                size="xl"
                className={getColorByService[category]}
              />
              <DDText size="subHeadline" weight="bold" className="my-2 sm:my-5">
                {_.Service[`title_${lng}`]}
              </DDText>
              <DDText weight="light" className="w-4/5">
                {_.Service[`description_${lng}`]}
              </DDText>
            </div>
            {/* {!!((index + 1) % 2) && index !== data.SubService.length - 1 && (
              <div
                className={`sm:-my-24 mx-auto w-1/5 sm:w-4/12 h-24 sm:h-44`}
                style={{
                  background:
                    "linear-gradient(to top right, transparent calc(50% - 1px), yellow , transparent calc(50% + 1px) )",
                }}
              ></div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};
