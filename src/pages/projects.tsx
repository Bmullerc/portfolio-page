import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { hygraph, QUERY } from "../services/graphcms";

export default function Projects({ posts }: any) {
  return (
    <>
      <Head>
        <title>B.Müller &bull; Projects</title>
      </Head>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="dark:bg-zinc-800 h-screen bg-zinc-200 xl:px-48 py-20">
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">Projects</h1>
        <ul>
          {posts?.map(({ id, title, coverImage }: any) => (
            <div key={id}>
              <Image src={coverImage.url} alt="" width={150} height={150}></Image>
              <li >{title}</li>
            </div>
          ))}
        </ul>
      </motion.article>
    </>
  )
}

export async function getStaticProps() {
  const { posts } = await hygraph.request(QUERY)

  return {
    props: {
      posts
    }
  }
}

