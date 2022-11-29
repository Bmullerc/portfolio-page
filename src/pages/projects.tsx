import { motion } from "framer-motion";
import Head from "next/head";
import { SingleProject } from "../components/SingleProject";
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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="dark:bg-zinc-800 dark:text-zinc-200 font-body-sans min-h-screen bg-zinc-200 xl:px-48 py-20"
      >
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">Projects</h1>
        <div className="grid grid-cols-2 gap-y-12 gapx-4 my-8">
          {projects?.map(({ id, name, image, description, sourceCode, demo }: ProjectProps) => (
            <SingleProject
              key={id}
              name={name}
              image={image}
              description={description}
              sourceCode={sourceCode}
              demo={demo}
            />
          ))}
        </div>
      </motion.section>
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

