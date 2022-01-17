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
    <div className={`px-7 text-text ${className}`}>
      {!!data.Service && (
        <DDText
          size="headline"
          weight="bold"
          className={`mb-6 ${getColorByService[category]}`}
        >
          {data.Service[`title_${lng}`]}
        </DDText>
      )}
      {!data.Service && (
        <DDText
          size="headline"
          weight="bold"
          className={`mb-6 ${getColorByService[category]}`}
        >
          {data[`title_${lng}`]}
        </DDText>
      )}

      {!!data.icon && <DDIcon name={data.icon} size="2xl" />}

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
  );
};
