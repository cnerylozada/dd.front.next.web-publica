import {
  DDText,
  DDArticle,
  DDAuthor,
} from "@cnerylozada/dd.front.react.wp.library";
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
  return (
    <div className="bg-bg1 text-white min-h-screen">
      <div
        className="mx-auto max-w-[1440px] mt-12 py-10 px-6 
        md:px-10 lg:pt-[60px] lg:pb-18 lg:pl-16 lg:pr-[200px]
        md:flex md:space-x-20 lg:space-x-32"
      >
        <div className="hidden flex-shrink-0 md:block md:w-40 lg:w-74">
          <DDAuthor
            author={`${article.author.firstname} ${article.author.lastname}`}
            imgSrc={
              "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
            }
            role="CBO de Dynamic Devs"
          />
        </div>
        <div className="flex-grow lg:pb-10">
          <div className="mb-7 pb-7 border-b border-gray2">
            <DDText size="small" caps className="mb-4">
              {article.Type}
            </DDText>
            <DDText size="headline" weight="bold" className="mb-4">
              {article.title}
            </DDText>

            <DDText className="mb-4 italic">{article.updated_at}</DDText>

            <DDAuthor
              author={`${article.author.firstname} ${article.author.lastname}`}
              imgSrc={
                "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
              }
              role="CBO de Dynamic Devs"
              orientation="horizontal"
            />
          </div>

          <div>qweqweqwe</div>
          <div className="mt-7 pt-7 border-t border-gray2">
            <DDText size="small" caps className="mb-4">
              Artículo escrito por
            </DDText>
            <DDAuthor
              author={`${article.author.firstname} ${article.author.lastname}`}
              imgSrc={
                "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
              }
              role="CBO de Dynamic Devs"
              orientation="horizontal"
              className="mb-4"
            />
            <DDText>
              Tenía tiempísimo sin escribir un artículo y este viene de una
              reflexión muy personal sobre la ética de las tecnociencias. Mi
              objetivo es abrir la conversación, compartir mi visión, material
              que leí recientemente y por supuesto saber qué opinan ustedes 😊
              ¡Un abrazo! Me cuentan.
            </DDText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
