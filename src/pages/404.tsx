import { motion } from "framer-motion";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>B.Müller &bull; 404</title>
      </Head>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="dark:bg-zinc-800 h-screen bg-zinc-200 xl:px-48 py-20">
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">404, Friend.</h1>
        <p>Looks like you are in the wrong place chief.</p>
      </motion.article>
    </>
  )
}