import { DDText, DDIcon } from "@cnerylozada/dd.front.react.wp.library";
import { useRouter } from "next/router";
import { getColorByService } from "@/utils";

export const ServiceGallery = ({
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
  const { Service } = data;

  return (
    <div
      className={`px-7 lg:px-0 py-12 lg:pt-38 lg:pb-24 text-text ${className}`}
    >
      <div className="lg:px-45">
        <DDText
          size="headline"
          weight="bold"
          className={`mb-5 lg:mb-14 ${getColorByService[category]}`}
        >
          {Service[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" weight="light" className="mb-5 lg:mb-3">
          {Service[`description_${lng}`]}
        </DDText>
      </div>

      <div
        className="lg:w-8/12 mx-auto grid grid-cols-2 gap-x-5 gap-y-8 lg:gap-0
        lg:flex flex-wrap justify-center"
      >
        {data.SubService.map((_: any, index: number) => (
          <div key={index} className="py-4 text-center lg:m-12 lg:w-58">
            <DDIcon
              name={_.icon}
              size="xl"
              className={getColorByService[category]}
            />
            <DDText size="subHeadline" weight="bold" className="my-4 lg:my-5">
              {_.Service[`title_${lng}`]}
            </DDText>
            <DDText weight="light">{_.Service[`description_${lng}`]}</DDText>
          </div>
        ))}
      </div>
    </div>
  );
};
