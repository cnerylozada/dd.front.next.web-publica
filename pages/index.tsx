import { DDFloatButton } from "@cnerylozada/dd.front.react.wp.library";
import { getHomeSections, getClients, getStaff, getBlogs } from "@/services";
import { useStore } from "../store";
import { ContactForm } from "@/templates";
import {
  HomeCoverPage,
  HomeCustomers,
  HomeServices,
  HomeStaff,
  HomeBlog,
} from "@/components";

export async function getStaticProps() {
  const sections = await getHomeSections();
  const staff = await getStaff();
  const listClients = await getClients();
  const blogs = await getBlogs();
  return {
    props: { sections, staff, listClients, blogs },
  };
}

const Home = ({
  sections,
  staff,
  listClients,
  blogs,
}: {
  sections: any;
  staff: any;
  listClients: any;
  blogs: any;
}) => {
  const [store] = useStore();

  return (
    <>
      <DDFloatButton
        icon="contact"
        className="fixed z-10 right-5 lg:right-16 bottom-5 lg:bottom-20"
        onClick={() => window && window.open("mailto:contact@dynamicdevs.com")}
      />
      <HomeCoverPage cover={sections.cover} lng={store.ddLanguage} />
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
      <HomeBlog
        blogSection={sections.Blog_section}
        blogs={blogs}
        lng={store.ddLanguage}
      />
      <div id="contactSection">
        <ContactForm
          mainSection={sections.contact_section}
          lng={store.ddLanguage}
          className="bg-bg1 text-primary"
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
