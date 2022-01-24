import { DDText, DDIcon } from "@cnerylozada/dd.front.react.wp.library";
import { useRouter } from "next/router";
import { getColorByService } from "@/utils";

export const ServiceTitleIcon = ({
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

  return (
    <div
      className={`px-7 lg:px-45 h-screen flex flex-col justify-center
      text-text ${className}`}
    >
      {!!data.Service && (
        <DDText
          size="headline"
          weight="bold"
          className={`mb-6 lg:mb-14 ${getColorByService[category]}`}
        >
          {data.Service[`title_${lng}`]}
        </DDText>
      )}
      {!data.Service && (
        <DDText
          size="headline"
          weight="bold"
          className={`mb-6 lg:mb-10 ${getColorByService[category]}`}
        >
          {data[`title_${lng}`]}
        </DDText>
      )}

      <div className="flex flex-col lg:flex-row items-center">
        {!!data.icon && (
          <DDIcon
            name={data.icon}
            size="graphic"
            className={`block mb-10 lg:mb-0 lg:mr-24 ${getColorByService[category]}`}
          />
        )}

        {!!data.Service && (
          <DDText size="subHeadline" weight="light">
            {data.Service[`description_${lng}`]}
          </DDText>
        )}
        {!data.Service && (
          <DDText size="subHeadline" weight="light">
            {data[`description_${lng}`]}
          </DDText>
        )}
      </div>
    </div>
  );
};
