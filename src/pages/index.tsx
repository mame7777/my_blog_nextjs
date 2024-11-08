// import Head from "next/head";
// import Image from "next/image";
// import localFont from "next/font/local";
// import styles from "@/src/styles/Home.module.css";

import Link from "next/link";
// import { getAllSlug } from "@libs/get-all-slug";
// import type { GetStaticProps, NextPage } from "next";
import type { NextPage } from "next";
// import Image from 'next-export-optimize-images/picture'

import Layout from '@com/layout';
//import PostCard from '@com/postCard';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

type PostData = {
  id: string;
  title: string;
  summary: string;
  date: string;
  slug: string;
  hero_image: string;
}

type IndexPageProps = {
  postData: PostData[];
};


const IndexPage: NextPage<IndexPageProps> = ({ postData }) => {
  console.log(postData);
  return (
    <Layout>
      <h1>mame77のブログへようこそ!</h1>

      <h2 className="mt-5">新規投稿</h2>
      {/* {data.allMarkdownRemark.edges.map((edge) => (
        <PostCard post={edge.node} key={edge.node.id}/>
      ))} */}
      {/* {postData.map((post: PostData) => (
        <PostCard post={post} key={post.id}/>
      ))} */}
      <div className="text-center">
        <Link href="/all-post" className="btn btn-primary">もっと見る</Link>
      </div>
      <h2>お知らせ</h2>
      <p>旧ブログシステムが故障したため，新規構築中です！</p>
    </Layout>
  );
}

// type HomeProps = {
//   slugs: string[];
// };

// const Home: NextPage<HomeProps> = ({ slugs }) => {
//   return (
//     <div className="container">
//       <h1>記事一覧</h1>
//       <ul>
//         {slugs.map((slug, i) => {
//           return (
//             <li key={i}>
//               <Link href={`/posts/${slug}`}>{slug}</Link>
//             </li>
//           );
//         })}
//       </ul>
//       <Image
//         className="logo"
//         src="/next.svg"
//         alt="Next.js logo"
//         width={180}
//         height={38}
//         priority
//       />
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps<HomeProps> = () => {
//   return {
//     props: {
//       slugs: getAllSlug("contents/posts"),
//     },
//   };
// };

export default IndexPage;
// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div
//         className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
//       >
//         <main className={styles.main}>
//           <Image
//             className={styles.logo}
//             src="/next.svg"
//             alt="Next.js logo"
//             width={180}
//             height={38}
//             priority
//           />
//           <ol>
//             <li>
//               Get started by editing <code>pages/index.tsx</code>.
//             </li>
//             <li>Save and see your changes instantly.</li>
//           </ol>

//           <div className={styles.ctas}>
//             <a
//               className={styles.primary}
//               href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Image
//                 className={styles.logo}
//                 src="/vercel.svg"
//                 alt="Vercel logomark"
//                 width={20}
//                 height={20}
//               />
//               Deploy now
//             </a>
//             <a
//               href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className={styles.secondary}
//             >
//               Read our docs
//             </a>
//           </div>
//         </main>
//         <footer className={styles.footer}>
//           <a
//             href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/file.svg"
//               alt="File icon"
//               width={16}
//               height={16}
//             />
//             Learn
//           </a>
//           <a
//             href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/window.svg"
//               alt="Window icon"
//               width={16}
//               height={16}
//             />
//             Examples
//           </a>
//           <a
//             href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               aria-hidden
//               src="/globe.svg"
//               alt="Globe icon"
//               width={16}
//               height={16}
//             />
//             Go to nextjs.org →
//           </a>
//         </footer>
//       </div>
//     </>
//   );
// }
