import { getBusinessLineByName, getBusinessLinePaths } from "@/services";
import { useStore } from "../../../store";
import {
  ServiceCoverpage,
  ServiceTitleIcon,
  ServiceGallery,
  ServiceRoute,
} from "@/templates";

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
  let index = service_section.length - 1;
  const formData = service_section[index];
  service_section = service_section.slice(0, index);
  const [store] = useStore();

  return (
    <>
      <ServiceCoverpage
        title={service.title_en}
        description={service.description_en}
      />
      {service_section.map((_: any, index: number) => {
        const bgStyle = (index + 1) % 2 === 0 ? "bg-bg1" : "bg-bg2";
        let component;
        if (
          _.__component === "service.title" ||
          _.__component === "service.service-icon"
        )
          component = (
            <ServiceTitleIcon
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={bgStyle}
            />
          );
        if (_.route_type === "gallery")
          component = (
            <ServiceGallery
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={bgStyle}
            />
          );
        if (_.route_type === "route")
          component = (
            <ServiceRoute
              key={index}
              data={_}
              lng={store.ddLanguage}
              className={bgStyle}
            />
          );
        return component;
      })}

      <div>{JSON.stringify(formData)}</div>
    </>
  );
};

export default ServiceCategoryDetail;
