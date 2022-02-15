import dynamic from "next/dynamic";
import { DDFloatButton } from "@cnerylozada/dd.front.react.wp.library";
import { getHomeSections, getClients, getStaff } from "@/services";
import { useStore } from "../store";
import { ContactForm } from "@/templates";
import {
  CloseTab,
  HomeCoverPage,
  HomeCustomers,
  HomeServices,
  HomeStaff,
} from "@/components";

const Markdown = dynamic(() => import("../components/markdown"), {
  ssr: false,
});

export async function getStaticProps() {
  const sections = await getHomeSections();
  const staff = await getStaff();
  const listClients = await getClients();
  return {
    props: { sections, staff, listClients },
  };
}

const Home = ({
  sections,
  staff,
  listClients,
}: {
  sections: any;
  staff: any;
  listClients: any;
}) => {
  const [store] = useStore();
  const dbString =
    "<h3>Artist (Argentina). A phantasmagorical entity that transcends dimensions, connecting online and offline life.</h3> <hr> <br> <p>I wake up and see what I want to see,</p> <p>just what I want to see.</p> <br> <p>My new profile picture is him uglier than ever</p> <br> <p>My cell phone is a crystal ball.</p> <p>My notifications come and go.</p> <p>I open them</p>";

  return (
    <>
      <DDFloatButton
        icon="contact"
        className="fixed z-10 right-5 lg:right-16 bottom-5 lg:bottom-20"
        onClick={() => window && window.open("mailto:contact@dynamicdevs.com")}
      />
      <HomeCoverPage cover={sections.cover} lng={store.ddLanguage} />
      {/* <Markdown htmlString={dbString} htmlTag="div" /> */}
      <HomeServices
        mainSection={sections.services_section}
        lng={store.ddLanguage}
      />
      <HomeStaff
        people={sections.people_section}
        staff={staff}
        lng={store.ddLanguage}
      />
      <HomeCustomers
        description={sections.client_section}
        listClients={listClients}
        lng={store.ddLanguage}
      />
      <div id="contactSection">
        <ContactForm
          mainSection={sections.contact_section}
          lng={store.ddLanguage}
          className="bg-bg2 text-primary"
        />
      </div>
      {/* <div className="text-green h-100 lg:h-112 mt-22 lg:mt-32 mb-24 lg:mb-40 space-y-20 lg:w-8/12"></div>
      <div className="text-turquoise ml-auto bg-green"></div>
      <div className="text-blue bg-blue"></div>
      <div className="text-purple bg-purple"></div>
      <div className="text-purple bg-turquoise"></div>
      <div className="border-green"></div>
      <div className="border-turquoise"></div>
      <div className="border-blue"></div>
      <div className="border-purple"></div> */}
    </>
  );
};

export default Home;
