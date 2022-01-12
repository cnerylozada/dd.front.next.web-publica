import { useRouter } from "next/router";

const ServiceCategoryDetail = () => {
  const router = useRouter();
  const { category, name } = router.query;
  return (
    <>
      <div className="mt-12">qwewqeqweqe</div>
      <div>{category}</div>
      <div>{name}</div>
    </>
  );
};

export default ServiceCategoryDetail;
