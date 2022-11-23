import { motion } from "framer-motion";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>B.Müller &bull; About me</title>
      </Head>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="dark:bg-zinc-800 h-screen bg-zinc-200 xl:px-48 py-20">
        <h1 className="font-title-sans font-semibold lg:text-5xl text-4xl">About me</h1>
      </motion.article>
    </>
  )
}