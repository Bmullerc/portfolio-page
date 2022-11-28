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
        className="dark:bg-zinc-800 dark:text-zinc-200 min-h-screen bg-zinc-200 xl:px-48 py-20 flex flex-col gap-8"
      >
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">Projects</h1>
        {projects?.map(({ id, name, image, description, sourceCode, demo }: ProjectProps) => (
          <div key={id} className="flex flex-col gap-2 font-body-sans">
            <h1 className="text-2xl font-bold">{name}</h1>
            {image.map((img) =>
              <Link
                key={img.url}
                href={demo}
                target="_blank"
                rel="nofollow"
                className="w-fit"
              >
                <Image alt="" src={img.url} width={500} height={500} className="border-4 rounded-md border-zinc-700 hover:grayscale-0 grayscale hover:opacity-100" />
              </Link>)}
            <p>{description}</p>
            <Link
              href={sourceCode}
              target="_blank"
              rel="nofollow"
              className="w-fit hover:scale-90 focus:scale-90 duration-200 hover:opacity-50 font-semibold"
            >
              Source code
            </Link>
          </div>
        ))}
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

