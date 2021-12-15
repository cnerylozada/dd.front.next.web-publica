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
  const language = store.ddLanguage;

  return (
    <div>
      <HomeCoverPage cover={sections.cover} lng={language} />
      <HomeServices services={sections.services_section} lng={language} />
      <HomeStaff people={sections.people_section} lng={language} />
      <HomeCustomers client={sections.client_section} lng={language} />
      <HomeContact />
    </div>
  );
};

export default Home;
