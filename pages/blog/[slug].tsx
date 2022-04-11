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
import React, { useEffect, useState } from "react";
import Head from "next/head";
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
  const [summaryLinks, setSummaryLinks] = useState<any>([]);

  useEffect(() => {
    const summaryLinks = Array.from(document.getElementsByTagName("h2"));
    setSummaryLinks((_: any) => {
      return summaryLinks.map((item) => item.innerHTML);
    });
  }, []);

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content={article.tags.map((_: any) => _.name).join(", ")}
        />
      </Head>
      <div className="bg-bg1 text-text min-h-screen">
        <div
          className="relative mx-auto max-w-[1440px] mt-12 py-10 px-6 
          md:px-10 lg:pt-[60px] lg:pb-18 lg:pl-16 lg:pr-[200px]
          flex md:space-x-20 lg:space-x-32"
        >
          <BlogSidebar
            author={article.co_worker}
            title={article.title}
            summaryLinks={summaryLinks}
          />

          <div className="flex-grow-0 lg:pb-10">
            <div className="mb-7 pb-7 border-b border-gray2">
              <DDText size="xsmall" caps className="mb-4">
                {article.Type}
              </DDText>
              <DDText size="headline" weight="bold" className="mb-4">
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
                author={article.co_worker.name}
                imgSrc={
                  "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
                }
                role={article.co_worker.slug}
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
                author={article.co_worker.name}
                imgSrc={
                  "https://i.pinimg.com/280x280_RS/18/6e/0f/186e0f41249be115a4a161562d03f60d.jpg"
                }
                role={article.co_worker.slug}
                orientation="horizontal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
