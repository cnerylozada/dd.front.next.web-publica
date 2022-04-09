import {
  DDText,
  DDAuthor,
  ATag,
  PTag,
  StrongTag,
  EmTag,
  H2Tag,
  H3Tag,
  H4Tag,
  H5Tag,
  H6Tag,
  UlTag,
  OlTag,
  BlockquoteTag,
  ImgTag,
} from "@cnerylozada/dd.front.react.wp.library";
import ReactMarkdown from "react-markdown";
import { getBlogs, getBlogBySlug } from "@/services";
import { BlogSidebar } from "@/components";

export const getStaticPaths = async () => {
  const blogs = await getBlogs();
  return {
    paths: blogs.map((_: any) => ({
      params: {
        slug: _.slug,
      },
    })),
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
    <div className="bg-bg1 text-text min-h-screen">
      <div
        className="relative mx-auto max-w-[1440px] mt-12 py-10 px-6 
        md:px-10 lg:pt-[60px] lg:pb-18 lg:pl-16 lg:pr-[200px]
        md:flex md:space-x-20 lg:space-x-32"
      >
        <BlogSidebar author={article.author} title={article.title} />

        <div className="flex-grow lg:pb-10">
          <div className="mb-7 pb-7 border-b border-gray2">
            <DDText size="xsmall" caps className="mb-4">
              {article.Type}
            </DDText>
            <DDText
              size="headline"
              weight="bold"
              className="mb-4 leading-[43px] lg:leading-[140%]"
            >
              {article.title}
            </DDText>

            <DDText className="mb-4 italic">
              {new Date(article.updated_at).toLocaleDateString("es-ES", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </DDText>

            <DDAuthor
              author={`${article.author.firstname} ${article.author.lastname}`}
              imgSrc={
                "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
              }
              role="CBO de Dynamic Devs"
              orientation="horizontal"
            />
          </div>

          <div>
            <ReactMarkdown
              components={{
                a: ATag,
                blockquote: BlockquoteTag,
                em: EmTag,
                h2: H2Tag,
                h3: H3Tag,
                h4: H4Tag,
                h5: H5Tag,
                h6: H6Tag,
                ol: OlTag,
                p: PTag,
                strong: StrongTag,
                ul: UlTag,
                img: ImgTag,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

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
