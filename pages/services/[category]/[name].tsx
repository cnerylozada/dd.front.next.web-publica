import { useRouter } from "next/router";
import { getBusinessLineByName, getBusinessLinePaths } from "@/services";
import { useStore } from "../../../store";
import { DDFloatButton } from "@cnerylozada/dd.front.react.wp.library";
import {
  ServiceCoverpage,
  ServiceTitleIcon,
  ServiceGallery,
  ServiceRoute,
  ServiceStack,
  ContactForm,
} from "@/templates";
import { getColorByService, getBorderByService } from "@/utils";

export const getStaticPaths = async () => {
  return {
    paths: getBusinessLinePaths,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const mainService = await getBusinessLineByName(context.params.name);
  return {
    props: { mainService },
  };
}

const ServiceCategoryDetail = ({ mainService }: { mainService: any }) => {
  let { service, service_section } = mainService;
  const { query } = useRouter();
  const category: any = query.category;
  const serviceColor = {
    "accelerator-approach": "green",
    "build-and-integrate": "turquoise",
    "make-it-live": "blue",
    "dynamic-culture": "purple",
  };

  const [store] = useStore();

  return (
    <>
      <DDFloatButton
        icon="contact"
        color={serviceColor[category]}
        className="fixed z-10 right-5 lg:right-16 bottom-5 lg:bottom-20"
        onClick={() => window && window.open("mailto:contact@dynamicdevs.com")}
      />
      <ServiceCoverpage
        title={service[`title_${store.ddLanguage}`]}
        description={service[`description_${store.ddLanguage}`]}
        color={serviceColor[category]}
      />
      {service_section.map((_: any, index: number) => {
        const bgStyle = (index + 1) % 2 === 0 ? "bg-bg1" : "bg-bg2";
        const borderStyles = getBorderByService[category];
        const classess = `${bgStyle} ${getColorByService[category]}`;
        let component;

        if (index === service_section.length - 1) {
          return (component = (
            <ContactForm
              key={index}
              mainSection={_}
              lng={store.ddLanguage}
              className={classess}
            />
          ));
        }
        if (
          _.__component === "service.title" ||
          _.__component === "service.service-icon"
        )
          component = (
            <ServiceTitleIcon
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={classess}
            />
          );
        if (_.route_type === "gallery")
          component = (
            <ServiceGallery
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={classess}
            />
          );
        if (_.route_type === "route")
          component = (
            <ServiceRoute
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={classess}
              borderStyles={borderStyles}
            />
          );
        if (_.route_type === "stack")
          component = (
            <ServiceStack
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={classess}
            />
          );
        return component;
      })}
    </>
  );
};

export default ServiceCategoryDetail;
