import { getBusinessLineByName } from "@/services";

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
  const service = await getBusinessLineByName(context.params.name);
  return {
    props: { service },
  };
}

const ServiceCategoryDetail = ({ service }: { service: any }) => {
  return (
    <>
      <div className="mt-12">qwewqeqweqe</div>
      <div>{JSON.stringify(service)}</div>
    </>
  );
};

export default ServiceCategoryDetail;
