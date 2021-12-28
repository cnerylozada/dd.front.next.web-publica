import Image from "next/image";
import { getHomeSections } from "../services";
import { useStore } from "../store";
import {
  HomeCoverPage,
  HomeContact,
  HomeCustomers,
  HomeServices,
  HomeStaff,
} from "../components";

export async function getStaticProps() {
  const sections = await getHomeSections();
  return {
    props: { sections },
  };
}

const Home = ({ sections }: { sections: any }) => {
  const [store] = useStore();

  return (
    <>
      <HomeCoverPage cover={sections.cover} lng={store.ddLanguage} />
      <HomeServices
        services={sections.services_section}
        lng={store.ddLanguage}
      />
      <HomeStaff people={sections.people_section} lng={store.ddLanguage} />
      <HomeCustomers client={sections.client_section} lng={store.ddLanguage} />
      <HomeContact />
      {/* <div className="text-green h-100 lg:h-112 mt-22 lg:mt-32 mb-24 lg:mb-40 space-y-20 lg:w-8/12"></div>
      <div className="text-turquoise ml-auto bg-green"></div>
      <div className="text-blue bg-blue"></div>
      <div className="text-purple bg-purple"></div>
      <div className="text-purple bg-turquoise"></div> */}
    </>
  );
};

export default Home;
