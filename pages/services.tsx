import { getServicesSections } from "../services";
import { useStore } from "../store";
import { ServiceCoverPage } from "../components";
import { ServicesTemplate } from "../templates";

export async function getStaticProps() {
  const sections = await getServicesSections();
  return {
    props: { sections },
  };
}

const Services = ({ sections }: { sections: any }) => {
  const [store] = useStore();
  return (
    <div>
      <ServiceCoverPage lng={store.ddLanguage} />
      {sections.map((_: any, index: number) => (
        <ServicesTemplate
          key={index}
          name={_.name}
          description={_[`description_${store.ddLanguage}`]}
          services={_.services}
          lng={store.ddLanguage}
        />
      ))}
    </div>
  );
};

export default Services;
