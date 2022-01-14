import { getBusinessLineByName } from "@/services";
import { ServiceCoverpage } from "@/templates";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          category: "accelerator-approach",
          name: "tech-accelerator-team",
        },
      },
    ],
    fallback: true,
  };
};

export async function getStaticProps(context: any) {
  const mainService = await getBusinessLineByName(context.params.name);
  return {
    props: { mainService },
  };
}

const ServiceCategoryDetail = ({ mainService }: { mainService: any }) => {
  const { service } = mainService;
  return (
    <>
      <ServiceCoverpage
        title={service.title_en}
        description={service.description_en}
      />
    </>
  );
};

export default ServiceCategoryDetail;
