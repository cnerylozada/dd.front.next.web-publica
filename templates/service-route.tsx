import { DDText } from "@cnerylozada/dd.front.react.wp.library";
import { useRouter } from "next/router";
import { getColorByService } from "@/utils";

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
  const { Service } = data;

  return (
    <div className={`px-7 text-text ${className}`}>
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
    </div>
  );
};
