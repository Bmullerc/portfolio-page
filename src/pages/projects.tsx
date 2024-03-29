import { motion } from "framer-motion";
import Head from "next/head";
import { SingleProject } from "../components/SingleProject";
import { hygraph, QUERY } from "../services/graphcms";

interface ProjectsProps {
  projects: []
}

interface ProjectType {
  id: string
  name: string
  image: [{ url: string }]
  description: string
  sourceCode: string
  demo: string
  tags: [string]
}

export default function Projects({ projects }: ProjectsProps) {
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
        className="flex flex-col dark:bg-zinc-800 dark:text-zinc-200 font-body-sans min-h-screen bg-zinc-200 xl:px-48 px-4 pt-48 pb-10"
      >
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl lg:text-start lg:mt-0 mt-4">Projects</h1>
        <div className="lg:mt-10 mt-4 border-l-8 border-zinc-400 lg:px-4 px-2">
          {projects?.map(({ id, name, image, description, sourceCode, demo, tags }: ProjectType) => (
            <SingleProject
              key={id}
              name={name}
              image={image}
              description={description}
              sourceCode={sourceCode}
              demo={demo}
              tags={tags}
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

