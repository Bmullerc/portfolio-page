import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { hygraph, QUERY } from "../services/graphcms";

interface ProjectProps {
  id: string
  name: string
  image: [{ url: string }]
  description: string
  sourceCode: string
  demo: string
}

export default function Projects({ projects }: any) {
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
        className="dark:bg-zinc-800 min-h-screen bg-zinc-200 xl:px-48 py-20">
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">Projects</h1>
        <ul>
          {projects?.map(({ id, name, image, description, sourceCode, demo }: ProjectProps) => (
            <div key={id}>
              {image.map((img) =>
                <Link key={img.url} href={demo} target="_blank" rel="nofollow">
                  <Image alt="" src={img.url} width={500} height={500} />
                </Link>)}
              <li >{name}</li>
              <p>{description}</p>
              <Link href={sourceCode}>Source code</Link>
            </div>
          ))}
        </ul>
      </motion.article>
    </>
  )
}

export async function getStaticProps() {
  const { projects } = await hygraph.request(QUERY)

  return {
    props: {
      projects
    }
  }
}

