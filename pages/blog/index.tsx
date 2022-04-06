import { getServicesSections } from "@/services";
import { useStore } from "../../store";
import { ServiceCoverPage } from "@/components";
import { ServicesTemplate } from "@/templates";

// export async function getStaticProps() {
//   const sections = await getServicesSections();
//   return {
//     props: { sections },
//   };
// }

const Blog = ({}) => {
  const [store] = useStore();
  return (
    <>
      <div>welcome to the blog</div>
    </>
  );
};

export default Blog;
