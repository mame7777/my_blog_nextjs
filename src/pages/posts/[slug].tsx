import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fs from "fs";
import matter from "gray-matter";
import Image from 'next-export-optimize-images/picture'

import { getAllSlug } from "@src/libs/get-all-slug";
import { getMarkdown } from "@src/libs/get-markdown";
import { markdownToHtml } from "@src/libs/markdown-to-html";

import Layout from '@com/layout';

import styles from "@/src/styles/posts.css";

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
  return (
    <Layout>
    <h1 className='h1'>{mdFrontMatter.title}</h1>
    <div>投稿日：{mdFrontMatter.date}</div>
    <div className="text-center">
      <Image  src={mdFrontMatter.hero_image} alt="Hero Image" width={180} height={20}/>

    </div>
    <div className="container" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Layout>
  );
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