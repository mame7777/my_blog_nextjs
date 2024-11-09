import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fs from "fs";
import matter from "gray-matter";

import { getAllSlug } from "@src/libs/get-all-slug";
import { getMarkdown } from "@src/libs/get-markdown";
import { markdownToHtml } from "@src/libs/markdown-to-html";

type BlogDetailPageProps = {
  htmlContent: string;
  mdFrontMatter: MarkdownFrontMatter;
};


export type MarkdownFrontMatter = {
  title: string;
  summary: string;
  description: string;
  date: string;
  slug: string;
  hero_image: string;
  id: string;
};

const BlogDetailPage: NextPage<BlogDetailPageProps> = ({ htmlContent, mdFrontMatter }) => {
  console.log(mdFrontMatter);
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

  const markdown = await fs.readFileSync(`contents/posts/${slug}.md`, 'utf-8');
  const { data: frontMatter} = matter(markdown);
  const markdown_frontMatter = frontMatter as MarkdownFrontMatter;

  return {
    props: {
      htmlContent: await markdownToHtml(getMarkdown(`contents/posts/${slug}.md`).content),
      mdFrontMatter: markdown_frontMatter,
    },
  };
};

export default BlogDetailPage;