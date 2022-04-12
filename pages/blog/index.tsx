/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { DDText, DDArticle } from "@cnerylozada/dd.front.react.wp.library";
import { useStore } from "../../store";
import { getBlogs } from "@/services";
import { typeArticle, languages } from "@/utils";

export async function getStaticProps() {
  const blogs = await getBlogs();
  return {
    props: { blogs },
  };
}

const Blog = ({ blogs }: { blogs: any }) => {
  const [store] = useStore();
  const router = useRouter();
  return (
    <div className="pt-[50px] flex flex-col min-h-screen">
      <div
        className="relative h-[219px] lg:h-[278px] text-white text-center 
        flex items-center"
      >
        <img
          src="https://assets.dynamicdevs.io/web/blog-banner.png"
          alt="https://assets.dynamicdevs.io/web/blog-banner.png"
          className="absolute top-0 left-0 w-full h-full  object-cover"
        />
        <div className="flex-grow z-10 text-primary">
          <DDText size="sectionHeadline" caps weight="bold" className="mb-3">
            El Blog de DynamicDevs
          </DDText>
          <DDText>Hablamos de tecnología, innovación y experiencias</DDText>
        </div>
      </div>
      <div className="flex-grow bg-bg2 py-10 px-6 lg:px-[93px] lg:py-18">
        <div className="mx-auto max-w-[1440px]">
          <div
            className="space-y-12 lg:space-y-0 md:grid grid-cols-2 gap-5 
            lg:grid-cols-3 lg:gap-6"
          >
            {blogs.map((_: any, index: number) => (
              <DDArticle
                key={index}
                date={_.updated_at}
                localDate={
                  store.ddLanguage === languages.spanish ? "es-ES" : "en-US"
                }
                author={_.co_worker.name}
                title={_.title}
                type={typeArticle[`${_.Type}_${store.ddLanguage}`]}
                imgSrc={_.image.url}
                content={_.content}
                onClick={() => router.push(`/blog/${_.slug}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
