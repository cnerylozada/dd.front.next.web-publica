import { getHomeSections, getClients } from "@/services";
import { useStore } from "../store";
import {
  HomeCoverPage,
  HomeContact,
  HomeCustomers,
  HomeServices,
  HomeStaff,
} from "@/components";
import { useEffect } from "react";

export async function getStaticProps() {
  const sections = await getHomeSections();
  const listClients = await getClients();
  return {
    props: { sections, listClients },
  };
}

const Home = ({
  sections,
  listClients,
}: {
  sections: any;
  listClients: any;
}) => {
  const [store] = useStore();

  return (
    <>
      <HomeCoverPage cover={sections.cover} lng={store.ddLanguage} />
      <HomeServices
        mainSection={sections.services_section}
        lng={store.ddLanguage}
      />
      <HomeStaff people={sections.people_section} lng={store.ddLanguage} />
      <HomeCustomers
        description={sections.client_section}
        listClients={listClients}
        lng={store.ddLanguage}
      />
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
