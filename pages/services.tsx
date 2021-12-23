import { getServicesSections } from "../services";
import { useStore } from "../store";
import { ServiceCoverPage } from "../components";

export async function getStaticProps() {
  const sections = await getServicesSections();
  return {
    props: { sections },
  };
}

const Services = ({ sections }: { sections: any }) => {
  const [store] = useStore();

  console.log(sections);

  return (
    <div>
      <ServiceCoverPage />
    </div>
  );
};

export default Services;
