import Head from "next/head";
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
      <Head>
        <title>
          {true
            ? "Dynamic Devs - Desarrollo de Software e Innovación"
            : "Dynamic Devs - Software Development & Innovation"}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeCoverPage cover={sections.cover} lng={language} />
      <HomeServices services={sections.services_section} lng={language} />
      <HomeStaff people={sections.people_section} lng={language} />
      <HomeCustomers client={sections.client_section} lng={language} />
      <HomeContact />
    </div>
  );
};

export default Home;
