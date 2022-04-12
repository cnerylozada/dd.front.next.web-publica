import React from "react";
import { useRouter } from "next/router";
import {
  DDButton,
  DDText,
  DDArticlePreview,
} from "@cnerylozada/dd.front.react.wp.library";
import { Template } from "./template";
import { typeArticle } from "@/utils";

export const HomeBlog = ({
  blogSection,
  blogs,
  lng,
}: {
  blogSection: any;
  blogs: any;
  lng: string;
}) => {
  const router = useRouter();
  return (
    <div className="bg-bg2">
      <Template className="text-text">
        <DDText
          size="headline"
          weight="bold"
          className="mb-12 lg:mb-10 text-primary"
        >
          {blogSection[`title_${lng}`]}
        </DDText>
        <DDText size="subHeadline" weight="light" className="mb-12 lg:mb-10">
          {blogSection[`description_${lng}`]}
        </DDText>
        <div className="mb-12 lg:mb-20 lg:flex items-center lg:space-x-4">
          <DDText size="subHeadline" weight="light" className="mb-12 lg:mb-0">
            {blogSection[`excerpt_${lng}`]}
          </DDText>
          <DDButton
            onClick={() => router.push("/blog")}
            className="block mx-auto lg:m-0"
          >
            {blogSection[`button_${lng}`]}
          </DDButton>
        </div>
        <div className="space-y-12 lg:space-y-0 lg:grid grid-cols-3 gap-5">
          {blogs.map((_: any, index: number) => (
            <DDArticlePreview
              key={index}
              title={_.title}
              type={typeArticle[`${_.Type}_${lng}`]}
              author={_.co_worker.name}
              imgSrc={_.image.url}
              onClick={() => router.push(`/blog/${_.slug}`)}
            />
          ))}
        </div>
      </Template>
    </div>
  );
};
