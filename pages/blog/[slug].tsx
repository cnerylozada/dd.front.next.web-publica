import { DDText, DDArticle } from "@cnerylozada/dd.front.react.wp.library";
import { getBlogBySlug } from "@/services";

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "una-conversacion-acalorada-inteligencia-artificial",
        },
      },
    ],
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const article = await getBlogBySlug(context.params.slug);
  return {
    props: { article },
  };
}

const Article = ({ article }: { article: any }) => {
  console.log(article);
  return (
    <div className="">
      <div className="hidden lg:block">qweqe</div>
      <div>q</div>
    </div>
  );
};

export default Article;
