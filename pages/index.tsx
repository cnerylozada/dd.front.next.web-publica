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
    <div>
      <HomeCoverPage cover={sections.cover} lng={store.ddLanguage} />
      <HomeServices
        services={sections.services_section}
        lng={store.ddLanguage}
      />
      <HomeStaff people={sections.people_section} lng={store.ddLanguage} />
      <HomeCustomers client={sections.client_section} lng={store.ddLanguage} />
      <HomeContact />
      {/* <div className="text-green"></div>
      <div className="text-turquoise"></div>
      <div className="text-blue"></div>
      <div className="text-purple"></div> */}
    </div>
  );
};

export default Home;
