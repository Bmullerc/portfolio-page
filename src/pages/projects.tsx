import { motion } from "framer-motion";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>B.Müller &bull; Projects</title>
      </Head>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="dark:bg-zinc-800 bg-zinc-200 lg:h-[calc(100vh-4rem)] xl:px-48 py-20">
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">Projects</h1>
      </motion.article>
    </>
  )
}