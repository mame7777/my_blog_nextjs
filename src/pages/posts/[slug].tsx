import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { getAllSlug } from "@src/libs/get-all-slug";
import { getMarkdown } from "@src/libs/get-markdown";
import { markdownToHtml } from "@src/libs/markdown-to-html";

type BlogDetailPageProps = {
  htmlContent: string;
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ htmlContent }) => {
  return <div className="container" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: getAllSlug("contents/posts").map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps<BlogDetailPageProps> = async ({ params }) => {
  const slug = params?.slug;

  return {
    props: {
      htmlContent: await markdownToHtml(getMarkdown(`contents/posts/${slug}.md`).content),
    },
  };
};

export default BlogDetailPage;